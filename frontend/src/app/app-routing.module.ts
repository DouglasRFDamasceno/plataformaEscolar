import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { SchoolMaterialComponent } from './views/school-material/school-material.component';
import { TestComponent } from './views/test/test.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}, {
		path: 'schoolMaterial',
		component: SchoolMaterialComponent
	}, {
		path: 'test',
		component: TestComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
