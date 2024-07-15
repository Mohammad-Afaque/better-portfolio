import Nav from './components/nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faGithub);

export default function Home() {

  return (
    <>
      <title>Under Construction</title>
      // <Nav />
      <main id="home">
        <h1 className="lg-heading">
          <span className="text-secondary">Under  </span>
          Construction
        </h1>
        // <h2 className="sm-heading">
        //   Front End Developer
        // </h2>
        // <div className="icons">
        //   <a href="https://twitter.com/AfaqueDev">
        //     <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
        //   </a>
        //   <a href="https://www.facebook.com/profile.php?id=100010916868357">
        //     <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x"/>
        //   </a>
        //   <a href="https://www.linkedin.com/in/mohammad-afaque/">
        //     <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
        //   </a>
        //   <a href="https://github.com/Mohammad-Afaque">
        //     <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        //   </a>
        </div>
      </main>
    </>
  )
}
