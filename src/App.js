import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className=" bg-gray-50 ">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
