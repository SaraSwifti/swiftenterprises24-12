import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'video-react/dist/video-react.css';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';

// let Video = 'https://drive.google.com/file/d/1NSVOGNFe6x7aAMngCXhqPNCYu3NaqgqJ/view?usp=sharing';
// import video from './swiftfuelvideo.mp4'
// import video from 'https://drive.google.com/file/d/1NSVOGNFe6x7aAMngCXhqPNCYu3NaqgqJ/view?usp=sharing'

const RenewFuelVideo = () => {
  
     return (
        <Container className="py-3">
            <Row className="justify-content-md-center">
                <Col>
            <Player
           
        src='https://drive.google.com/file/d/1NSVOGNFe6x7aAMngCXhqPNCYu3NaqgqJ/view?usp=sharing'
        >
            <ControlBar autoHide={false} className="my-class" />
                     </Player>
                 </Col>
            </Row >
        </Container>)

           
  
}
export default RenewFuelVideo