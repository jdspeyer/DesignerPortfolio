import PORTFOLIO_PROJECTS from '../data.js'
import ArticleManager from '../classes/article_manager.js'

/// 1. Lets see what information should be populated on this page
const documentBody = document.body
const projectId = documentBody.getAttribute('projectId')
const articleContainer = document.getElementById('project_content')
let projectOnPage

PORTFOLIO_PROJECTS.forEach(project => {
  if (project.projectId === projectId) {
    projectOnPage = project
  }
})

/// 2. Generate the header section of the page
/// Title
const titleElement = document.getElementById('project_title')
titleElement.innerHTML = projectOnPage.title

/// Cover Image
const coverElement = document.getElementById('project_cover_image_display')
coverElement.style.backgroundImage = `url(../../${projectOnPage.coverImage})`

/// Description
const descriptionElement = document.getElementById('project_description_text')
descriptionElement.innerHTML = projectOnPage.missionStatement

/// Deliverables
const deliverablesElement = document.getElementById('project_deliverables_text')
projectOnPage.deliverables.forEach(deliverable => {
  const deliverableText = document.createElement('p')
  deliverableText.innerHTML = deliverable
  deliverablesElement.appendChild(deliverableText)
})

/// Roles
const rolesElement = document.getElementById('project_roles_text')
rolesElement.innerHTML = projectOnPage.role

/// Project Link
const projectLinkElement = document.getElementById('project_projectlink_link')
projectLinkElement.href = projectOnPage.projectLink
const projectLinkTextElement = document.getElementById('project_projectlink_text')
projectLinkTextElement.innerHTML = projectOnPage.projectLinkText

/// 3. Now we need to go through that projects page content and generate this page
articleContainer.appendChild(ArticleManager.generateArticleList(projectOnPage.articles))
