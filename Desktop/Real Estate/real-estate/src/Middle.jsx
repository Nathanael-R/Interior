import React from 'react'

const Middle = () => {
  return (
    <section className="about">
      <h2>Our Latest Work</h2>
      <hr />
      <div className="slide">
          <div className="sample-cont">
            <img src="/Images/1.jpg" alt="" srcSet="" />
          </div>
          <div className='text-box'>
            <h3>Info</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, accusamus. Repellendus quam est atque distinctio. Cumque minus officia rem nisi.</p>
            <button>Read more</button>
          </div>
      </div>
      <hr />
      <div className="slide">
          <div className="sample-cont">
            <img src="/Images/5.jpg" alt="" srcSet="" />
          </div>
          <div className='text-box'>
            <h3>Info</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, accusamus. Repellendus quam est atque distinctio. Cumque minus officia rem nisi.</p>
            <button>Read more</button>
          </div>
      </div>
    </section>
  )
}

export default Middle