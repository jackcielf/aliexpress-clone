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

  sessionValue = '12.99';

  sessionPromotions = [
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '77.89',
      currentPrice: '15.95',
      status: true,
    },
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '68.89',
      currentPrice: '15.95',
      status: false,
    },
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '89.80',
      currentPrice: '15.95',
      status: true,
    },
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '54.99',
      currentPrice: '15.95',
      status: true,
    },
  ];

  products = [
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '',
      currentPrice: '55.95',
      offerFirstPurchase: true,
      status: true,
    },
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '68.89',
      currentPrice: '34.40',
      offerFirstPurchase: false,
      status: false,
    },
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '89.80',
      currentPrice: '81.95',
      offerFirstPurchase: false,
      status: true,
    },
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '54.99',
      currentPrice: '112.95',
      offerFirstPurchase: true,
      status: false,
    },
    {
      name: 'Perfume Kaiak da Natura',
      image: 'https://bit.ly/3OrmlWg',
      price: '54.99',
      currentPrice: '27.95',
      offerFirstPurchase: false,
      status: true,
    },
  ];
}
