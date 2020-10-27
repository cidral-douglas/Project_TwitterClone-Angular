import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Input() user: string;
  @Input() date: string;
  @Input() desc: string;

  ngOnInit(): void {
  }

}
