import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
// import { WorkshopInfoComponent } from './workshop-info/workshop-info.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TechnicalEventsComponent } from './technical-events/technical-events.component';
//import { NonTechnicalEventsComponent } from './non-technical-events/non-technical-events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { GeekoutComponent } from './geekout/geekout.component';
import { CodewarsComponent } from './codewars/codewars.component';
import { CodeknightsComponent } from './codeknights/codeknights.component';
import { EthicalhackingComponent } from './ethicalhacking/ethicalhacking.component';
import { ProjectpresentationComponent } from './projectpresentation/projectpresentation.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { AccomdationComponent } from './accomdation/accomdation.component';
import { PresentitComponent } from './presentit/presentit.component';
import { BughuntComponent } from './bughunt/bughunt.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { BrainitComponent } from './brainit/brainit.component';
import { OnlineeventsComponent } from './onlineevents/onlineevents.component';
import { CulturaleventsComponent } from './culturalevents/culturalevents.component';
import { WebdevComponent } from './webdev/webdev.component';
import { TechtalkComponent } from './techtalk/techtalk.component';
import { AwsComponent } from './aws/aws.component';
import { ContestsComponent } from './contests/contests.component';
import { RegistrationpayComponent } from './registrationpay/registrationpay.component';
import { OtherpayComponent } from './otherpay/otherpay.component';
import { RegisteredeventsComponent } from './registeredevents/registeredevents.component';
//import { Home2Component } from './home2/home2.component';
//import { NonTechnicalEventsComponent } from './non-technical-events/non-technical-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationFormComponent,
    LoginPageComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TechnicalEventsComponent,
    //NonTechnicalEventsComponent,
    GalleryComponent,
    SponsorsComponent,
    WorkshopsComponent,
    BlockchainComponent,
    GeekoutComponent,
    CodewarsComponent,
    CodeknightsComponent,
    EthicalhackingComponent,
    ProjectpresentationComponent,
    DatascienceComponent,
    AccomdationComponent,
    PresentitComponent,
    BughuntComponent,
    HackathonComponent,
    BrainitComponent,
    OnlineeventsComponent,
    CulturaleventsComponent,
    WebdevComponent,
    TechtalkComponent,
    AwsComponent,
    ContestsComponent,
    RegistrationpayComponent,
    OtherpayComponent,
    RegisteredeventsComponent,
    //Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
