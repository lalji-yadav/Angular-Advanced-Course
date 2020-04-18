import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.scss']
})
export class InputChildComponent implements OnInit {

  constructor() { }

 @Input() toggle:boolean = false;

 @Input() placeholderText:string = 'Anubhav';
 @Input() nameText: string;

  ngOnInit(): void {
  }
}
