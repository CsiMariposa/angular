var MongoClient =require("mongodb").MongoClient; //kliens meghívása 
var url="mongodb+srv://Mokus:alma@cluster0.fhimc7o.mongodb.net/t12"; 
//mindenkinek egyedi lesz. A felületről kell meghívni. A cím végén megkell adni a projekt nevét, amit a felületen hoztunk létre

async function KollekcioLetrehozasa() {
 try {
 const client=await MongoClient.connect(url); 
 const db = client.db("mintaAdatbazis"); 
 await db.createCollection("FIFA"); 
 console.log("A FIFA kollekció létrejött a minta adatbázison belül"); 
 client.close(); 
 }
 catch(err) {
console.error("Hiba történt a FIFA kollekció létrehozása közben", err)

 }
}

KollekcioLetrehozasa(); 