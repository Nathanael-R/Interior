import { Link } from "react-router-dom"
const Landing = () => {
  return (
    <section className="hero">
            <p>Live in</p>
            <h1>ELEGANCE</h1>
            <button className="landing-btn" ><Link to="/contact">Get in touch</Link></button>
    </section>
  )
}

export default Landing