import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit,AfterViewInit {


  @Input() lat:string='0';
  @Input() long:string='0';
  constructor() { }
  private map:any;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();  }


  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, 98.5795 ],
      // center: [ +this.lat,+this.long ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
