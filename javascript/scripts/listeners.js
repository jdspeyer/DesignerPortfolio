import Engine from '../classes/engine.js'
import ProjectManager from '../classes/project_manager.js'
import MouseManager from '../classes/mouse_manager.js'
import MarqueeManager from '../classes/marquee_manager.js'
import AboutManager from '../classes/about_manager.js'
import MenuManager from '../classes/menu_manager.js'
/**
 * There are no class definitions in this script, it is intended to be the entry point/ logic flow of the
 * website. This will run when the file is imported into the .HTML file.
 */

const PROJECT_MANAGER = new ProjectManager()
const MOUSE_MANAGER = new MouseManager()
const MARQUEE_MANAGER = new MarqueeManager()
const ABOUT_MANAGER = new AboutManager()
const MENU_MANAGER = new MenuManager()
document.getElementById('menu_overlay').onclick = MENU_MANAGER.openMenu
document.getElementById('menu_overlay_exit').onclick = MENU_MANAGER.closeMenu
document.getElementById('index_menu_item').onclick = function () { MENU_MANAGER.navTo('index_menu_item', true) }
document.getElementById('portfolio_menu_item').onclick = function () { MENU_MANAGER.navTo('portfolio_menu_item', true) }
document.getElementById('all_projects').onclick = function () { MENU_MANAGER.navTo('portfolio_menu_item', false) }
document.getElementById('all_projects_button').onclick = function () { MENU_MANAGER.navTo('portfolio_menu_item', false) }

if (Engine.isTouchDevice()) {
  document.getElementById('model').classList.add('ignore_input')
}

/// Initialize the Engine.
Engine.setScreenDimensions({
  screenHeight: window.outerHeight,
  screenWidth: window.outerWidth,
  innerWindowHeight: window.innerHeight,
  innerWindowWidth: window.innerWidth
})

if (window.innerWidth < 500) {
  const el = document.getElementById('all_projects')
  el.innerHTML = 'More ➜'
} else {
  const el = document.getElementById('all_projects')
  el.innerHTML = 'See All Projects ➜'
}

/// Create a listener for mouse movement and update the Engine.
document.addEventListener('mousemove', trackMousePosition)
function trackMousePosition (event) {
  Engine.setMousePosition({ mouseX: event.clientX, mouseY: event.clientY })
  MOUSE_MANAGER.updateCursor(event)
  ABOUT_MANAGER.adjustEyePosition()
}

/// Create a listener for window resize and update the Engine.
window.addEventListener('resize', trackWindowSize)
function trackWindowSize (event) {
  /// Update the window size within the Engine to reflect the users current browser window size.
  Engine.setScreenDimensions({
    screenHeight: window.outerHeight,
    screenWidth: window.outerWidth,
    innerWindowHeight: window.innerHeight,
    innerWindowWidth: window.innerWidth
  })

  if (window.innerWidth < 500) {
    const el = document.getElementById('all_projects')
    el.innerHTML = 'More ➜'
  } else {
    const el = document.getElementById('all_projects')
    el.innerHTML = 'See All Projects ➜'
  }
}

/// Create a listener for when the user scrolls down the page.
window.addEventListener('scroll', function (event) {
  PROJECT_MANAGER.adjustProjectsMaskPosition()
  MOUSE_MANAGER.updateCursor(event)
  MARQUEE_MANAGER.scrollMarquee(event)
  MENU_MANAGER.adjustPositionOnScroll(event)
  Engine.updateScrollValue(event)
})
