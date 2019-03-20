import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clicks = [];
  title = 'assignment3';
  number = 0;
  secret = false;

  constructor(){
    
  }

  onCreatButton(){
    this.number++;
    this.clicks.push(new Date());

    // if(this.secret === false){
    //   this.secret = true;
    // }
    // else{
    //   this.secret = false;
    // }


    this.secret === false? this.secret = true : this.secret=false;

  }
}
