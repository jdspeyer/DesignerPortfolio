import Project from './classes/project.js'

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
          url: '../../assets/images/project_pages/likerealpeopledo/likerealpeopledo_0.jpg'
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
              text: 'This project aims to create a dance music video that combines imaginative storytelling with the use of visual effects to emphasize the song’s message. The mission is to convey the song’s central theme through dance and visuals, ensuring that the audience is thoroughly engaged by a narrative that complements the music’s feelings and ideas.'
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
              text: 'I present a love story through a dance music video. This story follows two individuals, burdened by their pasts, who find solace in each other’s love. The video begins in black and white, using a 2D stop-motion technique with a paper-like texture and phone screens to symbolize their preoccupation with the past. As the video progresses, it transitions from sepia to full color, evolving from 2D stop motion to 3D, capturing the characters’ emotional journey toward a brighter future. My work blends dance, storytelling, and visual effects to convey the song’s message, creating an engaging and visually captivating narrative.'
            }
          ]
        }
      ]
    },
    /// STEP 1
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
              text: 'During my research, I drew significant inspiration from a specific dance featured in a video choreographed by Keone and Mari, which I first discovered while watching a dance television program. The idea to incorporate paper-cutout techniques was originally ignited by the creative work of the artist and choreographer Hokuto Konishi (@Hok on Instagram). His innovative approach to physical stop-motion photography and videos served as the catalyst for my decision to digitally adapt this method, employing After Effects.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '20 / 11',
              url: '../../assets/images/project_pages/likerealpeopledo/likerealpeopledo_1.jpg'
            }
          ]
        }
      ]
    },

    /// VIDEO
    {
      id: 'colWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'titleArticle',
          title: '/02 Process - Final Product'
        },
        {
          id: 'videoArticle',
          url: 'https://www.youtube.com/embed/EfwgOJRCISQ?si=8Txza7_LDFyRlemA'
        }
      ]
    }
  ]
})

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  articles: [
    /// Landing Image
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '5 / 2',
          contain: false,
          url: '../../assets/images/project_pages/gaiani/gaiani_0.jpg'
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
              text: 'Most medical products, including medicine boxes, are not made by people who need these products daily to function. As a person who has struggled with chronic illnesses, I bring a brand new perspective to this market. Allow more people to feel seen and recognized through the product I create.Current medicine containers lack the design insight of someone who is chronically ill, leaving them to have a lack of privacy, outdated in their design, and not user friendly.'
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
              text: 'To create a viable product using research and user testing from real people with chronic illness, exploring updated product design techniques, and ultimately giving visibility to this community within a society that values abled people. I plan to make an easy-to-use, sleek, customizable medicine case that empowers people with chronic illnesses to manage their health.'
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
          title: '/01 Process - Research Brief'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'textArticle',
              text: 'This project involved several weeks of research, which encompassed a comprehensive examination of scientific studies, in-store assessments of current products, and the creation of a slide deck summarizing these findings. Additionally, I conducted a survey that garnered over 115 responses from my target audience. The insights from this survey played a pivotal role in shaping the designs, enabling a deeper and more meaningful connection with the chronic illness community.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '943 / 490',
              url: '../../assets/images/project_pages/gaiani/gaiani_1.jpg'
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
              id: 'textArticle',
              text: 'The ideation process involved hundreds of sketches, jotting notes throughout the day that reminded me of something. The main inspiration that made everything click for me was actually using inspiration from nature. I watched nature documentaries and looking at organic forms. I was looking at fish, snapdragon flowers, palm trees, and various seed pods.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '943 / 490',
              url: '../../assets/images/project_pages/gaiani/gaiani_2.jpg'
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
          title: '/03 Process - Prototype'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '487 / 463',
              url: '../../assets/images/project_pages/gaiani/gaiani_3.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '487 / 463',
              url: '../../assets/images/project_pages/gaiani/gaiani_4.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '487 / 463',
              url: '../../assets/images/project_pages/gaiani/gaiani_5.jpg'
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
      lighten: false,
      children: [
        {
          id: 'titleArticle',
          title: '/04 Process - Style Guide'
        },
        {
          id: 'imageArticle',
          aspectRatio: '20 / 11',
          contain: true,
          url: '../../assets/images/project_pages/gaiani/gaiani_6.png'
        }
      ]
    },
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/05 Process - Deliver'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '625 / 486',
              url: '../../assets/images/project_pages/gaiani/gaiani_7.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '85 / 48',
              url: '../../assets/images/project_pages/gaiani/gaiani_8.jpg'
            }
          ]
        }
      ]
    },
    /// Landing Image
    {
      id: 'colWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'titleArticle',
          title: '/06 Process - Final 3D Printed Prototype'
        },
        {
          id: 'imageArticle',
          aspectRatio: '5 / 2',
          contain: false,
          url: '../../assets/images/project_pages/gaiani/gaiani_9.jpg'
        }
      ]
    },
    {
      id: 'colWrapper',
      padded: true,
      parent: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/07 Process - Video'
        },
        {
          id: 'videoArticle',
          url: 'https://www.youtube.com/embed/0Gko4vcha4U?si=g57Kc-n8sR6sDSym'
        }
      ]
    }
  ]
})

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// dunkinProject information
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
  articles: [
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '197 / 130',
          contain: false,
          url: '../../assets/images/project_pages/dunkin/dunkin_0.jpg'
        }
      ]
    }
  ]
})

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// hoverProject information
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
  articles: [
    /// Landing Image
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '5 / 2',
          contain: false,
          url: '../../assets/images/project_pages/hover/hover_0.jpg'
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
              text: 'Adaptive silverware is primarily used by individuals with medical diagnoses that hinder their motion stability, memory or brain function, or grip. In the United States, approximately 23% of older adults rely on adaptive equipment, with arthritis being a growing concern affecting 25% of American adults, a figure expected to increase to nearly 50% by 2040. Common conditions requiring adaptive utensils include stroke, arthritis, cerebral palsy, dementia, Alzheimer’s cancer, and carpal tunnel syndrome. Many individuals feel embarrassed to use adaptable spoons due to their chunky, childish design and inadequate utensil instructions, leading to a lack of user-friendliness. This highlights the need for our adaptable spoon company to address these issues and create a more inclusive and user-friendly product.'
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
              text: 'Hover is an innovative adaptive utensil designed to modernize the current design of adaptive utensils. Using 3D printing technology and an extensive design process, I created this unique spoon to provide for individuals with arthritis and other disabili-ties. Adaptive utensils enable this demographic to be independent in eating. How-ever, those on the current market are only tailored for functionality rather than style. Hover bridges this gap by offering a sleek and comfortable design that caters to individuals between 20 and 80. In addition, this utensil gives the hope of being a piece to be shown off rather than an embarrassing implement to be concealed.'
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
          title: '/01 Process - Research Brief'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'textArticle',
              text: 'To design an effective design system for Istanbul, I researched the location history, art, and culture of the area. I looked through many resources to get a broad and detailed perspective of the location.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '943 / 490',
              url: '../../assets/images/project_pages/hover/hover_1.jpg'
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
              id: 'textArticle',
              text: 'This research entailed a comprehensive examination of existing adaptable spoon designs, a thorough investigation into the specific conditions and scenarios in which these spoons are required, and a deep exploration of design insights that can inform and enhance the development of our product. The research was conducted to gain a comprehensive understanding of the adaptable spoon market and to lay the foundation for future product creation.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '368 / 491',
              url: '../../assets/images/project_pages/hover/hover_2.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '368 / 491',
              url: '../../assets/images/project_pages/hover/hover_3.jpg'
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
          title: '/03 Process - Prototype'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '368 / 491',
              url: '../../assets/images/project_pages/hover/hover_4.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '368 / 491',
              url: '../../assets/images/project_pages/hover/hover_5.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '847 / 565',
              url: '../../assets/images/project_pages/hover/hover_6.jpg'
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
      lighten: false,
      children: [
        {
          id: 'titleArticle',
          title: '/04 Process - Deliver'
        },
        {
          id: 'rowWrapper',
          parent: true,
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '847 / 565',
              url: '../../assets/images/project_pages/hover/hover_7.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '847 / 565',
              url: '../../assets/images/project_pages/hover/hover_8.jpg'
            }
          ]
        }
      ]
    }
  ]
})

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// metaProject information
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
  articles: [
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '5 / 2',
          contain: false,
          url: '../../assets/images/project_pages/meta/meta_0.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '1580 / 889',
          contain: false,
          url: '../../assets/images/project_pages/meta/meta_1.jpg'
        }
      ]
    }
  ]
})

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// istanbulProject information
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
  articles: [
    /// Landing Image
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '5 / 2',
          contain: false,
          url: '../../assets/images/project_pages/istanbul/istanbul_0.jpg'
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
              text: 'Istanbul is a cosmopolitan city that attracted nearly 15 million tourists in 2019. Additionally, the city occupied 33 percent of all foreign visitors (Turkish Statistical Insitute). Standing alone, Istanbul as a city speaks for itself; however, the branding system it currently has does not communicate the vast city and culture Istanbul represents. Currently, Istanbul has two logos, one for its tourism website and one for the Istanbul council, which makes decisions regarding the city. These two logos can be confusing and need to reflect a unified system.'
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
              text: 'This project’s objective was to pick a city and create a branding system that effectively communicates and encourages people to travel and explore that location. This project includes building a logo that can be used universally throughout the area, a tagline that encapsulates the core message of the place, a unique pattern and brand colors, an ad campaign, pole signage, travel postcards, and branded items. This project spanned six weeks, in which our teacher tasked us with going through the creative process from napkin sketches to final solutions and a presentation.'
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
          title: '/01 Process - Research Brief'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'textArticle',
              text: 'To design an effective design system for Istanbul, I researched the location history, art, and culture of the area. I looked through many resources to get a broad and detailed perspective of the location.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '943 / 490',
              url: '../../assets/images/project_pages/istanbul/istanbul_1.jpg'
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
              aspectRatio: '943 / 490',
              url: '../../assets/images/project_pages/istanbul/istanbul_3.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '943 / 490',
              url: '../../assets/images/project_pages/istanbul/istanbul_4.jpg'
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
          title: '/03 Process - Refine'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '82 / 107',
              url: '../../assets/images/project_pages/istanbul/istanbul_4.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '82 / 107',
              url: '../../assets/images/project_pages/istanbul/istanbul_5.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '82 / 107',
              url: '../../assets/images/project_pages/istanbul/istanbul_6.jpg'
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
      lighten: false,
      children: [
        {
          id: 'titleArticle',
          title: '/04 Process - Style Guide'
        },
        {
          id: 'rowWrapper',
          parent: true,
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '523 / 415',
              url: '../../assets/images/project_pages/istanbul/istanbul_7.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '523 / 415',
              url: '../../assets/images/project_pages/istanbul/istanbul_8.jpg'
            }
          ]
        },
        {
          id: 'rowWrapper',
          parent: true,
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '129 / 55',
              url: '../../assets/images/project_pages/istanbul/istanbul_9.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '129 / 55',
              url: '../../assets/images/project_pages/istanbul/istanbul_10.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/05 Process - Deliver'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '397 / 240',
              url: '../../assets/images/project_pages/istanbul/istanbul_11.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '397 / 240',
              url: '../../assets/images/project_pages/istanbul/istanbul_12.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      lighten: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '1625 / 493',
          contain: false,
          url: '../../assets/images/project_pages/istanbul/istanbul_13.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      lighten: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '1625 / 493',
          contain: false,
          url: '../../assets/images/project_pages/istanbul/istanbul_14.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      lighten: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '1625 / 493',
          contain: false,
          url: '../../assets/images/project_pages/istanbul/istanbul_15.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      lighten: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '1625 / 493',
          contain: false,
          url: '../../assets/images/project_pages/istanbul/istanbul_16.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      lighten: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '1625 / 493',
          contain: false,
          url: '../../assets/images/project_pages/istanbul/istanbul_17.jpg'
        }
      ]
    }
  ]
})

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// desvuProject information
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
  articles: [
    /// Landing Image
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '5 / 2',
          contain: false,
          url: '../../assets/images/project_pages/desvu/desvu_0.jpg'
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
              text: 'The airline industry is evolving, and more than 4.5 billion people choose to fly. However, the airlines are staying the same and catering to the needs of these modern passengers. While airlines are focused on advancing in-flight features to cater to Millenials and Gen Z, such as wifi, USB ports in seats, and flight payment via a mobile device, they aren’t focusing on updating their company’s entire experience and design and marketing. The problem with airlines today is the hassle of traveling, booking, and planning trips, the unpleasant in-flight experience, and even simply getting through the airport to find your flight. The design in some of these airlines can be dated and, while well-trusted, hasn’t been updated to gain new engagement with the modern traveler.'
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
              text: 'This project aims to create a modern airline encouraging people to travel and explore new locations. This includes proposing a new airline and creating an entire branding system applicable throughout their business. This project’s key elements include creating a logo that symbolizes the airline, a tagline that communicates the core message, a unique pattern and brand colors, tail and full-body airplane designs, promotional ads, and branded items. This project spanned six weeks and covered the entire creative process, from research and ideation to final solutions.'
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
          title: '/01 Process - Research Brief'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'textArticle',
              text: 'Starting this project, I researched extensively about the airline business. I wanted a broad picture of the industry, so I explored everything from design to travel trends and passenger statistics and reflected on my personal experiences with airline travel.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '943 / 490',
              url: '../../assets/images/project_pages/desvu/desvu_1.jpg'
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
              id: 'textArticle',
              text: 'In this project, I gathered input from peers and my instructor to narrow down potential airline names. After considering various options, I focused on DèsVu and Soli. I then embarked on sketching and design, constantly refining and seeking feedback—extensive research into travel-related words and their meanings enriched the creative journey. As the project evolved, I digitally crafted the logos, ultimately selecting DèsVu as the preferred direction. The exploration continued with various arrow angles and font styles for the d. Simultaneously, I brainstormed tagline options, received feedback, and ultimately chose Memories Start Here as the final touch.'
            },
            {
              id: 'imageArticle',
              aspectRatio: '943 / 490',
              contain: true,
              url: '../../assets/images/project_pages/desvu/desvu_2.jpg'
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
          title: '/03 Process - Refine'
        },
        {
          id: 'rowWrapper',
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '643 / 442',
              contain: true,
              url: '../../assets/images/project_pages/desvu/desvu_3.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '643 / 442',
              contain: true,
              url: '../../assets/images/project_pages/desvu/desvu_4.jpg'
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
      lighten: false,
      children: [
        {
          id: 'titleArticle',
          title: '/04 Process - Style Guide'
        },
        {
          id: 'rowWrapper',
          parent: true,
          children: [
            {
              id: 'imageArticle',
              aspectRatio: '629 / 396',
              url: '../../assets/images/project_pages/desvu/desvu_5.jpg'
            },
            {
              id: 'imageArticle',
              aspectRatio: '629 / 396',
              url: '../../assets/images/project_pages/desvu/desvu_6.jpg'
            }
          ]
        },
        {
          id: 'imageArticle',
          aspectRatio: '704 / 301',
          url: '../../assets/images/project_pages/desvu/desvu_7.jpg'
        }
      ]
    },
    {
      id: 'colWrapper',
      parent: true,
      padded: true,
      lighten: true,
      children: [
        {
          id: 'titleArticle',
          title: '/05 Process - Deliver'
        },
        {
          id: 'imageArticle',
          aspectRatio: '1738 / 477',
          contain: false,
          url: '../../assets/images/project_pages/desvu/desvu_8.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '1738 / 477',
          contain: false,
          url: '../../assets/images/project_pages/desvu/desvu_9.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '1738 / 477',
          contain: false,
          url: '../../assets/images/project_pages/desvu/desvu_10.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '1738 / 477',
          contain: false,
          url: '../../assets/images/project_pages/desvu/desvu_11.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '1738 / 477',
          contain: false,
          url: '../../assets/images/project_pages/desvu/desvu_12.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '1738 / 477',
          contain: false,
          url: '../../assets/images/project_pages/desvu/desvu_13.jpg'
        }
      ]
    }
  ]
})

/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// sensibleProject information
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
  articles: [
    /// Landing Image
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '5 / 2',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_0.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '364 / 291',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_1.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '364 / 291',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_2.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '364 / 291',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_3.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '364 / 291',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_4.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '364 / 291',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_5.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '364 / 291',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_6.jpg'
        }
      ]
    },
    {
      id: 'rowWrapper',
      padded: true,
      parent: true,
      children: [
        {
          id: 'imageArticle',
          aspectRatio: '364 / 291',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_7.jpg'
        },
        {
          id: 'imageArticle',
          aspectRatio: '364 / 291',
          contain: false,
          url: '../../assets/images/project_pages/sensible/sensible_8.jpg'
        }
      ]
    }
  ]
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
