import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ToolListComponent} from './tool/tool-list/tool-list.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'tool', pathMatch: 'full' },
	{path: "tool", component: ToolListComponent}
];
/*
,
	{path: "not-found", component: ErrorPageComponent, data: {message: 'message not found!'}},
  	{path: "**", redirectTo: '/not-found'}
*/
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}