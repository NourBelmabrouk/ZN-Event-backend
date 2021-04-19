const  jwt=require("jsonwebtoken");
const config=require("../config/auth.config");
const db=require("../models");
const  User=db.user;


verifyToken=(req,res,next)=>{
    let token=req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId=decoded.id;
        next();
    });
};

isAdmin=(req,res,next)=>{
    User.findByPk(req.userId).then(user =>{
        user.getRoles().then(roles=>{
            for(let i=0;i<roles.length;i++){
                if(roles[i].name==="admin"){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        });
    });
};

isClient=(req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "client") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Client Role!"
            });
        });
    });
};

isPrestataire=(req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "prestataire") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Prestatire Role!"
            });
        });
    });
};

const  authJwt={
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isClient: isClient,
    isPrestataire: isPrestataire
};

module.exports=authJwt;