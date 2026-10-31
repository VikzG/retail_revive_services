// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'fr'
})

// Langue du visiteur : celle déjà choisie sur le site (cookie), sinon celle du navigateur
function visitorLocale(request: NextRequest) {
  const cookie = request.cookies.get('Next-Locale')?.value
  if (cookie === 'en' || cookie === 'fr') return cookie
  const browser = request.headers.get('Accept-Language')?.split(',', 1)[0]?.split('-', 1)[0]
  return browser === 'en' ? 'en' : 'fr'
}

export function middleware(request: NextRequest) {
  // Sur l'accueil, les visiteurs francophones voient directement la page /fr,
  // sans redirection (un aller-retour de moins avec le serveur)
  if (request.nextUrl.pathname === '/' && visitorLocale(request) === 'fr') {
    return NextResponse.rewrite(new URL('/fr', request.url))
  }
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
