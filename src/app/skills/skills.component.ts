import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do 💁‍♂️",
    subTitle: "CRAZY FULL STACK DEVELOPER AND PASSIONATE GAMER WHO WANTS TO EXPLORE EVERY TECH",
    skills: [
      "👉 Develop highly interactive Front end / User Interfaces for your web applications",
      "👉 Creating databases and stored procedures for Restful APIs using SSMS",
      "👉 Creating services to fetch data from database using ADO.Net and Entity Framework in C#",
      "👉 Experience in writing Unit Test Cases for Angular using KARMA and JASMIN",
      "👉 Experience of working with Machine Learning Projects which includes knowledge of Neural Networks, Logistic Regression and Prediction Analysis",
      "👉 Passion for Gaming, hence, started learning new concepts of Game Designs and Unity tool"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
