import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then((module) => module.AdminModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then((module) => module.AuthModule)
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
