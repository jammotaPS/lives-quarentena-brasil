import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

interface Style {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  styles: Style[] = [
    {value: 'sertanejo', viewValue: 'Sertanejo'},
    {value: 'pop', viewValue: 'Pop'},
    {value: 'rock', viewValue: 'Rock'},
    {value: 'gospel', viewValue: 'Gospel'}
  ];

  constructor() { }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/