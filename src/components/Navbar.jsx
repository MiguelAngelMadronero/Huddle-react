import logo from '../assets/images/logo.svg'

export const Navbar = () => {
  return (
    <>
      
        <nav className="hero__nav container">
            <figure className="hero__logo">
                <img src={logo} alt="logo" className="hero__huddle" />
            </figure>
            <a href="#" className="hero__cta">Try it free</a>
        </nav>
      
    </>
  )
}
