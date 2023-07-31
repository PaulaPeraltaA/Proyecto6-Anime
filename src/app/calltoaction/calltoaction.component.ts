import { Component } from '@angular/core';
import {Anime} from '../interface/root'
import { RootService } from '../providers/root.service';

@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent {
  public data: Anime[] = [];
  public ranking_data : Anime[] = [];
  public ordered_ranking_data : Anime[] = [];

  constructor(private dataProvider: RootService) {}

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Anime[];
      let rate = 0;

      for(let i = 0; i < this.data.length ; i++){
        if (this.data[i].rate >= rate){
          rate = this.data[i].rate;
          this.ranking_data.push(this.data[i]);
        }
      }

      console.log(this.ranking_data)
    });


  }
}
