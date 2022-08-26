import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './abouts/about/about.component';
import { MenuComponent} from './menu/menu.component'



const routes: Routes = [
{path: 'menu', component: MenuComponent },
{ path: 'about', component: AboutComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
