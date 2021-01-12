import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { SkillsComponent } from '../skills/skills.component';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Developing Websites',
      level: Level.Intermediate
    },
    {
      id:1,
      name: 'Photoshop',
      level: Level.Intermediate
    },
    {
      id:2,
      name: 'Video Editing',
      level: Level.Advanced
    },
    
  ]
  constructor() { }
}
