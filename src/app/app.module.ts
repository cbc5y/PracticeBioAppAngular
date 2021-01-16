import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { SocialmediaService } from './services/socialmedia.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SocialmediaComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [SkillsService, SocialmediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
