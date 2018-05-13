import { Component, OnInit } from '@angular/core';
import {degradado} from '../../animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [degradado],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
