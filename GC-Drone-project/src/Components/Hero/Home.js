import React from 'react'
import './Home.css'
import ci1 from './ci1.jpg'
import ci2 from './ci2.png'
import ci3 from './ci3.jpg'

export default function Home() {
 

  return (
    <>
     <div className='bg'>
      <div className="mask" style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
        <div className="container d-flex align-items-center justify-content-center text-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Wlcome to Dronify!</h1>
            <h5 className="mb-4">We provide best delivery services across the globe</h5>
            <a className="btn btn-outline-light btn-lg m-2" href="h/" role="button"
              rel="nofollow" target="_blank">Login as User</a>
            <a className="btn btn-outline-light btn-lg m-2" href="/" target="_blank"
              role="button">Login as Admin</a>
          </div>
       </div>
    </div>
    </div>
    
    <div className="space"></div>

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ci1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Our coustmer satisfaction is our priority</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ci2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Our drone delivery service is faster than traditional methods</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ci3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>We provide 24/7 coustmer care</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
