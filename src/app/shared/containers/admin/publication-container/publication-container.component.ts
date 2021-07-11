import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from 'src/app/shared/components/dialog-popup/dialog-popup.component';

export interface IPostElement {
  id: string;
  title: string;
  content: string;
  pictureUrl?: string;
  createdAt: string;
  published: boolean;
}

const POST_DATA: IPostElement[] = [
  {
    id: '1',
    title: 'Este es el primer post',
    content:
      'lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt o..',
    published: true,
    createdAt: new Date('2019-01-16').toDateString(),
  },
  {
    id: '2',
    title: 'Este es el segundo post y esto es mas texto bla bla bla bla bla',
    content: 'amet porttitor eget dolor morbi non arcu risu..',
    published: true,
    createdAt: new Date('2019-04-18').toDateString(),
  },
  {
    id: '3',
    title: 'Este es el tercer post',
    content: 'nunc lobortis mattis aliquam faucibus purus in massa tempor...',
    published: false,
    createdAt: new Date('2019-01-16').toDateString(),
  },
];

@Component({
  selector: 'app-publication-container',
  templateUrl: './publication-container.component.html',
  styleUrls: ['./publication-container.component.css'],
})
export class PublicationContainerComponent implements AfterViewInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = [
    'id',
    'title',
    'content',
    'published',
    'createdAt',
    'actions',
  ];
  dataSource = new MatTableDataSource(POST_DATA);

  @ViewChild(MatSort) sort: MatSort;

  openDialog(postId: string) {
    this.dialog.open(DialogPopupComponent, {
      data: {
        postId,
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
