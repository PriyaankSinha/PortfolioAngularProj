import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline = [
    {
      heading: "MCA",
      duration: "2018-2021",
      content: "Successfully completed my MCA in Computer applications from Amity University, Noida.\n" + 
      "CGPA: 9.1",      
      className: "direction-r"
    },
    {
      heading: "BCA",
      duration: "2013-2016",
      content: "Successfully completed my BCA in Computer applications from Kalinga University, Raipur.\n" + 
      "Aggregate: 68%",      
      className: "direction-l"
    },
    {
      heading: "Intermediate",
      duration: "2009-2010",
      content: "Successfully completed my intermediate studies in 2010 from Delhi Public School, Bareilly.\n" +
      "Major: PCM.\n" + 
      "Aggregate: 75%",
      className: "direction-r"
    },
    {
      heading: "High School",
      duration: "2007-2008",
      content: "Successfully completed my high school studies in 2008 from Hartmann College, Bareilly.\n" +
      "Aggregate: 62%",      
      className: "direction-l"
    }

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
