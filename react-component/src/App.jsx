import './App.css'
import Greetings from "./components/Greetings";
import User from "./components/User";

function App() {
  return (
    <>
      <div className="card">
        <Greetings message="This content is rendered on the browser." />
        <User name="Lwin Moh Moh Theint" />
      </div>
    </>
  );
}

export default App;