class LandingManager {
  constructor () {
    /// Used to detect when certain aspects of the animation should be completed.
    this.animationSpacer0 = document.getElementById('home_landing_section_spacer_0')
    this.animationSpacer1 = document.getElementById('home_landing_section_spacer_1')
    this.animationSpacer2 = document.getElementById('home_landing_section_spacer_2')
    this.animationSpacer3 = document.getElementById('home_landing_section_spacer_3')

    this.elementStartingY = this.animationSpacer0.hei
  }
}

export default LandingManager
