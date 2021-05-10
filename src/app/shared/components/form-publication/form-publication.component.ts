import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-publication',
  templateUrl: './form-publication.component.html',
  styleUrls: ['./form-publication.component.css'],
})
export class FormPublicationComponent implements OnInit {
  constructor() {}

  editorForm: FormGroup;

  onSubmit() {
    console.log({
      title: this.editorForm.get('title').value,
      editor: this.editorForm.get('editor').value,
    });
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      title: new FormControl(null),
      editor: new FormControl(null),
    });
  }
}
