import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  List = [];

  onAdd(add) {
     this.List.push({name: add.value});
  }

  onDelete() {
    this.List.pop();
    console.log(this.List);
  }

  onDeletee(i) {
    this.List.splice(i, 1);
    console.log(i);
  }

  ngOnInit(): void {}

}
