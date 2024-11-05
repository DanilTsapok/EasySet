import { Injectable } from '@angular/core';
import { City, CityService } from './city.service';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  citiesWithLikes: City[] = [];

  constructor(private cityService: CityService) {}

  getCitiesWithLikes(): City[] {
    this.citiesWithLikes = this.cityService
      .getAllCity()
      .filter((city) => city.like === true);
    return this.citiesWithLikes;
  }
}
