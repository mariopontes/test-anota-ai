import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() card!: CardModel;
  @Output() deleteCardAction = new EventEmitter();

  titleBadge!: string;
  colorBadge!: string;

  ngOnInit(): void {
    this.setTitleBadge();
    this.setColorBadge();
  }

  setTitleBadge() {
    this.titleBadge = this.card.type === '1' ? 'Paisagem' : this.card.type === '2' ? 'Flor' : 'Pizza'
  }

  setColorBadge() {
    this.colorBadge = this.card.type === '1' ? '#3636fc' : this.card.type === '2' ? '#ff004b' : '#8d8b0b'
  }

  deleteCard() {
    this.deleteCardAction.emit(this.card.id);
  }
}