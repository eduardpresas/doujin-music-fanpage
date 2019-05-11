import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-soundholic',
  templateUrl: './soundholic.component.html',
  styleUrls: ['./soundholic.component.css']
})
export class SoundholicComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/sound-holic-small.png`;
  artistImageSmallAlt = `soundholic image`;
  artistImageFull = `../../assets/images/music-zun/sound-holic.png`;
  artistName = `SOUND HOLIC`;
  artistDescription = `SOUND HOLIC is a Japanese doujin music circle dedicated to making Touhou arrangements. 
  They are known for their focus on vocal arrangements.`;
  artistMembers = [];
  artistDescriptionSource = `www.last.fm`;
  artistSites = [
      {
          site: `http://www.sound-holic.com/`
      }
  ];
  artistWorks = [
      {
          no: "1", 
          title: "SOUL REVERSER", 
          link: "https://www.youtube.com/watch?v=pFYp6GWfj2k",
          vidid: "pFYp6GWfj2k",
          album: "強敵 -LAST BOSS-", 
          basedon: "Inchlings of the Shining Needle ~ Little Princess"
      },
      {
          no: "2", 
          title: "UNDERWORLD GATE", 
          link: "https://www.youtube.com/watch?v=EvxeYYCbR74",
          vidid: "EvxeYYCbR74",
          album: "強敵 -LAST BOSS-", 
          basedon: "Eastern Judgement in the Sixtieth Year ~ Fate of Sixty Years"
      },
      {
          no: "3", 
          title: "Dirty Purity", 
          link: "https://www.youtube.com/watch?v=KzN2fMeFefw",
          vidid: "KzN2fMeFefw",
          album: "強敵 -LAST BOSS-", 
          basedon: "Pure Furies ~ Whereabouts of the Heart"
      },
      {
          no: "4", 
          title: "Apollo 13", 
          link: "https://www.youtube.com/watch?v=VVhR6rBoehk",
          vidid: "VVhR6rBoehk",
          album: "SOUND HOLIC MEETS TOHO ～東方的幽々舞踏劇～", 
          basedon: "Gensokyo Millennium ~ History of the Moon"
      },
      {
          no: "5", 
          title: "HOLY WORLD", 
          link: "https://www.youtube.com/watch?v=IC3A7XxVw0M",
          vidid: "IC3A7XxVw0M",
          album: "地霊 -CHIREI-", 
          basedon: "Last Remote"
      },
      {
          no: "6", 
          title: "Drunkard Ondo of Mt. Ooe", 
          link: "https://www.youtube.com/watch?v=r0FVIwLE0Aw",
          vidid: "r0FVIwLE0Aw",
          album: "地 -KUNI- (KUNI)", 
          basedon: "Walking the Streets of a Former Hell"
      },
      {
          no: "7", 
          title: "SAD EYE", 
          link: "https://www.youtube.com/watch?v=BK_-7sLetwY",
          vidid: "BK_-7sLetwY",
          album: "地霊 -CHIREI-", 
          basedon: "Hartmann's Youkai Girl"
      },
      {
          no: "8", 
          title: "bEAT GATHER", 
          link: "https://www.youtube.com/watch?v=BK_-7sLetwY",
          vidid: "BK_-7sLetwY",
          album: "輝 -HIKARI-", 
          basedon: "Primordial Beat ~ Pristine Beat"
      }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  public youtubeid = '';

  onClickMe(input: any) {
    this.youtubeid = input;
  }
  getUrl(x) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + x)
  }

  ngOnInit() {
    this.youtubeid = 'pFYp6GWfj2k';
  }
}
