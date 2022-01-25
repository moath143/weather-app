import "./App.css";
import App_five from "./Applications/App_five/App_five";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <h1>Weather Application built by React js</h1>
          <App_five />
        </div>
      </div>
    </Router>
  );
}

export default App;
