var MongoClient = require("mongodb").MongoClient; //kliens meghívása 
var url = "mongodb+srv://Mokus:alma@cluster0.fhimc7o.mongodb.net/t12";
//mindenkinek egyedi lesz. A felületről kell meghívni. A cím végén megkell adni a projekt nevét, amit a felületen hoztunk létre

async function AdatBeszuras() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("mintaAdatbazis");
        const ujAdatok = [

            {
                Csapat: "Argentina",
                Helyzes: 10,
                Valtozas: 0,
                Pontszam: 1614
            },
            {
                Csapat: "Belgium",
                Helyzes: 1,
                Valtozas: 0,
                Pontszam: 1752
            },

            {
                Csapat: "Brazília",
                Helyzes: 3,
                Valtozas: -1,
                Pontszam: 1719
            },
            {
                Csapat: "Chile",
                Helyzes: 17,
                Valtozas: -3,
                Pontszam: 1576
            },
            {
                Csapat: "Dánia",
                Helyzes: 14,
                Valtozas: -1,
                Pontszam: 1584
            },

            {
                Csapat: "Franciaország",
                Helyzes: 2,
                Valtozas: 1,
                Pontszam: 1725
            },
            {
                Csapat: "Hollandoa",
                Helyzes: 13,
                Valtozas: 3,
                Pontszam: 1586
            },
            {
                Csapat: "Horvátország",
                Helyzes: 8,
                Valtozas: -1,
                Pontszam: 1625
            },
            {
                Csapat: "Kolumbia",
                Helyzes: 9,
                Valtozas: -1,
                Pontszam: 1622
            },
            {
                Csapat: "Mexikó",
                Helyzes: 12,
                Valtozas: 0,
                Pontszam: 1603
            },
            {
                Csapat: "Németország",
                Helyzes: 16,
                Valtozas: -1,
                Pontszam: 1580
            },
            {
                Csapat: "Olaszország",
                Helyzes: 15,
                Valtozas: 1,
                Pontszam: 1583
            },
            {
                Csapat: "Peru",
                Helyzes: 19,
                Valtozas: 0,
                Pontszam: 1551
            },
            {
                Csapat: "Portugália",
                Helyzes: 5,
                Valtozas: 1,
                Pontszam: 1643
            },

            {
                Csapat: "Spanyolország",
                Helyzes: 7,
                Valtozas: 2,
                Pontszam: 1631
            },
            {
                Csapat: "Svájc",
                Helyzes: 11,
                Valtozas: 0,
                Pontszam: 1604
            },
            {
                Csapat: "Svédország",
                Helyzes: 18,
                Valtozas: 0,
                Pontszam: 1560
            },
            {
                Csapat: "Szenegál",
                Helyzes: 20,
                Valtozas: 0,
                Pontszam: 1546
            },
            {
                Csapat: "Uruguay",
                Helyzes: 6,
                Valtozas: -1,
                Pontszam: 1639
            },


        ]

        await db.collection("FIFA").insertMany(ujAdatok); //Many-val több adatot töltünk fel
        console.log("Az új adat beillesztése sikerült")


        client.close();
    }
    catch (err) {
        console.error("Hiba visszajelzés", err)

    }
}

AdatBeszuras(); 