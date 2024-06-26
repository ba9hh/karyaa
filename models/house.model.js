const mongoose =require('mongoose');

const houseSchema = mongoose.Schema(
    
    {
        // tout ce que LOGICIEL **************************************************
        id:{
            type : String,
            required : true
        },
        userId:{
            type : String,
            required:true
        },
        // tout ce que LOCALISATION ***********************************************
        region:{
            type : String,
            required:true
        },
        minicipalite:{
            type : String,
            required:true
        },
        quartier:{
            type : String,
            required:true
        },
        presDe:{//cafe ou restou ou any place close to the house
            type : String,
            required:true
        },
        // tout ce que INFORMATIONS *************************************************
        type:{//villa ,appartement ou maison
            type : String,
            required:true
        },
        cible:{//etudiant , 
            type : String,
            required:true
        },
        chambre:{
            type : Number,
            required:true
        },
        lit:{
            type : Number,
            required:true
        },
        salon:{
            type : Boolean,
            required : true
        },
        // tout ce que PRIXX ****************************************************
        prix:{ 
            type : String,
            required:true
        },
        paiementPar:{ // par moins, par jour par semaine 
            type : String,
            required:true
        },
        // tout ce que des IMAGES
        images:{

        }
    }
);

const House = mongoose.model("House",houseSchema);
module.exports = House;