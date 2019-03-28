import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';

@Component({
    selector: 'CmdC-name',
    templateUrl: './CmdC.component.html',
    
})
export class CmdCComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<CmdCComponent>) { }

    ngOnInit(): void { }
    onNoClick(): void {
        this.dialogRef.close();
      }
}
