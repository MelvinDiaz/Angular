import { Component } from '@angular/core';
import { MyHttpService } from '../my-http-client.service';
import { Message } from '../message';

@Component({
  selector: 'app-private-content',
  standalone: true,
  imports: [],
  templateUrl: './private-content.component.html',
  styleUrl: './private-content.component.scss',
})
export class PrivateContentComponent {
  content: string = '';

  constructor(private http: MyHttpService) {}

  ngOnInit() {
    this.http.getPrivate('/messages').subscribe((data: Message) => {
      this.content = data.message;
    });
  }
}
