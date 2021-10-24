import { Button, Carousel, Col, Row, Form, Input,Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { serverPath }from './path'
import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router';
import './Upload.css';
import Axios from 'axios'

// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnhmhYIROricK0ac9jF6kITXc1YTPiRVk",
  authDomain: "cloud-project-2-329420.firebaseapp.com",
  projectId: "cloud-project-2-329420",
  storageBucket: "cloud-project-2-329420.appspot.com",
  messagingSenderId: "243880151414",
  appId: "1:243880151414:web:fc8f1494cc0d8110fd9257",
  measurementId: "G-W1VW0FJL8W"
};

// Initialize Firebase
const firebaseApp  = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

//const analytics = getAnalytics(app);
const UploadPage = () => {

   
    const [photographerName,setName] = useState('')
    const [location,setLocation] = useState('')
    const [date,setDate] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    // const props = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //       authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //       if (info.file.status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //       }
    //       if (info.file.status === 'done') {
    //         message.success(`${info.file.name} file uploaded successfully`);
    //       } else if (info.file.status === 'error') {
    //         message.error(`${info.file.name} file upload failed.`);
    //       }
    //     },
    //   };
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

      const filldata = () => {
       // <Alert message="Student added" type="success" />
        var data ={
          photographerName : photographerName,
          location : location,
          date : date,
          selectedFile: selectedFile,
          
        }
        console.log(data)
        // const db = app.firestore();
        // db.settings({
        //     timestampsInSnapshots: true
        // });
        // const userRef = db.collection('pictures').add({
        //     name: name,
        //     location: location,
        //     date : date,
        //     image: image
        // });  
        const imageRef = ref(storage, 'images/' + selectedFile.name);
        const uploadTask = uploadBytesResumable(imageRef, selectedFile, {
            customMetadata: {
              photographerName: photographerName,
              location: location,
              date: date,
            },
        });  
        uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             // setProgress(progress);
              // console.log("Upload Progress => ", progress, "%");
            },
            (error) => {
             // setLoading(false);
              console.log(error);
            },
            () => {
              console.log("Success");
             // setLoading(false);
            }
          );
            // Axios.post(serverPath.local +'/upload', data)
            // .then(res => {          
            // console.log(res)
            // })
            // .catch(er => console.log(er))
      }

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
                             onChange={(e)=>{setName(e.target.value)}} 
                            />
                        </Form.Item>

                        <Form.Item
                            label="Location"
                            name="Location"
                            className="form_component"
                            // rules={[{ required: true, message: 'Please input your Firstname!' }]}
                        >
                            <Input
                             onChange={(e) => {setLocation(e.target.value)}}
                            />
                        </Form.Item>
                       
                        <Form.Item
                            label="Date"
                            name="Date"
                            className="form_component"
                            // rules={[{ required: true, message: 'Please input your Firstname!' }]}
                        >
                            <Input
                             onChange={(e) => {setDate(e.target.value)}}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Image"
                            name="Image"
                            className="form_component"
                            // rules={[{ required: true, message: 'Please input your Firstname!' }]}
                        >
                            <Input
                            type="file"
                            value={selectedFile}
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                            />
                        </Form.Item>
                        {/* <Upload {...props}
                        //onChange={(e) => {setImage(defaultFileList)}}
                            defaultFileList={(e) => {setImage(e.target.value)}}
                        >
                            <Button 
                            className="button-placement2"
                            //onClick={(e) => {setImage(e.target.value)}}
                            icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload> */}
                        <Form.Item 
                            className="form_submit"
                            >
                            <Button type="primary" 
                             onClick={()=>{filldata()}}
                            >Submit</Button>
                        </Form.Item>

                    </Form>
                
                </Col>
            </Row>
        </Fragment>
    );

}
export default UploadPage;
