import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { ActivitiesComponent } from './comp/activities/activities.component';
import { BlogComponent } from './comp/blog/blog.component';
import { VolunteersComponent } from './comp/volunteers/volunteers.component';
import { AboutComponent } from './comp/about/about.component';
import { ContactComponent } from './comp/contact/contact.component';
import { LoginComponent } from './comp/login/login.component';
import { JoinComponent } from './comp/join/join.component';
import { ProjectsComponent } from './comp/projects/projects.component';
import { AuthGuard } from './auth-gaurd.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'activities',
    component: ActivitiesComponent,
    canActivate: [AuthGuard]
  },
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
  {
    path: 'volunteers',
    component: VolunteersComponent,
    canActivate: [AuthGuard]
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  {
    path: 'projectCalendar',
    component: ProjectsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
