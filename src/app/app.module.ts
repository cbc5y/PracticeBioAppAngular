import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { SocialmediaService } from './services/socialmedia.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SocialmediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService, SocialmediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
