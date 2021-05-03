import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css'],
})
export class DialogPopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.postId = data.postId;
  }

  public postId: string;

  ngOnInit(): void {}
}
