import Engine from './engine.js'
import { CursorColor, CursorState } from './cursor_state.js'

class MouseManager {
  constructor () {
    this.cursor = document.getElementById('cursor')
    this.cursorX = 0.0
    this.cursorY = 0.0

    this.cursorLightColor = getComputedStyle(document.documentElement).getPropertyValue('--branding-color-cream-50')
    this.cursorDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--branding-color-teal-50')
    this.cursorColorColor = getComputedStyle(document.documentElement).getPropertyValue('--branding-color-coral-50')
  }

  updateCursor (event) {
    /// Update the cursor position
    try {
      this.cursorX = event.pageX
      this.cursorY = event.pageY
    } catch (e) {}
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    this.cursor.style.transform = `translate(${this.cursorX - scrollLeft - 8}px, ${this.cursorY - scrollTop - 8}px)`

    /// See what item to cursor is currently hovering over
    const elementsUnderCursor = document.elementsFromPoint(Engine.mouseX, Engine.mouseY)
    const elementUnderCursor = elementsUnderCursor[0]
    let parentElementUnderCursor = elementsUnderCursor.find(function (element) {
      return (element.getAttribute('cursor-default') === 'true')
    })

    if (parentElementUnderCursor === null || parentElementUnderCursor === undefined) {
      parentElementUnderCursor = document.getElementById('cursor_global_default')
    }

    let cursorColorString
    let cursorStateString
    try{
      if (elementUnderCursor.getAttribute('cursor-color') === null) {
        cursorColorString = parentElementUnderCursor.getAttribute('cursor-color')
      } else {
        cursorColorString = elementUnderCursor.getAttribute('cursor-color')
      }

      if (elementUnderCursor.getAttribute('cursor-state') === null) {
        cursorStateString = parentElementUnderCursor.getAttribute('cursor-state')
      } else {
        cursorStateString = elementUnderCursor.getAttribute('cursor-state')
      }

      if (cursorColorString !== null) {
        const cursorColor = this.#convertCursorColorStringToEnum(cursorColorString)
        this.#setCursorColor(cursorColor)
      }

      if (cursorStateString !== null) {
        const cursorState = this.#convertCursorStateStringToEnum(cursorStateString)
        this.#setCursorState(cursorState)
      }
    } catch (e) {}
  }

  #setCursorState (cursorState, target) {
    switch (cursorState) {
      case CursorState.Default:
        this.cursor.classList = ['cursor-default']
        break
      case CursorState.Text:
        this.cursor.classList = ['cursor-text']
        break
      case CursorState.Hover:
        this.cursor.classList = ['cursor-hover']
        break
      case CursorState.Action:
        this.cursor.classList = ['cursor-action']
        break
      default:
        this.cursor.classList = ['cursor-default']
    }
  }

  #setCursorColor (cursorColor) {
    switch (cursorColor) {
      case CursorColor.Light:
        this.cursor.style.backgroundColor = `${this.cursorLightColor}`
        this.cursor.style.color = `${this.cursorLightColor}`

        break
      case CursorColor.Dark:
        this.cursor.style.backgroundColor = `${this.cursorDarkColor}`
        this.cursor.style.color = `${this.cursorDarkColor}`
        break
      case CursorColor.Color:
        this.cursor.style.backgroundColor = `${this.cursorColorColor}`
        this.cursor.style.color = `${this.cursorColorColor}`
        break
      default:
        this.cursor.style.backgroundColor = `${this.cursorLightColor}`
    }
  }

  #convertCursorStateStringToEnum (styleString) {
    switch (styleString) {
      case 'cursor-default':
        return CursorState.Default
      case 'cursor-action':
        return CursorState.Action
      case 'cursor-hover':
        return CursorState.Hover
      case 'cursor-text':
        return CursorState.Text
      default:
        return CursorState.Default
    }
  }

  #convertCursorColorStringToEnum (colorString) {
    switch (colorString) {
      case 'cursor-cream':
        return CursorColor.Light
      case 'cursor-teal':
        return CursorColor.Dark
      case 'cursor-brown':
        return CursorColor.Color
      default:
        return CursorColor.Light
    }
  }
}

export default MouseManager
