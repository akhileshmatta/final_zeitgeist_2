import { TechtalkComponent } from './techtalk/techtalk.component';
import { WebdevComponent } from './webdev/webdev.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TechnicalEventsComponent } from './technical-events/technical-events.component';
//import { NonTechnicalEventsComponent } from './non-technical-events/non-technical-events.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { GeekoutComponent } from './geekout/geekout.component';
import { CodeknightsComponent } from './codeknights/codeknights.component';
import { CodewarsComponent } from './codewars/codewars.component';
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
//import { Home2Component } from './home2/home2.component';
//import { TechtalkComponent } from './techtalk/techtalk.component';
import { AwsComponent } from './aws/aws.component';
//import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ContestsComponent } from './contests/contests.component';
import { RegistrationpayComponent } from './registrationpay/registrationpay.component';
import { OtherpayComponent } from './otherpay/otherpay.component';
import { RegisteredeventsComponent } from './registeredevents/registeredevents.component';



const routes: Routes = [
  {path: "", component:HomeComponent},
  //{ path: 'header', component: HeaderComponent },
  {path: 'Register', component: RegistrationFormComponent},
  {path: 'login', component: LoginPageComponent},
 // {path: 'footer', component: FooterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'technical_events', component: TechnicalEventsComponent},
  //{path: 'non-technical_events', component: NonTechnicalEventsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'workshops', component: WorkshopsComponent},
  {path: 'blockchain', component: BlockchainComponent},
  {path: 'geekout', component: GeekoutComponent},
  {path: 'codeknights', component: CodeknightsComponent},
  {path: 'codewars', component: CodewarsComponent},
  {path: 'ethicalhacking', component: EthicalhackingComponent},
  {path: 'projectpresentation', component: ProjectpresentationComponent},
  {path: 'datascience', component: DatascienceComponent},
  {path: 'accomdation', component: AccomdationComponent},
  {path: 'presentit', component: PresentitComponent},
  {path: 'bughunt', component: BughuntComponent},
  {path: 'hackathon', component: HackathonComponent},
  {path: 'brainit', component: BrainitComponent},
  {path: 'onlineevents', component: OnlineeventsComponent},
  {path: 'culturalevents', component: CulturaleventsComponent},
  //{path: 'home2', component: Home2Component}
  {path: 'webdev', component: WebdevComponent},
  {path: 'techtalk', component: TechtalkComponent},
  {path: 'aws', component: AwsComponent},
  {path: 'contests', component: ContestsComponent},
  {path: 'registrationpay', component: RegistrationpayComponent},
  {path: 'otherpay', component: OtherpayComponent},
  {path: 'registeredevents', component: RegisteredeventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
