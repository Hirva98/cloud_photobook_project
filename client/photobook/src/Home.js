import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Carousel, Col, Row} from 'antd';
import './Home.css'


const Home = () => {

    const history = useHistory()
    const contentStyle = {
        height: '160px',
        color: 'white',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

return (
    <Fragment>
        <Carousel autoplay>
            <div>
                <h1 style={contentStyle}>Photobook App</h1>
            </div>
            {/* <div>
                <h3 style={contentStyle}>2</h3>
            </div> */}
        </Carousel>
       
        <Row>
            <Col className="place">
                <Button  type="primary" className="button-placement" onClick={()=>{history.push('/upload')}}>Upload a photo</Button>
            </Col>
        </Row>
        <Row>
            <Col className="place">
                <Button  type="primary" className="button-placement" onClick={()=>{history.push('/photobook')}}>My Photobook</Button>
            </Col>
        </Row>
       
        {/* <Carousel autoplay>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel> */}
    </Fragment>
    
    );

}
export default Home;
