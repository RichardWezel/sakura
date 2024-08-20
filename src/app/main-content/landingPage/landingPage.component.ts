import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <section>
        <app-navbar></app-navbar>
        <h1 class="fontRaleway">SAKURA RAHMEN</h1>
        <h2 class="fontRaleway">BEST RAHMEN IN TOWN</h2>
    </section>
  `
  ,
  styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {

}