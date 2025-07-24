import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
let teaData = [];
let nextId = 1;

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name: name, price: price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

app.get("/teas/:id", (req, res) => {
  teaData.find((tea) => {
    const teaId = tea.id === parseInt(req.params.id);
    if (teaId === -1) {
      console.log(`Tea ID not found.. ${teaId}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running or port no ${port}....`);
});
