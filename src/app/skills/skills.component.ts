import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

//components 'catch' the data from the service like a football and make it available to the HTML template. 
//In other words, it "passes" the data to the HTML template, like a footbal.
//Services 'catch' data from the backend server and can 'pass' it to any component.
export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService : SkillsService;

  constructor(private skillsService: SkillsService) {
    this.dataService = skillsService;
   }
  
   //ngOnInit is waht receives the data from the service.
  ngOnInit() {
    //the .subscribe method is how the componenet subscribes to the skills array.
    this.dataService.getSkills().subscribe(skills => this.skills = skills);
  }

}
