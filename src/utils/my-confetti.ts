import confetti from 'canvas-confetti'

let end = 0
export const renderConfetti = () => {
  end = Date.now() + 2 * 1000
  frame()
}

var colors = ['#bb0000', '#ffffff']

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  })
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  })

  if (Date.now() < end) {
    requestAnimationFrame(frame)
  }
}
