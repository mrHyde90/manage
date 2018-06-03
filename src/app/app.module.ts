//Basics
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTING
import {AppRoutingModule} from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ToolListComponent } from './tool/tool-list/tool-list.component';
import { ModalComponent } from './shared/modal/modal.component';

//Services
import {ModalService} from './shared/modal/modal.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ToolListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
