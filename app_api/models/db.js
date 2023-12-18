var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://dariliomer44:,123456,@cluster0.l7x1nsa.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI);
mongoose.connection.on("connceted", function (){
    // MongoDB üzerinden default olarak ayarlı connected olarak  kalmalı hep
    console.log(db.dbURI+" adresine bağlandı.");
});
mongoose.connection.on("error", function (){
    console.log("Bağlantıda hata var.");
});
mongoose.connection.on("disconnceted", function (){
    console.log("bağlantı koptu.");
});
process.on("SIGNINT", function(){
    mongoose.connection.close();
    console.log("uygulama kapatıldı.");
    procces.exit(0);
});
require("./venue");
 
