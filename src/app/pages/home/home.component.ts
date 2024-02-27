import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchBarFocused: boolean = false;
  listCard: CardModel[] = []

  searchText = new FormControl('');

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<CardModel[]>('http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json').subscribe(
      res => {
        this.listCard = res;
      }
    )

  }
}
