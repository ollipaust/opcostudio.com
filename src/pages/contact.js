import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import NetlifyForm from 'react-netlify-form'
import Link from 'components/link'
import Title from 'components/title'

import Head from 'components/head'
import BodyClassName from 'react-body-classname'
import PageLayout from 'components/pageLayout'
import PageHeading from 'components/pageLayout/heading'
import PageContent from 'components/pageLayout/content'
import Pagination from 'components/pageLayout/pagination'

import translatorWrapper from 'components/translator/translatorWrapper'
import { FormattedMessage } from 'react-intl'

const Contact = () => (
  <PageLayout>
    <PageContent>
      <BodyClassName className="contact" />

      <p>
        <FormattedMessage id="contact.intro" />
      </p>
      <span>
        <a href="mailto:hello@opcostudio.com?subject=Let%27s create something amazing!">
          hello@opcostudio.com
        </a>
      </span>
      <span>
        <a href="tel:+49 (0) 175 460 15 17">
          +49&nbsp;(0)&nbsp;175&nbsp;460&nbsp;15&nbsp;17
        </a>
      </span>
      <NetlifyForm name="Form With Invisible Recaptcha">
        {({ loading, error, success }) => (
          <div>
            {loading && <div>Loading...</div>}
            {error && (
              <div>Your information was not sent. Please try again later.</div>
            )}

            {success && <div>Thank you for contacting us!</div>}
            {!loading && !success && (
              <div>
                <p>Name</p>
                <input type="text" name="Name" required />
                <p>Email</p>
                <input type="text" name="Name" required />
                <p>message</p>
                <textarea name="Message" required />
                <br />
                <button>Submit</button>
              </div>
            )}
          </div>
        )}
      </NetlifyForm>
      <div style={{ height: '50vh', width: '100%' }} />
      <div style={{ height: '50vh', width: '100%' }} />
    </PageContent>
    <Pagination>
      <div className="prev">
        <p>
          <FormattedMessage id="pagination.prev" />
        </p>
        <Link to="/stack">
          <Title as="h3" size="large" className="left">
            <FormattedMessage id="pagination.stack" />
          </Title>
        </Link>
      </div>
      <div className="next">
        <p>
          <FormattedMessage id="pagination.last" />
        </p>
        <Link to="/">
          <Title as="h3" size="large" className="right">
            <FormattedMessage id="pagination.back" />
          </Title>
        </Link>
      </div>
    </Pagination>
  </PageLayout>
)

const customProps = {
  localeKey: 'contact', // same as file name in src/i18n/translations/your-lang/index.js
}

export default translatorWrapper(customProps)(Contact)
