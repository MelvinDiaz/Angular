import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { PrivateContentComponent } from './private-content/private-content.component';
import { PublicComponentComponent } from './public-component/public-component.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MyHttpService } from './my-http-client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrivateContentComponent,
    PublicComponentComponent,
    LoginFormComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  componentToShow: string = 'public';
  constructor(private http: MyHttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['code'] !== undefined) {
        this.http.getToken(params['code']).subscribe((result) => {
          if (result) {
            this.componentToShow = 'private';
          } else {
            this.componentToShow = 'public';
          }
        });
      }
    });
  }
}
