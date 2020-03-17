/** @jsx jsx */
import { jsx } from 'theme-ui'
import heroimg from "../../content/assets/hero.jpg"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div
      sx={{
        position: `relative`,
        overflowY: `hidden`,
        backgroundImage: `url(${heroimg})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
          py: 5,
        }}
      >
        <h1>
          <span
            sx={{ variant: 'text.onimage' }}
          >
            Data Stories
          </span>
        </h1>
        <div
          sx={{ 
            variant: 'text.onimage',
            display: 'inline-block',
            fontSize: 3,
          }}
        >
          <div>
            Stories from Dutch multimedia archives, powered by the Media Suite
          </div>
          <Link 
            to='/about'
            sx={{ 
              variant: 'text.link' ,
              fontSize: 2,
            }}
          >
            read more
          </Link>
        </div>
      </div>
      {/*<img 
        src={heroimg}
        alt="Media Suite Logo"
        sx={{
          position: `absolute`,
          width: `100%`,
          top: 0,
          zIndex: -1,
        }}
      />*/}
    </div>
  )
}

export default Hero
