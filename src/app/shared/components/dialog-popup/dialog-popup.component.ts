import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css'],
})
export class DialogPopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) data, private _snackBar: MatSnackBar) {
    this.postId = data.postId;
  }
  // postID from the table
  public postId: string;
  // SnackBar position
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {}
  deleteClick() {
    this._snackBar.open(`Post with ID ${this.postId} was deleted 🗑️`, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 4000,
      panelClass: 'snackbar-message',
    });
  }
}
