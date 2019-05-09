import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-akatsuki-records',
  templateUrl: './akatsuki-records.component.html',
  styleUrls: ['./akatsuki-records.component.css']
})
export class AkatsukiRecordsComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/akatsuki_records-small.png`;
  artistImageSmallAlt = `akatsuki records logo`;
  artistImageFull = `../../assets/images/music-zun/akatsuki_records.png`;
  artistName = `Akatsuki Records`;
  artistDescription = `No English description`;
  artistMembers = [
      {
          member: `ねこ☆まんじゅう (Neko Manjuu)`, role: `Composition, arrangement, piano`
      },
      {
          member: `ACTRock`, role: `Composition, arrangement, lyrics, guitar`
      },
      {
          member: `Stack`, role: `Vocals`
      }
  ];
  artistDescriptionSource = `http://akatsuki-records.com/about.html`;
  artistSites = [
      {
          site: `http://akatsuki-records.com/index.html`
      }
  ];
  artistWorks = [
      {
          no: "1", 
          title: "夜明けのウェアウルフ", 
          link: "https://www.youtube.com/watch?v=jCOooEoqFvY",
          vidid: "jCOooEoqFvY",
          album: "KILLOVE FIREPROOF!", 
          basedon: "満月の竹林 (Bamboo Forest of the Full Moon)",
      },
      {
          no: "2", 
          title: "DANGO ON FIRE", 
          link: "https://www.youtube.com/watch?v=MpVIOCwMCTU",
          vidid: "MpVIOCwMCTU",
          album: "KILLOVE FIREPROOF!", 
          basedon: "Pumpkin of September"
      },
      {
          no: "3", 
          title: "Psycho Lily", 
          link: "https://www.youtube.com/watch?v=KPPVHjN-mgA",
          vidid: "KPPVHjN-mgA",
          album: "DOWN DOWN DOLL -to the beginning 07-", 
          basedon: "The Sea Where the Home Planet is Reflected"
      },
      {
          no: "4", 
          title: "Collapsing of Netherworld", 
          link: "https://www.youtube.com/watch?v=CB0VFDLJiZ8",
          vidid: "CB0VFDLJiZ8",
          album: "東方幻奏響UROBOROS ～fANTASIAsPIRALoVERdRIVE～", 
          basedon: "Emotional Skyscraper ~ Cosmic Mind"
      },
      {
          no: "5", 
          title: "Who Killed U.N.Owen", 
          link: "https://www.youtube.com/watch?v=oOeUvfGcRtI",
          vidid: "oOeUvfGcRtI",
          album: "First Memory/Next Memory", 
          basedon: "U.N. Owen Was Her?"
      },
      {
          no: "6", 
          title: "トランスダンスアナーキー", 
          link: "https://www.youtube.com/watch?v=o6zvgL4sY18",
          vidid: "o6zvgL4sY18",
          album: "Metamorphosisより", 
          basedon: "Crazy Back-up Dancers"
      },
      {
          no: "7", 
          title: "WARNING×WARNING×WARNING", 
          link: "https://www.youtube.com/watch?v=7UubKYqEy3s",
          vidid: "7UubKYqEy3s",
          album: "WARNING×WARNING×WARNINGより", 
          basedon: "Pierrot of the Star-Sprangled Banner"
      }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  public youtubeid = '';

  onClickMe(input: any) {
      this.youtubeid = input;
  }
  getUrl(x){
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + x)
  }

  ngOnInit() {
      this.youtubeid = 'jCOooEoqFvY';
  }

}
