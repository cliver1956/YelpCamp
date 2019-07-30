const   express             = require("express"),
        app                 = express(),
        bodyParser          = require("body-parser"),
        mongoose            = require("mongoose"),
        flash               = require("connect-flash"),
        passport            = require("passport"),
        LocalStrategy       = require("passport-local"),
        methodOverride      = require("method-override"),
        Campground          = require("./models/campground"),
        Comment             = require("./models/comment"),
        User                = require("./models/user"),
        //seedDB              = require("./seeds"),
        //Requiring Routes
        commentRoutes       = require("./routes/comments"),
        campgroundRoutes    = require("./routes/campgrounds"),
        indexRoutes         = require("./routes/index")

require('dotenv').config();

//Connect to mongodb atlas (production) version of database
// mongoose.connect("mongodb+srv://cliver:kQ6FbHhj17eumppF@yelpcampcluster-1byyx.mongodb.net/yelpcamp?retryWrites=true&w=majority", {useNewUrlParser: true});
//Connect to local development version of database
// mongoose.connect("mongodb://yelpcampUser:password@10.101.202.153:27017/yelpcamp?retryWrites=true&w=majority", {useNewUrlParser: true});

//Use env variable to connect to database ** set same variable to local or remote db on dev and production environment
const url = process.env.DATABASEURL || "mongodb://yelpcampUser:password@10.101.202.153:27017/yelpcamp?retryWrites=true&w=majority"; 
mongoose.connect(url, {useNewUrlParser: true});


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "I Love Coding",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// Tell Express to listen for requests (start server)

//Code for synolgy nas
/* app.listen(3000, function(){
	console.log("YelpCamp server is listening on port 3000");
}); */

//Code for local and deployment environment
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
console.log("YelpCamp Server listening on Port " + port);