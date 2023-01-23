import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let arr = [
  {
    title: "Dağ 1",
    par: "Açıklama 1",
  },
  {
    title: "Dağ 2",
    par: "Açıklama 2",
  },
  {
    title: "Dağ 3",
    par: "Açıklama 3",
  },
];

// const kare = (sayi) => sayi * sayi;

const App = () => {
  // console.log("Kare hesaplama", kare(5));
  const [val, setVal] = useState("Ders 11");
  return (
    <div>
      <h1>Başlık</h1>
      <h2>{val}</h2>
      <button>Değiştir</button>
      <p>Başlangıç</p>
      <div className="Cards">
        {arr.map(({ title, par }) => (
          <Card par={par} title={title} />
        ))}
      </div>
    </div>
  );
};

export default App;
