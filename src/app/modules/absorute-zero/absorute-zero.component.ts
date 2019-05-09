import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-absorute-zero',
    templateUrl: './absorute-zero.component.html',
    styleUrls: ['./absorute-zero.component.css']
})
export class AbsoruteZeroComponent implements OnInit {
    artistImageSmall = `../../assets/images/music-zun/absorute_zero-small.jpg`;
    artistImageSmallAlt = `absorute zero album`;
    artistImageFull = `../../assets/images/music-zun/absorute_zero.jpg`;
    artistName = `AbsoЯute Zero`;
    artistDescription = `Born October 7 / Libra / O type / from Tokyo. 
  2012 Doujinshi Music Circle "A-One" subscription. Currently he has appeared in various LIVE as a main vocalist. 
  2015 Formed a new project 【AbsoRelease Zero】 as Solo name "Rute" in Solo. I am planning the first Birthday One-man Live on Saturday, October 3.`;
    artistMembers = [];
    artistDescriptionSource = `http://absorute-zero.net/profile/`;
    artistSites = [
        {
            site: `http://absorute-zero.net/`
        },
        {
            site: `https://www.youtube.com/channel/UC7ADRBPNzdRfgLcLzuExsVA`
        }
    ];
    artistWorks = [
        {
            no: "1", title: "Ray's end(ショートVer)",
            link: "https://www.youtube.com/watch?v=hK9hlPqJTF8",
            vidid: "hK9hlPqJTF8",
            album: "Absolute One",
            basedon: "Lunatic Eyes ~ Invisible Full Moon"
        },
        {
            no: "2",
            title: "23145EASONS",
            link: "https://www.youtube.com/watch?v=mLoicLxFkOo",
            vidid: "mLoicLxFkOo",
            album: "Fuzoroi777",
            basedon: "Secret God Matara ～ Hidden Star in All Seasons"
        },
        {
            no: "3",
            title: "完全犯罪⑥⑥BANG!",
            link: "https://www.youtube.com/watch?v=RFW2tBSKyF0",
            vidid: "RFW2tBSKyF0",
            album: "Rute66",
            basedon: "U.N. Owen Was Her?"
        },
        {
            no: "4",
            title: "⑨ Till you know",
            link: "https://www.youtube.com/watch?v=mUezwNSzYho",
            vidid: "mUezwNSzYho",
            album: "誤路逢わせ",
            basedon: "Beloved Tomboyish Girl"
        },
        {
            no: "5",
            title: "Piece of clown(動画はShort Ver.)",
            link: "https://www.youtube.com/watch?v=0eMlbYSz28M",
            vidid: "0eMlbYSz28M",
            album: "Associate Door",
            basedon: "Pierrot of the Star-Spangled Banner"
        },
        {
            no: "6",
            title: "I❤Hell（Fullサイズ）",
            link: "https://www.youtube.com/watch?v=dziFRSwVC9U",
            vidid: "dziFRSwVC9U",
            album: "Associate Door",
            basedon: "Pandemonic Planet"
        },
        {
            no: "7",
            title: "永遠DAYS",
            link: "https://www.youtube.com/watch?v=O2fC4xpn5go",
            vidid: "O2fC4xpn5go",
            album: "住に単会のAntenora",
            basedon: "Lunatic Princess"
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
        this.youtubeid = 'hK9hlPqJTF8';
    }

}
