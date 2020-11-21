import shineImg from 'images/shine.png'

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
}

export const shine = `

animation: shine 1s cubic-bezier(0, 1, 1, 0.01) 3.5s;
background: url(${shineImg});
-webkit-background-clip: text;
background-position-x: 100%;

@keyframes shine {
  0% {
    background-position-x: 0%;
    background-position-y: 0%;
  }
  100% {
    background-position-x: 100%;
    background-position-y: -100%;
  }
}
`

export const pulse = `
@keyframes pulse {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  20%,
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
}
`
export const slideFade1s = {
  hidden: { opacity: 0, y: '75%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { delay: 1, duration: 0.5 },
      y: { delay: 1.1, type: 'spring', damping: 100, stiffness: 100 },
    },
  },
}
export const slideFade2s = {
  hidden: { opacity: 0, y: '75%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { delay: 2, duration: 0.5 },
      y: { delay: 2.1, type: 'spring', damping: 100, stiffness: 100 },
    },
  },
}
export const slideFade3s = {
  hidden: { opacity: 0, y: '75%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { delay: 3, duration: 0.5 },
      y: { delay: 3.1, type: 'spring', damping: 100, stiffness: 100 },
    },
  },
}
