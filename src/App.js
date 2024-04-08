import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Dash1 from './Dash1';
import MidContent from './MidContent';
import Dash2 from './Dash2';
import HoriScr from './HoriScr';
import Dash3 from './Dash3';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Dash1/>
      <MidContent/>
      <Dash2/>
      <HoriScr/>
      <Dash3/>
    </div>
  );
}

export default App;
