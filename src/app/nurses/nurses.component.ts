import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css']
})
export class NursesComponent {
  numb :number = 0;
  modal = false;
  nursesData: any = []; 
  newData : any = [];
  price : number = 0;
  constructor(private http : HttpClient) {
      this.http.post('https://api.digital4nurse.ch/api/public/nurse-search',{"sort_by":"name-desc"}).subscribe((dta:any) =>{
        this.nursesData = dta.data;
      })
     
  }
  selected(i: any){
    this.newData.push(this.nursesData[i]);
    this.nursesData.splice(i,1);
    this.numb++;
  }
  UnSelected(i:any) {
    this.nursesData.push(this.newData[i]);
    this.newData.splice(i,1);
    this.numb--;
  }
  selectAll(){
    for(let i=0; i < this.nursesData.length; i++) {
        this.newData.push(this.nursesData[i]);
        this.numb++;
    }
    this.nursesData = [];
  }
  unSelectAll(){
    for(let i=0; i < this.newData.length; i++) {
      this.nursesData.push(this.newData[i]);
      this.numb--;
    }
    this.newData = [];
  }
  Modal() {
    if(this.modal == true) {
      this.modal = false;
    } else {
      this.modal = true;
    }
  }
}
