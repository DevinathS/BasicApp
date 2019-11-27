import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Output() likeToEmit = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  clickLikeButton(event) {
    this.likeToEmit.emit(event);
  }
}
