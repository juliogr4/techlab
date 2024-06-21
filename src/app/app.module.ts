import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorialDetailComponent,
    TutorialComponent,
    ClipboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
