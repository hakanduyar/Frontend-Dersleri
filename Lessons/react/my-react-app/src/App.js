import { Button, Input, Textarea } from "@mantine/core";
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
  const [lesson] = useState(11);
  return (
    <div onResize={() => console.log("resize oldu")}>
      <h1>Kart oluşturma programı</h1>
      <Input.Wrapper label="Input label">
        <Input placeholder="Başlık yazınız" />
      </Input.Wrapper>
      <Textarea placeholder="Paragraf yazınız" label="Paragraf" withAsterisk />
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
      >
        Deneme buton
      </Button>
      <h2>Kartlar</h2>
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
