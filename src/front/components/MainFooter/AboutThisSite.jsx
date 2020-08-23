import React from 'react'
import { Modal } from 'eswiss'
import { motion } from 'framer-motion'

const VARIANTS = {
  animate: {
    display: 'block',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  initial: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

const AboutThisSite = ({ focusEleOnClose, isOpen, setIsOpen }) => {
  const animateModal = isOpen ? 'animate' : 'initial'

  const modalOverlay = (
    <motion.div animate={animateModal} initial="initial" variants={VARIANTS} />
  )

  return (
    <Modal
      __IS_SERVER__={__IS_SERVER__}
      autoCenterH={true}
      autoCenterV={true}
      closeOnOverlayClick={true}
      focusEleOnClose={focusEleOnClose}
      isOpen={isOpen}
      modalClassName="modal"
      onClose={() => setIsOpen(false)}
      overlayClassName="ats"
      overlayOverride={modalOverlay}
      overrideClassName={true}
      useAriaHidden={true}
      useAriaModal={true}
    >
      <h1 className="modal-h h-4 sm:h-6">About MattLean.com</h1>
      <p>
        MattLean.com is designed to be responsive, meaning it works on all
        screen sizes, from large desktops to small mobile devices.
      </p>
      <p>
        This site is also built with accessibility in mind, so it supports
        keyboard and screen reader interactions.
      </p>
      <p>
        Light and dark modes are supported to accomodate different viewing
        scenarios and preferences. Light mode will automatically activate at
        6:00 AM and dark mode will automatically activate at 6:00 PM in the
        visitor’s time zone. Mode switching can also be controlled manually by
        selecting the mode switch icon at the end of the main navigation.
      </p>
      <p>
        The codebase was programmed with{' '}
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          React
        </a>
        ,{' '}
        <a href="https://expressjs.com" rel="noreferrer" target="_blank">
          Express
        </a>
        , and{' '}
        <a
          href="https://github.com/mattlean/eswiss"
          rel="noreferrer"
          target="_blank"
        >
          eswiss
        </a>
        . You can find the source code online on{' '}
        <a
          href="https://github.com/mattlean/mattlean.com-2020"
          rel="noreferrer"
          target="_blank"
        >
          the project’s GitHub repository
        </a>
        .
      </p>
      <p>
        If would like to learn more about the design and development process
        that went into building this website, you can read the case study.
      </p>
    </Modal>
  )
}

export default AboutThisSite