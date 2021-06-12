const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`Vous devez sélectionner un fichier.`);
        }

        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                __basedir + "/resources/static/assets/uploads/" + req.file.filename
            ),
        }).then((image) => {
            fs.writeFileSync(
                __basedir + "/resources/static/assets/tmp/" + image.name,
                image.data
            );

            return res.send(`Le fichier a été téléchargé.`);
        });
    } catch (error) {
        console.log(error);
        return res.send(`Erreur lors de la tentative de téléchargement d'images: ${error}`);
    }
};

module.exports = {
    uploadFiles,
};