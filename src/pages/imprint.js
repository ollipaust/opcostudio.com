import React from 'react'
import Head from 'components/head'

import Title from 'components/title'

import PageLayout from 'components/pageLayout'

import Div100vh from 'react-div-100vh'

const Imprint = () => (
  <PageLayout bodyClass="imprint">
    <Head pageTitle="Imprint" />

    <div className="flexbox">
      <Title as="h1" size="large" className="textLeft intro">
        fwfwefwef
      </Title>
    </div>
    <Div100vh />
  </PageLayout>
)

export default Imprint
