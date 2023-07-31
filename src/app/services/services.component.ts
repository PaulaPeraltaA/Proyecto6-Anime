import { Component } from '@angular/core';
//Importación de la interfaz
import { Anime } from '../interface/root';

//Importación del servicio
import { RootService } from '../providers/root.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {
  constructor(private dataProvider: RootService) { }

  //Atributo con el tipo de dato de la interfaz
  public data : Anime[] = [];

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Anime[]); 
    })
  }

  }

