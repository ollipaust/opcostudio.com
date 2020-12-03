import React from 'react'

import Title from 'components/title'

import PageLayout from 'components/pageLayout'

import Translator from 'components/interface/translator'
import { FormattedMessage } from 'react-intl'
import NetlifyForm from 'react-netlify-form'

const Contact = () => (
  <PageLayout prev="stack" bodyClass="contact">
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
  </PageLayout>
)

const customProps = {
  localeKey: 'contact', // same as file name in src/i18n/translations/your-lang/index.js
}

export default Translator(customProps)(Contact)
