function PostLogin(req,res){
    var username= req.body.username;
    var password= req.body.password;

    if(username.trim() === "UILand" && password === "UILand"){
        console.log("Succesful Login");
        req.session.user = username;
        console.log(req.session.user);
        res.status(200).send({"message":"Success"});

    }else{
        console.log("Failed Login")
        res.status(400).send({"message":"Invalid Credentials"});
    }

}

function getLogout (req, res)
{
    console.log("Logging out:");

    if (req.session.user)
    {
        var name = req.session.user;
        console.log(name);

        req.session.destroy(function()
        {
            console.log(name + " logged out.");
        });

        res.status(200).send({"message":"Logged Out Sucessfully"});
    }
    else
    {
        console.log("Nobody is currently logged in!");
        res.status(400).send({"message":"Nobody is currently logged in!"});
    }
}

exports.PostLogin=PostLogin;
exports.getLogout=getLogout;
