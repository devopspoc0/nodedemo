const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello world with ngork aws and take 2");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});