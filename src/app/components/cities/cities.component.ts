import { LikeService } from '../../Services/like.service';
import { CityService } from '../../Services/city.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { City } from '../../Services/city.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss',
})
export class CitiesComponent implements OnInit {
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
}
