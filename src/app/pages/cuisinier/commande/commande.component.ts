import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { CmdCComponent } from 'src/app/modals/CrudCommande/CCmd/CmdC.component';
export interface Commande{
    ingredient: string;
    categorie: string;
    nhportion: number;
    quantite: number ;
    
  }
  const ELEMENT_DATA:  Commande  [] = [
    {ingredient: 'patate' ,  categorie: 'végétale',nhportion: 25,quantite:2},
    {ingredient: 'poulet', categorie: 'viande', nhportion:54 ,quantite:4},
    {ingredient: 'steack',  categorie: 'viande' ,nhportion:41 ,quantite:7},
    {ingredient:'spaguetti',  categorie:'pâte' , nhportion:41 ,quantite:47},
    {ingredient:'pain' ,  categorie: 'semoule', nhportion:47 ,quantite:5}, ];



@Component({
    selector: 'app-commande',
    templateUrl: './commande.component.html',
    styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
     displayedColumns: string[] = ['ingredient',  'categorie', 'nhportion','quantite'];

    dataSource = new MatTableDataSource<Commande>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(CmdCComponent , {
        //taille du modal 
        width: '900px',
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
    //pagination
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }

      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }}