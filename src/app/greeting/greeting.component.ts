import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  animations:[  trigger('list1', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({
        transform: 'translateX(100px)',
        opacity: 0
      }))
    ])
  ])]

})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Priyaank Sinha",
    title: "Hi all, I'm Priyaank",
    subTitle: "A passionate Full Stack Software Developer 🚀 and Gamer 🎮 who has an experience of building Web applications with TypeScript / Angular / C# and some other cool libraries and frameworks and also, started learning and implementing Game Designing concepts using Unity.",
    resumeLink: "https://drive.google.com/file/d/1YafWBqzJzA60fZJ6_mLRHY0pcBUTOFBZ/view?usp=sharing"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
