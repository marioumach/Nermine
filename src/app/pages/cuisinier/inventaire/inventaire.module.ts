import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatangModule  } from "../../../../assets/matang.module";
import { InventaireComponent } from './inventaire.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
    declarations: [InventaireComponent],
    imports: [ CommonModule,MatangModule,MatSnackBarModule ],
    exports: [],
    providers: [],
})
export class InventaireModule {}