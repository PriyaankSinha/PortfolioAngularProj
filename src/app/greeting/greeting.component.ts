import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  animations: [trigger('list1', [
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
  greeting = {
    username: "Priyaank Sinha",
    title: "Hi all, I'm Priyaank",
    subTitle: "A passionate Full Stack Software Developer 🚀 and Gamer 🎮 who has an experience of building Web applications with TypeScript / Angular / C# and some other cool libraries and frameworks. " + 
    "Also, I have started learning and implementing Game Designing concepts using Unity.\n" + 
    "Hobbies: Listening to Music & Watching Movies, In Sports - Basketball and Badminton, In Computer Games - FIFA, Valorant, NBA etc., In Mobile Games - Pubg, Clash of clans etc.\n" + 
    "My Strengths: Leadership Qualities, Focused, Confidence, Gratitude, Communication & Presentation Skills, Time Management, Self-Learning and Self-Motivation.",
    resumeLink: "https://drive.google.com/file/d/1EfQ6kLvW1O7QgpHMZkB9Z_sOytXm3F-q/view?usp=sharing"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
