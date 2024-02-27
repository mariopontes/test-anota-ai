import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() card!: CardModel;

  titleBadge!: string;
  colorBadge!: string;

  ngOnInit(): void {
    this.card = {
      "id": 1,
      "title": "Árvore",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      "img": "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-01.jpg",
      "type": "1"
    }

    this.setTitleBadge();
  }

  setTitleBadge() {
    this.titleBadge = this.card.type === '1' ? 'Paisagem' : this.card.type === '2' ? 'Flor' : 'Pizza'
  }

  setColorBadge() {
    this.colorBadge = this.card.type === '1' ? '#3636fc' : this.card.type === 'red' ? 'Flor' : 'yellow'
  }
}