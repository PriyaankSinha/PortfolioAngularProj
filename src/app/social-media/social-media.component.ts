import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/PriyaankSinha",
    linkedin: "https://www.linkedin.com/in/priyaanksinha/",
    gmail: "priyaank.sinha025@gmail.com",
    instagram : "https://www.instagram.com/priyaank_sinha/?hl=en",
    facebook: "https://www.facebook.com/priyaank.sinha"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
