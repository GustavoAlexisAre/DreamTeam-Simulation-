const express = require('express');
const router = express.Router();
const {getFootballFixtures,getFootballFixturesById} = require('../services/futbolApi.service');
const Predicciones = require("../models/Prediccion.model");
const User = require("../models/User.model");
const onlyAdmin = require("../middleware/adminAccess")



router.get("/dashboard", onlyAdmin, (req, res) => {
res.render("admin/dashboard" , {userInSession: req.session.currentUser})
})

router.get("/dashboard/userList", onlyAdmin, (req, res, next) => {
    User.find()
    .populate("Predicciones")
        .then(usuarios => {
            console.log(usuarios.data)
            res.render("admin/userlist", {userInSession: req.session.currentUser, usuario: usuarios})
        })
        .catch(err => {
            next(err)
        })
})

router.get("/dashboard/userList/edit/:id", onlyAdmin, async (req, res, next) => {
    try {
        const { id } = req.params
        const datos = await User.findById(id)
        res.render("admin/editUsers", { layout: false, userInSession: req.session.currentUser, datos })
    } catch (err) {
        next(err)
    }
})

module.exports = router