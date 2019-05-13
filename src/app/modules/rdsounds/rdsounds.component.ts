import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rdsounds',
  templateUrl: './rdsounds.component.html',
  styleUrls: ['./rdsounds.component.css']
})
export class RdsoundsComponent implements OnInit {

  artistImageSmall = ``;
  artistImageSmallAlt = ``;
  artistImageFull = ``;
  artistName = `RD-Sounds`;
  artistDescription = `Circle Name: Diao ye zong (Withered Leaf), 
  Genre: Instrumental, Vocal`;
  artistMembers = [];
  artistDescriptionSource = `en.touhouwiki.net`;
  artistSites = [
    {
      site: `http://www.rd-sounds.com/`
    }
  ];
  artistWorks = [
    {
      no: "1",
      title: "語九十九節 (Tsukumo Melody Tale)",
      link: "https://www.youtube.com/watch?v=2PyiyhvqnYk",
      vidid: "2PyiyhvqnYk",
      album: "逆 -Sakasa- (Reverse)",
      basedon: "幻想浄瑠璃 ／ Illusionary Joururi"
    },
    {
      no: "2",
      title: " アノインシスター (Annoying Sister)",
      link: "https://www.youtube.com/watch?v=FPGZsAG7G3Y",
      vidid: "FPGZsAG7G3Y",
      album: "逆 -Sakasa- (Reverse)",
      basedon: "Hartmann's Youkai Girl"
    },
    {
      no: "3",
      title: " ノーモア、エニモア？モアーモア？！ (No More, Anymore? More, More?!)",
      link: "https://www.youtube.com/watch?v=K1fAY3Q7xOQ",
      vidid: "K1fAY3Q7xOQ",
      album: "逆 -Sakasa- (Reverse)",
      basedon: "永遠の巫女 ／ Eternal Shrine Maiden"
    },
    {
      no: "4",
      title: "至天 (To Heaven)",
      link: "https://www.youtube.com/watch?v=cjqIR7t1UZs",
      vidid: "cjqIR7t1UZs",
      album: "逆 -Sakasa- (Reverse)",
      basedon: "Crazy Backup Dancers"
    },
    {
      no: "5",
      title: "心綺楼 (Heart Fabric Tower)",
      link: "https://www.youtube.com/watch?v=1_D7kiOR9fA",
      vidid: "1_D7kiOR9fA",
      album: "Legends/Stories 「伝」",
      basedon: "亡失のエモーション / The Lost Emotion"
    },
    {
      no: "6",
      title: "Divine Offering Song",
      link: "https://www.youtube.com/watch?v=az2Q7pjClYM",
      vidid: "az2Q7pjClYM",
      album: "Kakage 「掲」",
      basedon: "Native Faith"
    },
    {
      no: "7",
      title: "絶対的一方通行～Unreachable Message ",
      link: "https://www.youtube.com/watch?v=oKx4lKYuXLk",
      vidid: "oKx4lKYuXLk",
      album: "Aratame",
      basedon: "Evening Star (Night Falls ~ Evening Star, Necrofantasia"
    },
    

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
    this.youtubeid = '2PyiyhvqnYk';
  }
}
