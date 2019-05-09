import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-active-neets',
  templateUrl: './active-neets.component.html',
  styleUrls: ['./active-neets.component.css']
})
export class ActiveNeetsComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/active-neets-small.png`;
  artistImageSmallAlt = `active neets logo`;
  artistImageFull = `../../assets/images/music-zun/active-neets.png`;
  artistName = `Active NEETs`;
  artistDescription = `Active NEETs" is Japanese Music Circle. Pianist "Akai-Ryusei" leads this circle. 
      We play Touhou Music, Game Music, Vocaloid and anime songs. 
      "Tokyo" Active NEETs Plays Jazz and Rock. "Kokyo" Active NEETs Plays Classical Symphony.`;
  artistMembers = [];
  artistDescriptionSource = `https://www.youtube.com/user/MintAkairyusei/about`;
  artistSites = [
      {
          site: `http://neets.tokyo/`
      },
      {
          site: `https://www.youtube.com/user/MintAkairyusei/about`
      },
      {
          site: `https://twitter.com/active_neets`
      }
  ];

  artistWorks = [
      {
          no: "1", 
          title: "Native Faith - Kokyo Active NEETs", 
          link: "https://www.youtube.com/watch?v=H7AJ2krJ014",
          vidid: "H7AJ2krJ014",
          album: "-", 
          basedon: "Native Faith"
      },
      {
          no: "2", 
          title: "Suite Imperishable Night - Kokyo Active NEETs", 
          link: "https://www.youtube.com/watch?v=kpz4G-qgH_8",
          vidid: "kpz4G-qgH_8",
          album: "-", 
          basedon: "Various"
      },
      {
          no: "3", 
          title: "Suite Perfect Cherry Blossom - Kokyo Active", 
          link: "https://www.youtube.com/watch?v=oSsjD6dJK5s",
          vidid: "oSsjD6dJK5s",
          album: "-", basedon: "Various"
      },
      {
          no: "4", 
          title: "Suite Embodiment of Scarlet Devil - Kokyo Active NEETs", 
          link: "https://www.youtube.com/watch?v=Ck-kyei7gSk",
          vidid: "Ck-kyei7gSk",
          album: "-", 
          basedon: "Various"
      },
      {
          no: "5", 
          title: "Suite Phantasmagoria of Flower View. - Kokyo Active NEETs", 
          link: "https://www.youtube.com/watch?v=Hy3sTqAfn44",
          vidid: "Hy3sTqAfn44",
          album: "-", 
          basedon: "Various"
      },
      {
          no: "6", 
          title: "Suite Imperishable Night & Immaterial and Missing Power - Kokyo Active NEETs", 
          link: "https://www.youtube.com/watch?v=JMwDvpCdXM8",
          vidid: "JMwDvpCdXM8",
          album: "-", 
          basedon: "Various"
      },
      {
          no: "7", 
          title: "第2幕協奏曲「月に叢雲華に風」メドレー", 
          link: "https://www.youtube.com/watch?v=g2VQSPK2Jto",
          vidid: "g2VQSPK2Jto",
          album: "『第2幕協奏曲 月に叢雲華に風』より", 
          basedon: "Various"
      },
      {
          no: "8", 
          title: "第1幕協奏曲「色は匂へど散りぬるを」メドレー", 
          link: "https://www.youtube.com/watch?v=8_Ob_y2d91g",
          vidid: "8_Ob_y2d91g",
          album: "『第1幕 協奏曲 色は匂へど散りぬるを』より", 
          basedon: "Various"
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
    this.youtubeid = 'H7AJ2krJ014';
  }

}
