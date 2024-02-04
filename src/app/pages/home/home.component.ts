import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HomeService } from './../../shared/services/home.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { Product } from 'src/app/shared/interfaces/product';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dialogRef!: MatDialogRef<DialogComponent>;
  dialogTimeOpen = '300ms';
  dialogTimeClose = '300ms';

  suggestionsData = [];
  productsData: Product[] = [];
  userData: User[] = [];

  sessionValue = '12.99';

  user = {
    id: 1,
    name: 'Jackciel Felix',
    city: 'Paraipaba',
    uf: 'CE',
  };

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

  constructor(private homeService: HomeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getProducts();
    this.getSuggestions();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const OPTIONS = {
      enterAnimationDuration,
      exitAnimationDuration,
      width: '80%',
      maxWidth: '350px',
      data: {
        title: 'Ops...',
        description: 'Erro ao requisitar dados',
        confirm: 'Ok',
      },
    };

    const dialogRef = this.dialog.open(DialogComponent, OPTIONS);

    return dialogRef;
  }

  public getProducts() {
    this.homeService
      .getProducts()
      .pipe(take(1))
      .subscribe({
        next: (dataProduct) => {
          this.productsData = dataProduct;
        },
        error: (err) => {
          this.dialogRef = this.openDialog(
            this.dialogTimeOpen,
            this.dialogTimeClose
          );

          // Executa uma função ao fechar o modal
          this.dialogRef.afterClosed().subscribe((result) => {});
        },
      });
  }

  public getSuggestions() {
    this.homeService
      .getSuggestions()
      .pipe(take(1))
      .subscribe({
        next: (dataSuggestion) => {
          this.suggestionsData = dataSuggestion;
        },
        error: (error) => {
          this.dialogRef = this.openDialog(
            this.dialogTimeOpen,
            this.dialogTimeClose
          );

          // Executa uma função ao fechar o modal
          this.dialogRef.afterClosed().subscribe((result) => {});
        },
      });
  }
}
