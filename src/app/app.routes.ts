import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { CommunityComponent } from './community/community.component';
import { BlogComponent } from './blog/blog.component';
import { PricingComponent } from './pricing/pricing.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    // { path: 'feature', component: FeaturesComponent },
    // { path: 'community', component: CommunityComponent },
    // { path: 'blog', component: BlogComponent },
    // { path: 'pricing', component: PricingComponent },
];
