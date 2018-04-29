import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  public video = 'dolbycanyon.mp4';
  public src = '../../../assets/media/';
  constructor() { }

  ngOnInit() {
  }

}
