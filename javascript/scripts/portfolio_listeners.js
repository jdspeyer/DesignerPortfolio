import Engine from '../classes/engine.js'
import MouseManager from '../classes/mouse_manager.js'
import MenuManager from '../classes/menu_manager.js'
import PortfolioManager from '../classes/portfolio_manager.js'
/**
 * There are no class definitions in this script, it is intended to be the entry point/ logic flow of the
 * website. This will run when the file is imported into the .HTML file.
 */

const MOUSE_MANAGER = new MouseManager()
const MENU_MANAGER = new MenuManager()
const PORTFOLIO_MANAGER = new PortfolioManager()
document.getElementById('menu_overlay').onclick = MENU_MANAGER.openMenu
document.getElementById('menu_overlay_exit').onclick = MENU_MANAGER.closeMenu
document.getElementById('index_menu_item').onclick = function () { MENU_MANAGER.navTo('index_menu_item', true) }
document.getElementById('portfolio_menu_item').onclick = function () { MENU_MANAGER.navTo('portfolio_menu_item', true) }

/// Initialize the Engine.
Engine.setScreenDimensions({
  screenHeight: window.outerHeight,
  screenWidth: window.outerWidth,
  innerWindowHeight: window.innerHeight,
  innerWindowWidth: window.innerWidth
})

/// Create a listener for mouse movement and update the Engine.
document.addEventListener('mousemove', trackMousePosition)
function trackMousePosition (event) {
  Engine.setMousePosition({ mouseX: event.clientX, mouseY: event.clientY })
  MOUSE_MANAGER.updateCursor(event)
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
}

/// Create a listener for when the user scrolls down the page.
window.addEventListener('scroll', function (event) {
  MOUSE_MANAGER.updateCursor(event)
  Engine.updateScrollValue(event)
})
