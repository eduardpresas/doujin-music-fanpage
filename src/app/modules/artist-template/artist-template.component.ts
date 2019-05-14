import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-artist-template',
  templateUrl: './artist-template.component.html',
  styleUrls: ['./artist-template.component.css']
})
export class ArtistTemplateComponent {

  @Input() artistName: string;
  @Input() artistDescription: string;
  @Input() artistDescriptionSource: string;
  @Input() artistSites: any;
  @Input() artistWorks: any;
  @Input() youtubeid: string;

  constructor(private sanitizer: DomSanitizer) { }

  onClickMe(input: any) {
      this.youtubeid = input;
  }
  getUrl(x) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + x)
  }

}
