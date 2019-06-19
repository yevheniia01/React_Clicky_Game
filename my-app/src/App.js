import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

var newArr = [
 {
   guineaPig: 'https://i.pinimg.com/originals/b7/5b/33/b75b339f4f756a8ff4458948fefca590.jpg'
 },
 {
   guineapig2: 'https://static1.squarespace.com/static/57d2d2eb5016e1b624ddfa52/t/5b75c66440ec9a87455831fa/1534445172095/HayPigs_Harlequin_Guinea_Pig_005.jpg'
 },
 {
   kitten: 'https://i.pinimg.com/originals/54/4f/12/544f12a75ee6e6aeba2dcdb282c58480.jpg'
 },
 {
   kitten2: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1001,w_1500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Kitten_murder_Jeff_Merkley_2_copy_hdpoxd.jpg'
 },
 {
   kitten3: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn'
 }
];



function App() {
  for (let i = 0; i < newArr.length; i++) {
     console.log(newArr)
     
   }
   let guineaPig1pic = newArr[0].guineaPig;
   let guineapig2pic = newArr[1].guineapig2;
   let kitten1pic = newArr[2].kitten;
   let kitten2pic = newArr[3].kitten2;
   let kitten3pic = newArr[4].kitten3;
   console.log(guineaPig1pic)
  return (
    
    <div className="App">
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand><h1>Clicking Game!</h1></Navbar.Brand>
      </Navbar>
      <Row>
      <Col xs={6} md={4}>
      <Image className="pics guineaPig1" src= {guineaPig1pic} />
      <Image className="pics kitty1" src= {guineapig2pic} />
      <Image className="pics guineapig2" src={kitten1pic} />
      <Image className="pics kitten2" src= {kitten2pic} />
      <Image className="pics kitten3" src= {kitten3pic}/>

    </Col>
    </Row>
    </Container>
      
    </div>
  );
}

export default App;
