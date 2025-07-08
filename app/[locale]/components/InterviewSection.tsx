'use client';
import React, { useEffect, useRef, useState } from "react";
import { GallerySection } from "./GallerySection";

// Define speaker data for reuse
const speakers = {
  marieBerthe: {
    name: "Marie Berthe Gueye",
    bgColor: "bg-gold",
  },
  khadija: {
    name: "Khadija Gueye",
    bgColor: "bg-[#5f2f17]",
  },
};

// Define interview questions and answers
const interviewQuestions = [
  {
    id: 1,
    question:
      "Sillage Parfumerie est une enseigne bien installée à Dakar. Pouvez-vous nous raconter sa genèse ?",
    answers: [
      {
        speaker: speakers.marieBerthe,
        text: "J’ai commencé par la vente de produits de maroquinerie et de parfumerie, en contactant directement certaines maisons de luxe, pour répondre à une demande très ciblée de mes clientes. C’est parti d’un besoin clair : certaines clientes cherchaient des parfums précis qu’elles ne trouvaient pas localement. Peu à peu, les choses se sont structurées. Ce n’est pas un héritage, c’est un projet que j’ai lancé moi-même, avec ma vision, mon parcours, et beaucoup de détermination. Mon père était enseignant, personne dans ma famille ne travaillait dans le commerce. J’ai appris sur le terrain, en écoutant mes clientes, en m’adaptant à leurs besoins, en construisant une relation de confiance. Je suis une passionnée de vente, de contact, d’exigence. C’est un métier qu’on apprend par la pratique, qui demande de la patience, de l’instinct, et un engagement quotidien. Aujourd’hui encore, je suis cette commerçante attentive qui veut toujours proposer le bon produit, au bon moment, à la bonne personne.",
      },
      {
        speaker: speakers.khadija,
        text: "De mon côté, j’ai rejoint l’aventure après un parcours dans le secteur bancaire. En revenant dans l’entreprise familiale, j’ai apporté une nouvelle énergie et une lecture plus digitale du retail. Très vite, j’ai voulu structurer notre présence en ligne, créer du contenu, aller chercher de nouveaux clients sur les réseaux sociaux. Le digital a permis d’ouvrir notre univers à une clientèle plus jeune, curieuse, connectée. C’est aussi par ce biais qu’est née une communauté fidèle et engagée. Ce que j’apporte, c’est un regard générationnel, un goût pour les formats innovants, mais toujours au service de l’exigence que ma mère a incarnée depuis le début. Ensemble, on construit un retail qui nous ressemble : moderne, structuré, et profondément humain.",
      },
    ],
  },
  {
    id: 2,
    question:
      "Vous avez récemment lancé Beauty Success au Sénégal. Comment s'est construite cette collaboration ?",
    answers: [
      {
        speaker: speakers.marieBerthe,
        text: "Sillage était tourné vers les marques de niche, mais une partie importante de notre clientèle voulait les grands classiques de la parfumerie. On avait cette demande récurrente pour du maquillage, du soin, des marques internationales. L’idée de Beauty Success est venue naturellement. Leur ADN — familial, proche de la clientèle, rigoureux dans le choix des marques — correspondait à notre propre approche. C’est une franchise française bien implantée, avec une vraie volonté d’accompagner ses partenaires à l’international. Le premier contact s’est fait à Cannes. Nous avons été séduites par la proximité humaine de leurs équipes, leur business model et leur capacité à structurer un accompagnement solide.",
      },
    ],
  },
  {
    id: 3,
    question: "Entre l'idée et l'ouverture, combien de temps s'est écoulé ?",
    answers: [
      {
        speaker: [speakers.khadija, speakers.marieBerthe],
        text: "Il s'est passé près de deux ans. De la réflexion stratégique à l'ouverture, en passant par la validation du local, la formation, les expéditions, etc. C'est un processus très complet, avec ses défis, mais aussi beaucoup d'apprentissages.",
      },
    ],
  },
  {
    id: 4,
    question:
      "Vous portez trois casquettes : distributeur, franchisé et créateur. Quelle est votre ligne directrice ?",
    answers: [
      {
        speaker: speakers.marieBerthe,
        text: "Notre fil conducteur, c'est le luxe, avec tout ce que cela implique : qualité, service, rigueur. Que ce soit dans la distribution ou en boutique, il y a une expérience à faire vivre. Nos clients doivent retrouver le même niveau d'accueil, de conseil, d'engagement, quelle que soit la marque.",
      },
    ],
  },
  {
    id: 5,
    question:
      "Vos contenus en ligne sont très identifiables. Quelle place occupe le digital dans votre stratégie?",
    answers: [
      {
        speaker: speakers.khadija,
        text: "Une place centrale. Longtemps, on a pensé que les parfums de niche ne concernaient qu’une élite. Aujourd’hui, le digital nous permet de transmettre autre chose : de la connaissance, de l’émotion. J’ai pris la main sur les réseaux pour parler vrai, expliquer les produits, créer du lien. C’est ce qui attire une clientèle plus jeune et engagée. On ne vend pas juste un parfum, on partage une histoire, une sensation, une personnalité. On a aussi lancé des formats expérientiels comme les afterworks parfumés, où les clients découvrent les fragrances à travers des cocktails ou des ateliers sensoriels. Le but : éduquer sans imposer, rendre la beauté plus accessible, plus vivante.",
      },
    ],
  },
  {
    id: 6,
    question:
      "Quel est le profil du consommateur beauté sénégalais aujourd'hui ?",
    answers: [
      {
        speaker: speakers.marieBerthe,
        text: "Il a changé. On a de plus en plus de jeunes cadres, très informés, qui viennent avec des références précises. Il y a aussi une clientèle masculine grandissante. Et une clientèle étrangère, surtout sur Dakar. Le parfum, ici, c'est un langage social.",
      },
    ],
  },
  {
    id: 7,
    question: "Travailler en famille : facilitateur ou défi ?",
    answers: [
      {
        speaker: speakers.khadija,
        text: "Les deux ! (rire) On parle de travail même le week-end. Parfois c'est fluide, parfois il faut remettre les rôles au clair. Mais j'apprends tous les jours de ma mère. Elle m'a poussée à prendre ma place, à diriger. Et je sais que je suis là pour faire vivre ce qu'elle a construit.",
      },
      {
        speaker: speakers.marieBerthe,
        text: "Je me fais plus discrète aujourd’hui, mais je reste présente. Travailler avec sa fille, c’est aussi un moyen de transmettre autrement. Après, il faut savoir que nous ne sommes pas seules. Il y a une vraie organisation autour de nous, avec une équipe jeune, engagée et compétente, qui participe activement au développement du groupe. La transmission se fait naturellement, oui, mais elle s’appuie sur des bases solides et un collectif. Cette aventure, c’est un équilibre entre l’héritage, l’envie et un vrai travail d’équipe.",
      },
    ],
  },
  {
    id: 8,
    question: "Quelles sont vos ambitions pour les mois à venir?",
    answers: [
      {
        speaker: speakers.khadija,
        text: "Continuer à grandir, mais intelligemment. Ne pas ouvrir pour ouvrir. On veut apporter de la valeur, surprendre, répondre à des vrais besoins. Le retail au Sénégal a besoin d'acteurs solides.",
      },
    ],
  },
  {
    id: 9,
    question:
      "Un conseil à une femme qui veut se lancer dans le retail en Afrique ?",
    answers: [
      {
        speaker: speakers.marieBerthe,
        text: "Ce n'est pas un métier qu'on fait pour l'argent. Il y a de la tréso, du stock dormant, des risques. Il faut être passionnée, aimer les produits, les marques. Et être résiliente.",
      },
      {
        speaker: speakers.khadija,
        text: "Il faut aimer être sur le terrain, parler aux clients, comprendre leurs besoins. Ce n'est pas juste un business, c'est une présence constante. Mais quand on est passionnée, ça peut être très gratifiant.",
      },
    ],
  },
];

export const InterviewSection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // vérifie au montage
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="flex flex-col items-start w-full">
      {/* Header Section */}
      <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} w-full bg-alabaster ${isMobile ? 'relative' : ''}`}>
        {/* Left Image */}
        <div className={`${isMobile ? 'w-full relative' : 'w-1/2'} ${isMobile ? 'px-0' : 'pl-8'}`}>
          <img
            className={`w-full ${isMobile ? 'h-[520px] brightness-50' : 'h-[800px]'} object-cover`}
            alt="Marie et Khadija edito"
            src="/interview/interview_img_1.jpg"
          />
          
          {/* Mobile overlay - JUILLET 2025 et INTERVIEW */}
          {isMobile && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-5 ">
                <div className="px-4 py-1 bg-gold rounded-none">
                  <span className="sous_titre text-white">
                    JUILLET 2025
                  </span>
                </div>
                <h2 className="grand_titre_xs text-white text-center drop-shadow-lg">
                  INTERVIEW
                </h2>
              </div>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className={`${isMobile ? 'w-full px-4 py-8' : 'flex-1 px-32'} flex flex-col items-center justify-start ${isMobile ? 'gap-8' : 'gap-32'}`}>
          {/* Desktop - JUILLET 2025 et INTERVIEW */}
          {!isMobile && (
            <div className="flex flex-col items-center gap-5 w-full">
              <div className="px-4 py-1 bg-gold rounded-none">
                <span className="sous_titre text-white">
                  JUILLET 2025
                </span>
              </div>
              <h2 className="grand_titre_s">
                INTERVIEW
              </h2>
            </div>
          )}

          <div className={`flex flex-col items-start ${isMobile ? 'gap-8' : 'gap-16'} ${isMobile ? 'px-0' : 'px-30'} w-full`}>
            <div className="flex flex-col gap-8 w-full">
              <h1 className="citations text-center">
                À Dakar, une mère et sa fille{isMobile ? ' ' : <br/>} bousculent les codes du{isMobile ? ' ' : <br/>} retail
                beauté
              </h1>
            </div>

            <p className="body_text">
              <span>
                Elles dirigent trois enseignes complémentaires, entre franchise
                internationale et distribution locale. Elles sont mère et fille,
                complémentaires, exigeantes, stratèges. Elles incarnent une
                nouvelle génération de leaders retail, entre indépendance,
                franchise et excellence opérationnelle.{" "}
              </span>

              <span className="font-bold">
                Rencontre avec Marie Berthe et Khadija Gueye, un duo à la vision
                affûtée et au sens du détail remarquable.
              </span>
            </p>
          </div>

          <p className="body_text font-semibold italic">
            Par Retail Revive Insights
          </p>
        </div>
      </div>

      {/* Brand Banner - Mobile only */}
      {isMobile && (
        <div className="flex items-center justify-center py-5 px-8 w-full bg-[#5f2f17]">
          <h3 className="flex-1 [font-family:'Archivo',Helvetica] font-bold text-white text-lg text-center">
            BEAUTY SUCCESS SÉNÉGAL X SILLAGE PARFUMERIE X SODILUX
          </h3>
        </div>
      )}

      {/* Brand Banner */}
      {!isMobile && (
        <div className="flex items-center justify-center py-5 px-8 w-full bg-[#5f2f17]">
          <h3 className="flex-1 [font-family:'Archivo',Helvetica] font-bold text-white text-xl text-center">
            BEAUTY SUCCESS SÉNÉGAL X SILLAGE PARFUMERIE X SODILUX
          </h3>
        </div>
      )}

      {/* Interview Content */}
      <div className="flex flex-col w-full bg-white">
        {/* First Row */}
        <div className={`flex ${isMobile ? 'flex-col' : ''} w-full bg-white`}>
          <div className={`flex ${isMobile ? 'flex-col-reverse' : ''} w-full rounded-none border-none shadow-none`}>
            <div className={`flex flex-col items-start justify-center gap-9 ${isMobile ? 'p-8' : 'p-16'} ${isMobile ? 'w-full' : 'flex-1'}`}>
              {/* Question 1 */}
              <h3 className={`citations ${isMobile ? 'text-center' : ''}`}>
                1. Sillage Parfumerie est une enseigne bien installée à Dakar.
                Pouvez-vous nous raconter sa genèse ?
              </h3>

              {interviewQuestions[0].answers.map((answer, index) => (
                <div
                  key={`q1-a${index}`}
                  className={`flex flex-col ${isMobile ? 'items-center' : 'items-start'} gap-5 w-full`}
                >
                  <div
                    className={`px-2.5 py-1.5 rounded-none ${Array.isArray(answer.speaker) ? answer.speaker[0].bgColor : answer.speaker.bgColor}`}
                  >
                    <span className={`sous_titre text-white ${isMobile ? 'block text-center' : ''}`}>
                      {Array.isArray(answer.speaker)
                        ? answer.speaker.map((sp, i) => (
                            <span key={sp.name} className={i > 0 ? "ml-2" : ""}>
                              {sp.name}
                            </span>
                          ))
                        : answer.speaker.name}
                    </span>
                  </div>
                  <p className="body_text text-justify">
                    {answer.text}
                  </p>
                </div>
              ))}
            </div>

            <div className={`flex items-center justify-center ${isMobile ? 'w-full h-[300px]' : 'w-1/2'} p-0`}>
              <img
                className="w-full h-full object-cover"
                alt="Sillage logo div"
                src="/interview/interview_img_2.png"
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className={`flex ${isMobile ? 'flex-col-reverse' : ''} w-full bg-white`}>
          <div className={`flex ${isMobile ? 'flex-col-reverse' : ''} w-full rounded-none border-none shadow-none`}>
            <div className={`flex items-center justify-center ${isMobile ? 'w-full h-[300px] order-2' : 'flex-1'} p-0`}>
              <img
                className="w-full h-full object-cover"
                alt="Sillage logo div"
                src="/interview/interview_img_3.png"
              />
            </div>

            <div className={`flex flex-col items-start ${isMobile ? 'py-8 px-8 order-1' : 'py-16 pb-30 pl-15 pr-0'} ${isMobile ? 'w-full' : 'flex-1'}`}>
              <div className={`flex flex-col items-start gap-9 ${isMobile ? 'p-0' : 'p-10'} w-full`}>
                {/* Question 2 */}
                <h3 className={`citations ${isMobile ? 'text-center' : ''}`}>
                  2. Vous avez récemment lancé Beauty Success au Sénégal.
                  Comment s&apos;est construite cette collaboration ?
                </h3>

                {interviewQuestions[1].answers.map((answer, index) => (
                  <div
                    key={`q2-a${index}`}
                    className={`flex flex-col ${isMobile ? 'items-center' : 'items-start'} gap-5 w-full`}
                  >
                    <div
                      className={`px-2.5 py-1.5 rounded-none ${Array.isArray(answer.speaker) ? answer.speaker[0].bgColor : answer.speaker.bgColor}`}
                    >
                      <span className={`sous_titre text-white ${isMobile ? 'block text-center' : ''}`}>
                        {Array.isArray(answer.speaker)
                          ? answer.speaker.map((sp, i) => (
                              <span key={sp.name} className={i > 0 ? "ml-2" : ""}>
                                {sp.name}
                              </span>
                            ))
                          : answer.speaker.name}
                      </span>
                    </div>
                    <p className="body_text text-justify">
                      {answer.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`flex flex-col items-start gap-9 ${isMobile ? 'p-0' : 'p-10'} w-full`}>
                {/* Question 3 */}
                <h3 className={`citations ${isMobile ? 'text-center' : ''}`}>
                  3. Entre l&apos;idée et l&apos;ouverture, combien de temps
                  s&apos;est écoulé ?
                </h3>

                <div className="flex flex-col items-start gap-5 w-full">
                  <div className={`flex ${isMobile ? ' gap-2 items-center' : 'items-start gap-5'}`}>
                    <div className="px-2.5 py-1.5 rounded-none bg-[#5f2f17]">
                      <span className={`sous_titre text-white ${isMobile ? 'block text-center' : ''}`}>
                        Khadija Gueye
                      </span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-none bg-gold">
                      <span className={`sous_titre text-white ${isMobile ? 'block text-center' : ''}`}>
                        Marie Berthe Gueye
                      </span>
                    </div>
                  </div>
                  <p className="body_text text-justify">
                    Il s&apos;est passé près de deux ans. De la réflexion
                    stratégique à l&apos;ouverture, en passant par la validation
                    du local, la formation, les expéditions, etc. C&apos;est un
                    processus très complet, avec ses défis, mais aussi beaucoup
                    d&apos;apprentissages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className={`flex ${isMobile ? 'flex-col-reverse' : ''} w-full`}>
          <div className={`flex flex-col justify-center ${isMobile ? 'w-full' : 'w-1/2'} ${isMobile ? 'gap-8 p-8' : 'gap-16 py-16'}`}>
            {/* Questions 4-6 */}
            {[3, 4, 5].map((questionIndex) => (
              <div
                key={`section-${questionIndex + 1}`}
                className={`flex flex-col items-start gap-9 ${isMobile ? 'px-0' : 'px-16'} w-full`}
              >
                <h3 className={`citations ${isMobile ? 'text-center' : ''}`}>
                  {questionIndex + 1}.{" "}
                  {interviewQuestions[questionIndex].question}
                </h3>

                {interviewQuestions[questionIndex].answers.map(
                  (answer, index) => (
                    <div
                      key={`q${questionIndex + 1}-a${index}`}
                      className={`flex flex-col ${isMobile ? 'items-center' : 'items-start'} gap-5 w-full`}
                    >
                      <div
                        className={`px-2.5 py-1.5 rounded-none ${Array.isArray(answer.speaker) ? answer.speaker[0].bgColor : answer.speaker.bgColor}`}
                      >
                        <span className={`sous_titre text-white ${isMobile ? 'block text-center' : ''}`}>
                          {Array.isArray(answer.speaker)
                            ? answer.speaker.map((sp, i) => (
                                <span key={sp.name} className={i > 0 ? "ml-2" : ""}>
                                  {sp.name}
                                </span>
                              ))
                            : answer.speaker.name}
                        </span>
                      </div>
                      <p className="body_text text-justify">
                        {answer.text}
                      </p>
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>

          <div className={`flex flex-col items-center ${isMobile ? 'w-full h-[300px]' : 'w-1/2'} bg-white`}>
            <img
              className="w-full h-full object-cover"
              alt="Instagram phone view"
              src="/interview/interview_img_4.png"
            />
          </div>
        </div>

        {/* Fourth Row */}
        <div className={`flex ${isMobile ? 'flex-col-reverse' : ''} w-full bg-white`}>
          <div className={`flex flex-col ${isMobile ? 'gap-8' : ''} ${isMobile ? 'w-full' : 'w-1/2'}`}>
            <GallerySection />
          </div>

          <div className={`flex flex-col ${isMobile ? 'gap-6 p-8' : 'gap-8 p-16'} ${isMobile ? 'w-full' : 'flex-1'}`}>
            {/* Questions 7-9 */}
            {[6, 7, 8].map((questionIndex) => (
              <div
                key={`section-${questionIndex + 1}`}
                className="flex flex-col items-start gap-9 w-full"
              >
                <h3 className={`citations ${isMobile ? 'text-center' : ''}`}>
                  {questionIndex + 1}.{" "}
                  {interviewQuestions[questionIndex].question}
                </h3>

                {interviewQuestions[questionIndex].answers.map(
                  (answer, index) => (
                    <div
                      key={`q${questionIndex + 1}-a${index}`}
                      className={`flex flex-col ${isMobile ? 'items-center' : 'items-start'} gap-5 w-full`}
                    >
                      <div
                        className={`px-2.5 py-1.5 rounded-none ${Array.isArray(answer.speaker) ? answer.speaker[0].bgColor : answer.speaker.bgColor}`}
                      >
                        <span className={`sous_titre text-white ${isMobile ? 'block text-center' : ''}`}>
                          {Array.isArray(answer.speaker)
                            ? answer.speaker.map((sp, i) => (
                                <span key={sp.name} className={i > 0 ? "ml-2" : ""}>
                                  {sp.name}
                                </span>
                              ))
                            : answer.speaker.name}
                        </span>
                      </div>
                      <p className="body_text text-justify">
                        {answer.text}
                      </p>
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};