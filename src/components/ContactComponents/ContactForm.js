import React from "react"

const ContactForm = props => {
  return (
    <form
      action="#"
      method="post"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <ul>
        <li>
          <input type="submit" value="Send Message" />
        </li>
        <li>
          <input type="reset" value="Clear" />
        </li>
      </ul>
    </form>
  )
}

export default ContactForm
