import React, { useState } from 'react'
import { Container } from './accordion.css'

const Accordion = ({ children }) => {
    const [isToggled, setIsToggled] = useState(false)

    const toggler =
    typeof document !== 'undefined'
      ? document.getElementById('entry')
      : null

      function togglers() {
          if (isToggled === true) {
              blurContent.classList.add('blur')
          }
      }

    return (
        <Container>
            <div className="toggle"><button onClick={() => togglers())}>&gt; Edit</button></div>
            <section className={!isToggled ? 'open' : 'close'}>
                <p>{children}</p>
            </section>
        </Container>

        
    )
}

export default Accordion