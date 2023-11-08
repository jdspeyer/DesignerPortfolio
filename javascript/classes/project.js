/**
 * Project Class
 * Used to create reusable project pages which can be easily created or deleted without writing code.
 * ! Static titles, taglines, and other
 * @param title - The title of the project.
 * @param missionStatement - The tagline/ mission statement of the project.
 * @param description - A short description of what this project is about. OPTIONAL
 * @param projectId - The unique id for this project. Must align with the projects html page.
 * @param projectNumber - The number of the project that should be shown next to it
 * ! Where should this project be displayed?
 * @param isOnHomePage - Is this project visible in the horizontal scrolling project section (home page)?
 * @param isOnWorkPage - Is this project visible in the work page?
 * ! Images displayed alongside this project
 * @param mockupImage - The mockup image that is associated with this project. Is displayed on the home page if @param isOnHomePage is true.
 * @param coverImage - The cover image shown on the project page and on the work page as a thumbnail.
 * ! General supporting information.
 * @param tags - List of [Tag] that describe what this project is about.
 * @param role - The role that was assumed for this project.
 * @param deliverables - The deliverables that are related to this project.
 */
class Project {
  constructor ({
    title = 'Project Title',
    missionStatement = 'A description of what this project was about.',
    description = 'A shortened mission statement.',
    projectId = 'project',
    projectNumber = '1',
    isOnHomePage = false,
    isOnWorkPage = false,
    mockupImage = 'assets/images/placeholder_mockup.png',
    coverImage = 'assets/images/placeholder_mockup.png',
    tags = [],
    role = 'Designer',
    deliverables = []

  }) {
    this.title = title
    this.missionStatement = missionStatement
    this.projectId = projectId
    this.description = description
    this.projectNumber = projectNumber

    this.isOnHomePage = isOnHomePage
    this.isOnWorkPage = isOnWorkPage

    this.mockupImage = mockupImage
    this.coverImage = coverImage

    this.tags = tags
    this.role = role
    this.deliverables = deliverables
  }
}

export default Project
