import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1>Başlık</h1>
      <p>Başlangıç</p>
      <div className="Cards">
        <Card title="Dağ 1" p="Açıklama 1" />
        <Card title="Dağ 2" p="Açıklama 2" />
        <Card title="Dağ 3" p="Açıklama 3" />
        <Card title="Dağ 4" p="Açıklama 4" />
      </div>
    </div>
  );
}

export default App;
