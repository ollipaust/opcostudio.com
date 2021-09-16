import React from "react";
import Title from 'components/title'

function Step1(props) {
  return (
    <div>
    <Title as="h1" size="large" className="textLeft">
    Hey there! I&apos;m Olli.<br />What&apos;s your name?
    </Title>
      <p>Name: <input name="name" value={props.getState('name', '')} onChange={props.handleChange} /></p>
    </div>
  );
}

export default Step1;