import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "devicon-html5-plain"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "devicon-css3-plain"
      },
      {
        skillName: "TypeScript",
        fontAwesomeClassname: "devicon-typescript-plain"
      },
      {
        skillName: "Angular",
        fontAwesomeClassname: "devicon-angularjs-plain"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "devicon-nodejs-plain"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "devicon-npm-original-wordmark"
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "python",
        fontAwesomeClassname: "devicon-python-plain"
      },
      {
        skillName:".Net Core",
        fontAwesomeClassname:"devicon-dotnetcore-plain"
      },
      {
        skillName:"CSharp",
        fontAwesomeClassname:"devicon-csharp-plain"
      },
      {
        skillName:"Anaconda",
        fontAwesomeClassname:"devicon-anaconda-original"
      },
      {
        skillName:"VS Code",
        fontAwesomeClassname:"devicon-vscode-plain"
      },
      {
        skillName:"Karma",
        fontAwesomeClassname:"devicon-karma-plain"
      },
      {
        skillName:"Visual Studio",
        fontAwesomeClassname:"devicon-visualstudio-plain"
      },
      {
        skillName:"Jupyter",
        fontAwesomeClassname:"devicon-jupyter-plain"
      },
      {
        skillName:"R",
        fontAwesomeClassname:"devicon-r-original"
      },
      {
        skillName:"WordPress",
        fontAwesomeClassname:"devicon-wordpress-plain"
      },
      {
        skillName:"Unity",
        fontAwesomeClassname: "devicon-unity-original"
      },
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
