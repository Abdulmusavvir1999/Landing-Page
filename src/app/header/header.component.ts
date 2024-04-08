import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  //Features component
  features(): void {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  //Community component
  community(): void {
    document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })
  }

  //Blog component
  blog(): void {
    document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })
  }

  //Pricing component
  pricing(): void {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

}
