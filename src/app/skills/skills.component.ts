import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // skills = ['Abstract Mathematics',
  //    'Philosophy', 'Developing software'];
  skills: Skill[] = [
    {
      id:0,
      name: 'Photoshop',
      level: Level.Intermediate
    },
    {
      id:1,
      name: 'Video Editing',
      level: Level.Advanced
    },
    {
      id: 2,
      name: 'Developing Websites',
      level: Level.Intermediate
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
