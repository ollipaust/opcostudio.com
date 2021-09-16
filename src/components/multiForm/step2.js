import React from "react";
import Title from 'components/title'
import Form from 'react-validation/build/form';


function Step2(props) {
  const enteredName = props.state.name
  const capitalize = () => {
      if (typeof enteredName !== 'string') return ''
      return enteredName.charAt(0).toUpperCase() + enteredName.slice(1)
    }
  return (
    <div>
            <Title as="h1" size="large" className="textLeft">
    Nice to meet you, <u>{capitalize()}</u>!<br />Can I have your contacts?
    </Title>
    <Form  className="multi-form">
      Email: <input maxLength={40} name="email" value={props.getState('email', '')} onChange={props.handleChange} />
      Phone: <input maxLength={15} name="phone" value={props.getState('phone', '')} onChange={props.handleChange} />
      </Form>
    </div>
  );
}

export default Step2;