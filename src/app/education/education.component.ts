import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "MCA - Computer Applications",
      duration: "2021",
      subtitle: "Amity University, Noida",
      content: "Successfully completed my MCA in Computer applications from Amity University, Noida.\n" + 
     "CGPA: 9.1",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "BCA - Computer Applications",
      duration: "2016",
      subtitle: "Kalinga University, Raipur",
      content: "Successfully completed my BCA in Computer applications from Kalinga University, Raipur.\n" + 
      "Aggregate: 68%",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2010",
      subtitle: "CBSE Board",
      content: "Successfully completed my intermediate studies in 2010 from Delhi Public School, Bareilly.\n" +
        "Major: PCM.\n" + 
        "Aggregate: 75%",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2008",
      subtitle: "ICSE Board",
      content: "Successfully completed my high school studies in 2008 from Hartmann College, Bareilly.\n" +
      "Aggregate: 62%",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
