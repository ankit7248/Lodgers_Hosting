const express = require("express")
const router = new express.Router();
const Flatdata = require("../models/flatdatas");

router.post("/flat", async (req, res) => {
    console.log(req.body);

    const user = new Flatdata(req.body);           // get the req from postman json file in Flatdata
    try {
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/flat", async (req, res) => {  // Read the Https Request

    try {
        const flatsdata = await Flatdata.find();
        res.send(flatsdata);

    } catch (e) {
        res.send(e)
    }
})

router.get("/flat/:id", async (req, res) => {
    try {

        const _id = req.params.id;
        const flatdata = await Flatdata.findById(_id);  // await -> it's till wait when the data will come 
        console.log(flatdata);
        if (!flatdata) {  // if data is not in flat Data
            return res.status(404).send();
        } else {
            res.send(flatdata);
        }
    } catch (e) {
        res.status(500).send(e); //500 internal server error
    }
})

// delete the flat by id

router.delete("/flat/:id", async (req, res) => {
    try {
        const deleteflat = await Flatdata.findByIdAndDelete(req.params.id);
        if (!deleteflat) {
            return res.status(404).send();
        }
        else {
            res.send(deleteflat);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})

// Update the flat by id

router.patch("/flat/:id", async (req, res) => {
    try {
        const updateflat = await Flatdata.findByIdAndUpdate(req.params.id, req.body, {
            new: true  // new true -> give the updataed item in Https response
        });
        res.send(updateflat);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.patch("/flat/:id", async (req, res) => {
    try {
        const updateflat = await Flatdata.findByIdAndUpdate(req.params.id, req.body, {
            new: true  // new true -> give the updataed item in Https response
        });
        res.send(updateflat);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;