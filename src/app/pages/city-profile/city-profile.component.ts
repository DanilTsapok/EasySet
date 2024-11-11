import { routes } from './../../app.routes';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City, CityService } from '../../Services/city.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-profile.component.html',
  styleUrl: './city-profile.component.scss',
})
export class CityProfileComponent implements OnInit {
  cityId!: number;
  city!: City | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.city = this.cityService.getCityById(this.cityId);
  }
}
