import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-demetori',
  templateUrl: './demetori.component.html',
  styleUrls: ['./demetori.component.css']
})
export class DemetoriComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/demetori-small.png`;
  artistImageSmallAlt = `demetori album`;
  artistImageFull = `../../assets/images/music-zun/demetori.png`;
  artistName = `Demetori`;
  artistDescription = `Heavy metal doujin circle comprised of brothers 徳南 on guitar/bass/keyboard and 九宝時 on drums.
      Respectively, they are Masaru Teramae and Tadashi Teramae. They are brothers who frequently collaborate
      with each other, and formed this circle for Touhou music collaborations. Masaru is also a professional
      guitarist for Falcom jdk Band, which produces music and remixes for Nihon Falcom games, such as the
      Kiseki/Trails series and Ys.`;
  artistMembers = [];
  artistDescriptionSource = `en.touhouwiki.net`;
  artistSites = [
      {
          site: `http://demetori.xii.jp/`
      }
  ];
  artistWorks = [
      {
          no: "1", 
          title: "Reverse Ideology ~ The Antinomy of Ideology", 
          link: "https://www.youtube.com/watch?v=K0GkcT7ReKs",
          vidid: "K0GkcT7ReKs",
          album: "愧人贖悪 ～ Evil People as the True Object of Salvation ～", 
          basedon: "Reverse Ideology ~ The Antinomy of Ideology"
      },
      {
          no: "2", 
          title: "Pure Furies ~ Vengeance is Mine", 
          link: "https://www.youtube.com/watch?v=7u7oH6YSXls",
          vidid: "7u7oH6YSXls",
          album: "Determinism&DestruKction", 
          basedon: "Pure Furies ~ Whereabouts of the Heart"
      },
      {
          no: "3", 
          title: "The Mad Piero Laughs", 
          link: "https://www.youtube.com/watch?v=sRvtSH1_H0w",
          vidid: "sRvtSH1_H0w",
          album: "Determinism&DestruKction", 
          basedon: "The Pierrot of the Star-Spangled Banner"
      },
      {
          no: "4", 
          title: "Doll Judgment ~ The Girl who Played with People's Shapes", 
          link: "https://www.youtube.com/watch?v=dKWjFtiJFTc",
          vidid: "dKWjFtiJFTc",
          album: "Offering to The Sukhavati", 
          basedon: "Doll Judgement ~ the Girl Who Played with People's Shapes"
      },
      {
          no: "5", 
          title: "Todestrieb und Lebenstrieb", 
          link: "https://www.youtube.com/watch?v=yNT8cQvmj-M",
          vidid: "yNT8cQvmj-M",
          album: "Todestrieb und Lebenstrieb", 
          basedon: "Hartmann's Youkai Girl"
      },
      {
          no: "6", 
          title: "Innumerable Eyes", 
          link: "https://www.youtube.com/watch?v=fE4ypgID8sY",
          vidid: "fE4ypgID8sY",
          album: "Nada Upasana Pundarika", 
          basedon: "Satori Maiden ~ 3rd eye"
      },
      {
          no: "7", 
          title: "Bridge of The Lotus", 
          link: "https://www.youtube.com/watch?v=6gpxPBbr5ig",
          vidid: "6gpxPBbr5ig",
          album: "Nada Upasana Pundarika", 
          basedon: "The Capital City of Flowers in the Sky"
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
      this.youtubeid = 'K0GkcT7ReKs';
  }

}
