import Debugger from './debugger.js'
import Engine from './engine.js'
import PORTFOLIO_PROJECTS from '../data.js'
import MenuManager from '../classes/menu_manager.js'

/**
 * ProjectManager
 * This is used to manage the projects section of the homepage.
 * It adds the projects created within the javascript/data.js file with the `isOnHomePage` flag set to true
 * to the horizontal scrolling section of the homepage.
 */
class ProjectManager {
  constructor () {
    /// Retrieves the projects section and mask from the DOM
    this.projectsSection = document.getElementById('home_work_section')
    this.projectsMask = document.getElementById('home_work_section_mask')

    /// Gets the projects defined within javascript/data.js
    this.projects = PORTFOLIO_PROJECTS.filter((project) => project.isOnHomePage)

    /// The current project being viewed. This is updated later.
    this.currentProject = 0

    /// Initialize the size of the this.projectsSection and this.projectsMask.
    this.#setSectionAndMaskDimensions()

    /// Generate the DOM elements for each project.
    this.#generateProjects()
  }

  /**
   * #setSectionAndMaskDimensions()
   * This sets the size of the vertical & horizontal components of the
   * projects section.
   */
  #setSectionAndMaskDimensions () {
    this.projectsSection.style.height = `${(this.projects.length) * 100}vh`
    this.projectsMask.style.width = `${(this.projects.length) * 100}vw`
  }

  /**
   * #generateProjects()
   * This will generate the DOM elements for the projects area.
   */
  #generateProjects () {
    /// Loop through each project
    this.projects.forEach(project => {
      /// Define the project wrapper and give it some styling and identification
      const projectWrapper = document.createElement('div')
      projectWrapper.classList = ['project_wrapper']
      projectWrapper.id = project.projectId

      /// Generate the project information area
      this.#generateProjectInformation({ wrapper: projectWrapper, project })

      /// Generate the project image area (this is the stand and the mockup)
      this.#generateProjectImage({ wrapper: projectWrapper, project })

      /// Append the project and loop again
      this.projectsMask.appendChild(projectWrapper)

      /// Log any information needed to the console
      Debugger.logInfo(project.title)
    })
  }

  /**
   * #generateProjectInformation()
   * Used to generate the text area to the left of the image.
   */
  #generateProjectInformation ({ wrapper, project }) {
    const MENU_MANAGER = new MenuManager()
    /// The container that will hold all of this information
    const projectInformationWrapper = document.createElement('div')
    projectInformationWrapper.classList = ['project_information_wrapper']
    projectInformationWrapper.setAttribute('project', project.projectId)

    /// The project title and tag container
    const projectTagTitleWrapper = document.createElement('div')
    projectTagTitleWrapper.classList = ['project_tag_title_wrapper']

    /// The primary tag of the project
    const projectTag = document.createElement('h3')
    projectTag.textContent = project.tags[0]
    projectTag.classList = ['color-teal animate-title']
    projectTag.setAttribute('cursor-state', 'cursor-text')
    projectTag.setAttribute('cursor-color', 'cursor-brown')
    projectTag.setAttribute('cursor-default', true)
    projectTagTitleWrapper.appendChild(projectTag)

    /// The main project title (goes below the tag)
    const projectTitle = document.createElement('h1')
    projectTitle.textContent = project.title
    projectTitle.classList = ['animate-title']
    projectTitle.setAttribute('cursor-state', 'cursor-text')
    projectTitle.setAttribute('cursor-color', 'cursor-teal')
    projectTitle.setAttribute('cursor-default', true)
    projectTagTitleWrapper.appendChild(projectTitle)

    /// The project description goes here
    const projectDescription = document.createElement('p')
    projectDescription.setAttribute('cursor-state', 'cursor-text')
    projectDescription.setAttribute('cursor-color', 'cursor-teal')
    projectDescription.setAttribute('cursor-default', true)
    projectDescription.textContent = project.description
    projectDescription.classList = ['animate-paragraph']
    projectTagTitleWrapper.appendChild(projectDescription)

    /// The project button goes here
    const projectButtonWrapper = document.createElement('div')
    projectButtonWrapper.classList = ['button-wrapper']

    const projectButton = document.createElement('div')
    const projectButtonText = document.createElement('h3')
    projectButtonText.textContent = 'View Project'
    projectButtonText.classList = ['color-cream']
    projectButtonText.setAttribute('cursor-state', 'cursor-action')

    projectButton.classList = ['button-filled background-teal']
    projectButton.setAttribute('cursor-state', 'cursor-action')

    projectButton.appendChild(projectButtonText)
    projectButtonWrapper.appendChild(projectButton)
    projectButtonWrapper.onclick = function () { MENU_MANAGER.navTo(project.projectId, false) }
    /// Adding the contents to the projectInformationWrapper
    projectInformationWrapper.appendChild(projectTagTitleWrapper)
    projectInformationWrapper.appendChild(projectButtonWrapper)

    /// Adding the projectInformationWrapper to the project wrapper
    wrapper.appendChild(projectInformationWrapper)
  }

  /**
   * #generateProjectImage()
   * Used to generate the mockup and mockup "table"/block of the projects section.
   * @param wrapper - The wrapper element (project) that the image will be added to.
   * @param project - The project object that information will be extracted from
   */
  #generateProjectImage ({ wrapper, project }) {
    const projectMockupWrapper = document.createElement('div')
    projectMockupWrapper.classList = ['project_mockup_wrapper']

    /// The container that will hold the images
    const projectImageWrapper = document.createElement('div')
    projectImageWrapper.classList = ['project_image_wrapper']

    /// Setting attribute so that we can look at what project this image is for in the future.
    projectImageWrapper.setAttribute('project', project.projectId)

    /// Divs with background images are used. This one is for the wooden table/ block.
    const projectImageBlock = document.createElement('div')
    projectImageBlock.classList = ['project_image project_image_mockup_block']
    /// Setting the image of the block & appending to the image container
    projectImageBlock.style.backgroundImage = "url('assets/images/mockup_block.png')"
    projectImageWrapper.appendChild(projectImageBlock)

    /// Divs with background images are used. This one is for the actual mockup of the device.
    const projectImageMockup = document.createElement('div')
    projectImageMockup.classList = ['project_image project_image_mockup']
    projectImageMockup.setAttribute('cursor-state', 'cursor-hover')
    /// Setting the image to be the project mockup image. This is defined within the project class
    /// and is refered to here (New projects can be created in javascript/data.js).
    projectImageMockup.style.backgroundImage = `url(${project.mockupImage})`
    projectImageWrapper.appendChild(projectImageMockup)

    /// Append the now combined image set (both block and mockup) to the project container as a child.
    projectMockupWrapper.appendChild(projectImageWrapper)
    wrapper.appendChild(projectMockupWrapper)

    /// Add the event listener for the image to check if the user hovers over this image.
    /// This will trigger various visual actions on the frontend.
    projectImageWrapper.addEventListener(
      'mouseenter',
      (event) => {
        /// Lowers the opacity of the project background when you are viewing
        const projectId = event.target.getAttribute('project')

        /// The backgroundImageWrapper is a colored div that shifts in opacity to reveal the project cover image when
        /// the user hovers over a mockup or related. We are making this slightly transparent.
        const backgroundImageWrapper = document.getElementById('home_work_section_background_mask')
        backgroundImageWrapper.classList = ['home_work_section_background_mask_hover']

        /// Set the image background to be the cover image of the project.
        /// ! THE PROJECTS COVER MUST FOLLOW THE FOLLOWING FORMAT  (x = projectId):
        /// assets/images/x_cover.jpg
        const imageBackground = document.getElementById('home_work_section_background')
        imageBackground.style.backgroundImage = `url('assets/images/${projectId}_cover.jpg')`

        /// Grab the image mockup and table/ block elements within the event target.
        /// This selector will grab all DOM elements matching the query within the parent.
        const imageMockup = event.target.querySelector('.project_image_mockup')
        const imageBlock = event.target.querySelector('.project_image_mockup_block')

        /// Update the class list to include hovering for these elements
        imageMockup.classList = ['project_image project_image_mockup project_image_mockup_hovering']
        imageBlock.classList = ['project_image project_image_mockup_block project_image_mockup_block_hovering']
      },
      false
    )

    /// Add the event listener for the image to check if the user is no longer hovering over this image.
    /// This will trigger various visual actions on the frontend.
    projectImageWrapper.addEventListener(
      'mouseleave',
      (event) => {
        /// The backgroundImageWrapper is a colored div that shifts in opacity to reveal the project cover image when
        /// the user hovers over a mockup or related. We are making this opaque.
        const backgroundImageWrapper = document.getElementById('home_work_section_background_mask')
        backgroundImageWrapper.classList = ['home_work_section_background_mask_idle']

        /// Grab the image mockup and table/ block elements within the event target.
        /// This selector will grab all DOM elements matching the query within the parent.
        const imageMockup = event.target.querySelector('.project_image_mockup')
        const imageBlock = event.target.querySelector('.project_image_mockup_block')

        /// Reset them to no longer have the hover animation/ effects.
        imageMockup.classList = ['project_image project_image_mockup project_image_mockup_idle']
        imageBlock.classList = ['project_image project_image_mockup_block project_image_mockup_block_idle']
      },
      false
    )
  }

  /**
   * adjustProjectsMaskPosition()
   * This should be invoked on scroll and translates the vertical scrolling of the this.projectsSection into
   * horizontal translation of the this.projectsMask section.
   */
  adjustProjectsMaskPosition () {
    /// Gets the current width value of the project mask (in pixels)
    const projectsMaskWidth = this.projectsMask.clientWidth

    /// The width of an individual projects. These are evenly spaced across the mask.
    const projectWidth = projectsMaskWidth / this.projects.length

    /// The height of the hidden scrolling page that is used to track scroll amount and give the illusion of horizontal scroll.
    const projectsSectionHeight = this.projectsSection.clientHeight

    /// The distance the project section is from the top of the page.
    /// If this number is > 0 then the user has not yet scrolled to the projects section.
    /// If this number is < 0 but > (-1 * projectsSectionHeight) then the user is currently within the projects section.
    /// If this number is < (-1 * projectsSectionHeight) then the user has scroll past the projects section.
    const projectSectionDistanceFromTop = Engine.getDistanceFromTopOfScreenById({ id: this.projectsSection.id })

    /// Above the projects section (reset the slider to make sure its never offset)
    if (projectSectionDistanceFromTop > 0) {
      this.projectsMask.style.transform = 'translate(0vw, 0vh)'
      Debugger.logMovement('Above Project Section')
      this.currentProject = 0
    }

    /// Inside the work section (Calculate the scroll -> translation amount)
    if (projectSectionDistanceFromTop < 0 && projectSectionDistanceFromTop > (projectsSectionHeight * -1)) {
      /// The percent that has been scrolled of the projectsSectionHeight.
      /// 0 = hasnt started.
      /// 1 = has completely scrolled through.
      const scrollPercent = Math.abs(projectSectionDistanceFromTop) / Math.abs(projectsSectionHeight)
      /// The amount of pixels to slide the horizontal element to the left.
      const scrollAmount = Math.min(projectsMaskWidth - projectWidth, (projectsMaskWidth) * scrollPercent)

      /// Do the transformation
      this.projectsMask.style.transform = `translate(-${(scrollAmount)}px, 0vh)`
      this.currentProject = Math.floor(this.projects.length * scrollPercent)
      Debugger.logMovement('Inside Project Section')
    }

    /// Below the work section (set the slider to its maximum extent to make sure its never offset)
    if (projectSectionDistanceFromTop < (projectsSectionHeight * -1)) {
      this.projectsMask.style.transform = `translate(-${this.projects.length * 100}vw, 0vh)`
      Debugger.logMovement('Below Project Section')
      this.currentProject = this.projects.length - 1
    }
  }
}

export default ProjectManager
