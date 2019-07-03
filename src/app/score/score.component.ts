import { Component, OnInit } from '@angular/core';
import { ScoreService } from "../score.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  public scoreDetail : any;

  constructor(private _scoreService : ScoreService) { }

  ngOnInit() {
    this._scoreService.getScore()
      .subscribe(data => this.scoreDetail = data)
      console.log(this.scoreDetail)
  }

}
