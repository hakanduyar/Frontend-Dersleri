import { Container, Grid, Stack, Button, Input, Textarea } from "@mantine/core";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraph] = useState("");
  const [list, setList] = useState([
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
  ]);

  // const theMountain = {
  //   id: 3,
  //   title: "Dağ 3",
  //   par: "Açıklama 3",
  // };
  // let { id, par } = theMountain;
  // console.log(par);
  const click = () => {
    setTitle("");
    setParagraph("");
    setList([
      {
        id: 5,
        title,
        par: paragraf,
      },
      ...list /*...list ile listin kopyasını oluşturduk */,
    ]);
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
            <Card
              par={par}
              title={title}
              i={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
