import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/sbar.css'
import dcar from '../assets/img/dcard.png'

export default class Socialmediabar extends Component {
    
    render() {
        return (
            <div>  
                  
                  <a href="https://twitter.com/SoccerPunksETH?s=20" className="fa fa-twitter p-3 sbar"></a>
                  <a href="https://discord.gg/Ch7Nz7C4fW" class="sbar"><img src={dcar} /></a>
            </div>
        )
    }
}
