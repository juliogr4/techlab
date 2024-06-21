import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: ":topic", component: TutorialDetailComponent },
  { path: ":topic/:subtopic", component: TutorialComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
