import { Component } from '@angular/core';
import { Anime } from '../interface/root';
import { RootService } from '../providers/root.service';

@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css'],
})
export class CalltoactionComponent {
  public data: Anime[] = [];
  public ranking_data: Anime[] = [];

  constructor(private dataProvider: RootService) {}

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Anime[];
      this.rank_table();
    });
  }

  private rank_table() {
    for (let i = 0; i < this.data.length; i++) {
      this.ranking_data[i] = this.data[i];
    }

    this.ranking_data.sort((a, b) => b.rate - a.rate);
    
  }

  private set_data_config() {
    $('#table').bootstrapTable({
      url: 'data1.json',
      pagination: true,
      search: true,
      columns: [
        {
          field: 'name',
          title: 'Anime name',
        },
        {
          field: 'stars',
          title: 'Stars field',
        },
        {
          field: 'votes',
          title: 'Votes field',
        },
      ],
    });
  }

  // private set_data_config(){
  //   $('.datatable').dataTable({
  //     "sPaginationType": "bs_four_button"
  //   });
  //   $('.datatable').each(function(){
  //     var datatable = $(this);
  //     // SEARCH - Add the placeholder for Search and Turn this into in-line form control
  //     var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
  //     search_input.attr('placeholder', 'Search');
  //     search_input.addClass('form-control input-sm');
  //     // LENGTH - Inline-Form control
  //     var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
  //     length_sel.addClass('form-control input-sm');
  //   });
  // }
}
