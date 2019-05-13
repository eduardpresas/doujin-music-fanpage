import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tuttisound',
  templateUrl: './tuttisound.component.html',
  styleUrls: ['./tuttisound.component.css']
})
export class TuttisoundComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/tuttisound-small.png`;
  artistImageSmallAlt = `tuttisound logo`;
  artistImageFull = `../../assets/images/music-zun/tuttisound.png`;
  artistName = `Tutti Sound`;
  artistDescription = `“Tutti Sound” is a private music circle organized and operated by NEO. 
  I produce and provide epic orchestral music.`;
  artistMembers = [];
  artistDescriptionSource = `https://www.facebook.com/TuttiSound`;
  artistSites = [
      {
          site: `http://tutti-sound.com/`
      },
      {
          site: `https://www.facebook.com/TuttiSound/`
      },
      {
          site: `https://www.youtube.com/user/TuttiSound/`
      }
  ];
  artistWorks = [
      {
          no: "1", 
          title: "主人公チーム", 
          link: "https://www.youtube.com/watch?v=7smWLV8V0aI",
          vidid: "7smWLV8V0aI",
          album: "Toho Symphonic Selection - Eientei Suite", 
          basedon: "Maiden's Capriccio ~ Dream Battle, Love-Colored Master Spark"
      },
      {
          no: "2", 
          title: "セレーネに呼応する月兎 (A Moon Rabbit Responding to Selene)", 
          link: "https://www.youtube.com/watch?v=kpRXKVrSYDE",
          vidid: "kpRXKVrSYDE",
          album: "東方映画音楽選 - TOHO FILM MUSIC SELECTION - ～ 永代の宴 (Comiket 84)", 
          basedon: "狂気の瞳　～ Invisible Full Moon, シンデレラケージ　～ Kagome-Kagome"
      },
      {
          no: "3", 
          title: "全てを見抜く眼光、", 
          link: "https://www.youtube.com/watch?v=W4gj0L2LzyU",
          vidid: "W4gj0L2LzyU",
          album: "東方映画音楽選 - Light、", 
          basedon: "少女さとり ～ 3rd eye、"
      },
      {
          no: "4", 
          title: "The Ancient Magic", 
          link: "https://www.youtube.com/watch?v=qeVuKto9G_0",
          vidid: "qeVuKto9G_0",
          album: "東方映画音楽選 - TOHO FILM MUSIC SELECTION - ～ 古戦録", 
          basedon: "The Grimoire of Alice"
      },
      {
          no: "5", 
          title: "BEGINS...", 
          link: "https://www.youtube.com/watch?v=prGz5AkZR9U",
          vidid: "prGz5AkZR9U",
          album: "東方映画音楽選 - TOHO FILM MUSIC SELECTION - ～ 紅幻奏詩", 
          basedon: "A Dream that is more Scarlet than Red, Apparitions Stalk the Night"
      },
      {
          no: "6", 
          title: "動き出した大図書館", 
          link: "https://www.youtube.com/watch?v=0f1eLReRHGI",
          vidid: "0f1eLReRHGI",
          album: "東方映画音楽選 - TOHO FILM MUSIC SELECTION ~ ～ 紅幻奏詩", 
          basedon: "Locked Girl ~ The Girl's Secret Room"
      },
      {
          no: "7", 
          title: "ぬえのカオスな旋律", 
          link: "https://www.youtube.com/watch?v=Czb7S7NJ6e4",
          vidid: "Czb7S7NJ6e4",
          album: "東方交響音楽選 ～ 雅 /-Toho Symphonic Selection MIYABI -", 
          basedon: "Heian Alien"
      },
      {
          no: "8", 
          title: "Dream Walker", 
          link: "https://www.youtube.com/watch?v=DexfwD4bxCE",
          vidid: "DexfwD4bxCE",
          album: "東方映画音楽選 - TOHO FILM MUSIC SELECTION - 翠緑想", 
          basedon: "Cute Devil ~ Innocence"
      },
      {
          no: "9", 
          title: "夜闇を照らす Beautiful Moonlight (The Beautiful Moonlight Illuminating this Dark Night)", 
          link: "https://www.youtube.com/watch?v=i6hiaAUNJT4",
          vidid: "i6hiaAUNJT4",
          album: "東方映画音楽選 - Light、", 
          basedon: "Gensokyo Millennium ~ History of the Moon"
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
    this.youtubeid = '7smWLV8V0aI';
  }

}
