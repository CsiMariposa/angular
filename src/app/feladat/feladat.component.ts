import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent {
  primSzam:number=1;
   oszto:number=0;

  PrimSzamE: Void () {
  for(let i:number=1;i<=primSzam;i++){
      if(primSzam%i==0){
          oszto++;
      }
  }
  if(oszto==2){
      console.log(`A generált szám ${primSzam} prím`);
  }
  else{
      console.log(`A generált szám ${primSzam} NEM prím`);
  }
}
}
  eredmenyek:string[]=[];

  EredmenyMentes():void{
    this.eredmenyek.push(`Az ${this.primSzam} megadott szám.`); 
  }




