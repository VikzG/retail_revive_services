import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile"

export default function Nav() {

  const isMobile = useIsMobile(1050);
  
  return (
    <nav className="fixed flex items-center justify-between px-4 py-2 z-20 bg-light_beige border-b border-neutral-200 top-0 left-0 w-full">
      {/* Left section */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="shrink-0">
          <img src="/logo/logo_rss.png" alt="Club Icon" className="h-7 w-7 club_icon_desktop" />
        </Link>
        <div className="nav_words hidden items-center space-x-6 text-sm font-medium">
          <Link href="#club-retail" className="nav_anchor text-black">
            CLUB RETAIL AFRICA
          </Link>
          <Link href="#services" className="nav_anchor text-black">
            SERVICES
          </Link>
          <Link href="#expertise" className="nav_anchor text-black">
            EXPERTISE
          </Link>
          <Link href="#actualites" className="nav_anchor text-black">
            ACTUALITÉS
          </Link>
        </div>
      </div>

      {/* Center logo */}
      <div className="retail_revive_svg_container absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <svg
            className="retail_revive_svg"
            version="1.1"
            id="Calque_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 372 206"
            width="150" // Ajouter des dimensions explicites
            height="35"
          >
            <g transform="translate(0.000000,206.000000) scale(0.100000,-0.100000)">
              <path
                d="M1450,1745v-85h-55h-55v-90v-90h54h54l4-147c4-168,18-216,86-286c34-36,99-77,120-77c5,0,17,39,25,87c14,76,15,89,2,103
		c-34,37-45,89-45,205v115h70h70v90v90h-70h-70v85v85h-95h-95V1745z"
              />
              <path
                d="M2830,1538c0-240,3-302,16-350c31-110,131-190,255-205l49-6v90v89l-46,12c-39,11-48,18-64,55c-18,38-20,67-20,325v282h-95
		h-95V1538z"
              />
              <path
                d="M883,1612c-95-34-168-108-193-197c-18-63-9-179,18-231c76-148,298-208,466-125c34,16,75,44,91,61l30,32l-45,39
		c-58,50-76,56-103,31c-56-51-156-68-215-38c-31,16-66,53-75,79c-6,16,9,17,220,17h226l-5,68c-13,173-114,271-288,279
		C955,1630,921,1626,883,1612z M1092,1451c15-17,28-36,28-41c0-6-51-10-130-10c-71,0-130,3-130,6c0,18,26,47,58,64
		c28,15,51,19,91,17C1055,1484,1068,1478,1092,1451z"
              />
              <path
                d="M2040,1617c-112-32-184-89-229-179c-25-50-31-73-31-128c0-95,23-155,85-216c89-89,235-116,343-63c51,25,51,25,54,5
		c3-19,11-21,85-24l81-3l7,56c4,30,5,115,3,188c-3,115-7,139-29,187c-14,31-40,72-58,93C2285,1608,2142,1646,2040,1617z M2195,1424
		c14-9,33-30,41-45c20-40,18-118-5-155c-25-40-95-69-148-61c-137,23-166,205-42,270C2082,1455,2155,1450,2195,1424z"
              />
              <path
                d="M525,1611c-77-19-152-88-173-160c-7-23-12-113-12-230v-191h80h80v174c0,101,5,186,11,205c11,32,52,61,87,61
		c11,0,47,32,86,75l67,75l-98-1C599,1618,542,1615,525,1611z"
              />
              <path d="M2540,1300v-290h90h90v290v290h-90h-90V1300z" />
              <path
                d="M3162,929c-153-26-251-135-260-290c-6-99,14-162,73-227c122-135,374-143,514-17c22,21,41,41,41,45c0,5-26,29-57,54l-58,45
		l-25-24c-60-58-171-73-242-33c-33,19-68,61-68,83c0,3,104,5,231,5h232l-5,73c-3,44-14,93-28,125C3458,888,3314,955,3162,929z
		 M3296,774c19-9,42-30,50-45l15-29h-142h-141l14,23C3131,781,3229,806,3296,774z"
              />
              <path
                d="M923,900c-59-12-116-44-158-87c-42-44-78-148-73-214l3-44l223-3l222-2l-15-30c-19-36-52-59-102-71c-56-12-109,0-165,37
		l-50,34l-54-42c-30-24-54-46-54-49c0-15,85-82,128-102c69-31,246-32,314,0c140,64,205,226,154,379C1251,844,1079,933,923,900z
		 M1042,760c22,0,88-57,88-76c0-11-25-14-130-14c-140,0-149,4-112,49c20,26,89,53,117,46C1016,762,1033,760,1042,760z"
              />
              <path
                d="M600,890c-94-7-133-23-184-75c-55-55-66-108-66-327V300h80h80v175c0,129,4,185,14,210c15,36,42,55,75,55
		c18,0,150,125,159,151C762,901,730,901,600,890z"
              />
              <path
                d="M1323,871c3-12,54-144,113-296l107-275h92h92l108,277c59,152,110,285,113,295c4,17-2,19-89,16l-94-3l-60-167
		c-33-93-62-168-65-168s-32,75-65,168l-60,167l-99,3C1321,891,1318,890,1323,871z"
              />
              <path d="M2020,595V300h90h90v295v295h-90h-90V595z" />
              <path
                d="M2264,873c4-10,55-141,113-291l107-273l95,3l95,3l111,285l111,285l-90,3c-49,1-93-1-97-5s-33-81-65-171
		c-31-89-60-159-64-155s-33,81-65,171l-57,162h-100C2267,890,2258,888,2264,873z"
              />
            </g>
            <circle fill="#B69F61" className="st0" cx="333.1" cy="29.5" r="11.5" />
          </svg>
        </Link>
      </div>

      {/* Right section */}
      <div className="flex items-center">
      <Link href="/" className="shrink-0">
          <img src="/logo/logo_rss.png" alt="Club Icon" className="h-7 w-7 club_icon_mobile" />
        </Link>
      <Link
          href="#contact"
        >
          <svg
            className="enveloppe_icon"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="40" // Ajouter des dimensions explicites
            height="25"
            viewBox="0 0 92.000000 63.000000"

          >
            <g
              transform="translate(0.000000,63.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M162 524 c-21 -15 -22 -20 -22 -213 0 -179 2 -199 18 -214 16 -15 53
-17 310 -17 279 0 293 1 312 20 19 19 20 33 20 210 0 177 -1 191 -20 210 -19
19 -33 20 -308 20 -244 0 -291 -2 -310 -16z m568 -28 c-71 -64 -251 -206 -263
-206 -8 0 -74 50 -147 110 l-132 110 278 0 c234 0 276 -2 264 -14z m38 -276
l-3 -90 -108 87 c-90 71 -106 88 -95 99 7 7 56 49 108 92 l95 80 3 -89 c1 -49
1 -129 0 -179z m-486 174 c56 -48 102 -89 101 -91 -1 -2 -50 -42 -108 -89
l-105 -85 0 176 c0 96 2 175 4 175 2 0 51 -39 108 -86z m162 -125 c19 -9 32
-9 55 1 29 11 33 9 136 -74 l107 -86 -271 0 c-149 0 -271 2 -271 4 0 7 203
166 212 166 4 0 18 -5 32 -11z"
              />
            </g>
          </svg>
        </Link>
        <Link href="/">
          <svg
            className="user_icon"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="40" // Ajouter des dimensions explicites
            height="25"
            viewBox="0 0 78.000000 75.000000"
          >
            <g
              transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M260 627 c-52 -17 -114 -84 -128 -139 -7 -27 -12 -121 -12 -218 l0
-171 68 3 67 3 5 175 c3 96 9 181 13 188 5 6 21 19 38 27 18 10 29 23 29 36 0
25 16 57 43 87 l20 22 -54 -1 c-30 -1 -70 -6 -89 -12z"
              />
              <path
                d="M450 627 c-41 -14 -80 -68 -80 -111 0 -40 33 -94 66 -106 38 -15 97
-12 122 6 51 36 66 107 32 161 -30 50 -82 69 -140 50z"
              />
              <path
                d="M376 368 c-24 -38 -47 -119 -55 -191 -4 -37 -5 -70 -2 -72 2 -3 83
-5 179 -5 l175 0 -6 73 c-5 75 -37 181 -61 205 -11 12 -18 11 -44 -2 -39 -20
-98 -20 -136 -1 -36 19 -33 19 -50 -7z"
              />
            </g>
          </svg>
        </Link>
      </div>
    </nav>
  );
}
