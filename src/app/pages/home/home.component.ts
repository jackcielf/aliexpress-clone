import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userData = {
    id: '39rjw4',
    name: 'Jackciel Felix',
    city: 'Paraipaba',
    uf: 'CE',
  };

  cardData = [
    {
      text: 'Do Brasil',
      image: 'https://bit.ly/3OrmlWg',
    },
    {
      text: 'Frete grátis',
      image: 'https://bit.ly/3OrmlWg',
    },
    {
      text: 'Compra em grupo',
      image: 'https://bit.ly/3OrmlWg',
    },
    {
      text: 'Moedas',
      image: 'https://bit.ly/3OrmlWg',
    },
    {
      text: 'Carrinho',
      image: 'https://bit.ly/3OrmlWg',
    },
  ];

  sessionValue = "12.99";

  sessionPromotions = [
    {
      image: "https://bit.ly/3OrmlWg",
      price: '77.89',
      currentPrice: '15.95',
      status: true,
    },
    {
      image: "https://bit.ly/3OrmlWg",
      price: '68.89',
      currentPrice: '15.95',
      status: false,
    },
    {
      image: "https://bit.ly/3OrmlWg",
      price: '89.80',
      currentPrice: '15.95',
      status: true,
    },
    {
      image: "https://bit.ly/3OrmlWg",
      price: '54.99',
      currentPrice: '15.95',
      status: true,
    },
  ];
}
