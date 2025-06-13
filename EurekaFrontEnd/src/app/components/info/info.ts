import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-info',
  imports: [
    MatInputModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {}
