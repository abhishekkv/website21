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

const routes: Routes = [
  { path: "", redirectTo: "/header", pathMatch: "full" },
  { path: "header", component: HeaderComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "project", component: ProjectComponent },
  { path: "service", component: ServiceComponent },
  { path: "team", component: TeamComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "newsletter", component: NewsletterComponent },
  { path: "testimonial", component: TestimonialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
