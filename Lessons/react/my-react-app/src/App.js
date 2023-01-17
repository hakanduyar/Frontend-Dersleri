import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

let arr = [
  ["Dağ1", "Açıklama 1"],
  ["Dağ2", "Açıklama 2"],
  ["Dağ3", "Açıklama 3"],
];
function App() {
  return (
    <div>
      <h1>Başlık</h1>
      <p>Başlangıç</p>
      <div className="Cards">
        {arr.map(function ([title, par]) {
          return <Card title={title} par={par} />;
        })}
      </div>
    </div>
  );
}

export default App;
