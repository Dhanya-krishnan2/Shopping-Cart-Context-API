
// import './App.css';
// import NavbarIcon from './Components/Navbar'
// import Contacts from './Components/Contacts'
// import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      {/* these are for contact list */}
      {/* <NavbarIcon/>
      <Container>
        
      <Contacts/>
      </Container> */}
      <Nav/>
      <HomeScreen/>
    </div>
  );
}

export default App;
