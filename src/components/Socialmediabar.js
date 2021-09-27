import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/sbar.css'

export default class Socialmediabar extends Component {
    
    render() {
        return (
            <div>  
                  
                  <a href="https://twitter.com/SoccerPunksETH?s=20" className="fa fa-twitter p-3 sbar"></a>
                  <a href="https://discord.gg/Ch7Nz7C4fW" className="fab fa-discord p-3 sbar"></a>
            </div>
        )
    }
}
