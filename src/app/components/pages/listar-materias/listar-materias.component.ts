import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-materias',
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.css']
})
export class ListarMateriasComponent implements OnInit {

  displayedColumns: string[] = ['nombre','cuatrimestre', 'cupo', 'anio', 'profesor'];
  dataSource;

  constructor(private db : FirebaseService) {
    this.db.TraerMateria().subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

  ngOnInit(): void {
  }

}
