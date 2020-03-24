const projects = [
  {
    title: 'AWS MFA CLI Configure (NPM installation support)',
    date: '07/02/2020',
    body: 'AWS access when utilising multi-factor authentication is quite painful when using AWS CLI, this means that quick updates to a AWS service are hindered by a repetitive action of fetching temporary credentials and appending them to your CLI credentials file. This tool automates the process for you.',
    imgUri: '/img/aws-mfa-cli-configure.png',
    link: 'https://github.com/AlexToop/aws-mfa-cli-configure'
  },
  {
    title: 'Fitbit Versa - Digital Bold Clock Face',
    date: '16/01/2020',
    body: 'Developed in one evening. I wanted a digital clock face that supported business users with the majority of the time not obscured by sleeves. Support for weather and general stats were added, in a sleek and minimal approach.',
    imgUri: '/img/fitbit-digital-bold.png',
    link: 'https://github.com/AlexToop/fitbit-digital-bold/'
  },
  {
    title: 'Fitbit Versa - Digital Cascade Clock Face',
    date: '27/07/2019',
    body: 'A digital watch face designed with inspirations from multiple modern digital watch faces. Utilises the Fitbit SDK and supports Versa devices. Current weather support included.',
    imgUri: '/img/Fitbit-Digital-Cascade.png',
    link: 'https://github.com/AlexToop/Fitbit-Digital-Cascade'
  },
  {
    title: 'Fitbit Versa - Analogue Hours Clock Face',
    date: '10/06/2019',
    body: 'An analogue watch face designed with inspirations from multiple digitalized analogue watch faces. Utilises the Fitbit SDK and supports Versa devices. Support for current weather planned for a future release.',
    imgUri: '/img/Fitbit-Analogue-Hours.png',
    link: 'https://github.com/AlexToop/Fitbit-Analogue-Hours'
  },
  {
    title: 'Angular 5 Website Development',
    date: '04/04/2018',
    body: 'This website has been developed using Angular 5 and Bootstrap 4. It is hosted on AWS EC2 and is intended as a way to practise my Angular skills outside of work. The code will be posted on GitHub as a public project should you wish to have a look after I\'ve finished my current major revamp of this site.',
    imgUri: '/img/Angular5Website.png',
    link: 'https://github.com/AlexToop/alexandertoop-angular-com'
  },
  {
    title: 'AWS Cloud Development',
    date: '10/06/2019',
    body: 'With the progression of services to the cloud I\'ve been interested in becoming familiar with the process of cloud development, deployment and management. To this end I\'ve set up my own AWS project with this website as an example. This is in support of my progress towards AWS Cloud Practitioner certification. For example, this website itself if hosted on a t1.micro instance on AWS EC2.',
    imgUri: '/img/logo.png',
    link: ''
  },
  {
    title: 'BT Java Coding Test Submission - Router Patch Tester',
    date: '19/01/2017',
    body: 'A project created to demonstrate some of my Java programming skills. Specification was provided by BT for my industrial year application. Program takes in a CSV file and then outputs to terminal the details of routers that meet the update criteria. CSV is expected to consist of lines containing 5 comma separated values. The contents of these lines are then tested against the update criteria. (Hostname/IP Address have not been repeated, router has not already been patched, version is 12+ and information is logical.)',
    imgUri: '/img/logo.png',
    link: 'https://github.com/AlexToop/Router-Patch-Check-Submission'
  },
  {
    title: 'Arduino Hardware and Programming: Making a clock',
    date: '21/01/2016',
    body: 'Having been introduced to Arduinos during the first year of my Software engineering degree at Aberystwyth University I decided I really wanted to try and pursue different projects with my Arduino. Therefore after finding and purchasing a hardware package for the Arduino I decided to create my own clock using the LCD screen provided and a serial clock circuit.',
    imgUri: '/img/Arduino-Uno.jpg',
    link: 'https://github.com/AlexToop/arduino_clock'
  },
  {
    title: 'Personal Website Development',
    date: '17/11/2016',
    body: 'Having been taught about websites in a first year module I decided I would like to make my own website. I could have used solutions such as WordPress to make the process easier, however I chose to write the website from scratch to get a better feel for HTML and CSS. Whilst creating the website I decided to focus on simplicity and functionality. A design concept I personally adore.',
    imgUri: '/img/First-Website.png',
    link: 'https://github.com/AlexToop/alextoop.github.io'
  }
]

module.exports = {
  projects
}
