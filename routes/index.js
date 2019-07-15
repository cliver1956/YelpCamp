const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

//Root Route
router.get("/", function(req, res){
    res.render("landing");
});



//================
//AUTH Routes
//================

//Show Register Form
router.get("/register", function(req, res){
    res.render("register");
});

//Sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YalpCamp " + user.username);
            res.redirect("/campgrounds");
        })
    });
});

//Show Login Form
router.get("/login", function(req, res){
    res.render("login");
});

//Login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), 
    function(req, res){
});

//Logout Route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/campgrounds");
});

module.exports = router;