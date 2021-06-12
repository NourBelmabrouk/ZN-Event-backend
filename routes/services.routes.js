const controller= require("../controllers/addService.controller");

module.exports=function (app) {
    app.use(function (req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/service/add", controller.addService);
    app.get("/api/service/findAll",controller.findAll);

}