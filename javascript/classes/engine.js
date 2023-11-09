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

  static updateScrollValue (event) {
    this.scrollY = window.scrollY
  }

  static didScrollDown (event) {
    return !(this.scrollY > window.scrollY)
  }

  static isTouchDevice () {
    let finePointer = false
    let canHover = true
    let canPoint = true

    /// We know with 100% certainty that there is a mouse of some sort attached to this item
    if (window.matchMedia('(pointer: fine)').matches) {
      finePointer = true
    }

    /// There is no way for them to hover - (Mobile)
    if (window.matchMedia('(any-hover: none)').matches) {
      canHover = false
    }

    /// There is no way for them
    if (window.matchMedia('(pointer: none)').matches) {
      canPoint = false
    }

    if (window.matchMedia('(pointer: coarse)').matches) {
      finePointer = false
    }

    console.log(finePointer)
    console.log(canHover)
    console.log(canPoint)
    console.log('--------')

    /* The primary input mechanism of the
    device does not include a pointing device. */
    if (!canPoint) {
      return true
    }

    /// We have a fine pointer and we can hover...
    /// More than likely we have a mouse or something
    if (finePointer && canHover) {
      return false
    }

    if (canHover) {
      return false
    }

    return true

    // return (('ontouchstart' in window) ||
    //    (navigator.maxTouchPoints > 0) ||
    //    (navigator.msMaxTouchPoints > 0))
  }
}

export default Engine
