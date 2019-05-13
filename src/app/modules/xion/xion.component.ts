import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-xion',
  templateUrl: './xion.component.html',
  styleUrls: ['./xion.component.css']
})
export class XionComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/xi-on-small.png`;
  artistImageSmallAlt = `xi-on album`;
  artistImageFull = `../../assets/images/music-zun/xi-on.png`;
  artistName = `xi-on`;
  artistDescription = `Early releases by the circle were strictly guitar-centric Rock arrangement albums but in late 2012 the
  circle would begin releasing Touhou arrangement albums which focus on genres such as Jazz, Orchestral
  and EMD moving away from Rock arrangements entirely.`;
  artistMembers = [];
  artistDescriptionSource = `en.touhouwiki.net`;
  artistSites = [
    {
      site: `http://xion-music.com/`
    },
    {
      site: `https://www.youtube.com/user/xionmusic`
    }
  ];
  artistWorks = [
    {
      no: "1", 
      title: "幻想の結界 (Illusion Barrier)", 
      link: "https://www.youtube.com/watch?v=z0l0VwnTrZQ",
      vidid: "z0l0VwnTrZQ",
      album: "東方志奏 6th Spell -Undesigned Emotion- [XITH-0006]", 
      basedon: "ネクロファンタジア (Necrofantasia) ／ 春色小径　～ Colorful Path (Spring Lane ~ Colorful Path)"
    },
    {
      no: "2", 
      title: "The Road of the Apotropaic God ~ Dark Road (1st Spell Re-recording)", 
      link: "https://www.youtube.com/watch?v=Fui1Uf3r5ic",
      vidid: "Fui1Uf3r5ic",
      album: "東方志奏 Ex Spell -Memory of the Past- (XITH-0008)",
      basedon: "The Road of the Apotropaic God ~ Dark Road"
    },
    {
      no: "3", 
      title: "厄神様の通り道 ～ Dark Road", 
      link: "https://www.youtube.com/watch?v=vhZ4hgwT2js",
      vidid: "vhZ4hgwT2js",
      album: "東方志奏 1st Spell -Airstream-", 
      basedon: "The Road of the Apotropaic God ~ Dark Road"
    },
    {
      no: "4", 
      title: "懐かしき東方の血 ～ Old World", 
      link: "https://www.youtube.com/watch?v=E91GhV_6Ans",
      vidid: "E91GhV_6Ans",
      album: "東方志奏 2nd Spell -Fullmoon", 
      basedon: "懐かしき東方の血 ～ Old World"
    },
    {
      no: "5", 
      title: "始原のビート ～ Pristine Beat", 
      link: "https://www.youtube.com/watch?v=GTUmLk8hbjo",
      vidid: "GTUmLk8hbjo",
      album: "BANQUET -バンケット-", 
      basedon: "始原のビート ～ Pristine Beat"
    },
    {
      no: "6", 
      title: "感情の摩天楼 ～ Cosmic Mind", 
      link: "https://www.youtube.com/watch?v=Nr0kyRgUWi0",
      vidid: "Nr0kyRgUWi0",
      album: "東方志奏 4th Spell -Gust of Wind-", 
      basedon: "感情の摩天楼 ～ Cosmic Mind"
    },
    {
      no: "7", 
      title: "リバースイデオロギー", 
      link: "https://www.youtube.com/watch?v=H8VMo0Y58-0",
      vidid: "H8VMo0Y58-0",
      album: "BANQUET -バンケット-", 
      basedon: "リバースイデオロギー"
    },
    {
      no: "8", 
      title: "砕月", 
      link: "https://www.youtube.com/watch?v=bV8I7-MYo1g",
      vidid: "bV8I7-MYo1g",
      album: "東方志奏 10th Spell -Expectation-", 
      basedon: "砕月"
    },
    {
      no: "9", 
      title: "竹取飛翔 ～ Lunatic Princess", 
      link: "https://www.youtube.com/watch?v=y4J4Dzjo7x8",
      vidid: "y4J4Dzjo7x8",
      album: "東方志奏 2nd Spell -Fullmoon-", 
      basedon: "竹取飛翔 ～ Lunatic Princess"
    },
    {
      no: "10", 
      title: "竹取飛翔 ～ Lunatic Princess (Folk version)", 
      link: "https://www.youtube.com/watch?v=_tIJD-4kx1I",
      vidid: "_tIJD-4kx1I",
      album: "彩花永月 -さいかえいげつ-", 
      basedon: "竹取飛翔 ～ Lunatic Princess"
    },
    {
      no: "11", 
      title: "Fall of Fall ~ Autmnal Waterfall", 
      link: "https://www.youtube.com/watch?v=oAMyYgLnUDs",
      vidid: "oAMyYgLnUDs",
      album: "東方志奏 1st Spell -Airstream-", 
      basedon: "Fall of Fall ~ Autmnal Waterfall"
    },
    {
      no: "12", 
      title: "Paradise ~ Deep Mountain", 
      link: "https://www.youtube.com/watch?v=k0JeV0IG3I8",
      vidid: "k0JeV0IG3I8",
      album: "東方志奏 5th Spell -Changing Times-", 
      basedon: "Paradise ~ Deep Mountain"
    },
    {
      no: "13", 
      title: "Youkai Mountain ~ Mysterious Mountain", 
      link: "https://www.youtube.com/watch?v=9eNurr8bEII",
      vidid: "9eNurr8bEII",
      album: "東方志奏 1st Spell -Airstream-", 
      basedon: "Youkai Mountain ~ Mysterious Mountain"
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
    this.youtubeid = 'z0l0VwnTrZQ';
  }

}
