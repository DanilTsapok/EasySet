import { cities } from './CitiesState';
import { LikeService } from './like.service';
import { Injectable } from '@angular/core';

export interface City {
  id: number;
  name: string;
  rating: number;
  image: string;
  like: boolean;
  date: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cities: City[] = cities;
  constructor() {
    this.checkLike();
  }

  private storedIds: number[] = JSON.parse(
    localStorage.getItem('likedCity') || '[]'
  );

  getAllCity(): City[] {
    return this.cities;
  }

  getCityById(id: number): City | undefined {
    return this.cities.find((city) => city.id === id);
  }

  setLikePost(id: number) {
    this.storedIds.push(id);
    localStorage.setItem('likedCity', JSON.stringify(this.storedIds));
    let city = this.cities.find((city) => city.id === id);
    city ? (city.like = true) : console.log('City with this Id not found');
  }

  unsetLikePost(id: number) {
    this.storedIds = this.storedIds.filter((value) => value != id);
    localStorage.setItem('likedCity', JSON.stringify(this.storedIds));
    let city = this.cities.find((city) => city.id === id);
    city ? (city.like = false) : console.log('City with this Id not found');
  }

  checkLike(): void {
    const likedIds: number[] = JSON.parse(
      localStorage.getItem('likedCity') || '[]'
    );

    this.cities = this.cities.map((city) => ({
      ...city,
      like: likedIds.includes(city.id),
    }));

    console.log(likedIds);
  }
}
