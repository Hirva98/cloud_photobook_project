import { Button, Form, Carousel, Col, Row, Input, Space, DatePicker} from 'antd';
import React, { Fragment } from 'react'
import { useHistory } from 'react-router';


const Photobook = () => {
    
    function onChange(date, dateString) {
        console.log(date, dateString);
      }

    const history = useHistory()

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

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
                <h1 style={contentStyle}>My Photobook</h1>
            </div>
            </Carousel>
            <Row>
            <Col className="place">
                <Button  type="primary" className="button-placement" onClick={()=>{history.push('/')}}>Home</Button>
            </Col>
            </Row>
            
       </Fragment>
    );

}
export default Photobook;
