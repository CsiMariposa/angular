//6) Jelenítse meg azoknak a csapatoknak a nevét és pontszámát, akik 1600 pontnál többet szereztek

var MongoClient =require("mongodb").MongoClient; //kliens meghívása 
var url="mongodb+srv://Mokus:alma@cluster0.fhimc7o.mongodb.net/t12"; 


async function szurtLekerdezes() {
try {
    const client= await MongoClient.connect(url); 
    console.log("Sikeres csatlakozás"); 

    const db=client.db("mintaAdatbazis"); //Adatbázis kiválasztása
    const collection=db.collection("FIFA"); //adatbázison belül a minkta kollekció

 const szurtAdat=await collection.find({Pontszam:{$gt:1600}},{projection:{
    _id:0, 
    Csapat:1}}).toArray(); 
 //gt: nagyobb mint, grater
 console.log("1600 pontnál nagyobb csapatok:", szurtAdat); 

    client.close(); 

    } catch (err) {
        console.log("Hiba történt a csatlakozás vagy a lekérdezés közben: ", err);
    }

}
szurtLekerdezes(); 