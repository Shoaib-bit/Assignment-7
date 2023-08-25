import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  data : any = [];
  id : any;
  constructor(private http : HttpClient,
    public activateRoute : ActivatedRoute) {
      this.http.get('https://api.digital4nurse.ch/api/public/nurse/9').subscribe((dta:any) => {
        this.data = dta;
        console.log(this.data)
      })
    this.activateRoute.paramMap.subscribe((dta) => {
      console.log(dta.get('id'))
      this.id = dta.get('id');
    })

  }
}
