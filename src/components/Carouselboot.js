import React, { Component } from 'react'
import { Carousel,Card } from 'react-bootstrap'
import fpicone from "../assets/img/beardsoccer.jpg"
import fpitwo from "../assets/img/bluesoccer.jpg"
import fpithree from "../assets/img/greensoccer.png"

export default class Carouselboot extends Component {
    render() {
        return (
            <div>
    <Card 
    style={{
        borderColor:"red",
        borderWidth:2,
        width:"50%"
       
    }}
    >            
                
                <Carousel
                >
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={fpicone}
      width="50%"
      height="500"
      alt="First slide"
    />
    

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={fpitwo}
      width="80%"
      height="500"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fpithree}
      width="80%"
      height="500"
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
</Card>
            </div>
        )
    }
}
