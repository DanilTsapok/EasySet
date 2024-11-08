import { LikeService } from '../../Services/like.service';
import { Component, OnInit } from '@angular/core';
import { City, CityService } from '../../Services/city.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-likes-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './likes-content.component.html',
  styleUrl: './likes-content.component.scss',
})
export class LikesContentComponent implements OnInit {
  constructor(
    private likeService: LikeService,
    private cityService: CityService
  ) {}
  citiesWithLikes: City[] = [];

  ngOnInit(): void {
    this.citiesWithLikes = this.likeService.getCitiesWithLikes();
  }

  toggleLike(id: number): void {
    const city = this.cityService.getCityById(id);
    if (city) {
      city.like
        ? this.cityService.unsetLikePost(id)
        : this.cityService.setLikePost(id);
    }
    let likedCity = this.cityService.getAllCity().map((city) => ({
      id: city.id,
      like: city.like,
    }));
    localStorage.setItem('likedCity', JSON.stringify(likedCity));
  }
}
