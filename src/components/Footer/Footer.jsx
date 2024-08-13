import Container from "../../Layout/Container"
import Logo from "../shared/Logo"

const Footer = () => {
  return (
    <Container>
      <div className="text-center">
        <Logo />
        <h1 className="mt-2 font-bricolage font-semibold text-xs sm:text-sm md:text-base">© 2024 Arnab Gupta. All rights reserved.</h1>
      </div>
    </Container>
  )
}

export default Footer
