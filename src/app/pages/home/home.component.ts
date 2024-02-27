import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardModel } from 'src/app/models/card-model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchBarFocused: boolean = false;
  listCard: CardModel[] = []

  searchText = new FormControl('');

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.getCards().subscribe({
      next: data => {
        this.listCard = data;
      },
      error: error => {
        alert('Não foi possivel relizar a consulta de Cards');
      }
    })
  }
}
