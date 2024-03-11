import "./App.css";
import Input from "./Components/Input";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
      <Title prenom={"Corto"} />
      <Input placeholder={"Task"} />
    </div>
  );
}

export default App;
