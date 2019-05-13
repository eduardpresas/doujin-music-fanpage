import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-undeadcorporation',
  templateUrl: './undeadcorporation.component.html',
  styleUrls: ['./undeadcorporation.component.css']
})
export class UndeadcorporationComponent implements OnInit {

  artistImageSmall = `../../assets/images/music-zun/undeadcorp-small.png`;
  artistImageSmallAlt = `undead corporation album`;
  artistImageFull = `../../assets/images/music-zun/undeadcorp.png`;
  artistName = `Undead Corporation`;
  artistDescription = `UNDEAD CORPORATION is a melodic death metal/metalcore band formed in 
      Japan which consists of パインツリー (Pine Tree) from monochrome-coat as the arranger, 
      rhythm guitarist, bassist and also the vocalist (occasionally).
      The others members are: 平野幸村 (Yukimura Hirano) from Unlucky Morpheus as the lead guitarist and former
      main vocalist of UNDEAD CORPORATION, 朱美 (Akemi) as the main female vocalist, ウェストヴィレッジ (West Village)
      as the main harsh vocalist and 森下フミヤ (Fumiya Morishita) as the drummer. The band was formed in 2010.`;
  artistMembers = [];
  artistDescriptionSource = `www.lastfm.com`;
  artistSites = [
    {
      site: `http://undeadcorporation.com/`
    }
  ];
  artistWorks = [
    {
      no: "1", 
      title: "常世想兼神 (The Eternal Omoikane) - Vocal", 
      link: "https://www.youtube.com/watch?v=gNSGi-TNOE8",
      vidid: "gNSGi-TNOE8",
      album: "紅染の鬼が哭く (The Scarlet-Dyed Oni Howls)", 
      basedon: "Gensokyo Millennium ~ History of the Moon"
    },
    {
      no: "2", 
      title: "常世想兼神 (The Eternal Omoikane) - Off Vocal", 
      link: "https://www.youtube.com/watch?v=AllPUM2zC8Y",
      vidid: "AllPUM2zC8Y",
      album: "紅染の鬼が哭く (The Scarlet-Dyed Oni Howls)", 
      basedon: "Gensokyo Millennium ~ History of the Moon"
    },
    {
      no: "3", 
      title: "からくれない (Crimson) - Vocal", 
      link: "https://www.youtube.com/watch?v=x0AGxZR-Uyo",
      vidid: "x0AGxZR-Uyo",
      album: "TOHO COMPLETE BOX (特ーSPECIALー)", 
      basedon: "Walking the Streets of a Former Hell"
    },
    {
      no: "4", 
      title: "からくれない (Crimson) - Off Vocal", 
      link: "https://www.youtube.com/watch?v=tbjYS7yhYl8",
      vidid: "tbjYS7yhYl8",
      album: "TOHO COMPLETE BOX (特ーSPECIALー)", 
      basedon: "Walking the Streets of a Former Hell"
    },
    {
      no: "5", 
      title: "夜啼く兎は夢を見る (The Dream of a Rabbit Singing in the Night) - Vocal", 
      link: "https://www.youtube.com/watch?v=aCSDiCxB0vw",
      vidid: "aCSDiCxB0vw",
      album: "紅染の鬼が哭く ／ ANCO-0007 ／ 2012-08-11 (Comiket 82)", 
      basedon: "Lunatic Eyes ~ Invisible Full Moon"
    },
    {
      no: "6", 
      title: "夜啼く兎は夢を見る (The Dream of a Rabbit Singing in the Night) - Off Vocal", 
      link: "https://www.youtube.com/watch?v=pxRyf-VqWsQ",
      vidid: "pxRyf-VqWsQ",
      album: "紅染の鬼が哭く ／ ANCO-0007 ／ 2012-08-11 (Comiket 82)", 
      basedon: "Lunatic Eyes ~ Invisible Full Moon"
    },
    {
      no: "7", 
      title: "両目ひらけば桔梗咲く (If I Open Both Eyes, the Bellflowers Will Bloom)", 
      link: "https://www.youtube.com/watch?v=2wJbWpJbdrA",
      vidid: "2wJbWpJbdrA",
      album: "Oni Togizoushi ／ ANCO-0004 ／ 2011-03-13 (Reitaisai 8)", 
      basedon: "Beware the Umbrella Left There Forever"
    },
    {
      no: "8", 
      title: "両目ひらけば桔梗咲く (If I Open Both Eyes, the Bellflowers Will Bloom) - No Growl", 
      link: "https://www.youtube.com/watch?v=FWqxBIdT0Jo",
      vidid: "FWqxBIdT0Jo",
      album: "Oni Togizoushi ／ ANCO-0004 ／ 2011-03-13 (Reitaisai 8)", 
      basedon: "Beware the Umbrella Left There Forever"
    },
    {
      no: "9", 
      title: "両目ひらけば桔梗咲く (If I Open Both Eyes, the Bellflowers Will Bloom) - 尺八ver.", 
      link: "https://www.youtube.com/watch?v=AxvbCppfDlg",
      vidid: "AxvbCppfDlg",
      album: "Oni Togizoushi ／ ANCO-0004 ／ 2011-03-13 (Reitaisai 8)", 
      basedon: "Beware the Umbrella Left There Forever"
    },
    {
      no: "10", 
      title: "両目ひらけば桔梗咲く (If I Open Both Eyes, the Bellflowers Will Bloom) - Karaoke", 
      link: "https://www.youtube.com/watch?v=51v7-vB3Z94",
      vidid: "51v7-vB3Z94",
      album: "Oni Togizoushi ／ ANCO-0004 ／ 2011-03-13 (Reitaisai 8)", 
      basedon: "Beware the Umbrella Left There Forever"
    },
    {
      no: "11", 
      title: "夜ごとの闇の奥底で (Every Night in the Depths of Darkness)", 
      link: "https://www.youtube.com/watch?v=vvVe8Oileug",
      vidid: "vvVe8Oileug",
      album: "TOHO COMPLETE BOX (特ーSPECIALー)", 
      basedon: "Apparitions Stalk the Night"
    },
    {
      no: "12", 
      title: "Everything Will Freeze", 
      link: "https://www.youtube.com/watch?v=lkicMsn-s_8",
      vidid: "lkicMsn-s_8",
      album: "暴君 (Tyrant)", 
      basedon: "Flowering Night"
    },
    {
      no: "13", 
      title: "奇稲田姫 (Princess Inada)", 
      link: "https://www.youtube.com/watch?v=x-DbekVGjPY",
      vidid: "x-DbekVGjPY",
      album: "Oni Togizoushi ／ ANCO-0004 ／ 2011-03-13 (Reitaisai 8)", 
      basedon: "Because Princess Inada Is Scolding Me"
    },
    {
      no: "14", 
      title: "天涯 (Horizon)", 
      link: "https://www.youtube.com/watch?v=qSGVmjmBkPY",
      vidid: "qSGVmjmBkPY",
      album: "Oni Togizoushi ／ ANCO-0004 ／ 2011-03-13 (Reitaisai 8)", 
      basedon: "Broken Moon"
    },
    {
      no: "15", 
      title: "天涯 (Horizon) - Karaoke", 
      link: "https://www.youtube.com/watch?v=m9c6qtNf4Fk",
      vidid: "m9c6qtNf4Fk",
      album: "Oni Togizoushi ／ ANCO-0004 ／ 2011-03-13 (Reitaisai 8)", 
      basedon: "Broken Moon"
    },
    {
      no: "16", 
      title: "天涯 feat.中村仁樹", 
      link: "https://www.youtube.com/watch?v=0phtKmthdFs",
      vidid: "0phtKmthdFs",
      album: "Oni Togizoushi ／ ANCO-0004 ／ 2011-03-13 (Reitaisai 8)", 
      basedon: "Broken Moon"
    },
    {
      no: "17", 
      title: "神かくし - Vocal", 
      link: "https://www.youtube.com/watch?v=-o5h517z1WU",
      vidid: "-o5h517z1WU",
      album: "紅染の鬼が哭く ／ ANCO-0007 ／ 2012-08-11 (Comiket 82)", 
      basedon: "Candid Friend"
    },
    {
      no: "18", 
      title: "永月夜", 
      link: "https://www.youtube.com/watch?v=_p9F5g9ouCM",
      vidid: "_p9F5g9ouCM",
      album: "鬼伽草子 [Reitaisai 8]", 
      basedon: "Flight of the Bamboo Cutter ~ Lunatic Princess"
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
    this.youtubeid = 'gNSGi-TNOE8';
  }
}
