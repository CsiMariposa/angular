//7) Mely csapat rontotta a legtöbb helyezést a korábbi évekhez képest, feltételezheti, 
//hogy csupán egyetlen ilyen csapatról beszélünk. 
//A csapat nevét elég  és a változás mértékét elegendő megjelenítenie


var MongoClient =require("mongodb").MongoClient; //kliens meghívása 
var url="mongodb+srv://Mokus:alma@cluster0.fhimc7o.mongodb.net/t12"; 
//mindenkinek egyedi lesz. A felületről kell meghívni. A cím végén megkell adni a projekt nevét, amit a felületen hoztunk létre

async function AdatLekerdezes() {
    try {
    const client= await MongoClient.connect(url); 
    console.log("Sikeres csatlakozás"); 

    const db=client.db("mintaAdatbazis"); //Adatbázis kiválasztása
    const collection=db.collection("FIFA"); //adatbázison belül a minkta kollekció

     
    const rendezesBeallitasai={Valtozas:1}; 
    const eredmeny= await collection.find({
        Valtozas:{ 
            $in: [-3]
        }
    },{projection:{
        _id:0, 
        Csapat:1, 
        Valtozas:1}}).sort(rendezesBeallitasai).toArray(); 
    console.log(eredmeny); 

    client.close(); 
    } catch (err) {
        console.log("hiba történt a csatlakozás vagy a lekérdezés közben", err);
    }

}

AdatLekerdezes();