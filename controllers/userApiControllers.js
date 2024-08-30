

module.exports ={
    register,
};
async function register(req,res){
    try{

        res.status(200).json({ status: true, message: "User registration successfully!" });
  
    }catch(error){
       console.log('Registration error:',error);
       res.status(500).send("Internal server error");
    }
}
