import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
     
      githurl: 'https://github.com/code-WithPrashant',
      mediumlink: '#',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
     
      githurl: 'https://github.com/code-WithPrashant',
      mediumlink: '',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: '#',
      githurl: 'https://github.com/code-WithPrashan',
      mediumlink: '#',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },
  ]
  about2 = `Software Developer with 1+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 1.5+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Jquery, Bootstrap, and MYSQL, Spring Boot`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "#"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '75%'
    },
    {
      'id': '2',
      'skill': 'JQUERY',
      'progress': '35%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '55%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL, postgreSQL',
      'progress': '60%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '40%'
    },
    {
      'id': '6',
      'skill': 'JAVA',
      'progress': '65%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2019 - 2022',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Computer Apllication',
      'info': `
       Completed Bachelor of Computer Apllication.
      Completed The DataLytics internship Program,Nagpur.
       Technologies Used - Angular, Java, Sql, mySql .`,
      'institution': 'Saraswati College, Shegaon'
    },
    {
      'id': '2',
      'from_to_year': '2016 - 2017',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'Sharad Pawar Junior College Warud',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
       There was also a good base on physics, mathematics and chemistry.
       Completed my high school with 72%.`
    },
//     {
//       'id': '3',
//       'from_to_year': '2012 - 2013',
//       'education': 'Secondary  School',
//       'stream': 'Science and Mathematics',
//       'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
//       'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
// Completed my Secondary school with 84%.`
//     }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Fossgen Technologies',
      location: 'Pune',
      timeline: 'march 2022 to December',
      role: 'Full Stack Developer',
      work: `I am working on Ondc project of protean eGov Technologies Pvt.Ltd.  
      (Formerly NSDL e-Governance Infrastructure Limited) .

      Project - Ondc (Open network digital commerce) .
      Technologies : Angular 8, spring Boot, postgreSQL .
      Description - 
      In this project I use gateway. which is ondc using this gateway buyer and. seller can be communicate each other to buy and sell product from any
      platform there is no need to specific platform to buy and sell product . 

       Roles and responsibilities - .
       	Design ,build and maintain efficient and reliable java and also angular code .
       	Work on extensions of existing products .
       Suggest and implements and improvements on current products .
       	Identify defect / issues and raise  a CR to the change control board, track the defect status.`

    },
    {
      id: 3,
      company: 'Swift Mobil technologies',
      location: 'Mumbai',
      timeline: 'Jan 2023 to Present',
      role: 'Full Stack Developer',
      work: `Technologies : Angular 8, spring Boot, MySql, SQL.
      Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
      Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
      Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation .
      This project was based on Booking appointments. A doctor will be able to see he’s booking history, A patient can book an appointment through this website, patient can discuss with a doctor, online money transaction is also available. In this project I worked on Angular, I fixed some bugs like restrictions and validations, added some functionality in this project like country code, Export as PDF and ExporASExcel, Duplication &Deletion issues, 
      calendar issues and added some editable Option Fixed error message and clickable bugs.`
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

  //   {
  //     id: 1,
  //     company: 'Tata Consultancy Services',
  //     location: 'Gandhinagar and Pune',
  //     timeline: 'June 2019 - Jan 2021',
  //     role: 'Assistant System Engineer Trainee',
  //     work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .

  // Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

  // Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

  // Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  // `
  //   },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/blogger.png',
      url: '#'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/github.png',
      url: 'https://github.com/code-WithPrashant/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/freelancer.png',
      url: 'https://www.upwork.com/freelancers/~01ee646c90c1fdacb2'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }

  sentMessage(data:any) {
    
    return this.http.post(`http://localhost:9090/api/message`,data);
    //  return this.http.post(this.baseUrl + data);

  }
}
