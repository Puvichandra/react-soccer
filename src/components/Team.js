import React, { Component } from 'react'

import yellowsoccer from "../assets/img/yellowsoccer.jpg"
import greensoccer from "../assets/img/greensoccer.jpg"
import bluesoccer from "../assets/img/bluesoccer.jpg"
import rob from "../assets/img/rob.png"

import {Card, ResponsiveEmbed } from 'react-bootstrap'


export default class Team extends Component {
    render() {
        return (
            <>
                <section id="team mx-auto">
                    <div className="container-fluid ">
                        <h5 className="section-title h1">OUR TEAM</h5>
                        <div className="row text-center">
                            {/* <!-- Team member --> */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 py-5">
                                <Card className="teamcard"  style={{borderRadius:"5%"}} >
                                    <Card.Img variant="top" style={{borderRadius:"5%"}} src={yellowsoccer} />
                                    <Card.Body>
                                        <Card.Title>Genius</Card.Title>
                                        <p>Core Team + Graphic design</p>
                                                                               
                                    </Card.Body>
                                </Card>

                            </div>
                            {/* *<!-- ./Team member -->
            <!-- Team member --> */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 py-5">
                            <Card className="teamcard" style={{borderRadius:"5%"}} >
                                    <Card.Img variant="top" style={{borderRadius:"5%"}} src={greensoccer} />
                                    <Card.Body>
                                        <Card.Title>DJH </Card.Title>
                                        <p>Core team + Social Media Manager</p>
                                        
                                       
                                                                               
                                    </Card.Body>
                                </Card>

                            </div>
                            {/* <!-- ./Team member -->
            <!-- Team member --> */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 py-5">
                            <Card className="teamcard"  style={{borderRadius:"5%"}}>
                                    <Card.Img variant="top" style={{borderRadius:"5%"}} src={bluesoccer} />
                                    <Card.Body>
                                        <Card.Title>Defunct</Card.Title>
                                        <p>Core Team + Finance Manager</p>
                                        
                                                                               
                                    </Card.Body>
                                </Card>

                            </div>
                            {/* <!-- ./Team member -->
            <!-- Team member --> */}

             {/* <!-- ./Team member -->
            <!-- Team member --> */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 py-5">
                            <Card className="teamcard" style={{borderRadius:"5%"}} >
                                    <Card.Img variant="top" style={{borderRadius:"5%"}} src={rob} />
                                    <Card.Body>
                                        <Card.Title><h6>AFellaNamedRob</h6></Card.Title>
                                        <p>Developer (Sickest dude alive)</p>
                                        
                                                                               
                                    </Card.Body>
                                </Card>

                            </div>
                            {/* <!-- ./Team member -->
            <!-- Team member --> */}
                          
                        </div>
                    </div>
                </section>
                {/* <!-- Team --> */}


            </>
        )
    }
}
