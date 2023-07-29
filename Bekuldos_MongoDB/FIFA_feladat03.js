/*3) Mivel alapnak ABC rendben vannak a csapatok, ami nekünk nem megfelelő, 
rendezze immáron pontszám szerint őket, csupán a csapat neve és a helyezése jelenjen meg, 
pontszám szerint csökennő sorban...*/



var MongoClient =require("mongodb").MongoClient; //kliens meghívása 
var url="mongodb+srv://Mokus:alma@cluster0.fhimc7o.mongodb.net/t12"; 
//mindenkinek egyedi lesz. A felületről kell meghívni. A cím végén megkell adni a projekt nevét, amit a felületen hoztunk létre

async function rendezettAdatLekerdezes() {
    try {
    const client= await MongoClient.connect(url); 
    console.log("Sikeres csatlakozás"); 

    const db=client.db("mintaAdatbazis"); //Adatbázis kiválasztása
    const collection=db.collection("FIFA"); //adatbázison belül a minkta kollekció

     
    const rendezesBeallitasai={Pontszam:-1}; 
    const eredmeny= await collection.find({},{projection:{
        _id:0, 
        Csapat:1, 
        Helyezes:1}}).sort(rendezesBeallitasai).toArray(); 
    console.log(eredmeny); 

    client.close(); 
    } catch (err) {
        console.log("hiba történt a csatlakozás vagy a lekérdezés közben", err);
    }

}

rendezettAdatLekerdezes()