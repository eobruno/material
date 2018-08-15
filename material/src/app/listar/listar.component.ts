import { Component, OnInit } from '@angular/core';
import { ListarService } from './listar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [ListarService]
})
export class ListarComponent implements OnInit {

  constructor(
    private listarService: ListarService,
  ) { }

  ngOnInit() {

    console.log(this.listarService.listarOfertas())
    //console.log(this.listarService.ofertas)
  }

}
