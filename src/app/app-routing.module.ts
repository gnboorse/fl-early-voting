import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountyVotingComponent } from './county-voting/county-voting.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: 'home',
    component: CountyVotingComponent,
    data: {
      title: 'FL Early Voting by County'
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
