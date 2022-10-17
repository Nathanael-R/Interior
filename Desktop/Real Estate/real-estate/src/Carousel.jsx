import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";


const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carouse = useRef();

  useEffect(() => {
    setWidth(carouse.current.scrollWidth - carouse.current.offsetWidth)
}, [])
  
  return (
    <div className="wrapper">
        <div className="top">
            <h2>Here's Our Team</h2>
            <hr />
        </div>
        <motion.div 
            ref={carouse} 
            className="carousel" 
            whileTap={{ cursor: "grabbing" }}    
        >
            <motion.div         
                drag="x" 
                dragConstraints={{right: 0, left: -width}} 
                className="inner"
            >
                {images.map(image =>{
                    return(
                        <motion.div className="item">
                            <img src={image} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Carousel