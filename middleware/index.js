const Campground = require("../models/campground");
const Comment = require("../models/comment");
const middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
//To check ownership status
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "Campground Not Found, Sorry.")
                res.redirect("back");
            } else {
                //does user own the campground?
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "Sorry, you are not the originator of that campground.")
                    res.redirect("back");
                }
            }
            
        });
    } else {
        req.flash("error", "You need to be logged in to do that..")
        res.redirect("back");
    }
};


middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back");
            } else {
                //does user own the comment?
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You are not the author of that comment")
                    res.redirect("back");
                    }
            }
            
        });
    } else {
        req.flash("error", "You need to be logged in to do that..")
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You must be Logged In to do that..");
    res.redirect("/login");
}

module.exports = middlewareObj;