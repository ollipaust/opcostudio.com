import React, { useState } from 'react'
import Title from 'components/title'
import NetlifyForm from 'react-netlify-form'

function FinalStep(props) {
    const [isToggled, setIsToggled] = useState(false)

    function toggle() {
        setIsToggled(!isToggled)
    }

    const isOpen = isToggled ? 'open' : 'close'
  return (

    <div>
    <Title as="h1" size="large" className="textLeft">
    Are these alright?
    </Title>

    <p>Name: {props.state.name}</p>
    <p>Email: {props.state.email}</p>
    <p>Phone: {props.state.phone}</p>


    <button onClick={() => toggle()}>X</button>
    <div>
    <NetlifyForm name="Form With Invisible Recaptcha" className="hey">

{({ loading, error, success }) => (
  <div>
    {loading && <div>Loading...</div>}
    {error && (
      <div>Your information was not sent. Please try again later.</div>
    )}

    {success && <div>Thank you for contacting us!</div>}
    {!loading && !success && (
        <div>
      <div className={'edit ' + isOpen}>
        <p>Name</p>
        <input type="text" name="Name" required value={props.state.name} />
        <p>Email</p>
        <input type="email" name="Email" required value={props.state.email} />
        <p>Phone</p>
        <textarea type="phone" name="Phone" required value={props.state.phone} />
        <br />
        </div>
        <button>Submit</button> 
        </div>
    )}
  </div>
)}

</NetlifyForm>
        </div>
    </div>
    
  );
}

export default FinalStep;