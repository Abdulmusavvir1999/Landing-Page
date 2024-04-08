import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommunityComponent } from './community/community.component';
import { BlogComponent } from './blog/blog.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FeaturesComponent, CommunityComponent, BlogComponent, PricingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';



}
