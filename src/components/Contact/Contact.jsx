import Container from "../../Layout/Container"
import Heading from "../shared/Heading"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

const Contact = () => {

  return (
    <section >
      <Container>
        <Heading title={"Get in Touch"} desc={"Feel free to reach out to me for any questions or opportunities!"} />
        <ContactInfo />
        <ContactForm />
      </Container>
    </section>
  )
}

export default Contact;
