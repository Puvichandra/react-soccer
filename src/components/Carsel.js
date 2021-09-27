import React, { Component } from 'react'
import one from '../assets/img/1.png'
import two from '../assets/img/2.png'
import three from '../assets/img/3.png'
import four from '../assets/img/4.png'
import five from '../assets/img/5.png'
import '../assets/css/carsel.css'

export default class Carsel extends Component {
    render() {
        return (
            <div>
               <div class="icon-cards">
	<div class="icon-cards__content">
		<div class="icon-cards__item">
        <img
      className="d-block w-100"
      src={one}
      width="100%"
      height="400"
      alt="First slide"
    />
        </div>
		<div class="icon-cards__item">
        <img
      className="d-block w-100"
      src={two}
      width="100%"
      height="400"
      alt="First slide"
    />

        </div>
		<div class="icon-cards__item">
        <img
      className="d-block w-100"
      src={three}
      width="100%"
      height="400"
      alt="First slide"
    />
        </div>
		<div class="icon-cards__item">
        <img
      className="d-block w-100"
      src={four}
      width="100%"
      height="400"
      alt="First slide"
    />
        </div>
		<div class="icon-cards__item">
        <img
      className="d-block w-100"
      src={five}
      width="100%"
      height="400"
      alt="First slide"
    />
        </div>
	</div>
</div> 
            </div>
        )
    }
}
