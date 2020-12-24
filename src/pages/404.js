import React from 'react'
import Title from 'components/title'
import PageLayout from 'components/pageLayout'
import Div100vh from 'react-div-100vh'
import Head from 'components/head'

const Error404 = () => (
  <PageLayout bodyClass="stack">
    <Head pageTitle="404 Not Found" />

    <div className="flexbox">
      <Title as="h1" size="large" className="textLeft intro">
        wdwd
      </Title>
      <sub>weew</sub>
    </div>
    <Div100vh />
  </PageLayout>
)

export default Error404
