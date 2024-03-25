let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide value" });
  }
  //jesli jest sukces to pokaze moich people i potem tez ta osobe ktora udalo mi sie dodac
  res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `not foud person with id ${req.params.id}`,
    });
  }
  //zwracam array obiektow tylko tych ktore nie rownaja ise id z req.params
  const newPeople = people.filter(
    (person) => person.id != Number(req.params.id)
  );
  return res.status(200).json({ succes: true, msg: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
