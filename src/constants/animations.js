import { cloudImg } from 'constants/cloudRes'

export const heroSloganAnimation1 = {
  hidden: { opacity: 0, y: '-85%', x: '-50%' },
  show: {
    opacity: 1,
    y: '-100%',
    x: '-50%',
    transition: {
      opacity: { duration: 0.5, delay: 1 },
      y: { duration: 0.5, delay: 4 },
    },
  },
}
export const heroSloganAnimation2 = {
  hidden: { opacity: 0, y: '0%', x: '-50%' },
  show: {
    opacity: 1,
    y: '100%',
    x: '-50%',
    transition: {
      opacity: { duration: 0.5, delay: 1 },
      y: { duration: 0.5, delay: 4 },
    },
  },
}
export const heroSubTitleAnimation = {
  hidden: { opacity: 0, scaleY: 0 },
  show: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { duration: 0.5, delay: 4 },
      scaleY: { duration: 0.5, delay: 4 },
    },
  },
}
export const heroButtonAnimation1 = {
  hidden: { opacity: 0, y: '50%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { duration: 0.75, delay: 4.9 },
      y: { duration: 0.5, delay: 5 },
    },
  },
}
export const heroButtonAnimation2 = {
  hidden: { opacity: 0, y: '50%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { duration: 0.75, delay: 5.15 },
      y: { duration: 0.5, delay: 5.25 },
    },
  },
}
export const motionHeroLogos = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 4,
      staggerChildren: 0.1,
      ease: 'easeIn',
      opacity: { delay: 4 },
    },
  },
}
export const motionHeroLogosChildren = {
  hidden: { y: '100%' },
  show: {
    y: '0%',
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 50,
      duration: 0.25,
    },
  },
}

export const motionHeroNotice = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 4,
      opacity: { duration: 1 },
      y: { type: 'spring', damping: 10, stiffness: 50 },
    },
  },
}
export const randomTextFadeIn = `
animation: fadeIn 500ms ease-in;

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`
export const shine = `
animation: shine 1s cubic-bezier(0, 1, 1, 0.1) 3.25s;
background: url(${cloudImg.shineBg});
-webkit-background-clip: text;
background-position-x: -50%;
background-repeat: no-repeat;
@keyframes shine {
  0% {
    background-position-x: 0%;
  }
  50% {
    background-position-x: 60%;
  }
  100% {
    background-position-x: 100%;
  }
}
`
export const spinning = `
animation: spinningAnimation 5s infinite;

@keyframes spinningAnimation {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
`
export const pulseRings = `
.pulsing-rings {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: opacity 350ms ease-in-out 2.5s;
}
.pulsing-rings .pulsing-ringlet {
  position: absolute;

  width: 250px;
  height: 250px;
  background: transparent;
  border: 3px solid white;
  border-radius: 50%;
  transform: scale(0.1, 0.1);
  opacity: 0;
  animation: pulse 10s ease-out infinite;
  animation-delay: 3s;
}
.pulsing-rings .pulsing-ringlet:nth-of-type(2) {
  animation-delay: 3.3s;
}
.pulsing-rings .pulsing-ringlet:nth-of-type(3) {
  animation-delay: 3.6s;
}

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

export const rasterStaggers = `
.raster-line-v:nth-of-type(21), .raster-line-v:nth-of-type(22) {
  transition-delay: 0.025s;
}
.raster-line-v:nth-of-type(20), .raster-line-v:nth-of-type(23) {
  transition-delay: 0.05s;
}
.raster-line-v:nth-of-type(19), .raster-line-v:nth-of-type(24) {
  transition-delay: 0.075s;
}
.raster-line-v:nth-of-type(18), .raster-line-v:nth-of-type(25) {
  transition-delay: 0.1s;
}
.raster-line-v:nth-of-type(17), .raster-line-v:nth-of-type(26) {
  transition-delay: 0.125s;
}
.raster-line-v:nth-of-type(16), .raster-line-v:nth-of-type(27) {
  transition-delay: 0.15s;
}
.raster-line-v:nth-of-type(15), .raster-line-v:nth-of-type(28) {
  transition-delay: 0.175s;
}
.raster-line-v:nth-of-type(14), .raster-line-v:nth-of-type(29) {
  transition-delay: 0.2s;
}
.raster-line-v:nth-of-type(13), .raster-line-v:nth-of-type(30) {
  transition-delay: 0.225s;
}
.raster-line-v:nth-of-type(12), .raster-line-v:nth-of-type(31) {
  transition-delay: 0.25s;
}
.raster-line-v:nth-of-type(11), .raster-line-v:nth-of-type(32) {
  transition-delay: 0.275s;
}
.raster-line-v:nth-of-type(10), .raster-line-v:nth-of-type(33) {
  transition-delay: 0.3s;
}
.raster-line-v:nth-of-type(9), .raster-line-v:nth-of-type(34) {
  transition-delay: 0.325s;
}
.raster-line-v:nth-of-type(8), .raster-line-v:nth-of-type(35) {
  transition-delay: 0.35s;
}
.raster-line-v:nth-of-type(7), .raster-line-v:nth-of-type(36) {
  transition-delay: 0.375s;
}
.raster-line-v:nth-of-type(6), .raster-line-v:nth-of-type(37) {
  transition-delay: 0.4s;
}
.raster-line-v:nth-of-type(5), .raster-line-v:nth-of-type(38) {
  transition-delay: 0.425s;
}
.raster-line-v:nth-of-type(4), .raster-line-v:nth-of-type(39) {
  transition-delay: 0.45s;
}
.raster-line-v:nth-of-type(3), .raster-line-v:nth-of-type(40) {
  transition-delay: 0.475s;
}
.raster-line-v:nth-of-type(2), .raster-line-v:nth-of-type(41) {
  transition-delay: 0.5s;
}
.raster-line-v:nth-of-type(1), .raster-line-v:nth-of-type(42) {
  transition-delay: 0.525s;
}
.raster-line-v:nth-of-type(0), .raster-line-v:nth-of-type(43) {
  transition-delay: 0.55s;
}

.raster-line-h:nth-of-type(7), .raster-line-h:nth-of-type(8) {
  transition-delay: 0.025s;
}
.raster-line-h:nth-of-type(6), .raster-line-h:nth-of-type(9) {
  transition-delay: 0.05s;
}
.raster-line-h:nth-of-type(5), .raster-line-h:nth-of-type(10) {
  transition-delay: 0.075s;
}
.raster-line-h:nth-of-type(4), .raster-line-h:nth-of-type(11) {
  transition-delay: 0.1s;
}
.raster-line-h:nth-of-type(3), .raster-line-h:nth-of-type(12) {
  transition-delay: 0.125s;
}
.raster-line-h:nth-of-type(2), .raster-line-h:nth-of-type(13) {
  transition-delay: 0.15s;
}
.raster-line-h:nth-of-type(1), .raster-line-h:nth-of-type(14) {
  transition-delay: 0.175s;
}
.raster-line-h:nth-of-type(0), .raster-line-h:nth-of-type(15) {
  transition-delay: 0.2s;
}
`
