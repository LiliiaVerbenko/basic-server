const Fruit = require('../models/Fruit')

const index = async (req, res) => {
    // showAll()
    try{
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    } catch(error) {
        res.status(404).send({error:err})
    }
  }

const show = async (req, res) => {
    const input = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.show(input)
        res.status(200).send(fruit)
    } catch (err) {
        res.status(404).send({error: err})
    }  
}

const create = async (req, res) => {
    const data = req.body

    try{
        //1. Call a method from the model
        const newFruit = await Fruit.create(data)

        //2, Send a responce with a status code and the new element
        res.status(201).send(newFruit) // 401 - conflift in creation, "fruit alreafy exists"
    } catch(err) {
        res.status(409).send({error: err})
    }
}

const update = async (req,res) => {
    const data = req.body;
    const name = req.params.name.toLowerCase();

    try{
    // retrieving the spesific fruit that we want to update
    const fruit = await Fruit.show(name)
    const updatedFruit = await fruit.update(data)
    res.status(200).send(updatedFruit)
    } catch(err){
        res.status(404).send({error: err})
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try {
      const fruit = await Fruit.show(name);
      const result = await fruit.destroy();

      res.sendStatus(204)
    } catch (err) {
      res.status(404).send({ error: err});
    }
};


//  module.exports = {index, show, create, update, destroy}

module.exports = {index, show, create, update, destroy}



// mc-backend-restful-complete