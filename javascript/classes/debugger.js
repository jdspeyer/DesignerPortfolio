class Debugger {
  /// Should the debugger log items to the console?
  static shouldLog = true
  static shouldLogMovement = false

  /**
   * Logs value to the console with some styling.
   * @param value - Some value to print to the console
   */
  static logError (value) {
    if (Debugger.shouldLog) {
      console.log(`❌%c${value}`, 'color: red;')
    }
  }

  /**
   * Logs value to the console with some styling.
   * @param value - Some value to print to the console
   */
  static logInfo (value) {
    if (Debugger.shouldLog) {
      console.log(`ℹ️%c${value}`, 'color: blue;')
    }
  }

  /**
   * Logs movement based events. Can get repetetive.
   * @param value - Some value to print to the console
   */
  static logMovement (value) {
    if (Debugger.shouldLogMovement) {
      console.log(`%c${value}`, 'color: white;')
    }
  }

  /**
   * Logs the value to the console in a raw state.
   * @param value - Some value to print to the console
   */
  static logRaw (value) {
    if (Debugger.shouldLog) {
      console.log(value)
    }
  }
}

export default Debugger
