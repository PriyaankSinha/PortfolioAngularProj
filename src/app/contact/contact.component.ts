import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "☎️ Contact Me ☎️",
    subtitle: "Discuss about project/s or any new ideas or just want to say hi? My Inbox is open for all.",
    number: "+91-7350422112",
    email_address: "priyaank.sinha025@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
