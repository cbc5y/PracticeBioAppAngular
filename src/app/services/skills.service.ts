import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { SkillsComponent } from '../skills/skills.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  //setting the skills property to a datatype of skill array (found 
  //in the models folder) and then setting the skills property to equal 
  //the array that follows the skill model.
  skills: Skill[] = [
  //property : datatype = value property is set to by '=' operator.
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
    
  ];

  //getskills method returns an observable with datatype Skill[].
  getSkills = (): Observable<Skill[]> => {
    //getskills returns another method: of. 'of' creates an observable & emits some values you 
    //specify as arguments, and then emits a complete notification. It is an observable itself.
    return of(this.skills);
  }
  constructor() { }
}
