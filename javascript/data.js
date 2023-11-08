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
  isOnWorkPage: true
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
  isOnWorkPage: true
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
  isOnWorkPage: true
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
  isOnWorkPage: true
})

/// These are the projects that you will be using throughout the website.
/// If you want a project visible somewhere you will need to define it here and make a page for it within the work/projects folder.
const PORTFOLIO_PROJECTS = [
  swellProject,
  blvdProject,
  realPeopleDoProject,
  gaianiProject
]

export default PORTFOLIO_PROJECTS
