import { CityService } from '../../Services/city.service';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { City } from '../../Services/city.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { HotelsComponent } from '../../hotels/hotels.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss',
})
export class CitiesComponent implements OnInit {
  private _bottomSheet = inject(MatBottomSheet);
  public cities!: City[];
  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = this.cityService.getAllCity();
  }

  toggleLike(id: number): void {
    const city: City | undefined = this.cities!.find((item) => item.id == id);
    city!.like
      ? this.cityService.unsetLikePost(id)
      : this.cityService.setLikePost(id);
  }

  openBottomSheet(city: City): void {
    this._bottomSheet.open(HotelsComponent, { data: city });
  }
}
