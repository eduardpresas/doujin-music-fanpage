import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tamusic',
  templateUrl: './tamusic.component.html',
  styleUrls: ['./tamusic.component.css']
})
export class TamusicComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/tamusic-small.png`;
  artistImageSmallAlt = `tamusic logo`;
  artistImageFull = `../../assets/images/music-zun/tamusic.png`;
  artistName = `TAMUSIC`;
  artistDescription = `TAMUSIC (which stands for Try Arrange MUSIC) is a Japanese doujin music circle formed in 2005. 
  They produce classical arranges (piano, violin, wind instrument, etc.) of various games and anime such as Touhou,
  AIR, CLANNAD, Final Fantasy, Dragon Quest among many others.`;
  artistMembers = [];
  artistDescriptionSource = `www.lastfm.com`;
  artistSites = [
      {
          site: `http://tamusic.jp/about/tamusic/`
      }
  ];
  artistWorks = [
      {
          no: "1", 
          title: "Silent Ensemble", 
          link: "https://www.youtube.com/watch?v=t1qdykwTJLQ",
          vidid: "t1qdykwTJLQ",
          album: "Touhou Violin Volume 3", 
          basedon: "Silent Ensemble"
      },
      {
          no: "2", 
          title: "Gensokyo, Past and Present ~ Flower Land", 
          link: "https://www.youtube.com/watch?v=NsV_ntlzWYo",
          vidid: "NsV_ntlzWYo",
          album: "Touhou Instrumental Quartet - Flowering", 
          basedon: "Gensokyo, Past and Present ~ Flower Land"
      },
      {
          no: "3", 
          title: "Eastern Judgement in the Sixtieth Year ~ Fate of Sixty Years", 
          link: "https://www.youtube.com/watch?v=SheTgRJHeS0",
          vidid: "SheTgRJHeS0",
          album: "Touhou Instrumental Quartet - Flowering", 
          basedon: "Eastern Judgement in the Sixtieth Year ~ Fate of Sixty Years"
      },
      {
          no: "4", 
          title: "Flight in the Bamboo Cutter", 
          link: "https://www.youtube.com/watch?v=IjlQs-spJwE",
          vidid: "IjlQs-spJwE",
          album: "Touhou Quartet - Full Moon", 
          basedon: "Flight in the Bamboo Cutter ~ Lunatic Princess"
      },
      {
          no: "5", 
          title: "Lunatic Eyes ~ Invisible Full Moon", 
          link: "https://www.youtube.com/watch?v=7i0DkEO9Rsk",
          vidid: "7i0DkEO9Rsk",
          album: "Touhou Violin Volume 4", 
          basedon: "Lunatic Eyes ~ Invisible Full Moon"
      },
      {
          no: "6", 
          title: "Hexagram Epilogue", 
          link: "https://www.youtube.com/watch?v=Ofl8x1qUHv8",
          vidid: "Ofl8x1qUHv8",
          album: "HEXAGRAM", 
          basedon: "Dancing Water Spray"
      },
      {
          no: "7", 
          title: "The Grimoire of Alice", 
          link: "https://www.youtube.com/watch?v=uw4M8N9rURU",
          vidid: "uw4M8N9rURU",
          album: "Touhou Quartet 8", 
          basedon: "The Grimoire of Alice"
      },
      {
          no: "8", 
          title: "六芒星プロローグ", 
          link: "https://www.youtube.com/watch?v=2FEej4FXQ1M",
          vidid: "2FEej4FXQ1M",
          album: "Touhou Quartet 8", 
          basedon: "魔術師メリー ~ Mary, the Magician"
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
    this.youtubeid = 't1qdykwTJLQ';
  }

}
