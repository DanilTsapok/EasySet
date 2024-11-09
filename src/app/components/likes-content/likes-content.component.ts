import { LikeService } from '../../Services/like.service';
import { Component, OnInit } from '@angular/core';
import { City, CityService } from '../../Services/city.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-likes-content',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
  ],
  templateUrl: './likes-content.component.html',
  styleUrl: './likes-content.component.scss',
})
export class LikesContentComponent implements OnInit {
  constructor(
    private likeService: LikeService,
    private cityService: CityService
  ) {}
  citiesWithLikes!: City[];

  ngOnInit(): void {
    this.citiesWithLikes = this.likeService.getCitiesWithLikes();
  }

  toggleLike(id: number): void {
    const city = this.citiesWithLikes!.find((item) => item.id == id);
    city!.like
      ? this.cityService.unsetLikePost(id)
      : this.cityService.setLikePost(id);
  }
}
