
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatSort} from '@angular/material';

export interface Ingrédient {
    ingredient: string;
    categorie: string;
    poids: number;
    quantite: number ;
  }

// /** Constants used to fill up our data base. */
const ELEMENT_DATA: Ingrédient  [] = [
    {ingredient: 'patate' ,  categorie: 'viande',poids: 25,quantite:2},
    {ingredient: 'poulet', categorie: 'végétale', poids:54 ,quantite:4},
    {ingredient: 'steack',  categorie: 'poisson' ,poids:41 ,quantite:7},
    {ingredient:'patte',  categorie:'laitier' , poids:41 ,quantite:47},
    {ingredient:'pain' ,  categorie: 'semoule', poids:47 ,quantite:5},
    
  ];
@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.scss']
})
export class StockComponent  {
  displayedColumns: string[] = ['ingredient', 'categorie', 'poids', 'quantite'];

  dataSource = new MatTableDataSource<Ingrédient>(ELEMENT_DATA);
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



  



 