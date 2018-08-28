module.exports = {
  create: (req, res) => {
    const db = req.app.get("db");
    const { name, description, price, imageurl } = req.body;

    db.create_product([name, description, price, imageurl])
      .then(() => res.status(200))
      .catch(error => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(error);
      });
  },

  getOne: (req, res) => {
    const db = req.app.get("db");
    const { params } = req;

    db.read_product(params.id)
      .then(product => res.status(200).send(product))
      .catch(error => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(error);
      });
  },

  getAll: (req, res) => {
    const db = req.app.get("db");

    db.read_products()
      .then(products => res.status(200).send(products))
      .catch(error => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(error);
      });
  },

  update: (req, res) => {
    const db = req.app.get("db");
    const { params, query } = req;

    db.update_product([params.id, query.desc])
      .then(products => res.status(200).send(products))
      .catch(error => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(error);
      });
  },

  delete: (req, res) => {
    const db = req.app.get("db");
    const { params } = req;

    db.delete_product(params.id)
      .then(products => res.status(200).send(products))
      .catch(error => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(error);
      });
  }
};
