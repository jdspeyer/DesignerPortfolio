import Project from './classes/project.js'

/// Swell project information
const swellProject = new Project({
  mockupImage: 'assets/images/swell.png',
  coverImage: 'assets/images/swell_cover.jpg',
  title: 'Swell',
  missionStatement: 'The main objective of this project was to create a simplistic, user-friendly app to locate a particular item or item. This app idea came out of my love of the ocean, and growing up going to Santa Cruz beaches, I was always in awe of people who surf or do water sports. However, I found quickly through my research that the apps currently exist for surfers to find surf spots, attain correct weather conditions, and find sites that were not frequented as often, could have been more user-friendly, and lacked cohesive user interface principles. My goal was to change this by designing an app that allows users to navigate to a surf or beach spot easily, quickly get all the correct information on one screen, and be guided to their destination.',
  description: 'An app that allows users to navigate to a surf or beach spot easily, quickly get all the correct information on one screen, and be guided to their destination.',
  projectId: 'swell',
  tags: ['UI/ UX'],
  projectNumber: '/01',
  isOnHomePage: true,
  isOnWorkPage: true,
  deliverables: ['Survey research', 'Adobe XD Prototype'],
  role: 'Main Designer and Researcher',
  projectLink: 'https://youtu.be/O5SH-LyKq3w?si=plYKEudxWZ_XzLN9',
  projectLinkText: 'Check out on YouTube!',
  articles: [
    /// AN IMAGE
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/swell/swell_1.jpg'
        }
      ]
    },

    /// TWO TEXT ELEMENTS SIDE BY SIDE
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'colWrapper',
          children: [
            {
              id: 'titleArticle',
              title: 'Problem'
            },
            {
              id: 'textArticle',
              text: 'Growing up going to the beach often and being immersed in the surf culture, I’ve noticed a common challenge within the surfing community. While there are plenty of resources to check out wave and weather conditions at various surf spots, not all of them provide reliable information. In fact, some can be downright confusing and unpredictable. It’s also been clear to me that the most dependable data often comes with a premium price tag.<br><br>Far too many times, I have heard stories of people eagerly driven about 45 minutes to hit the beach, only to find lackluster waves, less-than-ideal weather, and overcrowded lineups. It’s not just a waste of time and money; it’s frustrating when surfing is meant to be all about fun and relaxation.'
            }
          ]
        },
        {
          id: 'colWrapper',
          children: [
            {
              id: 'titleArticle',
              title: 'Solution'
            },
            {
              id: 'textArticle',
              text: 'My application addresses this issue by curating lists of surf destinations in proximity to your current location, while also offering the functionality to search for specific locations of interest. The application outputs detailed result pages for each surf spot, encapsulating a compilation of pertinent information for beach go-ers. This approach facilitates your ability to discern the most suitable surf location for a given day with ease and precision.'
            }
          ]
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/01 Process - Research'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'textArticle',
              text: 'I conducted a survey targeting 10 individuals from my intended user base, seeking insights into their perspectives on surfing. A recurring theme emerged from the responses, highlighting surfing as a means of escaping the rigors of daily life and reconnecting with the natural world. The survey participants commonly cited factors such as extended travel times, overcrowded surf breaks, and suboptimal wave conditions as significant sources of frustration that detract from the simplicity and enjoyment of surfing. <br><br>Many surfers expressed their willingness to embark on extensive journeys in search of ideal wave conditions, only to be disheartened by the realization that their investments in time and money did not yield the desired outcomes. This underscores the pressing need for an application of this nature.<br><br>The envisioned application serves to address the core issue of identifying beaches and surf spots where the conditions are optimal for the pursuit of the water sport of choice, surfing. Furthermore, it promises to streamline the process, reducing downtime and mitigating the frustration associated with locating the perfect surf spot in close proximity.'
            },
            {
              id: 'htmlArticle',
              html: '<div class="flourish-embed" data-src="story/1757024"></div>'
            }
          ]
        }
      ]
    },
    /// ROW WRAPPER
    {
      id: 'rowWrapper',
      parent: true,
      padded: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/swell/swell_2.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/swell/swell_4.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/swell/swell_3.jpg'
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/02 Process - Site Map'
        },
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: true,
          url: '../../assets/images/project_pages/swell/swell_5.jpg'
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      children: [
        {
          id: 'titleArticle',
          title: '/03 Process - Low Fidelity Wireframes'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/swell/swell_6.png'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/swell/swell_7.png'
            }
          ]
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/04 Process - Medium Fidelity Wireframes'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '9 / 16',
              contain: true,
              url: '../../assets/images/project_pages/swell/swell_8.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '9 / 16',
              contain: true,
              url: '../../assets/images/project_pages/swell/swell_9.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '9 / 16',
              contain: true,
              url: '../../assets/images/project_pages/swell/swell_10.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '9 / 16',
              contain: true,
              url: '../../assets/images/project_pages/swell/swell_11.jpg'
            }
          ]
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      children: [
        {
          id: 'titleArticle',
          title: '/05 Process - Style Guide'
        },
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/swell/swell_12.png'
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/06 Process - High Fidelity Wireframes'
        },
        {
          id: 'rowWrapper',
          parent: true,
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              contain: false,
              url: '../../assets/images/project_pages/swell/swell_13.png'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              contain: false,
              url: '../../assets/images/project_pages/swell/swell_14.png'
            }
          ]
        }
      ]
    }
  ]
})

/// BLVD Website project information
const blvdProject = new Project({
  mockupImage: 'assets/images/blvd.png',
  coverImage: 'assets/images/blvd_cover.jpg',
  title: 'BLVD Website',
  missionStatement: 'This project’s primary objective was redesigning a website for a local restaurant or small business in my hometown. As a coffee lover and frequent customer of BLVD Coffee, I redesigned their website. My focus in this project was to capture the heart of BLVD by highlighting the rich history of the business, the vibrant community it caters to, and the premium quality of its food and beverages. Furthermore, I aimed to modernize the cafe’s appearance by crafting a new brand identity. This redesign was created through Adobe XD, and I am proud to mention that it was recognized with a silver student ADDY award at the Inland Empire local competition in 2021.',
  description: 'A website for a local restaurant or small business in my hometown. As a coffee lover and frequent customer of BLVD Coffee, I redesigned their website.',
  projectId: 'blvd',
  tags: ['UI/ UX', 'Award Winning'],
  projectNumber: '/02',
  isOnHomePage: true,
  isOnWorkPage: true,
  deliverables: ['Adobe XD Prototype'],
  role: 'Main Designer',
  projectLink: 'https://youtu.be/p72fFKRyJPA',
  projectLinkText: 'Check out on YouTube!',
  articles: [
    /// AN IMAGE
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/blvd/blvd_0.jpg'
        }
      ]
    },

    /// TWO TEXT ELEMENTS SIDE BY SIDE
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'colWrapper',
          children: [
            {
              id: 'titleArticle',
              title: 'Problem'
            },
            {
              id: 'textArticle',
              text: 'BLVD Coffee is a small family business located in Los Gatos, California. It is a fantastic coffee shop that has regulars and celebrates the traditions of "Old Los Gatos" by cultivating a brand of quality coffee and a quality community. Since the business started in the 90s, the logo and branding have become quickly outdated, not representing the cornerstones of the business. The current website features inconsistent typefaces, an uninformed branding system, confusing website construction, and a lack of consistent imagery.'
            }
          ]
        },
        {
          id: 'colWrapper',
          children: [
            {
              id: 'titleArticle',
              title: 'Solution'
            },
            {
              id: 'textArticle',
              text: 'After identifying the current problems with the website and becoming informed to design for the business, finding the solution becomes easy: redesigning the website and branding.'
            }
          ]
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/01 Process - Research'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'textArticle',
              text: 'The first part of the process was researching the original website and noting flaws or inconsistencies with the overall design and layout. I did this by going through each website page and annotating my thoughts. I also researched some other restaurants and coffee shops to gain inspiration for what I would like to do.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/blvd/blvd_1.jpg'
            }
          ]
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      children: [
        {
          id: 'titleArticle',
          title: '/02 Process - Ideation'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              contain: true,
              url: '../../assets/images/project_pages/blvd/blvd_2.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              contain: true,
              url: '../../assets/images/project_pages/blvd/blvd_3.png'
            }
          ]
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/03 Process - Low Fidelity Wireframes'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              contain: true,
              url: '../../assets/images/project_pages/blvd/blvd_4.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              contain: true,
              url: '../../assets/images/project_pages/blvd/blvd_5.jpg'
            }
          ]
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      children: [
        {
          id: 'titleArticle',
          title: '/04 Process - Medium Fidelity Wireframes'
        },
        {
          id: 'rowWrapper',
          parent: true,
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/blvd/blvd_6.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/blvd/blvd_7.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/blvd/blvd_8.jpg'
            }
          ]
        },
        {
          id: 'rowWrapper',
          parent: true,
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/blvd/blvd_9.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/blvd/blvd_10.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/blvd/blvd_11.jpg'
            }
          ]
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/05 Process - Style Guide'
        },
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/blvd/blvd_12.png'
        }
      ]
    },
    /// COL WRAPPER
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      children: [
        {
          id: 'titleArticle',
          title: '/06 Process - High Fidelity Wireframes'
        },
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/blvd/blvd_13.png'
        },
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: false,
          url: '../../assets/images/project_pages/blvd/blvd_14.png'
        }
      ]
    }
  ]
})

/// Like Real People Do Music Video project information
const realPeopleDoProject = new Project({
  mockupImage: 'assets/images/musicvideo.png',
  coverImage: 'assets/images/likerealpeopledo_cover.jpg',
  title: 'Like Real People Do Music Video',
  missionStatement: 'This visual and special effects project received a student silver ADDY award at the local competition in 2023. This project is a music video that combines dance, music, and visual effects to convey the message of the resiliency of love and the influence of media in affecting modern relationships. Inspired by the song written by Hozier and the outstanding choreography of Keone and Mari, the video represents love in all its forms. The project utilizes stop-motion techniques on After Effects, overlays, floral time-lapses, and real-life love notes to create an immersive experience.',
  description: 'A music video that combines dance, music, and visual effects to convey the message of the resiliency of love and the influence of media in affecting modern relationships.',
  projectId: 'likerealpeopledo',
  tags: ['VFX', 'Award Winning'],
  projectNumber: '/03',
  isOnHomePage: true,
  isOnWorkPage: true,
  deliverables: ['After Effects Video'],
  role: 'Main Designer',
  projectLink: 'https://youtu.be/EfwgOJRCISQ',
  projectLinkText: 'Check out on YouTube!',
  articles: []
})

/// Gaiani project information
const gaianiProject = new Project({
  mockupImage: 'assets/images/gaiani.png',
  coverImage: 'assets/images/gaiani_cover.jpg',
  title: 'Gaiani',
  missionStatement: 'My senior capstone project originated from my experience with chronic illness and the absence of functional, sleek, and user-friendly medicine boxes tailored toward the chronic illness community. The traditional medicine boxes used for decades and the current supplement-focused solutions do not adequately cater to the needs of those suffering from chronic illnesses. Through much research and connecting with my main target audient, I have designed a unique solution to cater to the diverse needs of this often-neglected demographic. I have landed on a minimum viable product through this process, from sketching to clay modeling to 3D printing. The product featured two primary parts, “the wreath” and “pods,” inspired by natural forms in nature.',
  description: 'A functional, sleek, and user-friendly medicine boxes tailored toward the chronic illness community. ',
  projectId: 'gaiani',
  tags: ['Product Design', 'Award Winning'],
  projectNumber: '/04',
  isOnHomePage: true,
  isOnWorkPage: true,
  deliverables: ['Final Presentation', '3D Printed Prototype', 'Process Video'],
  role: 'Main Designer and Researcher',
  projectLink: 'https://youtu.be/0Gko4vcha4U?si=EW27zhKlh-https://youtu.be/0Gko4vcha4U?si=EW27zhKlh-yzxmEb',
  projectLinkText: 'Check out on YouTube!',
  articles: []
})

const dunkinProject = new Project({
  mockupImage: 'assets/images/gaiani.png',
  coverImage: 'assets/images/dunkin_cover.jpg',
  title: 'Dunkin Donuts Poster',
  missionStatement: 'The Dunkin Donuts campaign poster was recognized with a gold student ADDY award at the 2022 local competition in the Inland Empire. The poster was designed utilizing the substitution principle, which cleverly incorporates elements of the Dunkin brand while adding a playful touch of modernity. The design thus emphasizes the convenience of on-the-go and delivery services that are so highly sought-after in today’s fast-paced society. The design’s simplicity shines through in efficiently communicating the message.',
  description: '',
  projectId: 'dunkin',
  tags: ['Campaign', 'Award Winning'],
  projectNumber: '/05',
  isOnHomePage: false,
  isOnWorkPage: true,
  deliverables: ['Poster'],
  role: 'Main Designer',
  projectLink: 'https://www.behance.net/gallery/135585911/Dunkin-Ad',
  projectLinkText: 'Check out on Behance!',
  articles: []
})

const hoverProject = new Project({
  mockupImage: 'assets/images/gaiani.png',
  coverImage: 'assets/images/hover_cover.jpg',
  title: 'Hover: Adaptable Spoon',
  missionStatement: 'Hover is an innovative adaptive utensil designed to modernize the current design of adaptive utensils. Using 3D printing technology and an extensive design process, I created this unique spoon to provide for individuals with arthritis and other disabilities. Adaptive utensils enable this demographic to be independent in eating. However, those on the current market are only tailored for functionality rather than style. Hover bridges this gap by offering a sleek and comfortable design that caters to individuals between 20 and 80. In addition, this utensil gives the hope of being a piece to be shown off rather than an embarrassing implement to be concealed.',
  description: '',
  projectId: 'hover',
  tags: ['Product Design'],
  projectNumber: '/06',
  isOnHomePage: false,
  isOnWorkPage: true,
  deliverables: ['3D Printed Prototype'],
  role: 'Main Designer & Researcher',
  projectLink: '',
  projectLinkText: '',
  articles: []
})

const metaProject = new Project({
  mockupImage: 'assets/images/gaiani.png',
  coverImage: 'assets/images/meta_cover.jpg',
  title: 'Meta Ad Campaign',
  missionStatement: 'This advertising campaign was recognized with a bronze student ADDY award at the 2023 local competition in the Inland Empire. The project’s original goal, as proposed by the professor, was to “construct an image” through physical means. Paying homage to Meta, a company that has become a cornerstone of creativity and inspiration for many, the campaign was designed to celebrate its initiative of bringing creatives together online. The logos of Meta’s parent companies were constructed from foam and hot glue, with over 18 hours in total of cutting and hand construction invested in these pieces.',
  description: '',
  projectId: 'meta',
  tags: ['Campaign', 'Award Winning'],
  projectNumber: '/07',
  isOnHomePage: false,
  isOnWorkPage: true,
  deliverables: ['3 Poster Advertising Campaign'],
  role: 'Main Designer & Researcher',
  projectLink: 'https://www.behance.net/gallery/166461901/Meta-Ad-Campaign',
  projectLinkText: 'Check out on Behance!',
  articles: []
})

const istanbulProject = new Project({
  mockupImage: 'assets/images/gaiani.png',
  coverImage: 'assets/images/istanbul_cover.jpg',
  title: 'Istanbul Campaign',
  missionStatement: 'The Istanbul Tourism Campaign aimed to promote the city as one of the world’s most culturally diverse, beautiful, and historic destinations. The campaign’s focal point was a symbolic logo representing the main pillars of Istanbul, including industry, religion, architecture, unique location, people, and art scene. The logo’s intricate patterns drew inspiration from the city’s beautiful tiles and tapestries, integral to its rich cultural heritage. Through its thoughtful branding system, the campaign aimed to attract tourists worldwide to experience the city’s vibrant culture, awe-inspiring architecture, and warm hospitality.',
  description: '',
  projectId: 'istanbul',
  tags: ['Campaign', 'Branding'],
  projectNumber: '/08',
  isOnHomePage: false,
  isOnWorkPage: true,
  deliverables: ['Brand System', 'Comprehensive Campaign'],
  role: 'Main Designer & Researcher',
  projectLink: 'https://www.behance.net/gallery/105556353/City-Tourism-Istanbul',
  projectLinkText: 'Check out on Behance!',
  articles: []
})

const desvuProject = new Project({
  mockupImage: 'assets/images/gaiani.png',
  coverImage: 'assets/images/desvu_cover.jpg',
  title: 'DeśVu Airlines',
  missionStatement: 'This project’s main objective was to develop a contemporary airline brand that inspires travelers to explore new destinations. This project’s scope encompasses proposing a new airline brand and creating an entire branding system to be implemented throughout the business. The resulting brand, DeVuèAir, is centered around the idea that "moments start with us." The tagline, "Moments Start with Us," encapsulates the essence of the brand and its commitment to providing a memorable travel experience, thus specializing in promoting fair-priced flights to exotic locations to Millennial and Gen-Z customers.',
  description: '',
  projectId: 'desvu',
  tags: ['Campaign', 'Branding'],
  projectNumber: '/09',
  isOnHomePage: false,
  isOnWorkPage: true,
  deliverables: ['Brand System', 'Comprehensive Campaign'],
  role: 'Main Designer & Researcher',
  projectLink: 'https://www.behance.net/gallery/108428573/Airline-Branding-Project',
  projectLinkText: 'Check out on Behance!',
  articles: []
})

const sensibleProject = new Project({
  mockupImage: 'assets/images/gaiani.png',
  coverImage: 'assets/images/sensible_cover.jpg',
  title: 'Sensible App',
  missionStatement: 'Sensible was designed for the semester-long EGR102 course taught at California Baptist University. The course serves as an introduction to fundamental techniques used in engineering design and analysis. Different models of the design process will be examined. A collaborative team-oriented design project will be undertaken. The final project of the course is a robotics competition. The team aims to assemble robots to scan various sensors on a map, indicating the amount of ping pong balls that should be collected. Sensible was developed to replace the outdated reading in the sensors’ data through Google Sheets. Sensible aims to deliver a more reliable, fast, and user-friendly interface for the EGR102 students to read the sensor data during the competition. As a result of the team’s collaboration in this unique format, a scientific paper was published regarding the design thinking methods used to make the application. I was the primary writer of this paper, which can be found on 74 of the linked document.',
  description: '',
  projectId: 'sensible',
  tags: ['UI/UX', 'Scientific Paper'],
  projectNumber: '/10',
  isOnHomePage: false,
  isOnWorkPage: true,
  deliverables: ['Web Application', 'Scientific Paper'],
  role: 'Main Designer & Researcher',
  projectLink: 'https://drive.google.com/file/d/1ebf62JSL2chfPVBJA3MvwZeeJDYn6gce/view',
  projectLinkText: 'Read the published paper!',
  articles: []
})

/// These are the projects that you will be using throughout the website.
/// If you want a project visible somewhere you will need to define it here and make a page for it within the work/projects folder.
const PORTFOLIO_PROJECTS = [
  swellProject,
  blvdProject,
  realPeopleDoProject,
  gaianiProject,
  dunkinProject,
  hoverProject,
  metaProject,
  istanbulProject,
  desvuProject,
  sensibleProject
]

export default PORTFOLIO_PROJECTS
