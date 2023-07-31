import { Component } from '@angular/core';
import {Anime} from '../interface/root'
import { RootService } from '../providers/root.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  public data: Anime[] = [];

  constructor(private dataProvider: RootService) {}

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Anime[];
    });
  }

}
