import React from "react"
import styles from "./ContactQuickInfo.module.less"
import { GoChevronDown } from "react-icons/go"

const ContactQuickInfo = props => {
  const [width, setWidth] = React.useState(null)
  const [bio, setBio] = React.useState(false)
  //console.log(bio)
  const showBio = () => {
    setBio(!bio)
  }
  React.useEffect(() => {
    function showOnBig() {
      setWidth(document.body.clientWidth)
      if (width > 768) {
        setBio(true)
      } else {
        setBio(false)
      }
    }
    window.addEventListener("resize", showOnBig)
  }, [width])
  return (
    <section className={styles.ContactQuickInfoContainer}>
      <div className={styles.bioContainer}>
        <h2 className={styles.bio} onClick={() => showBio()}>
          bio
        </h2>
        <GoChevronDown className={styles.chevron} onClick={() => showBio()} />
      </div>
      {bio && (
        <p className={styles.ContactPText}>
          I'm 31 years young and have made it to the top of every industry I
          have had the pleasure to work in. I've drive tractor trailers,
          excelled at marketing and communication, founded and helped maintain a
          massage therapy business, and most recently ran a startup company as
          the Lead Locksmith / Business Manager! My skills are constantly
          growing and while the top of those industries where great. My heart
          has always been in technology and security. I'm very security focused
          and find software development to be the most fascinating and
          compelling journey I've been on in quite a long time. Please reach out
          to me via the contact method of your choice below or hit the little
          message icon and lets chat on slak! I look forward to working with
          you!
        </p>
      )}
      {bio && (
        <p className={styles.ps}>
          p.s. I'm a busy developer. There are tons of things to build and mini
          fires to put out.{" "}
          <em className={styles.important}>
            I will respond to you as soon as I can!
          </em>{" "}
          all the love, -J.P.
        </p>
      )}
    </section>
  )
}

export default ContactQuickInfo
