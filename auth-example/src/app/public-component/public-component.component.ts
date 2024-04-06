import { Component } from '@angular/core';
import { Message } from '../message';
import { MyHttpService } from '../my-http-client.service';

@Component({
  selector: 'app-public-component',
  standalone: true,
  imports: [],
  templateUrl: './public-component.component.html',
  styleUrl: './public-component.component.scss',
})
export class PublicComponentComponent {
  content: string = '';

  constructor(private http: MyHttpService) {}

  ngOnInit() {
    this.http.get('/public/messages').subscribe((data: Message) => {
      this.content = data.message;
    });
  }
}
