export default {
  navbar: {
    name: "GISELE SARTINI",
    bio: "about",
    tools: "skills",
    projects: "projects",
    brands: "clients",
    contact: "contact",

    navLabel: "Main navigation",
    homeLabel: "Go to homepage",
    bioLabel: "Go to About section",
    toolsLabel: "Go to Skills section",
    projectsLabel: "Go to Projects section",
    brandsLabel: "Go to Clients section",
    contactLabel: "Go to Contact section"
  },

  lang: {
    switchToPT: "Switch to Portuguese",
    switchToEN: "Switch to English",
    languageSelectorLabel: "Language selector"
  },

  bio: {
    title: "About Gisele",
    alt: "Portrait of Gisele Sartini",
    paragraphs: [
      "Hi, it's really nice to have you here!",
      "My name is <strong>Gisele Sartini</strong>, and I'm a <strong>Brazilian multimedia professional passionate about storytelling through audiovisual media</strong>. My background combines a degree in Journalism from Cásper Líbero College with a technical specialization in Cinema, providing a solid foundation for strategic and creative work.",
      "My expertise spans the entire filmmaking production: <strong>from scriptwriting to video editing, motion design, live stream operation (VMix/Streamyard), and production</strong>. At TV Gazeta, I work as a Videomaker, Scriptwriter, and Live Stream Operator, creating content for the <strong>Fundação Cásper Líbero</strong>'s social media channels. Previously, I collaborated with companies such as <strong>Empiricus, Jellysmack, and the portal Mina Bem-Estar</strong>, editing videos focused on engagement, sales, and audience growth for platforms like YouTube and social media.",
      "I have also channeled my creativity into independent projects, having produced and edited the documentary <em>\"Entre Latas e Luta\"</em> and participated in several short films in roles such as <strong>art direction, scriptwriting, and post-production.</strong>",
      "I am proficient in the <strong>Advanced Adobe Suite (Premiere, After Effects, Photoshop, Audition) and tools like OBS, Avid, and Midjourney</strong>. I am fluent in English, have an advanced level of Spanish, and intermediate knowledge of Italian, enabling me to collaborate on international projects.",
      "I am always seeking new challenges to create <strong>innovative and impactful visual content.</strong>"
    ]
  },

  cv: {
    download: "Résumé | PDF"
  },

  tools: {
    title: "Tools",
    ariaLabel: "TSoftware and creative tools Gisele works with",
    helperText: "Tools I master",

    list: [
      { src: "/logos/premiere.svg", alt: "Adobe Premiere", label: "Premiere" },
      { src: "/logos/photoshop.svg", alt: "Adobe Photoshop", label: "Photoshop" },
      { src: "/logos/after.svg", alt: "Adobe After Effects", label: "After Effects" },
      { src: "/logos/animate.svg", alt: "Adobe Animate", label: "Animate" },
      { src: "/logos/illustrator.svg", alt: "Adobe Illustrator", label: "Illustrator" },
      { src: "/logos/audition.svg", alt: "Adobe Audition", label: "Audition" },
      { src: "/logos/capcut.svg", alt: "CapCut", label: "CapCut" },
      { src: "/logos/avid.svg", alt: "Avid", label: "Avid" },
      { src: "/logos/vmix.svg", alt: "vMix", label: "vMix" },
      { src: "/logos/streamyard.svg", alt: "StreamYard", label: "StreamYard" },
      { src: "/logos/midjourney.svg", alt: "Midjourney", label: "Midjourney" }
    ]
  },

  projects: {
    title: "Projects",
    seeAllText: "See more",
    sectionTitle: "Selected Projects",
    sectionDescription: "Here you'll find some of the projects that shaped my experience in creation and production: journalistic content, branded videos, interviews, and narratives exploring different forms of storytelling.",
    ariaLabels: {
      sectionLabel: "Projects video section",
      seeAllButton: "Go to the page with all projects",
    },
    items: [
      {
        src: "https://www.youtube.com/embed/XTXKzDz3Tb0",
        title: "Chocolate Cake by Chef Patrícia Figueiredo | TV Gazeta",
        caption: "Chocolate Cake by Chef Patrícia Figueiredo | TV Gazeta"
      },
      {
        src: "https://www.youtube.com/embed/tD3FTAZ8was",
        title: "SÃO SILVESTRE: Exclusive interview with Paul Tergat, the race's greatest champion",
        caption: "SÃO SILVESTRE: Exclusive interview with Paul Tergat, the race's greatest champion"
      },
      {
        src: "https://www.youtube.com/embed/iLvTiLUdUp4",
        title: "PRE-GAME: Corinthians vs Palmeiras - Brazilian Cup + DANIEL FURLAN LIVE | #TáNoJogo #80",
        caption: "PRE-GAME: Corinthians vs Palmeiras - Brazilian Cup + DANIEL FURLAN LIVE | #TáNoJogo #80"
      },
      {
        src: "https://www.youtube.com/embed/ZRl07ekvBko",
        title: "PÉRICLES - Exclusive Interview | Gazeta FM",
        caption: "PÉRICLES - Exclusive Interview | Gazeta FM"
      },
      {
        src: "https://www.youtube.com/embed/F1IMKT-lVOM",
        title: "Pauta & Prosa #24: Spirituality in the Digital Age | Jornal da Gazeta",
        caption: "Pauta & Prosa #24: Spirituality in the Digital Age | Jornal da Gazeta"
      },
      {
        src: "https://www.youtube.com/embed/DhF7f-kgS7c",
        title: "It may not look like it, but it's WORK: Carnival & Entertainment Journalism | Central 900 - Ep. 2",
        caption: "It may not look like it, but it's WORK: Carnival & Entertainment Journalism | Central 900 - Ep. 2"
      },
      {
        src: "https://www.youtube.com/embed/-dfpISBxUww",
        title: "ITUB4 reports record results, IGTI11 surprises, and ROXO34 rises — buy or sell? | Money Times",
        caption: "ITUB4 reports record results, IGTI11 surprises, and ROXO34 rises — buy or sell? | Money Times"
      },
      {
        src: "https://www.youtube.com/embed/7Ke3ZIy5EAE",
        title: "Stop talking to your mother | Mina Bem-estar",
        caption: "Stop talking to your mother | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/n3jtNVomhDE",
        title: "VLOG Crica + Banco Pan",
        caption: "VLOG Crica + Banco Pan"
      },
    ]
  },

  clients: {
    title: "Clients",
    ariaLabels: {
      sectionLabel: "Clients logos section"
    },
    description: "Companies I’ve collaborated with",
    items: [
      {
        image: "/clients/casper.png",
        alt: "Cásper Líbero College logo"
      },
      {
        image: "/clients/empiricus.png",
        alt: "Empiricus logo"
      },
      {
        image: "/clients/exame.png",
        alt: "Exame logo"
      },
      {
        image: "/clients/gazeta.png",
        alt: "Gazeta logo"
      },
      {
        image: "/clients/mina.png",
        alt: "Mina logo"
      },
      {
        image: "/clients/moneytimes.png",
        alt: "MoneyTimes logo"
      },
      {
        image: "/clients/saosilvestre.png",
        alt: "São Silvestre race logo"
      },
      {
        image: "/clients/seudinheiro.png",
        alt: "Seu Dinheiro logo"
      },
      {
        image: "/clients/yubb.png",
        alt: "Yubb logo"
      },
      {
        image: "/clients/zazo.png",
        alt: "ZAZO Produções logo"
      }
    ]
  },

  contact: {
    title: "Get in touch",
    description: [
      "I'm open to new projects, collaborations and creative opportunities.",
      "If you'd like to talk about work, ideas, or partnerships, I'd love to hear from you."
    ],
    emailCta: "Email",
    linkedinCta: "LinkedIn",
    whatsappCta: "WhatsApp",
    links: {
      email: "giselesartini@gmail.com",
      linkedin: "https://www.linkedin.com/in/gisele-sartini-guaraldo-425a55b8/",
      whatsapp: "https://wa.me/5511954768053"
    },
    ariaLabels: {
      sectionLabel: "Contact section",
      email: "Send an email to Gisele Sartini",
      linkedin: "Open LinkedIn profile in a new tab",
      whatsapp: "Send a WhatsApp message in a new tab"
    },
  },

  footer: {
    rights: "All rights reserved.",
    developed: "Developed by",
    ariaDevLabel: "Website of the developer Caio Castelhano"
  },

  hero: {
    sectionLabel: "Presentation video"
  },

  projectsPage: {
    title: "Selected Projects",
    description:
      "Here you can explore my main audiovisual content: reports, interviews, branded content, livestreams, documentaries, and authorial productions.",
    ariaLabels: {
      sectionLabel: "Complete list of project videos",
    },

    items: [
      {
        src: "https://www.youtube.com/embed/XTXKzDz3Tb0",
        title: "Chocolate Cake by Chef Patrícia Figueiredo | TV Gazeta",
        caption: "Chocolate Cake by Chef Patrícia Figueiredo | TV Gazeta"
      },
      {
        src: "https://www.youtube.com/embed/tD3FTAZ8was",
        title: "SÃO SILVESTRE: Exclusive interview with Paul Tergat, the race's greatest champion",
        caption: "SÃO SILVESTRE: Exclusive interview with Paul Tergat, the race's greatest champion"
      },
      {
        src: "https://www.youtube.com/embed/iLvTiLUdUp4",
        title: "PRE-GAME: Corinthians vs Palmeiras - Brazilian Cup + DANIEL FURLAN LIVE | #TáNoJogo #80",
        caption: "PRE-GAME: Corinthians vs Palmeiras - Brazilian Cup + DANIEL FURLAN LIVE | #TáNoJogo #80"
      },
      {
        src: "https://www.youtube.com/embed/ZRl07ekvBko",
        title: "PÉRICLES - Exclusive Interview | Gazeta FM",
        caption: "PÉRICLES - Exclusive Interview | Gazeta FM"
      },
      {
        src: "https://www.youtube.com/embed/F1IMKT-lVOM",
        title: "Pauta & Prosa #24: Spirituality in the Digital Age | Jornal da Gazeta",
        caption: "Pauta & Prosa #24: Spirituality in the Digital Age | Jornal da Gazeta"
      },
      {
        src: "https://www.youtube.com/embed/DhF7f-kgS7c",
        title: "It may not look like it, but it's WORK: Carnival & Entertainment Journalism | Central 900 - Ep. 2",
        caption: "It may not look like it, but it's WORK: Carnival & Entertainment Journalism | Central 900 - Ep. 2"
      },
      {
        src: "https://www.youtube.com/embed/-dfpISBxUww",
        title: "ITUB4 reports record results, IGTI11 surprises, and ROXO34 rises — buy or sell? | Money Times",
        caption: "ITUB4 reports record results, IGTI11 surprises, and ROXO34 rises — buy or sell? | Money Times"
      },
      {
        src: "https://www.youtube.com/embed/7Ke3ZIy5EAE",
        title: "Stop talking to your mother | Mina Bem-estar",
        caption: "Stop talking to your mother | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/n3jtNVomhDE",
        title: "VLOG Crica + Banco Pan",
        caption: "VLOG Crica + Banco Pan"
      },
      {
        src: "https://www.youtube.com/embed/T6GsH1hQhRU",
        title: "GUEST: The Brazil That Worked + Ancelotti's Debut + Corinthians INVASION | #TáNoJogo #65",
        caption: "GUEST: The Brazil That Worked + Ancelotti's Debut + Corinthians INVASION | #TáNoJogo #65"
      },
      {
        src: "https://www.youtube.com/embed/EpAnyncIW3U",
        title: "GLORIA GROOVE - Exclusive Interview",
        caption: "GLORIA GROOVE - Exclusive Interview"
      },
      {
        src: "https://www.youtube.com/embed/O_gIYrPSbpg",
        title: "THIAGUINHO - Exclusive Interview",
        caption: "THIAGUINHO - Exclusive Interview"
      },
      {
        src: "https://www.youtube.com/embed/xpLYHYKJuwk",
        title: "DROPS DE ANIS #8 - Leona Cavalli: Art as Craft",
        caption: "DROPS DE ANIS #8 - Leona Cavalli: Art as Craft"
      },
      {
        src: "https://www.youtube.com/embed/B27uCsWGtX0",
        title: "DROPS DE ANIS #4 - A conversation with actress Virgínia Cavendish",
        caption: "DROPS DE ANIS #4 - A conversation with actress Virgínia Cavendish"
      },
      {
        src: "https://www.youtube.com/embed/3tURaF8PtBU",
        title: "DROPS DE ANIS #3 - Clip with Leonardo Miggiorin",
        caption: "DROPS DE ANIS #3 - Clip with Leonardo Miggiorin"
      },
      {
        src: "https://www.youtube.com/embed/EXi7NwNXrcI",
        title: "Pauta & Prosa #23 - Time and Happiness | Mario Sérgio Cortella",
        caption: "Pauta & Prosa #23 - Time and Happiness | Mario Sérgio Cortella"
      },
      {
        src: "https://www.youtube.com/embed/Dz010IZ-EEU",
        title: "What Do We Have Left? | World's First Vegan Pro Bodybuilder",
        caption: "What Do We Have Left? | World's First Vegan Pro Bodybuilder"
      },
      {
        src: "https://www.youtube.com/embed/XecONcv9Vas",
        title: "Journalist & Digital Influencer: The best (and hardest) of both worlds | Central 900 - Ep. 18",
        caption: "Journalist & Digital Influencer: The best (and hardest) of both worlds | Central 900 - Ep. 18"
      },
      {
        src: "https://www.youtube.com/embed/ZWRtHH-8crA",
        title: "Chasing Fame: Media Training & Reality Shows | Central 900 - Ep. 1",
        caption: "Chasing Fame: Media Training & Reality Shows | Central 900 - Ep. 1"
      },
      {
        src: "https://www.youtube.com/embed/zhJi1uWoP_Q",
        title: "One Year Without Paulo Gustavo: Angélica talks with Ingrid Guimarães",
        caption: "One Year Without Paulo Gustavo: Angélica talks with Ingrid Guimarães"
      },
      {
        src: "https://www.youtube.com/embed/XI5_8_NC8TY",
        title: "Dandara Pagu: Is it better to be married or single?",
        caption: "Dandara Pagu: Is it better to be married or single?"
      },
      {
        src: "https://www.youtube.com/embed/XjDrxgJsoFY?list=PL9i60BZmDe5gHidCN53ThbYSANQsoiaM7",
        title: "Barbosa: Defending a Legacy",
        caption: "Barbosa: Defending a Legacy"
      },
      {
        src: "https://www.youtube.com/embed/VUQ-Dkyl7Mc",
        title: "Is Brexit Good for the Ibovespa? | Ask Me Anything",
        caption: "Is Brexit Good for the Ibovespa? | Ask Me Anything"
      },
      {
        src: "https://www.youtube.com/embed/tpR0yFyZqIc",
        title: "CICATRIZ (Trailer) | Directed by Rodrigo Ribeiro Vieira",
        caption: "CICATRIZ (Trailer) | Directed by Rodrigo Ribeiro Vieira"
      },
      {
        src: "https://www.youtube.com/embed/PusxWWw382o",
        title: "Between Cans and Struggles: The female graffiti scene in São Paulo",
        caption: "Between Cans and Struggles: The female graffiti scene in São Paulo"
      },
      {
        src: "https://www.youtube.com/embed/fAM_2hlcO-A",
        title: "Self-Care | Mina Bem-estar",
        caption: "Self-Care | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/zsWDXBB2lYE",
        title: "Zero-Alcohol Drinks | Mina Bem-estar",
        caption: "Zero-Alcohol Drinks | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/leE3y1SpdpM",
        title: "Skincare | Mina Bem-estar",
        caption: "Skincare | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/ZYDBJQrM8Q0",
        title: "Bliss Bullet | Mina Bem-estar",
        caption: "Bliss Bullet | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/4PijXKmWy80",
        title: "Inside Out | Mina Bem-estar",
        caption: "Inside Out | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/VLN2x25Goz8",
        title: "Night Glow | Mina Bem-estar",
        caption: "Night Glow | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/PQs9hbw-Vwk",
        title: "Rafa Kalimann | Mina Bem-estar",
        caption: "Rafa Kalimann | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/x0rpdiwe9Iw",
        title: "S.O.S. PMS | Mina Bem-estar",
        caption: "S.O.S. PMS | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/XrYxmmzDDmU",
        title: "Workplace Beauty Pressure | Mina Bem-estar",
        caption: "Workplace Beauty Pressure | Mina Bem-estar"
      },
      {
        src: "https://www.youtube.com/embed/hCGz6Bf_gIs",
        title: "Mina Friday | Mina Bem-estar",
        caption: "Mina Friday | Mina Bem-estar"
      },
    ],

    textCard: {
      title: "Updates on the way. Soon, more videos and projects will be available on this page.",
    },
  },

  videoModal: {
    ariaCloseButton: "Close full-screen video",
    fallbackTitle: "Featured video"
  }
};
