import { Component } from '@angular/core';
import { NgFor,NgIf,NgClass } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, NgClass,],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  selectedItem: any;

  ngOnInit(): void {
    this.selectedItem  = this.experienceItems[0];
   }

  experienceItems = [
    {
      title: 'Software Engineer Intern at Copart',
      date: 'Dallas, Texas | Jan 2024 – Present',
      link: 'https://www.copart.com/',
      details:[
          "Created and customized 15+ dynamic Angular components and downgraded them to utilize in AngularJS pages.",
          "Part of defect pod which was responsible for doing critical bug fixes and deliver in short time (weekly releases) resulted in 40% reduction in escalation tickets.",
          "Executed secure license uploads & robust search feature, leveraging Angular, TypeScript, RESTful APIs & Spring Boot.",
          "Rendered multiple pages in UI, loading the scripts through the content management system (Drupal).",
          "Generated BDD automation scripts for UI and performed E2E tests which reduced defects by 60%.",
          "Revamped Lot Details pages for legacy application to Angular 12. Utilized Angular, JavaScript, CSS, HTML, Spring Boot, Bootstrap, REST APIs, and MySQL, resulting UI enhancement & functionalities for the clients.",
          "Broadcasted events to Google Analytics (GTM), leading to a 35% increase in actionable insights. This enabled the marketing team to refine campaign targeting strategies, driving a 20% increase in product sales."
      ],
      delay: 200
    },
    {
      title: 'Software Engineer at Oracle Cerner',
      date: 'Bengaluru, India | May 2020 – Jan 2023',
      link:'https://go.oracle.com/LP=142384?src1=:ad:pas:go:dg:a_nas:l5:RC_GOOG240501P00011C00354:MainAd&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnWMiAg3NgZ6ys7_TyPjesEmSYfNxSebchOBN1qEClV4WwueXRwKaaEaAikWEALw_wcB',
      details: [
          "Worked on spike, stories, and defects for the product Revenue Cycle, which involved assessing the interaction between multiple systems and API/design changes required to implement new features.",
          "Addressed HP-Fortify, SonarQube vulnerability issues, enhancing code quality by 30% and reducing security risks. Utilized Splunk to visualize logs, enabling proactive monitoring and rapid issue identification.",
          "Designed and developed a feature Visit List Filter Queue, which prioritized patient encounters based on their appointment dates and emergencies, and integrated it into Revenue Cycle.",
          "Worked on Jira integration, where the data in Excel is parsed and corresponding Jira’s are updated, resulting in a 75% increase in communication, collaboration, and adoption across cross-functional teams.",
          "Migrated APIs from synchronous to asynchronous using Spring Reactive Programming, optimizing system performance by 50%, and deployed them using Jenkins pipeline for Continuous Integration and Delivery.",
          "Performed unit testing using Junit, achieving 85%+ coverage, and utilized Postman for backend testing, while also participating in code reviews.",
          "Delivered APIs for fetching EHR data to Cerner Millennium, resulting in a 30% increase in order processing efficiency.",
          "Implemented Apache Kafka in Java for efficient application log processing and real-time email notifications, enhancing system monitoring capabilities and user engagement."
      ],
      delay: 300
    },
    {
      title: 'Software Engineer Intern <br>at Collins Aerospace',
      date: 'Hyderabad, India | December 2019 – May 2020',
      link:'https://www.collinsaerospace.com/',
      details: [
          "Developed Object-Oriented Fullstack Applications and REST APIs using Java 8 functional programming, adhering to SOLID principles and implementing design patterns.",
          "Implemented user-friendly web login functionality and highly secure microservices-based REST APIs for IMMS Consumer Services using Java Spring Boot. Included the generation of JWT tokens, improving user access security by 35%.",
          "Built an automation tool named Bidirectional Trace Validation, which crawls the JAMA & SVN websites to capture the requirement numbers, significantly reducing the team's manual effort by 30 hours during release activity.",
          "Day To Day Work: Worked with Flight Management System and Flight User Interface teams, mostly improving the consistency and efficiency of enterprise applications, and was involved in Continuous Build and Test (CBT)."      
      ],
      delay: 400
    }
  ];


  toggleItem(item: any) {
      this.selectedItem = item;
  }

}
