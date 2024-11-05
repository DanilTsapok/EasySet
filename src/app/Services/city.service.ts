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
  private cities: City[] = [
    {
      id: 1,
      name: 'Berlin',
      rating: 8.2,
      date: 'Wed 25 Jan-Fri 27 Jan',
      image: 'Berlin.jpeg',
      like: false,
      title:
        'A tour of the city and its surroundings led by a professional guide',
    },
    {
      id: 2,
      name: 'Paris',
      rating: 8.2,
      date: 'Wed 25 Jan-Fri 27 Jan',
      image: 'Paris.jpeg',
      like: false,
      title:
        'A tour of the city and its surroundings led by a professional guide',
    },
    {
      id: 3,
      name: 'Madrid',
      rating: 8.2,
      date: 'Wed 25 Jan-Fri 27 Jan',
      image: 'Madrid.jpeg',
      like: false,
      title:
        'A tour of the city and its surroundings led by a professional guide',
    },
    {
      id: 4,
      name: 'Madrid',
      rating: 8.2,
      date: 'Wed 25 Jan-Fri 27 Jan',
      image: 'Madrid.jpeg',
      like: false,
      title:
        'A tour of the city and its surroundings led by a professional guide',
    },
    {
      id: 5,
      name: 'Madrid',
      rating: 8.2,
      date: 'Wed 25 Jan-Fri 27 Jan',
      image: 'Madrid.jpeg',
      like: false,
      title:
        'A tour of the city and its surroundings led by a professional guide',
    },
  ];
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
    this.storedIds.filter((value) => value != id);
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
