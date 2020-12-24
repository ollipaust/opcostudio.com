import React from 'react'
import Head from 'components/head'

import PageLayout from 'components/pageLayout'

import Gallery from 'components/gallery'

const Projects = () => (
  <PageLayout prev="about" next="stack" bodyClass="projects">
    <Head pageTitle="Projects" />

    <Gallery />
    <div style={{ height: '50vh', width: '100%' }} />
  </PageLayout>
)

export default Projects
