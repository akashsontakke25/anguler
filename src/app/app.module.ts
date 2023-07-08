import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MobileComponent } from './mobile/mobile.component';
import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';


const appRoutes:Routes = [
  {path:'mobile',component:MobileComponent },
  {path:'laptop',component:LaptopComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    TopMenuComponent,
    BodyComponent,
    FooterComponent,
    MobileComponent,
    LaptopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
