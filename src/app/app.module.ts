import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTING
import {AppRoutingModule} from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ToolListComponent } from './tool/tool-list/tool-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ToolListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
