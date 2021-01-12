import { Component, OnInit } from '@angular/core';
import { Socialmedia } from '../models/socialmedia';
import { SocialmediaService } from '../services/socialmedia.service';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  socialmedias: Socialmedia[];
  socialmediaDataService : SocialmediaService;

  constructor(private socialmediaService: SocialmediaService) { 
    this.socialmediaDataService = socialmediaService;
  }

  ngOnInit() {
    this.socialmedias = this.socialmediaDataService.socialmedias;
  }

}
