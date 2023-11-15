/// This will remove the transition tiles from the top of the page when a new page is loaded in.
document.documentElement.style.overflowY = 'hidden'
const transitionTiles = document.querySelectorAll('.page_transition_background_tile')
gsap.to(transitionTiles, {
  height: '0vh',
  duration: 0.5,
  delay: 1,
  stagger: {
    each: 0.1,
    from: 'left'
  },
  onComplete: function () {
    document.documentElement.style.overflowY = 'auto'

    try {
      const awwwwardsEntry = document.getElementById('awwwards')
      awwwwardsEntry.style.display = 'inherit'
    } catch (e) {}
  }
})
