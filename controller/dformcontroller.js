// Dashboard Form Model
const dform = require('../model/form');

// Insert Dashboard Data's
module.exports.finsertdata = (req,res) =>
{
    dform.create({
        fname : req.body.fname,
        lname : req.body.lname,
        demail : req.body.demail,
        dpassword : req.body.dpassword,
        dgender : req.body.dgender,
        dhobby : req.body.dhobby,
        dphone : req.body.dphone,
        dcity : req.body.dcity
    },(err,data)=>{
        if(err){
            console.log(err);
            return false;
        }
        console.log("data successfully insert");
        return res.redirect('back');
    })
}
// View Dashboard Data
module.exports.viewdata = async(req,res) => 
{
    try
    {
        let drecord = await dform.find({});


        if(drecord) 
        {
            return res.render('viewpage',{
                record : drecord
            })
        }

        console.log("Does Not View Your Data");

    }
    catch(error)
    {
        console.log(error); 
    }
}
// Delete Dashboard Data's
module.exports.deletedata = (req,res) =>
{
    let id= req.params.id;
    dform.findByIdAndDelete(id,(err)=>{

        if(err)
        {
            console.log("Data Not Delete");
            return false;
        }
        return res.redirect('back');
    });
}