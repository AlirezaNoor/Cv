import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainsiteComponent } from './mainsite/mainsite.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MainsiteComponent,
    SkillsComponent,
    WorkexperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
