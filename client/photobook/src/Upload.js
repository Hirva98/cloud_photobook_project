import { Button, Carousel, Col, Row, Form, Input, Space, DatePicker } from 'antd';
import React, { Fragment } from 'react'
import { useHistory } from 'react-router';
import './Upload.css';


const Upload = () => {

    
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
                <h1 style={contentStyle}>Upload your photos here</h1>
            </div>
            {/* <div>
                <h3 style={contentStyle}>2</h3>
            </div> */}
            </Carousel>
            <Row>
            <Col className="place">
                <Button  type="primary" className="button-placement" onClick={()=>{history.push('/')}}>Home</Button>
            </Col>
            </Row>
            
            <Row>
                <Col>
                    <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >

                        <Form.Item
                            label="Name of Photographer"
                            name="name"
                            className="form_component"
                            // rules={[{ required: true, message: 'Please input your StudentID!' }]}
                        >
                            <Input
                            //  onChange={(e)=>{setStudentId(e.target.value)}} 
                            />
                        </Form.Item>

                        <Form.Item
                            label="Location"
                            name="Location"
                            className="form_component"
                            // rules={[{ required: true, message: 'Please input your Firstname!' }]}
                        >
                            <Input
                            // onChange={(e) => {setFirstname(e.target.value)}}
                            />
                        </Form.Item>
                       
                        <Form.Item
                            label="Date"
                            name="Date"
                            className="form_component"
                            // rules={[{ required: true, message: 'Please input your Firstname!' }]}
                        >
                            <Input
                            // onChange={(e) => {setFirstname(e.target.value)}}
                            />
                        </Form.Item>

                        <Form.Item 
                            className="form_submit"
                            >
                            <Button type="primary" 
                            // onClick={()=>{filldata()}}
                            >Submit</Button>
                        </Form.Item>

                    </Form>
                
                </Col>
            </Row>
        </Fragment>
    );

}
export default Upload;
