import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-jynx',
  templateUrl: './jynx.component.html',
  styleUrls: ['./jynx.component.css']
})
export class JynxComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/jynx_album_small.jpg`;
  artistImageSmallAlt = `jynx album`;
  artistImageFull = `../../assets/images/music-zun/jynx_album.jpg`;
  artistName = `Jynx`;
  artistDescription = `JynX is a Japanese game developer who has become well known for their remakes of stages from the PC-98 Touhou Project games although these stages are usually only shown as teaser videos and never actually released to the public. They are also the creator of the Len'en Project, a series of games inspired from the Touhou Project, which they have released to the public for free download.`;
  artistMembers = [];
  artistDescriptionSource = `en.touhouwiki.net`;
  artistSites = [
    {
      site: `http://mugenri.blog.shinobi.jp/`
    },
    {
      site: `http://www.nicovideo.jp/user/2519407`
    },
    {
      site: `https://tricknostalgie.bandcamp.com/`
    }
  ];
  artistWorks = [
    {
      no: "1",
      title: "The Grimoire of Alice",
      link: "https://www.youtube.com/watch?v=XWAhWGYhbyg",
      vidid: "XWAhWGYhbyg",
      album: "現樂団の往古1​.​1 ～ 束方 廻怪綺談～",
      basedon: "The Grimoire of Alice"
    },
    {
      no: "2",
      title: "Legendary Illusion ~ Infinite Being",
      link: "https://www.youtube.com/watch?v=P_4CYzKwqaE",
      vidid: "P_4CYzKwqaE",
      album: "現樂団の往古1​.​1 ～ 束方 廻怪綺談～",
      basedon: "Legendary Illusion ~ Infinite Being"
    },
    {
      no: "3",
      title: "Doll of Misery ",
      link: "https://www.youtube.com/watch?v=DOHIZj4rgdU",
      vidid: "DOHIZj4rgdU",
      album: "現樂団の往古1​.​1 ～ 束方 廻怪綺談～",
      basedon: "Doll of Misery "
    },
    {
      no: "4",
      title: "Cute Devil ~ Innocence",
      link: "https://www.youtube.com/watch?v=OR-EiXyIfUA",
      vidid: "OR-EiXyIfUA",
      album: "現樂団の往古2 ～ 束方懐幻想郷 ～",
      basedon: "Cute Devil ~ Innocence"
    },
    {
      no: "5",
      title: "Sleeping Terror",
      link: "https://www.youtube.com/watch?v=7rKnalvR55w",
      vidid: "7rKnalvR55w",
      album: "現樂団の往古2 ～ 束方懐幻想郷 ～",
      basedon: "Sleeping Terror"
    },
    {
      no: "6",
      title: "Faint Dream ~ Inanimate Dream",
      link: "https://www.youtube.com/watch?v=mHO72L7luUg",
      vidid: "mHO72L7luUg",
      album: "現樂団の往古2 ～ 束方懐幻想郷 ～",
      basedon: "Faint Dream ~ Inanimate Dream"
    },
    {
      no: "7",
      title: "Bad Apple!!",
      link: "https://www.youtube.com/watch?v=kKV3aeQgieA",
      vidid: "kKV3aeQgieA",
      album: "現樂団の往古2 ～ 束方懐幻想郷 ～",
      basedon: "Bad Apple!!"
    },
    {
      no: "8",
      title: "Arcadian Dream",
      link: "https://www.youtube.com/watch?v=uqUQEDQO0Oc",
      vidid: "uqUQEDQO0Oc",
      album: "現樂団の往古2 ～ 束方懐幻想郷 ～",
      basedon: "Arcadian Dream"
    },
    {
      no: "9",
      title: "The Inevitably Forbidden Game",
      link: "https://www.youtube.com/watch?v=2NaafHUCWhA",
      vidid: "2NaafHUCWhA",
      album: "現樂団の往古2 ～ 束方懐幻想郷 ～",
      basedon: "The Inevitably Forbidden Game"
    },
    {
      no: "10",
      title: "Reincarnation",
      link: "https://www.youtube.com/watch?v=hMwGJhhj2H8",
      vidid: "hMwGJhhj2H8",
      album: "現樂団の往古3 ～ 束方 繪夢時空～",
      basedon: "Reincarnation"
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
    this.youtubeid = 'XWAhWGYhbyg';
  }


}
