import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './background/background.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    MenuComponent,
    AboutComponent,
    MembersComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FontAwesomeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
