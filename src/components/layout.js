/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import Hero from "../components/hero"
import logo from "../../content/assets/logo-media_suite-landscape-light-notext.png"


const Layout = ({ location, title, children }) => {
  return (
    <div>
      <header
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'primary',
          p:3,
        }}>
        <Link to='/'>
          <img src={logo} alt="Media Suite Logo"
            sx={{
              width: 5,
              margin: 0,
            }}
          />
        </Link>
        <div sx={{ mx: 'auto' }} />
        <Link to='/about'
          sx={{
            variant: 'text.navlink',
          }}>
          About
        </Link>
        <a href='http://mediasuite.clariah.nl/'
          sx={{
            variant: 'text.navlink',
          }}>
          Media Suite
        </a>
        <a href='https://twitter.com/mediasuite_nl'
          sx={{
            variant: 'text.navlink',
          }}>
          Twitter
        </a>
      </header>
      <Hero />
      <main
        sx={{
          maxWidth: 768,
          mx: 'auto',
          mt: 5,
          px: 3,
        }}>
        {children}
      </main>
      <footer>
        {/*© {new Date().getFullYear()}, */}
      </footer>
    </div>
  )
}

export default Layout
