import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  loveIts: number;
  created_at: Date;
  aDejaVoter = false;

  constructor() {
    this.loveIts = 0;
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  isLove() {
    return this.loveIts >= 0;
  }

  addLoveIts() {
    this.loveIts++;
    this.aDejaVoter = true;
  }

  delLoveIts() {
    this.loveIts--;
    this.aDejaVoter = true;
  }
}
