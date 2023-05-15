import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FullScreenSearchComponent } from "./full-screen-search/full-screen-search.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ServiceComponent } from "./service/service.component";
import { ProjectComponent } from "./project/project.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { TeamComponent } from "./team/team.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ConfigService } from "./config.service";
import { businessComponent } from "./business/business.component";
import { hospitalityComponent } from "./hospitality/hospitality.component";
import { educationComponent } from "./education/education.component";
import { telecomComponent } from "./telecom/telecom.component";
import { softdevComponent } from "./softdev/softdev.component";
import { webdevComponent } from "./webdev/webdev.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FullScreenSearchComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    ProjectComponent,
    NewsletterComponent,
    PortfolioComponent,
    TestimonialComponent,
    TeamComponent,
    FooterComponent,
    HeaderComponent,
    hospitalityComponent,
    telecomComponent,
    educationComponent,
    softdevComponent,
    webdevComponent,
    businessComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
