import { Component, OnInit } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {
  public photo: Photo | undefined = undefined;
  constructor(public photoservice: PhotoService) { }

  async ngOnInit() {
    await this.photoservice.loadSaved();
  }

  public capture() {
    this.photoservice.addPhotoToGallery();
  }
}