class MarqueeManager {
  constructor () {
    this.currentScroll = 0
    this.isScrollingDown = true
    this.arrows = document.querySelectorAll('.arrow')
    this.arrowsReverse = document.querySelectorAll('.arrow_reverse')

    this.tween = gsap
      .to('.marquee__part', {
        xPercent: -100,
        repeat: -1,
        duration: 7.5,
        ease: 'linear'
      })
      .totalProgress(0.5)

    this.tweenReverse = gsap
      .to('.marquee__part_reverse', {
        xPercent: 100,
        repeat: -1,
        duration: 7,
        ease: 'linear'
      })
      .totalProgress(0.5)

    gsap.set('.marquee__inner', { xPercent: -50 })
  }

  scrollMarquee () {
    if (window.pageYOffset > this.currentScroll) {
      this.isScrollingDown = true
    } else {
      this.isScrollingDown = false
    }

    gsap.to(this.tween, {
      timeScale: this.isScrollingDown ? 1 : -1
    })

    gsap.to(this.tweenReverse, {
      timeScale: this.isScrollingDown ? 1 : -1
    })

    this.arrows.forEach((arrow) => {
      if (this.isScrollingDown) {
        arrow.classList.remove('active')
      } else {
        arrow.classList.add('active')
      }
    })

    this.arrowsReverse.forEach((arrow) => {
      if (this.isScrollingDown) {
        arrow.classList.remove('active')
      } else {
        arrow.classList.add('active')
      }
    })

    this.currentScroll = window.pageYOffset
  }
}

export default MarqueeManager
