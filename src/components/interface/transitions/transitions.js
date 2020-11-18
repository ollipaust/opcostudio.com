import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const classNames = {
  enter: 'enter',
  enterActive: 'enter-active',
  enterDone: 'enter-done',
  exit: 'exit',
  exitActive: 'exit-active',
  exitDone: 'exit-done',
  appear: 'intro',

  appearActive: 'intro-active',

  appearDone: 'appear-done',
}

export const TransitionsController = ({ children, location }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={2000} classNames={classNames}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}

export const TransitionsView = ({ children, location }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={500} classNames={classNames}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}
