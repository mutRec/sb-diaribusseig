import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './pages/show/show.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component:MainComponent },
  { path: 'list', component:ShowComponent },
  { path: 'create', component:CreateComponent },
  { path: 'update/:id', component:EditComponent },
  { path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
