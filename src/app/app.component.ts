import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ImprintComponent } from "./imprint/imprint.component";
import { LandingPageComponent } from "./main-content/landingPage/landingPage.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainContentComponent,
    ImprintComponent,
    FooterComponent,
    ImprintComponent,
    LandingPageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
