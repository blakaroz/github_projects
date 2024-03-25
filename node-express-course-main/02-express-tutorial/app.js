const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");
//static assets
app.use(express.static("./methods-public"));
//parse json
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/people", people);
app.use("/login", auth);

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please provide credential");
  }
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//post

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide value" });
  }
  //jesli jest sukces to pokaze moich people i potem tez ta osobe ktora udalo mi sie dodac
  res.status(201).json({ success: true, data: [...people, name] });
});

//put
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `plno person with id ${id} exist` });
  }

  // map - iterating przed array of people nasza
  const NewPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ succces: true, data: NewPeople });
});

app.delete("/api/people/:id", (req, res) => {
  person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({
        success: false,
        msg: `not foud person with id ${req.params.id}`,
      });
  }
  //zwracam array obiektow tylko tych ktore nie rownaja ise id z req.params
  const newPeople = people.filter(
    (person) => person.id != Number(req.params.id)
  );
  return res.status(200).json({ succes: true, msg: newPeople });
});

app.listen(6002, () => {
  console.log("server is listening on port 6002....");
});
