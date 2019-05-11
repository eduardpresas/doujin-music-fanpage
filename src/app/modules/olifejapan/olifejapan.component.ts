import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-olifejapan',
  templateUrl: './olifejapan.component.html',
  styleUrls: ['./olifejapan.component.css']
})
export class OlifejapanComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/o-life-japan-small.png`;
  artistImageSmallAlt = `olifejapan logo`;
  artistImageFull = `../../assets/images/music-zun/o-life-japan.png`;
  artistName = `O-Life Japan`;
  artistDescription = `Genre: Instrumental, Folk, Metal, Orchestral, Traditional`;
  artistMembers = [];
  artistDescriptionSource = `en.touhouwiki.net`;
  artistSites = [
      {
          site: `http://o-life.jp/`
      }
  ];
  artistWorks = [
      {
          no: "1", 
          title: "Mountain-Climbing Mood", 
          link: "https://www.youtube.com/watch?v=YcF8p0p4DJ8",
          vidid: "YcF8p0p4DJ8",
          album: " A Wind Sign of a Sharp Attack 「鋭鋒乃風標」", 
          basedon: "厄神様の通り道　～ Dark Road"
      },
      {
          no: "2", 
          title: "Hartmann's Youkai Girl", 
          link: "https://www.youtube.com/watch?v=z2E7Eq54gTE",
          vidid: "z2E7Eq54gTE",
          album: "Bang Hot Springs Festival", 
          basedon: "Hartmann's Youkai Girl"
      },
      {
          no: "3", 
          title: "砕月でメタルっぽい何か", 
          link: "https://www.youtube.com/watch?v=Pq9FfhJA2BQ",
          vidid: "Pq9FfhJA2BQ",
          album: "特臭幻想狂", 
          basedon: "Broken Moon"
      },
      {
          no: "4", 
          title: "千年幻想郷でメタルっぽい何か", 
          link: "https://www.youtube.com/watch?v=Wqp0eDcKZ70",
          vidid: "Wqp0eDcKZ70",
          album: "異臭幻想狂", 
          basedon: "Gensokyo Millennium　～ History of the Moon"
      },
      {
          no: "5", 
          title: "天空のグリニッジでメタルっぽい何か", 
          link: "https://www.youtube.com/watch?v=2SFyBCEim8g",
          vidid: "2SFyBCEim8g",
          album: "異臭幻想狂", 
          basedon: "Greenwich in the Sky"
      },
      {
          no: "6", 
          title: "日本キメラ", 
          link: "https://www.youtube.com/watch?v=8zSgAj5e2TA",
          vidid: "8zSgAj5e2TA",
          album: "円盤満作祭", 
          basedon: "Heian Alien"
      },
      {
          no: "7", 
          title: "Lunatic Eyes ~ Invisible Full Moon", 
          link: "https://www.youtube.com/watch?v=pWEu7GeDVBw",
          vidid: "pWEu7GeDVBw",
          album: "特臭幻想狂", 
          basedon: "Lunatic Eyes ~ Invisible Full Moon"
      },
      {
          no: "8", 
          title: "温泉と酒で気分は祭よ", 
          link: "https://www.youtube.com/watch?v=Co9jiO8omGw",
          vidid: "Co9jiO8omGw",
          album: "東方温泉祭", 
          basedon: "Walking the Streets of Former Hell"
      },
      {
          no: "9", 
          title: "ゆうかりんでメタルっぽくない何か", 
          link: "https://www.youtube.com/watch?v=W379-le3ta4",
          vidid: "W379-le3ta4",
          album: "異臭幻想狂", 
          basedon: "Gensokyo, Past and Present ~ Flower Land"
      },
      {
          no: "10", 
          title: "遠い視線", 
          link: "https://www.youtube.com/watch?v=Y4-N2M4wh14",
          vidid: "Y4-N2M4wh14",
          album: "積極懐古団", 
          basedon: "Cute Devil ~ Innocence"
      },
      {
          no: "11", 
          title: "ゆうかりんでメタルっぽい何か", 
          link: "https://www.youtube.com/watch?v=0F93Vr6jvVY",
          vidid: "0F93Vr6jvVY",
          album: "異臭幻想狂", 
          basedon: "Faint Dream ~ Inanimate Dream"
      },
      {
          no: "12", 
          title: "墨染の桜でメタルっぽい何か", 
          link: "https://www.youtube.com/watch?v=Svi6YXfJD50",
          vidid: "Svi6YXfJD50",
          album: "異臭幻想狂", 
          basedon: "Bloom Nobly, Cherry Blossoms of Sumizome ~ Border of Life"
      },
      {
          no: "13", 
          title: "蠢々秋月でメタルっぽい何か", 
          link: "https://www.youtube.com/watch?v=dHJzOJzSqtA",
          vidid: "dHJzOJzSqtA",
          album: "異臭幻想狂", 
          basedon: "Stirring an Autumn Moon ~ Mooned Insect"
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
    this.youtubeid = 'YcF8p0p4DJ8';
  }

}
