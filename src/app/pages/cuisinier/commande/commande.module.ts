import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatangModule  } from "../../../../assets/matang.module";
import { CommandeComponent } from './commande.component';
@NgModule({
    declarations: [CommandeComponent],
    imports: [ CommonModule,MatDatepickerModule,MatFormFieldModule,MatangModule  ],
    exports: [],
    providers: [],
})
export class CommandeModule {}