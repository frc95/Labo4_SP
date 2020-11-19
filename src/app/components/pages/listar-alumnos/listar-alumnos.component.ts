import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  displayedColumns: string[] = ['email','fecha'];
  dataSource;

  constructor(private db : FirebaseService) { }

  ngOnInit(): void {
    this.db.TraerAlumnos().subscribe(doc =>{
      this.dataSource = new MatTableDataSource(doc);
    });
  }

}
