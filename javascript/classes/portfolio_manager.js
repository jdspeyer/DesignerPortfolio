import PORTFOLIO_PROJECTS from '../data.js'

class PortfolioManager {
  constructor () {
    this.portfolioItemsWrapper = document.getElementById('portfolio_items')
    this.projects = PORTFOLIO_PROJECTS.filter((project) => project.isOnWorkPage)
    this.projectsPerRow = 2
    this.generatePortfolio()
  }

  generatePortfolio () {
    this.portfolioItemsWrapper = document.getElementById('portfolio_items')
    const numberRows = Math.ceil(this.projects.length / this.projectsPerRow)

    /// For each row
    for (let i = 0; i < numberRows; i++) {
      const startingIndex = this.projectsPerRow * i
      const endingIndex = Math.min(this.projects.length, startingIndex + this.projectsPerRow)

      const rowWrapper = document.createElement('div')
      rowWrapper.classList = ['project_row']
      /// For each project in said row
      for (let y = startingIndex; y < endingIndex; y++) {
        const project = this.projects[y]
        rowWrapper.appendChild(this.#generatePortfolioProject(project))
      }

      /// Append the row to the page
      this.portfolioItemsWrapper.appendChild(rowWrapper)
    }
  }

  #generatePortfolioProject (project) {
    const portfolioProject = document.createElement('div')
    portfolioProject.classList = ['portfolio_wrapper animate-object-up']

    portfolioProject.appendChild(this.#generateProjectImage(project))
    portfolioProject.appendChild(this.#generateProjectDetails(project))
    return portfolioProject
  }

  #generateProjectImage (project) {
    const portfolioProjectImage = document.createElement('div')
    portfolioProjectImage.classList = ['porfolio_project_image']
    portfolioProjectImage.style.backgroundImage = `url('../${project.coverImage}')`

    const portfolioProjectHoverWrapper = document.createElement('div')
    portfolioProjectHoverWrapper.setAttribute('cursor-state', 'cursor-hover')
    portfolioProjectHoverWrapper.setAttribute('cursor-color', 'cursor-teal')
    portfolioProjectHoverWrapper.setAttribute('cursor-default', true)
    portfolioProjectHoverWrapper.classList = ['portfolio_hover_wrapper']

    const hoverBackground = document.createElement('div')
    const hoverText = document.createElement('h1')
    hoverText.innerHTML = 'Read ➜'
    portfolioProjectHoverWrapper.appendChild(hoverText)
    portfolioProjectHoverWrapper.appendChild(hoverBackground)

    portfolioProjectImage.appendChild(portfolioProjectHoverWrapper)

    return portfolioProjectImage
  }

  #generateProjectDetails (project) {
    const portfolioProjectDetails = document.createElement('div')
    portfolioProjectDetails.classList = ['porfolio_project_details']
    portfolioProjectDetails.appendChild(this.#generateProjectDetailsHeader(project))
    portfolioProjectDetails.appendChild(this.#generateProjectTags(project))

    return portfolioProjectDetails
  }

  #generateProjectDetailsHeader (project) {
    const portfolioProjectDetailsHeader = document.createElement('div')
    portfolioProjectDetailsHeader.classList = ['porfolio_project_details_header']

    const title = document.createElement('h3')
    title.setAttribute('cursor-state', 'cursor-text')
    title.setAttribute('cursor-color', 'cursor-teal')
    title.setAttribute('cursor-default', true)
    title.innerHTML = project.title

    const number = document.createElement('p')
    number.setAttribute('cursor-state', 'cursor-text')
    number.setAttribute('cursor-color', 'cursor-teal')
    number.setAttribute('cursor-default', true)
    number.innerHTML = project.projectNumber

    portfolioProjectDetailsHeader.appendChild(title)
    portfolioProjectDetailsHeader.appendChild(number)

    return portfolioProjectDetailsHeader
  }

  #generateProjectTags (project) {
    const portfolioProjectDetailsTags = document.createElement('div')
    portfolioProjectDetailsTags.classList = ['porfolio_project_details_tags']

    project.tags.forEach(tag => {
      portfolioProjectDetailsTags.appendChild(this.#generateProjectTag(tag))
    })

    return portfolioProjectDetailsTags
  }

  #generateProjectTag (tag) {
    const portfolioProjectDetailsTag = document.createElement('div')

    const tagText = document.createElement('p')
    tagText.innerHTML = tag

    portfolioProjectDetailsTag.appendChild(tagText)
    portfolioProjectDetailsTag.classList = ['project_details_tag']

    if (tag.toLowerCase().includes('award')) {
      portfolioProjectDetailsTag.classList = ['project_details_tag award_tag']
    }

    if (tag.toLowerCase().includes('campaign')) {
      portfolioProjectDetailsTag.classList = ['project_details_tag campaign_tag']
    }

    if (tag.toLowerCase().includes('product')) {
      portfolioProjectDetailsTag.classList = ['project_details_tag product_tag']
    }

    if (tag.toLowerCase().includes('branding')) {
      portfolioProjectDetailsTag.classList = ['project_details_tag branding_tag']
    }

    if (tag.toLowerCase().includes('paper')) {
      portfolioProjectDetailsTag.classList = ['project_details_tag paper_tag']
    }

    if (tag.toLowerCase().includes('vfx')) {
      portfolioProjectDetailsTag.classList = ['project_details_tag vfx_tag']
    }

    if (tag.toLowerCase().includes('ux')) {
      portfolioProjectDetailsTag.classList = ['project_details_tag ux_tag']
    }
    return portfolioProjectDetailsTag
  }
}

export default PortfolioManager
