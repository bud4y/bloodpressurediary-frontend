import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private images: string[];

  constructor() {
    this.images = [];
  }

  ngOnInit(): void {
  //  this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    this.images.push(`https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`)
    this.images.push(`https://images.unsplash.com/photo-1565647946321-a146ac24a220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80`)
    this.images.push(`https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80`)
  }

}
