import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectComponent } from "./project/project.component";
import { ServiceComponent } from "./service/service.component";
import { TeamComponent } from "./team/team.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { HeaderComponent } from "./header/header.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { businessComponent } from "./business/business.component";
import { hospitalityComponent } from "./hospitality/hospitality.component";
import { educationComponent } from "./education/education.component";
import { telecomComponent } from "./telecom/telecom.component";
import { softdevComponent } from "./softdev/softdev.component";
import { webdevComponent } from "./webdev/webdev.component";

const routes: Routes = [
  { path: "", redirectTo: "/service", pathMatch: "full" },
  { path: "header", component: HeaderComponent },
  { path: "about", component: AboutComponent },
  { path: "business", component: businessComponent },
  { path: "hospitality", component: hospitalityComponent },
  { path: "contact", component: ContactComponent },
  { path: "project", component: ProjectComponent },
  { path: "service", component: ServiceComponent },
  { path: "team", component: TeamComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "newsletter", component: NewsletterComponent },
  { path: "education", component: educationComponent },
  { path: "testimonial", component: TestimonialComponent },
  { path: "telecom", component: telecomComponent },
  { path: "webdev", component: webdevComponent },
  { path: "softdev", component:  softdevComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
