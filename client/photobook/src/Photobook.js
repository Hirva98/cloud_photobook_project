import { Button, Form, Carousel, Col, Row, Input, Space, DatePicker, Image, Card, Modal,Drawer,Radio} from 'antd';
import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//import firebase from 'firebase';
import { collection, getDocs, getFirestore, deleteDoc,doc,} from "firebase/firestore";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable ,deleteObject} from "firebase/storage";

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

const firebaseApp  = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const Photobook = () => {
    
  const db = getFirestore();
  const [pictures, setPictures] = useState([]);
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('right');

  const showDrawer = () => {
    setVisible(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setVisible(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);
 
 
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "pictures"));
    //let pictureData: Picture[] = [];
    let pictureData = [];
    querySnapshot.forEach((doc) => {
      
      console.log(`${doc.id} => ${doc.data()}`);
      let parsed = doc.data() ;
      parsed.dateParsed = new Date(parsed.imageDate);
      pictureData.push(parsed);
      // parsed.dateParsed = new Date(parsed.imageDate);
      // pictureData.push(parsed);
    });
    setPictures(pictureData)
    // console.log(pictureData);
     console.log(pictures);

    
   
  };

  const deletedata = async (getfromName) => {
    const nameofFile = getfromName
    console.log(nameofFile);
    await deleteDoc(doc(db, "pictures", `${nameofFile.split("/")[1]}`));
    const imageRef = ref(storage, nameofFile);
    deleteObject(imageRef)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatedata = async (getfromName) => {
    setVisible(true);
    const nameofFile = getfromName
    console.log(nameofFile)
    const querySnapshot = await getDocs(collection(db, "pictures"));
    //let pictureData: Picture[] = [];
    let pictureData = [];
    querySnapshot.forEach((doc) => {
      
     // console.log(`${doc.id} => ${doc.data()}`);
      let parsed = doc.data() ;
      parsed.dateParsed = new Date(parsed.imageDate);
      pictureData.push(parsed);
      // parsed.dateParsed = new Date(parsed.imageDate);
      // pictureData.push(parsed);
    });
    setPictures(pictureData)
    // console.log(pictureData);
   //  console.log(pictures);

    
   
  };
    
    const history = useHistory()

    const contentStyle = {
        height: '160px',
        color: 'white',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

return (
  <div>
    {(visible ? " ": "")}
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
           
            <div className="mt-8 mb-8 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {pictures.map((picture) => (
              <div
                key={picture.filename}
                className="rounded-xl shadow-lg overflow-hidden bg-white"
              > 
              <div></div>
               <div>
                <Card
                  hoverable
                  style={{ width: 100 }}
                  cover={<img alt={picture.filename} src={picture.imageURL} />}
                ></Card>
              </div>
                <div className="p-4">
                  <div className="mb-3">
                   <h4> Label : {picture.label}</h4>
                  </div>
                  <h4 className="text-xl font-bold text-gray-600">
                   Photographer Name : {picture.photographerName}  
                  </h4>
                  <h4 className="text-xl font-bold text-gray-600">
                  Location: {picture.location}
                  </h4>
                
                </div>
                <div> <Button  
                onClick={()=>{deletedata(picture.filename)}  }
               >Delete</Button></div>
                <div> <Button  
                onClick={()=>{updatedata(picture.filename)}  }
               >Update</Button>
              </div>
            </div>
              
            ))}
      </div>              
       </Fragment> 
       </div>
    );

}
export default Photobook;
