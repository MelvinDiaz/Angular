import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-conditional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css'
})
export class ConditionalComponent {
  isEnabled = false;

  toggleEnable(){
    this.isEnabled = !this.isEnabled;
  }
}
