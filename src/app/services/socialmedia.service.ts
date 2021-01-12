import { Injectable } from '@angular/core';
import { Socialmedia } from '../models/socialmedia';

@Injectable({
  providedIn: 'root'
})
export class SocialmediaService {
  socialmedias : Socialmedia[] = [
    {
      linkedin : "Check out my LinkedIn!",
      twitter : "Check out my Twitter!",
      github : "Check out my GitHub!"
    }
  ]
 
  constructor() { }
}
