var url = require('url');

function fetchRestaurants(req,res){
    var parts = url.parse(req.url, true);
    var query = parts.query;

    var location= req.query.location;
    if(req.session.user) {

        if (location.trim().toLowerCase() === "fremont") {
            console.log("Fremont data");
            // will fectch from database later. Hardcoded for now
            restaurantsFremont = {
                "restaurants": [
                    {
                        "name": "Paradise",
                        "location": "37.548271,-121.988571",
                        "address": "5029 Mowry Ave, Fremont, CA 94538",
                        "rating": 4.0,
                        "cuisine": "Indian"

                    },
                    {
                        "name": "The Nawab's Kitchen",
                        "location": "37.494373,-121.941117",
                        "address": "39030 Argonaut Way, Fremont, CA 94538",
                        "rating": 3.5,
                        "cuisine": "Indian"

                    },
                    {
                        "name": "Yuk Wah Restaurant",
                        "location": "37.529659,-122.040237",
                        "address": "37418 Fremont Blvd, Fremont, CA 94536",
                        "rating": 4.3,
                        "cuisine": "Chinese"

                    },
                    {
                        "name": "Boston Market",
                        "location": "37.526337,-122.000792",
                        "address": "3966 Mowry Ave, Fremont, CA 94538",
                        "rating": 4.8,
                        "cuisine": "American"

                    }
                ]
            };
            res.status(200).send(restaurantsFremont);
        } else if (location.trim().toLowerCase() === "san jose") {
            // will fectch from database later. Hardcoded for now
            console.log("San Jose data");
            restaurantsSanJose = {
                "restaurants": [
                    {
                        "name": "Jade China",
                        "location": "37.279518,-121.867905",
                        "address": "2524 Berryessa Rd, San Jose, CA 95132",
                        "rating": 4.2,
                        "cuisine": "Chinese"

                    },
                    {
                        "name": "Chinese Kitchen",
                        "location": "37.432335, -121.899574",
                        "address": "5585 Snell Ave, San Jose, CA 95123",
                        "rating": 3.8,
                        "cuisine": "Chinese"

                    },
                    {
                        "name": "Swaad Indian Cuisine",
                        "location": "37.335480, -121.893028",
                        "address": "498 N 13th St, San Jose, CA 95112",
                        "rating": 4.2,
                        "cuisine": "Indian"

                    },
                    {
                        "name": "Dry Creek Grill",
                        "location": "37.33535, -121.88643",
                        "address": "4570, 1580 Hamilton Ave, San Jose, CA 95125",
                        "rating": 4.8,
                        "cuisine": "American"

                    }
                ]
            };
            res.status(200).send(restaurantsSanJose);

        } else {
            res.status(400).send({"message": "Location does not exist;"})
        }
    }else{
        console.log("Nobody is currently logged in!");
        res.status(400).send({"message":"Nobody is currently logged in!"});
    }

}

exports.fetchRestaurants=fetchRestaurants;