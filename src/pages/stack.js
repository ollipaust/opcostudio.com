import React from 'react'
import Head from 'components/head'

import Title from 'components/title'

import PageLayout from 'components/interface/pageLayout'

import Div100vh from 'react-div-100vh'

const Stack = () => (
  <PageLayout prev="work" next="contact" bodyClass="stack">
    <Head pageTitle="TechStack" />

    <div className="flexbox">
      <Title as="h1" size="large" className="textLeft">
        Currently in Development...
      </Title>
    </div>
    <Div100vh />
  </PageLayout>
)

export default Stack
