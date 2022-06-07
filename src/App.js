import logo from './logo.svg';
import Background from './images/Abrahamlakealberta.jpg';
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from 'react-bootstrap/Navbar'
//import Container from 'react-bootstrap/Navbar'
 
import Bookmark from './Bookmark';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';


library.add(fas, faTwitter, faFontAwesome)



function App() {


  return (
    <div className="App"  >

        <Bookmark></Bookmark>
    </div>
  );
}

export default App;
