import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardModel } from '../models/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get<CardModel[]>('http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json')
  }
}
