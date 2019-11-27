import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardData:any;
  likedCounter: number = 0;
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCardData().subscribe(res => {
          this.cardData = res;
    })
  }
  handleLikeEvent(){
    this.likedCounter++;
  }
  resetCounter() {
    this.likedCounter = 0;
  }

}
