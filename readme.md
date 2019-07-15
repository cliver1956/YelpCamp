mongodb+srv://cliver:38olssal@yelpcampcluster-1byyx.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://cliver:38olssal@yelpcampcluster-1byyx.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

ROUTES:

name	url		verb	description
==============================================================
INDEX	/dogs		GET	Display a list of all dogs
NEW	/dogs/new	GET	Display Form to create new dog
CREATE	/dogs		POST	Add new dog to DB
SHOW	/dogs/:id	GET	Shows info about one dog


#RESTfull Routing

##Introduction
* Define Rest and explain why it matters
* List all 7 RESTfull Routes
* Show examples

REST - a mapping between HTTP routes and CRUD

CRUD = 
CREATE
READ
UPDATE
DESTROY 

Added files to Git repo
