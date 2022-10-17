import { IconContext } from "react-icons"
import Carousel from "./Carousel"
import Discuss from "./Discuss"
import Footer from "./Footer"
import Landing from "./Landing"
import Middle from "./Middle"
import Numbers from "./Numbers"
import Second from "./Second"

const Home = () => {
  return (
    <div>
        <IconContext.Provider value={{ color: "white", size: "2em"}}>
        <div className="Content"> 
            <Landing />
            <Middle />
            <Second />
            <Numbers />
            <Carousel />
            <Discuss />
            <Footer />
        </div>
        </IconContext.Provider>
    </div>
  )
}

export default Home