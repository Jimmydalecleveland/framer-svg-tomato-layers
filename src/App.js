import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import './App.css';

const topTomatoVariants = {
  hover: { opacity: 0.7, scale: 1, x: 0, y: 0, rotate: 0 },
  tap: { opacity: 0.4, scale: 0.9, x: -15, y: -15, rotate: -5 },
  show: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 },
  hide: { opacity: 0, scale: 0.8, x: -60, y: -60, rotate: -20 },
};

const tweenTransition = {
  type: "tween",
  duration: 0.3,
  ease: [0.9, 0.2, 0.1, 0.1],
};

function TempTomato({ showCurrentExo, currentPomodoro, startPomo }) {
  return (
    <svg viewBox="0 0 318.34 318.34" style={{ width: "50%" }}>
      <defs>
        <radialGradient
          id="radial-gradient"
          cx={159.17}
          cy={159.17}
          r={160.63}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.87} stopOpacity={0.2} />
          <stop offset={0.98} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx={176.66}
          cy={175.51}
          r={189.19}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.75} stopOpacity={0} />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="radial-gradient-3"
          cx={146.21}
          cy={142.22}
          r={161.29}
          gradientTransform="matrix(.66692 .74513 -.68552 .61357 145.67 -53.52)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.94} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-4"
          cx={152.59}
          cy={145.75}
          fx={130.949}
          r={130.23}
          gradientTransform="matrix(.65 .76 -.73 .63 159.38 -61.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.86} stopColor="#ff6138" />
          <stop offset={0.86} stopColor="#ff6138" />
          <stop offset={1} stopColor="#e54225" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-5"
          cx={128.21}
          cy={126.09}
          r={140.38}
          gradientTransform="matrix(.64078 .76772 -.85985 .71767 154.37 -62.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.63} stopColor="#e54225" stopOpacity={0} />
          <stop offset={1} stopColor="#e54225" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-6"
          cx={110.12}
          cy={85.19}
          r={82.03}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ff8b61" />
          <stop offset={1} stopColor="#ff8b61" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="radial-gradient-7"
          cx={152.59}
          cy={144.75}
          r={130.23}
          gradientTransform="matrix(.65 .76 -.73 .63 158.65 -62.33)"
          xlinkHref="#radial-gradient-4"
        />
        <radialGradient
          id="radial-gradient-8"
          cx={128.21}
          cy={125.09}
          r={140.38}
          gradientTransform="matrix(.64078 .76772 -.85985 .71767 153.51 -63.03)"
          xlinkHref="#radial-gradient-5"
        />
        <radialGradient
          id="radial-gradient-9"
          cx={110.12}
          cy={84.19}
          r={82.03}
          xlinkHref="#radial-gradient-6"
        />
        <radialGradient
          id="radial-gradient-10"
          cx={151.59}
          cy={144.75}
          fx={129.949}
          r={130.23}
          gradientTransform="matrix(.65 .76 -.73 .63 158.3 -61.57)"
          xlinkHref="#radial-gradient-4"
        />
        <radialGradient
          id="radial-gradient-11"
          cx={127.21}
          cy={125.09}
          r={140.38}
          gradientTransform="matrix(.64078 .76772 -.85985 .71767 153.15 -62.26)"
          xlinkHref="#radial-gradient-5"
        />
        <radialGradient
          id="radial-gradient-12"
          cx={109.12}
          cy={84.19}
          r={82.03}
          xlinkHref="#radial-gradient-6"
        />
        <radialGradient
          id="radial-gradient-13"
          cx={151.59}
          cy={145.75}
          fx={129.949}
          r={130.23}
          gradientTransform="matrix(.65 .76 -.73 .63 159.03 -61.21)"
          xlinkHref="#radial-gradient-4"
        />
        <radialGradient
          id="radial-gradient-14"
          cx={127.21}
          cy={126.09}
          r={140.38}
          gradientTransform="matrix(.64078 .76772 -.85985 .71767 154.01 -61.98)"
          xlinkHref="#radial-gradient-5"
        />
        <radialGradient
          id="radial-gradient-15"
          cx={109.12}
          cy={85.19}
          r={82.03}
          xlinkHref="#radial-gradient-6"
        />
        <clipPath id="clip-path">
          <path className="cls-1" d="M31.34 31.14h128v128h-128z" />
        </clipPath>
        <clipPath id="clip-path-2">
          <path className="cls-1" d="M31.34 158.14h128v128h-128z" />
        </clipPath>
        <clipPath id="clip-path-3">
          <path className="cls-1" d="M158.34 158.14h128v128h-128z" />
        </clipPath>
        <clipPath id="clip-path-4">
          <path className="cls-1" d="M158.34 31.14h128v128h-128z" />
        </clipPath>
        <style>
          {
            ".cls-1{fill:none}.cls-7{fill:#aa2f1f}.cls-8{fill:#f4e39a}.cls-25{opacity:0}"
          }
        </style>
      </defs>

      <AnimatePresence>
        {showCurrentExo && (
          <motion.g
            clipPath="url(#clip-path)"
            id="quarter_1"
            data-name="quarter 1"
            initial="show"
            exit="hide"
            // animate={currentPomodoro === 1 && showCurrentExo ? "show" : "hide"}
            whileHover="hover"
            whileTap="tap"
            variants={{
              ...topTomatoVariants,
              hide: { opacity: 0, scale: 0.8, x: -60, y: -60, rotate: -20 },
            }}
            transition={tweenTransition}
            onClick={startPomo}
          >
            <circle
              cx={159}
              cy={159.2}
              r={127.83}
              fill="url(#radial-gradient-4)"
            />
            <circle
              cx={159}
              cy={159.2}
              r={127.83}
              fill="url(#radial-gradient-5)"
            />
            <circle
              cx={159}
              cy={159.2}
              r={127.83}
              fill="url(#radial-gradient-6)"
            />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  )
}

function App() {
  const [state, setState] = useState({
    currentPomodoro: 1,
    showCurrentExo: true,
  })

  return (
    <div className="App">
      <button onClick={() => setState({ ...state, showCurrentExo: !state.showCurrentExo })}>
        press
      </button>
      {/* <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      /> */}

      {/* <ReactLogo /> */}
      <TempTomato currentPomodoro={state.currentPomodoro} showCurrentExo={state.showCurrentExo} startPomo={() => setState({ ...state, showCurrentExo: !state.showCurrentExo })} />
    </div>
  );
}

export default App;
