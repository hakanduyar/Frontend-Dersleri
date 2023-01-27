import { Button, Checkbox } from "@mantine/core";
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
  {
    id: 4,
    title: "Dağ 4",
    par: "Açıklama 4",
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
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
      >
        Deneme buton
      </Button>
      ;
      <Button
        onClick={() => {
          setLesson(lesson - 1);
        }}
      >
        Ders arttır
      </Button>
      <Button
        onClick={() => {
          setLesson(lesson - 1);
        }}
      >
        Ders azalt
      </Button>
      <Button
        onClick={() => {
          setLesson(100);
        }}
      >
        Ders 100
      </Button>
      <Checkbox label="I agree to sell my privacy" />
      <p>Başlangıç</p>
      <div className="Cards">
        {arr.map(({ par, title }, i) => (
          <Card
            key={`index ${i}`}
            par={par}
            title={title}
            lesson={lesson}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
