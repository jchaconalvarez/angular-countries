import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.countryService.getCountry(id)
      .subscribe(country => this.country = country);
  }

  goBack(): void {
    console.log(this.location);
    this.location.back();
  }
}
