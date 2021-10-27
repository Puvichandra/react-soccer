import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import was from "../assets/img/was.png"


import React, { Component } from 'react'

export default class Roadmap extends Component {
    render() {
        return (
            <div>
    

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // date="2011 - present"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   icon={<was/>}
    
    
  >
    <h3 className="vertical-timeline-element-title text-black">Phase 1</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}> 
    <p>•	Design the NFT’s and have them ready for launch</p>
    <p>•	Marketing from influencers <strong>launch date (14 Nov 21)</strong></p>
    <p>•	Start trading on OpenSea.</p>
    <p>•	Apply for a rarity checker website.</p>
    <p>•	Mint all 10,000 NFT’s</p>
    
   
    </div>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<was />}
  >
    <h3 className="vertical-timeline-element-title text-black">Phase 2</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}>
    <p>•	Game development to start (First Stages)</p>
    <p>•	Ongoing marketing (Influencers / Ambassadors / Advertising)</p>
    <p>•	The second edition of SoccerPunk NFT's (Limited Edition), more details to follow.</p>
    <p>•	Show a few preview images of the game.</p>

    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<was />}
  >

    <h3 className="vertical-timeline-element-title text-black">Phase 3</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}>
    <p>•	More influencers to hype game launch.</p>
    <p>•	Show use-case of the communities NFT within the game</p>
    <p>•	Partner with high profile organisations to work alongside SoccerPunks.</p>
    <p>•	Release a BETA version of the SoccerPunks game.</p>
</div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<was/>}
  >
    <h3 className="vertical-timeline-element-title text-black">Phase 4</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <div style={{textAlign: this.props.someBoolean ? "center" : "left"}}>
   <p> •	Updating the game to the communities feedback</p>
  <p>•	Release game to the public.</p>
 <p>•	Have content created about SoccerPunks (Tiktoks/Youtube videos etc, to widen our community)</p>
  <p>•	Create an ecosystem of NFT’s incorporating other well-known sports into the SoccerPunks style</p>
  </div>

      
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<use />}
  />
</VerticalTimeline>
                
            </div>
        )
    }
}

