import React from "react"
import styles from "./ContactQuickInfo.module.less"
import { GoChevronDown } from "react-icons/go"
import img from "../../images/bestFaceLOL.jpg"

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
      if (width >= 768) {
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
        <>
          <p className={styles.ContactPText}>
            I'm 31 years young and have made it to the top of every industry I
            have had the pleasure to work in. I've driven tractor trailers,
            excelled at marketing and communication, founded and helped maintain
            a massage therapy business, and most recently ran a startup company
            as the Lead Locksmith / Business Manager!
          </p>{" "}
          <img src={img} alt="Ayla and Jon Palacio" />
          <p className={styles.ContactPText}>
            My skills are constantly growing and while the top of those
            industries where great. My heart has always been in technology and
            security. I'm very security focused and find software development to
            be the most fascinating and compelling journey I've been on in quite
            a long time.
          </p>
        </>
      )}
      {bio && (
        <p className={styles.ps}>
          Please reach out to me via the contact method of your choice below or
          hit the little message icon and lets chat on slak! I look forward to
          working with you!
        </p>
      )}
    </section>
  )
}

export default ContactQuickInfo
