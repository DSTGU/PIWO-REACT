import './App.css';
import Home from './Pages/Home';
import New from "./Pages/New";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Our TODO app
      </header>
 

      <div className = "main-nav-container">
        <nav>
          <a>Home</a>
          <a>New</a>
        </nav>

        <Home></Home>
        <New></New>
      </div>

      <footer>
        A to footer
      </footer>
    </div>
    
  );
}

export default App;
