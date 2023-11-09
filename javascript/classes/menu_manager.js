import Engine from './engine.js'

class MenuManager {
  constructor () {
    this.menu = document.getElementById('menu')
    this.menuOverlay = document.getElementById('menu_overlay')
    this.menuOpen = false
    this.isAnimating = false
  }

  adjustPositionOnScroll (event) {
    const projectsSection = document.getElementById('home_work_section')
    const projectsSectionHeight = projectsSection.clientHeight

    const aboutSection = document.getElementById('home_about_section')
    const aboutSectionHeight = aboutSection.clientHeight

    const projectSectionDistanceFromTop = Engine.getDistanceFromTopOfScreenById({ id: projectsSection.id })
    const aboutSectionDistanceFromTop = Engine.getDistanceFromTopOfScreenById({ id: aboutSection.id })

    let menuOnTop = true
    let menuColorDark = true

    let insideWorkSection = false
    let insideAboutSection = false

    /// THIS IS FOR THE POSITION CHANGING
    /// Above the project section
    if (projectSectionDistanceFromTop > 0) {
      insideWorkSection = false
    } else if (projectSectionDistanceFromTop < 0 && projectSectionDistanceFromTop > (projectsSectionHeight * -1)) {
      insideWorkSection = true
    } else if (projectSectionDistanceFromTop < (projectsSectionHeight * -1)) {
      insideWorkSection = false
    }

    /// THIS IS FOR THE COLOR CHANGING
    /// Above the about section
    if (aboutSectionDistanceFromTop > Engine.innerWindowHeight) {
      insideAboutSection = false
    } else if (aboutSectionDistanceFromTop < aboutSectionHeight / 8 && aboutSectionDistanceFromTop > (aboutSectionHeight * -1)) {
      insideAboutSection = true
    } else if (aboutSectionDistanceFromTop < (aboutSectionHeight * -1)) {
      insideAboutSection = false
    } else {
      insideAboutSection = true
    }

    if (insideWorkSection && !insideAboutSection) {
      menuOnTop = false
    }

    if ((insideAboutSection && !insideWorkSection) || (insideAboutSection && Engine.isTouchDevice())) {
      menuColorDark = false
    }

    this.#adjustMenuStyling(menuOnTop, menuColorDark)
  }

  openMenu () {
    document.documentElement.style.overflowY = 'hidden'
    this.menu = document.getElementById('menu')

    const tiles = document.querySelectorAll('.menu_background_tile')
    gsap.to(tiles, {
      height: '100vh',
      duration: 0.5,
      stagger: {
        each: 0.1,
        from: 'left'
      }
    })

    gsap.to('#menu', {
      height: '100vh',
      duration: 0.15,
      ease: 'none'
    })

    const allMenuAnimations = document.querySelectorAll('.animate-menu')
    gsap.from(allMenuAnimations, {
      yPercent: -130,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.6,
      ease: 'back.out'
    })
  }

  closeMenu () {
    document.documentElement.style.overflowY = 'auto'
    this.menu = document.getElementById('menu')

    const tiles = document.querySelectorAll('.menu_background_tile')

    gsap.to(tiles, {
      height: '0vh',
      duration: 0.5,
      delay: 0.1,
      stagger: {
        each: 0.1,
        from: 'left'
      }
    })

    gsap.to('#menu', {
      height: '0vh',
      duration: 0.15,
      delay: 0.6,
      ease: 'none'
    })

    const allMenuAnimations = document.querySelectorAll('.animate-menu')
    gsap.to(allMenuAnimations, {
      yPercent: -130,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out',
      onComplete: function () {
        gsap.to(allMenuAnimations, {
          yPercent: 0,
          opacity: 1,
          duration: 0,
          delay: 0.1
        })
      }
    })
  }

  async navTo (key, menuOpen) {
    /// set the scrolling to disabled
    document.documentElement.style.overflowY = 'hidden'
    /// Is the menu already open? if it is then we just need to nav and close it
    if (menuOpen) {
      const allMenuAnimations = document.querySelectorAll('.animate-menu')
      gsap.to(allMenuAnimations, {
        yPercent: -130,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out',
        onComplete: function () {
          gsap.to(allMenuAnimations, {
            yPercent: 0,
            opacity: 1,
            duration: 0,
            delay: 0.1
          })
          if (key === 'index_menu_item') {
            window.location.href = '/homepage.html'
          }

          if (key === 'portfolio_menu_item') {
            window.location.href = '/work/portfolio.html'
          }
        }
      })
    } else {
      const transitionTiles = document.querySelectorAll('.page_transition_background_tile')
      gsap.to(transitionTiles, {
        height: '100vh',
        duration: 0.5,
        delay: 0,
        stagger: {
          each: 0.1,
          from: 'left'
        },
        onComplete: function () {
          if (key === 'index_menu_item') {
            window.location.href = '/homepage.html'
          }

          if (key === 'portfolio_menu_item') {
            window.location.href = '/work/portfolio.html'
          }

          if (key !== 'index_menu_item' && key !== 'portfolio_menu_item') { window.location.href = `/work/portfolio/${key}.html` }
        }
      })
    }
  }

  #adjustMenuStyling (menuOnTop, menuColorDark) {
    let updatedClassList = ''
    updatedClassList = ''

    const state = Flip.getState(this.menuOverlay)
    /// Adjust the positioning of the menu
    if (menuOnTop && !Engine.isTouchDevice()) {
      updatedClassList += 'top_menu '
    } else {
      updatedClassList += 'bottom_menu '
    }

    /// Adjust the color of the menu
    if (menuColorDark) {
      updatedClassList += 'menu_dark '
    } else {
      updatedClassList += 'menu_light '
    }

    if (Engine.didScrollDown() && menuOnTop && !Engine.isTouchDevice()) {
      updatedClassList += 'hide_menu_top'
    }

    if (Engine.didScrollDown() && !menuOnTop && !Engine.isTouchDevice()) {
      updatedClassList += 'hide_menu_bottom'
    }

    const currentlyOntop = this.menuOverlay.classList.contains('hide_menu_top')
    const destinationToBottom = updatedClassList.includes('hide_menu_bottom')

    const currentlyOnBottom = this.menuOverlay.classList.contains('hide_menu_bottom')
    const destinationToTop = updatedClassList.includes('hide_menu_top')

    const migration = (currentlyOntop && destinationToBottom) || (currentlyOnBottom && destinationToTop)

    this.menuOverlay.classList = updatedClassList
    if (!migration) {
      Flip.from(state, {
        duration: 0.25,
        scale: true
      })
    }
  }
}

export default MenuManager
