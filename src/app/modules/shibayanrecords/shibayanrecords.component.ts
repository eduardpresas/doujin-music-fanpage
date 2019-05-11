import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-shibayanrecords',
  templateUrl: './shibayanrecords.component.html',
  styleUrls: ['./shibayanrecords.component.css']
})
export class ShibayanrecordsComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/shibayanrecords-small.png`;
  artistImageSmallAlt = `shibayan records album`;
  artistImageFull = `../../assets/images/music-zun/shibayanrecords.png`;
  artistName = `Shibayan Records`;
  artistDescription = `Vocal and instrumental electro, nu-disco, lounge and bossa nova. 
      Earlier albums also feature piano arrangements by 831, and trance.`;
  artistMembers = [];
  artistDescriptionSource = `https://en.touhouwiki.net/wiki/ShibayanRecords`;
  artistSites = [
      {
          site: `http://soundcloud.com/shibayan/`
      }
  ];
  artistWorks = [
      {
          no: "1", 
          title: "荊の城 / Ibara no Shiro", 
          link: "https://www.youtube.com/watch?v=1iRs3L-YsQo",
          vidid: "1iRs3L-YsQo",
          album: "ココロバイブレーション (STAL-1002)", 
          basedon: "Gensokyo, Past and Present ~ Flower Land"
      },
      {
          no: "2", 
          title: "Clockup Flowers", 
          link: "https://www.youtube.com/watch?v=oXu_5yeWnVk",
          vidid: "oXu_5yeWnVk",
          album: "マジコカタストロフィ - Mágico Catástrofe」【STAL-1202】", 
          basedon: "Lunar Clock 〜 Luna Dial"
      },
      {
          no: "3", 
          title: "Fall in the Dark", 
          link: "https://www.youtube.com/watch?v=JwWMpspzcg8",
          vidid: "JwWMpspzcg8",
          album: "マジコカタストロフィ - Mágico Catástrofe」【STAL-1202】", 
          basedon: "A Soul as Red as a Ground Cherry"
      },
      {
          no: "4", 
          title: "Monochrome In the Night", 
          link: "https://www.youtube.com/watch?v=9Znrq_HyLus",
          vidid: "9Znrq_HyLus",
          album: "東方PARTYBOX 3", 
          basedon: "Night Sakura of Dead Spirits"
      },
      {
          no: "5", 
          title: "Garota de Venda Medicamento", 
          link: "https://www.youtube.com/watch?v=uW1mfr7Y_mc",
          vidid: "uW1mfr7Y_mc",
          album: "TOHO BOSSA NOVA 3", 
          basedon: "Lunatic Eyes ~ Invisible Full Moon"
      },
      {
          no: "6", 
          title: "タイニーリトル・アジアンタム", 
          link: "https://www.youtube.com/watch?v=JMYFeNWv29Q",
          vidid: "JMYFeNWv29Q",
          album: "TOHO BOSSA NOVA 2", 
          basedon: "Gensokyo, Past and Present ~ Flower Land"
      },
      {
          no: "7", 
          title: "月齢11.3のキャンドルマジック", 
          link: "https://www.youtube.com/watch?v=wPlZNSD3JEU",
          vidid: "wPlZNSD3JEU",
          album: "ココロバイブレーション (Kokoro Vibration)",
          basedon: "ラクトガール～少女密室"
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
    this.youtubeid = '1iRs3L-YsQo';
  }

}
