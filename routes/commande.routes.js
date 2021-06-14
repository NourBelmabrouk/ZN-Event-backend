const controller= require("../controllers/commande.controller");

module.exports=function (app) {
    app.use(function (req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/commande/add", controller.addCommande);
    app.post("/api/commande/findCommandeByClientId",controller.findCommandeByClientId);
    app.post("/api/commande/findCommandeByServiceId",controller.findCommandeByServiceId);
    app.post("/api/commande/confirmCommande",controller.confirmCommande);
    app.post("/api/commande/acceptCommande",controller.acceptCommande);
    app.post("/api/commande/findAcceptedCommandes",controller.findAcceptedCommandes);
    app.post("/api/commande/findNonAcceptedCommandes",controller.findNonAcceptedCommandes);
    app.post("/api/commande/findConfirmedCommande",controller.findConfirmedCommande);
    app.post("/api/commande/findNonConfirmedCommande",controller.findNonConfirmedCommande);
    app.post("/api/commande/acceptCommande",controller.acceptCommande);
    app.post("/api/commande/confirmCommande",controller.confirmCommande);
    app.post("/api/commande/deleteCommande",controller.deleteCommande);

}