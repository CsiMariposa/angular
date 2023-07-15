import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrls: ['./vizsgafeladat.component.css']
})
export class VizsgafeladatComponent {
  testsuly:number=1;
  magassag:number=1;

  eredmeny:string="";

  testtomegVizsgalat():void{
    eredmeny:this.testsuly/(this.magassag*this.magassag); }

  EredmenyMentes():void{
    this.eredmeny.push(this.testtomegVizsgalat());
  }
 
  eredmenyek:string[]=[];
  EredmenyMentes2():void{
    this.eredmenyek.push(this.magassag+" " +this.testsuly+" "+this.testtomegVizsgalat());
  }
 //Tömbkezelés
 korabbiEredmenyek:string[]=[]

}
