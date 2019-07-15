const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");
const data = [
    {
        name: "Tree Tops",
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus cras. In fermentum et sollicitudin ac. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Blandit libero volutpat sed cras ornare arcu. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Turpis tincidunt id aliquet risus feugiat in ante metus. Justo nec ultrices dui sapien. Viverra vitae congue eu consequat. Amet dictum sit amet justo donec enim. Pulvinar etiam non quam lacus suspendisse faucibus. Nunc vel risus commodo viverra maecenas accumsan lacus. Est ultricies integer quis auctor elit sed. In cursus turpis massa tincidunt dui ut. Diam vel quam elementum pulvinar etiam non quam. Tortor dignissim convallis aenean et. Proin nibh nisl condimentum id venenatis."
    },
    {
        name: "Lakeside",
        image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus cras. In fermentum et sollicitudin ac. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Blandit libero volutpat sed cras ornare arcu. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Turpis tincidunt id aliquet risus feugiat in ante metus. Justo nec ultrices dui sapien. Viverra vitae congue eu consequat. Amet dictum sit amet justo donec enim. Pulvinar etiam non quam lacus suspendisse faucibus. Nunc vel risus commodo viverra maecenas accumsan lacus. Est ultricies integer quis auctor elit sed. In cursus turpis massa tincidunt dui ut. Diam vel quam elementum pulvinar etiam non quam. Tortor dignissim convallis aenean et. Proin nibh nisl condimentum id venenatis."
    },
    {
        name: "Hilltop",
        image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus cras. In fermentum et sollicitudin ac. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Blandit libero volutpat sed cras ornare arcu. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Turpis tincidunt id aliquet risus feugiat in ante metus. Justo nec ultrices dui sapien. Viverra vitae congue eu consequat. Amet dictum sit amet justo donec enim. Pulvinar etiam non quam lacus suspendisse faucibus. Nunc vel risus commodo viverra maecenas accumsan lacus. Est ultricies integer quis auctor elit sed. In cursus turpis massa tincidunt dui ut. Diam vel quam elementum pulvinar etiam non quam. Tortor dignissim convallis aenean et. Proin nibh nisl condimentum id venenatis."
    }
];

//seedDB deletes all existing campgrounds and comments then Creates new ones from the seed data above
/* function seedDB(){

    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
        //Remove comments
        Comment.remove({}, function(err){
            if(err){
                console.log(err);
            }
            console.log("Removed Comments");
        })

        // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground");
                    //create a comment
                    Comment.create(
                        {text: "This is a great campsite, but there is no internet",
                        author: "Homer"
                        }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });

    //Add a few comments
} //Closing Bracket for seedDb

module.exports = seedDB; */