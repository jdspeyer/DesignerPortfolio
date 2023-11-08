import Engine from './engine.js'
import Debugger from './debugger.js'

class AboutManager {
  constructor () {
    this.aboutSection = document.getElementById('home_about_section')

    this.aboutSkillsSection = document.getElementById('home_about_skills_section_content')
    this.startingTranslation = this.aboutSkillsSection.clientHeight

    this.skill1 = document.getElementById('skill1')
    this.skill2 = document.getElementById('skill2')
    this.skill3 = document.getElementById('skill3')

    this.skill1SpeedModifier = 2.5
    this.skill2SpeedModifier = 2.0
    this.skill3SpeedModifier = 1.5

    this.aboutPersonalSection = document.getElementById('home_about_personal_section')
    this.personalStartingTranslation = this.aboutPersonalSection.clientHeight

    this.personalTitle0 = document.getElementById('home_about_personal_section_header_0')
    this.personalTitle1 = document.getElementById('home_about_personal_section_header_1')
    this.personalParagraph = document.getElementById('home_about_personal_section_paragraph')

    this.portraitEyes = document.getElementById('home_about_personal_section_image_portrait_coin_peep_eyes')

    this.contactMeButton = document.getElementById('home_about_personal_section_information_contact_button')
    this.contactMeButton.addEventListener('mouseenter', this.unFlipProfileImage)
    this.contactMeButton.addEventListener('mouseleave', this.flipProfileImage)

    this.maxTrackingRadius = Math.max(window.innerWidth, window.innerHeight)
  }

  adjustSkillPositions () {
    const aboutSkillsSectionHeight = this.aboutSkillsSection.clientHeight
    /// The distance the skills section is from the top of the page.
    /// If this number is > 0 then the user has not yet scrolled to the skills section.
    /// If this number is < 0 but > (-1 * projectsSectionHeight) then the user is currently within the skills section.
    /// If this number is < (-1 * projectsSectionHeight) then the user has scroll past the skills section.
    const aboutSkillsSectionDistanceFromTop = Engine.getDistanceFromTopOfScreenById({ id: this.aboutSkillsSection.id }) - aboutSkillsSectionHeight * 1.3

    if (aboutSkillsSectionDistanceFromTop > 0) {
      this.skill1.style.transform = `translate(0px, ${(this.startingTranslation)}px)`
      this.skill2.style.transform = `translate(0px, ${(this.startingTranslation)}px)`
      this.skill3.style.transform = `translate(0px, ${(this.startingTranslation)}px)`
      Debugger.logMovement('Above Project Section')
    }

    if (aboutSkillsSectionDistanceFromTop < 0 && aboutSkillsSectionDistanceFromTop > (aboutSkillsSectionHeight * -1)) {
      const scrollPercent = Math.abs(aboutSkillsSectionDistanceFromTop) / Math.abs(aboutSkillsSectionHeight)
      const adjustmentSkill1Amount = Math.max(0, (this.startingTranslation - ((this.startingTranslation * this.skill1SpeedModifier) * scrollPercent)))
      const adjustmentSkill2Amount = Math.max(0, (this.startingTranslation - ((this.startingTranslation * this.skill2SpeedModifier) * scrollPercent)))
      const adjustmentSkill3Amount = Math.max(0, (this.startingTranslation - ((this.startingTranslation * this.skill3SpeedModifier) * scrollPercent)))
      this.skill1.style.transform = `translate(0px, ${(adjustmentSkill1Amount)}px)`
      this.skill1.style.opacity = scrollPercent

      this.skill2.style.transform = `translate(0px, ${(adjustmentSkill2Amount)}px)`
      this.skill2.style.opacity = scrollPercent

      this.skill3.style.transform = `translate(0px, ${(adjustmentSkill3Amount)}px)`
      this.skill3.style.opacity = scrollPercent
    }
  }

  adjustPersonalPositions () {
    const aboutPersonalSectionHeight = this.aboutPersonalSection.clientHeight
    const aboutPersonalSectionDistanceFromTop = Engine.getDistanceFromTopOfScreenById({ id: this.aboutPersonalSection.id }) - aboutPersonalSectionHeight * 1.3

    if (aboutPersonalSectionDistanceFromTop > 0) {
      this.personalTitle0.style.transform = `translate(0px, ${(this.personalStartingTranslation)}px)`
      this.personalTitle1.style.transform = `translate(0px, ${(this.personalStartingTranslation)}px)`
      this.personalParagraph.style.transform = `translate(0px, ${(this.personalStartingTranslation)}px)`
    }

    if (aboutPersonalSectionDistanceFromTop < 0 && aboutPersonalSectionDistanceFromTop > (aboutPersonalSectionHeight * -1)) {
      const scrollPercent = Math.abs(aboutPersonalSectionDistanceFromTop) / Math.abs(aboutPersonalSectionHeight)
      const adjustmentTitle0Amount = Math.max(0, (this.personalStartingTranslation - ((this.personalStartingTranslation * this.skill1SpeedModifier) * scrollPercent)))
      const adjustmentTitle1Amount = Math.max(0, (this.personalStartingTranslation - ((this.personalStartingTranslation * this.skill2SpeedModifier) * scrollPercent)))
      const adjustmentParagraphAmount = Math.max(0, (this.personalStartingTranslation - ((this.personalStartingTranslation * this.skill3SpeedModifier) * scrollPercent)))

      this.personalTitle0.style.transform = `translate(0px, ${(adjustmentTitle0Amount)}px)`
      this.personalTitle0.style.opacity = scrollPercent

      this.personalTitle1.style.transform = `translate(0px, ${(adjustmentTitle1Amount)}px)`
      this.personalTitle1.style.opacity = scrollPercent

      this.personalParagraph.style.transform = `translate(0px, ${(adjustmentParagraphAmount)}px)`
      this.personalParagraph.style.opacity = scrollPercent
    }
  }

  adjustEyePosition () {
    const aboutSectionHeight = this.aboutSection.clientHeight
    const aboutSectionDistanceFromTop = Engine.getDistanceFromTopOfScreenById({ id: this.aboutSection.id })

    /// Current cursor position
    const cursorX = Engine.mouseX
    const cursorY = Engine.mouseY

    /// Updated shift amount to track mouse in x,y
    let shiftXAmount = 0
    let shiftYAmount = 0

    /// The bounding location of the eyes (x,y is the center)
    const eyeBoundingBox = this.portraitEyes.getBoundingClientRect()
    const eyeBoundingBoxCenterX = (eyeBoundingBox.left + eyeBoundingBox.right) / 2
    const eyeBoundingBoxCenterY = (eyeBoundingBox.top + eyeBoundingBox.bottom) / 2

    const relativeCursorX = eyeBoundingBoxCenterX - cursorX
    const relativeCursorY = eyeBoundingBoxCenterY - cursorY

    if (!(relativeCursorX > this.maxTrackingRadius || relativeCursorX < -1 * this.maxTrackingRadius) && !(relativeCursorY > this.maxTrackingRadius || relativeCursorY < -1 * this.maxTrackingRadius)) {
      shiftXAmount = -1.2 * (relativeCursorX / this.maxTrackingRadius)
      shiftYAmount = -1.5 * (relativeCursorY / this.maxTrackingRadius)

      if (shiftYAmount + 50 > 50) {
        shiftYAmount *= 1.3
      }
    }
    this.portraitEyes.style.top = `${(50 + shiftYAmount)}%`
    this.portraitEyes.style.left = `${(50 + shiftXAmount)}%`
  }

  flipProfileImage () {
    const profileImagePeep = document.getElementById('home_about_personal_section_image_portrait_coin_peep')
    const profileImagePhoto = document.getElementById('home_about_personal_section_image_portrait_coin_photo')
    profileImagePeep.classList = ['not-flipped']
    profileImagePhoto.classList = ['flipped']
  }

  unFlipProfileImage () {
    const profileImagePeep = document.getElementById('home_about_personal_section_image_portrait_coin_peep')
    const profileImagePhoto = document.getElementById('home_about_personal_section_image_portrait_coin_photo')
    profileImagePeep.classList = ['flipped']
    profileImagePhoto.classList = ['not-flipped']
  }
}

export default AboutManager
