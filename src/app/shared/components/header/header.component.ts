import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  interpriseName = "AliExpress";
  placeholder = "Perfume Kaiak";

  constructor() {}

  ngOnInit() {}

  public btnShowFavorites() {
    console.log("Mostrar favoritos");
  }
}
