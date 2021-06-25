import './App.css';
import Vaccine from './components/Vaccine.js'


function App() {
  return (
    <div className="App">
    <h1 className="logo">💉VaaxIn💉</h1>
      <div class="content">
      <hr className="line"/>
        <h1>Locate your nearby vaccination centre</h1>
        <p style={{fontSize:"14px",letterSpacing:"8px"}}>#Getyourvaccine</p>
        <Vaccine/>
      </div>
      <footer>
        {/* <hr/> */}
        <p className="animate"><yash><span style={{color : "red"}}>Note </span>: The free vaccination drive for the <span style={{color : "red"}}>18-30</span> age group began in Maharashtra :) </yash></p>
        <h2 className="info">Schedule your vaccine at : <a href="https://www.cowin.gov.in/home"><span style={{fontWeight:"500"}}>Cowin</span></a></h2>
        {/* <hr/> */}
        <p className="love">Made with ❤️ by <a href="https://yashlalpotu.netlify.app"> Yash Lalpotu</a></p>

      </footer>
    </div>
  );
}

export default App;
