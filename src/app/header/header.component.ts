import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
        group([
          query(':enter', [
            style({ opacity:0 }),
            animate('1000ms ease-in-out', style({ opacity:1 }))
          ]),
          query(':leave', [
            style({ opacity:1 }),
            animate('1000ms ease-in-out', style({ opacity:0 }))]),
        ])
      ])
    ]),

    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  greeting= {
    username: "Priyaank Sinha",
    title: "Hi all, I'm Priyaank",
    subTitle: "A passionate Full Stack Software Developer 🚀 and Gamer 🎮 who has an experience of building Web applications with TypeScript / Angular / C# and some other cool libraries and frameworks. " + 
    "Also, I have started learning and implementing Game Designing concepts using Unity.\n" + 
    "Hobbies: Listening to Music & Watching Movies, In Sports - Basketball and Badminton, In Computer Games - FIFA, Valorant, NBA etc., In Mobile Games - Pubg, Clash of clans etc.\n" + 
    "My Strengths: Leadership Qualities, Focused, Confidence, Gratitude, Communication & Presentation Skills, Time Management, Self-Learning and Self-Motivation.",
    resumeLink: "https://drive.google.com/file/d/1EfQ6kLvW1O7QgpHMZkB9Z_sOytXm3F-q/view?usp=sharing"
  }

  ngOnInit(): void {
  }

}
