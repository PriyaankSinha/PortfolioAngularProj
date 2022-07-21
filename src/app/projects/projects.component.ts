import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [{
    title: "Code Snippets",
    desc: "Find code for the simple, attractive and powerfull protfolio",
    image: "../../assets/images/portfolio.png",
    link: "https://github.com/PriyaankSinha/PortfolioAngularProj"
  },
  {
    title: "Gamers Mode On",
    desc: "Switch to Game Design Blog for passionate Gamers and Designers",
    image: "../../assets/images/gameDesign.png",
    link: ""
  }
]
 
  constructor() { }

  ngOnInit(): void {

  }

}
