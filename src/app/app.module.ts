import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TaskCardsSectionComponent } from './task-cards-section/task-cards-section.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TaskCardsSectionComponent, TaskCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
