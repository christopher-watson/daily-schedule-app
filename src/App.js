import logo from './Assets/logo.svg';
import './App.css';
import GoogleAuth from './Components/GoogleAuth';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <code>Daily Schedule App</code>
            <GoogleAuth />
         </header>
      </div>
   );
}

export default App;
