import React, { Component } from 'react'
import "../assets/css/footerbottom.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Socialmediabar from './Socialmediabar'


export default class Fbottom extends Component {
    render() {
        return (
            <div>
         <footer className="mt-5" style={{paddingTop:"120px", paddingBottom:"120px", backgroundColor:"rgb(11, 35, 75)"}}>
            <div className="footer-cls mt-5 container-fluid text-white"
                >

                <div className="container">
                    <div className="row" >
                        <div className="footcolone col-lg-6 text-start text-sm-center">
                            <p>SoccerPunks</p>
                            <p>10000 Unique SoccerPunks</p>
                            
                        </div>

                      
                        <div className="footcoltwo col-lg-6 text-end text-sm-center">
                            <p>Get in touch</p>
                            <p>soccerpunkseth@gmail.com</p>
                            
                        </div>

						<div className="col-lg-12 text-center">
							<Socialmediabar/>
                         


                        </div>
                    </div>
                </div>
            </div>
        </footer>
          
            </div>
        )
    }
}
