//4) Jelenítse meg a legjobb 3 csapat minden adatát! Helyezésük alapján rendezve.

var MongoClient =require("mongodb").MongoClient; //kliens meghívása 
var url="mongodb+srv://Mokus:alma@cluster0.fhimc7o.mongodb.net/t12"; 
//mindenkinek egyedi lesz. A felületről kell meghívni. A cím végén megkell adni a projekt nevét, amit a felületen hoztunk létre


async function HaromLegjobbHelyezes() {
try {
    const client= await MongoClient.connect(url); 
    console.log("Sikeres csatlakozás"); 

    const db=client.db("mintaAdatbazis"); //Adatbázis kiválasztása
    const collection=db.collection("FIFA"); //adatbázison belüli kollekció

 const rendezesBeallitasai= { Helyezes: 1}; 
 const szurtAdat=await collection.find({Helyzes:{$lt:4}}).toArray(); 

 console.log("Az első három helyezett:", szurtAdat); 

    client.close(); 

    } catch (err) {
        console.log("Hiba történt a csatlakozás vagy a lekérdezés közben", err);
    }

}
HaromLegjobbHelyezes(); 