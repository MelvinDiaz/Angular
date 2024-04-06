import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LOAD_WASM, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { CommonModule, JsonPipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { NgxScannerQrcodeService } from 'ngx-scanner-qrcode';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';

LOAD_WASM().subscribe((res: any) => {
  console.log('LOAD_WASM', res);
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxScannerQrcodeModule,
    JsonPipe,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'qr-reader';
  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
      },
    },
  };

  constructor(private qrcode: NgxScannerQrcodeService) {}

  public onSelects(files: any) {
    this.qrcode
      .loadFiles(files)
      .subscribe((res: ScannerQRCodeSelectedFiles[]) => {
        this.qrCodeResult = res;
      });
  }
}
