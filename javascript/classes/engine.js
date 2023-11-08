import Debugger from './debugger.js'

/**
 * Engine Class
 * Static helper class used to update variables throughout the website
 */
class Engine {
  static screenHeight = 0.0
  static screenWidth = 0.0
  static innerWindowHeight = 0.0
  static innerWindowWidth = 0.0
  static mouseX = 0.0
  static mouseY = 0.0
  static scrollY = 0

  /**
   * setScreenDimensions
   * @param screenHeight - the height of the screen
   * @param screenWidth - the width of the screen
   * @param innerWindowHeight - the height of the inner window (this is the actual website excluding browser size).
   * @param innerWindowWidth - the width of the inner window.
   */
  static setScreenDimensions ({ screenHeight = 0.0, screenWidth = 0.0, innerWindowHeight = 0.0, innerWindowWidth = 0.0 }) {
    // Update content
    Engine.screenHeight = screenHeight
    Engine.screenWidth = screenWidth
    Engine.innerWindowHeight = innerWindowHeight
    Engine.innerWindowWidth = innerWindowWidth
    // Log output
    Debugger.logMovement(`Outer Screen Height (^, >): ${Engine.screenHeight}, ${Engine.screenWidth}`)
    Debugger.logMovement(`Inner Screen Height (^, >): ${Engine.screenHeight}, ${Engine.screenWidth}`)
  }

  /**
   * setMousePosition
   * @param mouseX - The x position of the mouse
   * @param mouseY - The y position of the mouse
   */
  static setMousePosition ({ mouseX = 0.0, mouseY = 0.0 }) {
    // Update content
    Engine.mouseX = mouseX
    Engine.mouseY = mouseY
    // Log output
    Debugger.logMovement(`Mouse Position (x, y): ${Engine.mouseX}, ${Engine.mouseY}`)
  }

  static getDistanceFromTopOfScreenById ({ id = '' }) {
    // Get the element based on the passed id and get bounding rect
    const element = document.getElementById(id)
    const rect = element.getBoundingClientRect()
    // Log and return
    Debugger.logMovement(rect.top)
    return rect.top
  }

  static calculateHeightToWidthRatioOffset ({ height = 0, width = 0, value = 0 }) {
    if (height > width) {
      return value / (width / height)
    }

    return value / (height / width)
  }

  static isTouchDevice () {
    try {
      // We try to create TouchEvent. It would fail for desktops and throw error
      document.createEvent('TouchEvent')
      return true
    } catch (e) {
      return false
    }
  }

  static updateScrollValue (event) {
    this.scrollY = window.scrollY
  }

  static didScrollDown (event) {
    return !(this.scrollY > window.scrollY)
  }
}

export default Engine
