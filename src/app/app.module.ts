import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumComponent } from './Forum/forum/forum.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import {DiagramComponent} from './diagram/diagram.component';
import {ChartComponent} from './chart/chart.component';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationdoneComponent } from './registrationdone/registrationdone.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    NgbModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ForumComponent,
    CalendarComponent,
    LoginmodalComponent,
      DiagramComponent,
      ChartComponent,
      RegistrationdoneComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
