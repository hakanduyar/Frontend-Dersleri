import { Container, Grid, Stack, Button, Input, Textarea } from "@mantine/core";
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

  let name = "Hakan";
  let isActive = true;
  let theMountain = {
    name: "Everest",
    height: 1000,
    volcanicActivity: false,
    mountain: {
      name: "Mini tepe",
      height: 2000,
    },
    ways: [
      {
        wayName: "north",
        km: 3000,
      },
      {
        wayName: "east",
        km: 3000,
      },
    ],
  };
  let primeNumbers = [2, 3, 5, 7];
  let names = ["Ahmet", "Mehmet", "Ali"];
  let bools = [true, false, true];
  let matrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  // console.log(matrix[1][1]);
  console.log(theMountain.ways[0].wayName);

  const [title, setTitle] = useState("");
  const [paragraf, setParagraph] = useState("");
  const [list, setList] = useState(arr);
  const click = () => {
    setTitle("");
    setParagraph("");
    const copyList = [...list];
    copyList.push({
      id: 5,
      title,
      par: paragraf,
    });
    setList(copyList);
  };
  return (
    <Container>
      <h1>Kart oluşturma programı</h1>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input
            placeholder="Başlık yazınız"
            width={400}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Textarea
          placeholder="Paragraf yazınız"
          label="Paragraf"
          value={paragraf}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <Button variant="outline" onClick={click}>
          Kart oluştur
        </Button>
      </Stack>
      <h2>Kartlar</h2>
      <Grid>
        {list.map(({ par, title }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card par={par} title={title} index={i} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
