import Contact from "./Contact"
import Footer from "./Footer"
import Numbers from "./Numbers"

const About = () => {
  return (
    <section>
        <div className="about-first">
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni blanditiis eos laudantium quos minima, quibusdam harum. Dolorum repellat consequatur deserunt!</p>
        </div>
        <Numbers />
        <Contact />
    </section>
  )
}

export default About