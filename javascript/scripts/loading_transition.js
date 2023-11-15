/// Prevent scrolling for now
startLoadingAnimation()
document.documentElement.style.overflowY = 'hidden'

async function startLoadingAnimation () {
  await new Promise(resolve => setTimeout(resolve, 2000)) // 3 sec

  /// Lottie animation should play and when its complete it should check if it can proceed to the next screen
  const loadingAnimation = document.getElementById('hns_lottie')

  loadingAnimation.play()
  loadingAnimation.addEventListener('complete', () => {
    loadingAnimation.classList = ['hide']

    revealPageContent()
  })
}

function revealPageContent () {
  const reTransitionTiles = document.querySelectorAll('.page_transition_background_tile')
  gsap.to(reTransitionTiles, {
    height: '0vh',
    duration: 0,
    delay: 0,
    stagger: {
      each: 0.1,
      from: 'left'
    }
  })

  const transitionTiles = document.querySelectorAll('.loading_transition_background_tile')
  gsap.to(transitionTiles, {
    height: '0vh',
    duration: 0.5,
    delay: 0.3,
    stagger: {
      each: 0.1,
      from: 'left'
    },
    onComplete: function () {
      const awwwwardsEntry = document.getElementById('awwwards')
      awwwwardsEntry.style.display = 'inherit'
      const loadingAnimationWrapper = document.getElementById('loading_animation')
      loadingAnimationWrapper.style.height = '0px'
      document.documentElement.style.overflowY = 'auto'
    }
  })
}
