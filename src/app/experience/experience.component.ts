import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Software Engineer (Full Stack)",
        company: "Coforge",
        color: "#3781c2",
        companylogo: "../../../assets/images/Coforge_Logo.png",
        date: "Sept 2021 – Present",
        desc: "Working as a full stack developer for Web Applications in Insurance Sector at Coforge.\n Languages: C#, TypeScript, SQL.\n Tools: SQL Server Management Studio, Visual Studio, .NET Core Framework, Angular, VS Code",
      },
      {
        role: "President",
        company: "Artificial Intelligence Club",
        color: "#3f703f",
        companylogo: "../../../assets/images/ailogo.png",
        date: "Aug 2019 – Jul 2021",
        desc: "Acting as a Student Head at AIIT (Amity University) AI Club, as well as Organized events and developed Predictive models for the department as a team",
      },
      {
        role: "President",
        company: "Web Devlopment Club",
        color: "#ff9102",
        companylogo: "../../../assets/images/cascadelogo.png",
        date: "Jun 2018 – Aug 2021",
        desc: "Acting as a Student Head at AIIT (Amity University) Web Dev Club, as well as Organized events and developed websites for the University as a team",
        },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}