function signup(req,res){
    var username= req.body.username;
    var password= req.body.password;
    var emailID= req.body.emailID;
    var phoneNum = req.body.phoneNum;

// store these details in database later
    res.status(200).send({"message":"Success"});


}

exports.signup=signup;
