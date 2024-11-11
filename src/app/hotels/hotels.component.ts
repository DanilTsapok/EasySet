import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { City } from '../Services/city.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatGridListModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
})
export class HotelsComponent implements OnInit {
  public cityData!: City;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cityData = this.data;
  }
}
