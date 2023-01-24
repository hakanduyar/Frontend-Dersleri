import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let arr = [
  {
    id: 1,
    title: "Dağ 1",
    par: "Açıklama 1",
  },
  {
    id: 2,
    title: "Dağ 2",
    par: "Açıklama 2",
  },
  {
    id: 3,
    title: "Dağ 3",
    par: "Açıklama 3",
  },
];

// const kare = (sayi) => sayi * sayi;

const App = () => {
  // console.log("Kare hesaplama", kare(5));
  const [lesson, setLesson] = useState(11);
  return (
    <div onResize={() => console.log("resize oldu")}>
      <h1>Başlık</h1>
      <h2>Ders {lesson}</h2>
      <button
        onClick={() => {
          setLesson(lesson + 1);
        }}
      >
        Ders arttır
      </button>
      <button
        onClick={() => {
          setLesson(lesson - 1);
        }}
      >
        Ders azalt
      </button>
      <button
        onClick={() => {
          setLesson(100);
        }}
      >
        Ders 100
      </button>
      <p>Başlangıç</p>
      <div className="Cards">
        {arr.map(({ id, par, title }) => (
          <Card key={id} par={par} title={title} />
        ))}
      </div>
    </div>
  );
};

export default App;
