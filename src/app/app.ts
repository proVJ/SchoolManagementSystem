import { Component } from '@angular/core';
import { AppHeaderComponent } from './navigation/header/app-header.component';
import { FooterComponent } from './navigation/footer/footer-component/footer-component';
import { Scrolltop } from "./navigation/scrolltop/scrolltop/scrolltop";
import { RendererComponent } from "./navigation/renderer/renderer.component";

@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent, FooterComponent, Scrolltop, RendererComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'SchoolManagementSystem';
}
