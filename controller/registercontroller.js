const Register = require('../model/register');

const nodemailer = require('nodemailer');

const otp = require('otp-generator');


// Login Data
module.exports.login=(req,res)=>{

    if(!req.cookies.userLogin)
    {
        return res.render('login'); 
    }

    return res.redirect('/dash');
};
// Index 
module.exports.index=(req,res)=>{
    return res.render('register');
};

// DashBoard
module.exports.dash=(req,res)=>{
    if(req.cookies.userLogin)
    {
        return res.render('dashboard',{
            record : req.cookies.userLogin
        });
    }
    return res.redirect('/');
};
// Logout
module.exports.logout = (req,res) => {
    res.clearCookie('userLogin');
    return res.redirect('/');
}
// Log in 
module.exports.loginData = (req,res) => {

    Register.findOne({email : req.body.email},(err,userData)=>{
        if(err){
            console.log("Record not found");
            return false;
        }

       if(userData && userData.password == req.body.password)
       {
            res.cookie('userLogin',userData);
            return res.redirect('/dash');
       }
       else{
        console.log("Email and password not valid"); 
       }
       
    });
}
// InsertData
module.exports.insertdata=async(req,res)=>{
    try
    {
        if(req.body.password==req.body.cpass)
        {
            const registerData=await Register.create({

                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                password:req.body.password
                
            });

            if(registerData)
            {
                console.log("User Succesfully Register");
                return res.redirect('/');
            }
            else
            {
                console.log("User Unsuccessfully Register");
                return res.redirect('back');
            }
        }
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}

module.exports.forgetpass = (req,res) => {

    
    let email = req.body.email;


    let Cotp = otp.generate(6,{
        upperCaseAlphabets : false,
        lowerCaseAlphabets : false,
        specialChars : false
    })

    Register.find({},(err,data)=>{
        if(err){
            console.log("data not found");
            return false;
        }
        
        for(let i in data){
            if(email != ""){
                console.log(email);
                if(data[i].email == email){

                    let mail = nodemailer.createTransport({
                        service : 'gmail',
                        auth : {
                            user : 'akshaysoni6578@gmail.com',
                            pass : 'szurjlzgdvbfwcph'
                        }
                    });
                    let mailOptions = {
                        from : 'akshaysoni6578@gmail.com',
                        to : email,
                        subject : 'Reset your instagram Password',
                        html : '<img src="https://img.utdstc.com/icon/750/dac/750dac4b43480421859ab9d85f17d902009fc8911ae555456e1b6554b307a045:200"><h1> OTP = '+Cotp+'</h1>'
                    };

                    mail.sendMail(mailOptions,(err,info) => {
                        if(err) throw err;
                        console.log('message sent');
                    })

                    return res.redirect('/otp');
                }
            }else{
                alert('enter email');
            }
        }
    });
};

module.exports.otp = (req,res) =>{
    return res.render('otp')
} 