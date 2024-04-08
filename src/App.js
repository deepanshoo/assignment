import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Dash1 from './Dash1';
import MidContent from './MidContent';
import Dash2 from './Dash2';
import HoriScr from './HoriScr';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Dash1/>
      <MidContent/>
      <Dash2/>
      <HoriScr/>
      <h1>Tailwind Initialised</h1>
    </div>
  );
}

export default App;
