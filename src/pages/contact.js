import React from 'react'
import Head from 'components/head'

import PageLayout from 'components/interface/pageLayout'
import Title from 'components/title'
import NetlifyForm from 'react-netlify-form'

const Contact = () => (
  <PageLayout prev="stack" bodyClass="contact">
    <Head pageTitle="Contact" />

    <Title as="h1" size="large" className="textLeft">
      Currently in Development...
    </Title>

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
              <p>Message</p>
              <textarea name="Message" required />
              <br />
              <button>Submit</button>
            </div>
          )}
        </div>
      )}
    </NetlifyForm>
  </PageLayout>
)

export default Contact
