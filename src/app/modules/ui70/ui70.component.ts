import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ui70',
  templateUrl: './ui70.component.html',
  styleUrls: ['./ui70.component.css']
})
export class Ui70Component implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/ui-70-small.png`;
  artistImageSmallAlt = `ui70 album`;
  artistImageFull = `../../assets/images/music-zun/ui-70.png`;
  artistName = `UI-70`;
  artistDescription = `UI-70 is a Japanese doujin music circle producing rock, heavy metal and, 
      more recently, electronica arranges of Touhou music.`;
  artistMembers = [];
  artistDescriptionSource = `www.last.fm`;
  artistSites = [
      {
          site: `http://ui-70.sakura.ne.jp/ui-70/`
      },
      {
          site: `https://ui-70.bandcamp.com/`
      },
      {
          site: `https://soundcloud.com/UI-70`
      }
  ];

  artistWorks = [
      {
          no: "1", 
          title: "千年幻想郷～History of the Moon", 
          link: "https://www.youtube.com/watch?v=ThzE0n5P3T0",
          vidid: "ThzE0n5P3T0",
          album: "Riddles Covered In Flowers", 
          basedon: "Gensokyo Millennium ~ History of the Moon"
      },
      {
          no: "2", 
          title: "Lunar Dial ~ Luna Clock", 
          link: "https://www.youtube.com/watch?v=zCj75y5Nn2o",
          vidid: "zCj75y5Nn2o",
          album: "朧夢紅月 ～Vaguely Dreams of Scarlet Fullmoon～", 
          basedon: "Lunar Dial ~ Luna Clock"
      },
      {
          no: "3", 
          title: "Apparitions Stalk the Night", 
          link: "https://www.youtube.com/watch?v=FVWOpVQQZMs",
          vidid: "FVWOpVQQZMs",
          album: "朧夢紅月 ～Vaguely Dreams of Scarlet Fullmoon～", 
          basedon: "Apparitions Stalk the Night"
      },
      {
          no: "4", 
          title: "竹取飛翔～Lunatic Princess", 
          link: "https://www.youtube.com/watch?v=pRSI2-CCn-g",
          vidid: "pRSI2-CCn-g",
          album: "Riddles Covered In Flowers", 
          basedon: "竹取飛翔～Lunatic Princess"
      },
      {
          no: "5", 
          title: "Locked Girl ～ The Girl's Secret Room", 
          link: "https://www.youtube.com/watch?v=PtbwcmG7FrA",
          vidid: "PtbwcmG7FrA",
          album: "朧夢紅月 ～Vaguely Dreams of Scarlet Fullmoon～", 
          basedon: "Locked Girl ～ The Girl's Secret Room"
      },
      {
          no: "6", 
          title: "ブクレシュティの人形師", 
          link: "https://www.youtube.com/watch?v=Bs6ccAv2bj8",
          vidid: "Bs6ccAv2bj8",
          album: "夢裡櫻花 ～ Perfeitas Flores de Cereja / Unplugged", 
          basedon: "The Doll Maker Of Bucuresti"
      },
      {
          no: "7", 
          title: "少女さとり", 
          link: "https://www.youtube.com/watch?v=EGbDRayp3HQ",
          vidid: "EGbDRayp3HQ",
          album: "Cross the Great Divide", 
          basedon: "Satori Maiden ~ 3rd Eye"
      },
      {
          no: "8", 
          title: "狂気の瞳～Invisible Full Moon", 
          link: "https://www.youtube.com/watch?v=CzcLvBdXQs4",
          vidid: "CzcLvBdXQs4",
          album: "[ UI-70 ] - if", 
          basedon: "Lunatic Eyes ~ Invisible Full Moon"
      },
      {
          no: "9", 
          title: "Bloom Nobly, Cherry Blossoms of Sumizome ~ Border of Life", 
          link: "https://www.youtube.com/watch?v=hr4ejwYszTs",
          vidid: "hr4ejwYszTs",
          album: "夢裡櫻花 ～ perfeitas flores de cereja/unplugged", 
          basedon: "Bloom Nobly, Cherry Blossoms of Sumizome ~ Border of Life"
      },
      {
          no: "10", 
          title: "Shanghai Alice of Meiji 17", 
          link: "https://www.youtube.com/watch?v=LA-T7D_LHsU",
          vidid: "LA-T7D_LHsU",
          album: "朧夢紅月 ～Vaguely Dreams of Scarlet Fullmoon～", 
          basedon: "明治十七年の上海アリス"
      },
      {
          no: "11", 
          title: "Last Remote", 
          link: "https://www.youtube.com/watch?v=w6v53kAqce0",
          vidid: "w6v53kAqce0",
          album: "Paradigm Shift/Paradise Lost", 
          basedon: "Last Remote"
      },
      {
          no: "12", 
          title: "天空の花の都", 
          link: "https://www.youtube.com/watch?v=fjwLirF1TR4",
          vidid: "fjwLirF1TR4",
          album: "夢裡櫻花 ～ perfeitas flores de cereja／unplugged", 
          basedon: "Capital City of Flowers in the Sky"
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
    this.youtubeid = 'ThzE0n5P3T0';
  }

}
