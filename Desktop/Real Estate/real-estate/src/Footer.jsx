import { FaTwitter, FaInstagram, FaHome, FaSearch, FaGlobe, FaFacebook, FaPinterest, FaPhone, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <div className="footer-left">
            <img src="/Images/Dream-Logo.png" alt="" srcset="" />
            <hr />
            <h3>NEWSLETTER</h3>
            <p>Get yourself the latest offers and news by subscribing to our news letter</p>
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>    
        </div>    
        <div className="links">
            <h3>QUICK LINKS</h3>
            <a href="">HOME <FaHome size="1em" /></a>
            <a href="">ABOUT <FaSearch size="1em" /></a>
            <a href="">SERVICES <FaGlobe size="1em" /></a>
        </div>
        <div className="contacts">
            <h3>CONTACT US</h3>
            <p>+23491262728<FaPhone size="1em"/></p>
            <p>nathanael@thebrug.com<FaEnvelope size="1em"/></p>
        </div>
        <div className="socials">
            <h3>FOLLOW US</h3>
            <div className="logos">
                <FaTwitter />
                <FaInstagram />
                <FaFacebook />
                <FaPinterest />
            </div>
        </div>
    </footer>
  )
}

export default Footer