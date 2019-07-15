const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");
const middleware = require("../middleware");


//INDEX: Show all campgrounds in DB
router.get("/", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
    
});

//CREATE: Add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var price =req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, price: price, image: image, description: desc, author: author};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //console.log(newlyCreated);
            //redirect back to camgrounds page note: defaultsa to GET
            res.redirect("/campgrounds");
        }
    });

});

//NEW: Show form to create a new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//SHOW: Shows more data about selected campground
router.get("/:id", function(req, res){
    //Find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //Render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// EDIT campground Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", " Sorry I can't find that campground");
            }
            res.render("campgrounds/edit", {campground: foundCampground});
        }); 
});

//UPDATE campground Route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    //Find and update correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            //Redirect to show page for that campground
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    
});

//DESTROY: Delete campground
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            req.flash("Success", "Campground Deleted");
            res.redirect("/campgrounds");
        }
    })
});

module.exports = router;