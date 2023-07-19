import { Component } from '@angular/core';
//Importación de la interfaz
import { Root2 } from '../interface/root';

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
  public data : Root2[] = [];

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Root2[]); 
    })
  }

  }

