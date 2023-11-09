/// Title animations

const allTitleAnimations = document.querySelectorAll('.animate-title')

allTitleAnimations.forEach(title => {
  const titleAnimation = new SplitText(title, { type: 'words' })
  const titleChars = titleAnimation.words

  gsap.from(titleChars, {
    yPercent: 130,
    opacity: 0,
    stagger: 0.01,
    duration: 0.6,
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
      markers: false
    }
  })
})

/// Paragraph Animations
const allParagraphAnimations = document.querySelectorAll('.animate-paragraph')
allParagraphAnimations.forEach(paragraph => {
  const paragraphAnimation = new SplitText(paragraph, { type: 'words' })
  const paragraphLines = paragraphAnimation.words

  gsap.from(paragraphLines, {
    yPercent: 130,
    opacity: 0,
    stagger: 0.02,
    duration: 0.5,
    delay: 0.1,
    scrollTrigger: {
      trigger: paragraph,
      start: 'top 100%',
      markers: false
    }
  })
})

/// Generic Object Animations
const allObjectAnimations = document.querySelectorAll('.animate-object')
allObjectAnimations.forEach(object => {
  gsap.from(object, {
    xPercent: 130,
    opacity: 0,
    stagger: 0.01,
    duration: 0.5,
    delay: 0.1,
    ease: 'back.out',
    scrollTrigger: {
      trigger: object,
      start: 'top 100%',
      markers: false
    }
  })
})

const allSvgAnimations = document.querySelectorAll('.animate-svg-path')
allSvgAnimations.forEach(object => {
  gsap.from(object, {
    duration: 3,
    drawSVG: 0,
    stagger: 1,
    ease: 'back.out',
    scrollTrigger: {
      trigger: object,
      start: 'top 100%',
      markers: false
    }
  })
})

const allObjectUpAnimations = document.querySelectorAll('.animate-object-up')
allObjectUpAnimations.forEach(object => {
  gsap.from(object, {
    yPercent: 130,
    opacity: 0,
    stagger: 0.01,
    duration: 0.5,
    delay: 0.0,
    scrollTrigger: {
      trigger: object,
      start: 'top 120%',
      markers: false
    }
  })
})
