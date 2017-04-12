import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FilterService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FilterService {
  groups: any = [];
  events: any = [];

  constructor(public http: Http) {
    this.initializeMasterData();
  }

  initializeMasterData() {
    this.groups = [{
      "name": "Association for Computing Machinery",
      "description_short": "We work to promote knowledge and greater interest in the science, design, development, language, management, and applications of modern computing.",
      "description": "We work to promote knowledge and greater interest in the science, design, development, language, management, and applications of modern computing on the Twin Cities campus and around the Twin Cities area. We provide a place on campus in Keller Hall, room 2-204, where anyone can come to meet and discuss modern computing. Our room is open to any and all, and we welcome computer science, computer engineering, and electrical engineering students, as well as anyone with an interest in computing or programming. We also host several events throughout the year, including MinneHack, the largest Hackathon in the Twin Cities, the Software Design Competition, and the semesterly Keller LAN Party.",
      "images": ["assets/img/acm-logo.png", "assets/img/acm01.jpg"],
      "events": [],
      "friends": 0,
      "friendimg": "assets/img/friends/0.png"
    },
    {
      "name":"Association for Computing Machinery - Women's Chapter",
      "description_short":"Do you value the recruitment and retention of women in computing? If so, ACM-W is for you! ",
      "description":"Do you value the recruitment and retention of women in computing? If so, ACM-W is for you! This group empowers women to get involved in activities that promote female participation. Together, we will help celebrate, inform, and support women in computing.",
      "images":["assets/img/pics/acm-w1.png", "assets/img/pics/acm-w2.jpg"],
      "events":["CSCI Pre-registration Mingle"],
      "friends": 0,
      "friendimg": "assets/img/friends/0.png"
    },
      {
        "name": "Latin Dance Club",
        "description_short": "A student organization focusing on international Latin dance.",
        "description": "Latin Dance Club of UMN (LDC UMN) is a student organization focusing on international Latin dance. We provide an opportunity for dancers to learn, perform and compete together. All levels are welcome and we teach from the beginning! We also provide high quality technique lessons taught by professional instructor to improve your skills to a more advanced level.",
        "images": ["assets/img/ldc01.png", "assets/img/ldc02.jpg", "assets/img/ldc03.jpg", "assets/img/ldc04.jpg", "assets/img/ldc05.jpg"],
        "events": ["La La Dance"],
        "friends": 3,
        "friendimg": "assets/img/friends/3.png"
      },
      {
        "name": "Indian Student Association",
        "description_short": "The Indian Student Association strives to celebrate and share the culture of India with students at the UMN.",
        "description": "The Indian Student Association has many events that showcase Indian Food and Culture.",
        "facebook_link": "https://www.facebook.com/isa.umn1/",
        "images": ["assets/img/pics/isa1.jpg", "assets/img/pics/isa2.jpg", "assets/img/pics/isa3.jpg", "assets/img/pics/isa4.jpg", "assets/img/pics/isa5.jpg"],
        "events": ["Spring Formal, Fall Show, Picnic "],
        "friends": 4,
        "friendimg": "assets/img/friends/4.png"
      },
      {  "name":"CEHD Student Board",
         "description_short":"The student board for the College of Education and Human Development.",
         "description": "Our mission is to be the voice for the CEHD students and organizations, to enrich CEHD students' learning experience, to provide academic-related services to CEHD staff and students, and to provide leadership opportunities to the CEHD students.\nAll CEHD activities promote community building, student leadership, and interaction. From our Homecoming Breakfast to the Alumni Networking Event, students are provided with support and connections to advance their careers. The student board is also represented at most college events and volunteers in the community together. Student Board members are also involved in standing committee activities within the college.",
         "facebook_link":"https://www.facebook.com/pg/CEHDugrad",
         "images":["assets/img/cehd01.jpg", "assets/img/cehd02.jpeg", "assets/img/cehd03.jpg"],
         "events":["Stroll in the Knoll, Habitat for Humanity 60K"],
         "friends": 2,
         "friendimg": "assets/img/friends/2.png"
      },
      {
        "name": "Society of Women Engineers",
        "description_short": "The Society of Women Engineers is a student group that works towards creating community amongst women engineers on campus.",
        "description": "The primary focus of the Society of Women Engineers is to support and encourage women in science and engineering fields. SWE provides support, leadership opportunities, outreach experiences, community involvement, teamwork skills, and personal/professional development for females in science and engineering.",
        "facebook_link": "https://www.facebook.com/swe.umn/",
        "images": ["assets/img/pics/swe1.jpg", "assets/img/pics/swe2.jpg", "assets/img/pics/swe3.jpg", "assets/img/pics/swe4.jpg", "assets/img/pics/swe5.jpg"],
        "events": ["MiniTalks with Mentorship, Monthly Meetings"],
        "friends": 2,
        "friendimg": "assets/img/friends/2.png"
      },

      {
        "name": "MIS Case Competition",
        "description_short": "Are you interested in solving business problems? Do you want to travel the world? The MIS case competition is the team for you!",
        "description": "Each school year, the Information and Decision Sciences Department assembles two teams of undergraduate students to represent the Carlson School and the University of Minnesota in international MIS-focused case competitions. One team competes at CaseIT - the oldest and most well-known MIS case competition - in Vancouver, Canada. The other team competes at APEX in Singapore, an MIS-themed case competition that values deep analysis and usually includes a local Asian dimension to the case.",
        "facebook_link": "https://carlsonschool.umn.edu/degrees/undergraduate/academics/majors-and-minors/management-information-systems/mis-case",
        "images": ["assets/img/pics/mis1.jpg"],
        "events": ["practices, Vancouver trip, Singapore trip"],
        "friends": 0,
        "friendimg": "assets/img/friends/0.png"
      },

      {
        "name": "IoT Collabarotive",
        "description_short": "The IoT Collaborative is a recently formed student group that wants to provide students interested in technology with the opportunity to get hands on experience with The Internet of Things",
        "description": "The IoT Collaborative is a recently formed student group that wants to provide students interested in technology with the opportunity to get hands on experience with arduinos, wearables, electric paint, 3D printing. Please come join us every Friday from 2:30-4:00pm!",
        "facebook_link": "Coming Soon!",
        "images": ["assets/img/pics/iot1.jpg", "assets/img/pics/iot2.jpg", "assets/img/pics/arduino3.jpg"],
        "events": ["Weekly Meetings"],
        "friends": 4,
        "friendimg": "assets/img/friends/4.png"
      },
      {  "name":"Minnesota Student Association",
         "description_short":"The undergrad student government at the University of Minnesota.",
         "description": "The Minnesota Student Association is the undergraduate student government at the University of Minnesota-Twin Cities. We work as the voice of the student body by advocating for student interests in places they don't often get a voice—that includes helping to shape University policy, working with University administrators and the Board of Regents, engaging legislators at every level of government, and more. We’re always looking for ways to be more effective, and make an even bigger difference in the lives of students, so don’t hesitate to give us feedback, get involved, or add your voice. ",
         "facebook_link":"https://www.facebook.com/pg/msaumn",
         "images":["assets/img/pics/msa.png", "assets/img/msa02.jpg", "assets/img/msa03.jpg", "assets/img/msa04.jpg"],
         "events":["Wednesday Study Night"],
         "friends": 2,
         "friendimg": "assets/img/friends/2.png"
      },
      {
        "name":"Ski and Snowboard Club",
        "description_short":"Group of students interested in skiing and snowboarding.",
        "description":"The Ski and Snowboard Club is dedicated to those individuals who love to ski or snowboard. If you don't ski or snowboard, that's not a problem. Our club hosts events such as social gatherings, movie premieres, rail jams, camping trips, trips to local ski hills, and bigger trips out west during winter break and spring break. Members also get deals at local shops and ski brands. SSC is also a great place to meet new friends and find people with similar interests.",
        "facebook_link":"https://www.facebook.com/umnskiandsnowboardclub",
        "images":["assets/img/ssc01.jpg", "assets/img/ssc02.jpg", "assets/img/ssc03.jpg", "assets/img/ssc04.jpg"],
        "events":["Weekly Meeting", "Jackson Hole Ski Trip"],
        "friends":3,
        "friendimg":"assets/img/friends/3.png"
      }
    ]

    this.events = [
        {
          "name":"Wednesday Study Night",
          "group":"Minnesota Student Association",
          "date":"4/12/17",
          "time":" 3:00 - 8:00pm",
          "location":"Weisman Art Museum",
          "description_short":"Join the WAM Collective and MSA for the last study night of the semester!",
          "description":"Join the WAM Collective and the Minnesota Student Association (MSA) on Wednesday, April 12, for the last study night of the semester! This special study night will have extended hours from 3-8:00 PM and will feature the Minneapolis Coffee Cart, free snacks, and a carefully crafted playlist from Radio K.",
          "cost":0,
          "friends": 0,
          "friendimg": "assets/img/friends/0.png",
          "image":"assets/img/pics/wam.jpg"
        },
        {
          "name":"Weekly Meeting",
          "group":"Ski and Snowboard Club",
          "date":"4/12/17",
          "time":"9:00pm",
          "location":"Moos Tower 2-530",
          "description_short":"Weekly Ski and Snowboard Club Meeting.",
          "description":"At our meeting this week, we will be signing up for officer elections and discussing our summer trip.",
          "cost":0,
          "friends":0,
          "friendimg":"assets/img/friends/0.png",
          "image": "assets/img/ssc06.jpg"
        },
      {
        "name": "Salsa Night",
        "group": "Latin Dance Club",
        "date": "4/13/17",
        "time": "7:00 PM - 9:00 PM",
        "location": "Coffman Great Hall",
        "description_short": "Salsa dancing event at Coffman",
        "description": "Come to Coffman for a night of salsa dancing with the Latin Dance Club. No experience necessary!",
        "cost": 0,
        "friends": 3,
        "friendimg": "assets/img/friends/3.png",
        "image": "assets/img/pics/latin1.jpg"
      },
      {
        "name": "Habitat for Humanity 60K Day",
        "group": "CEHD Student Board",
        "date": "4/13/17",
        "time": "9:00 AM - 5:00 PM",
        "location": "Northrop Auditorium Plaza",
        "description_short": "Join the CEHD USB as we participate in Habitat for Humanity's 60K Day!",
        "description": "Join the CEHD USB as we participate in Habitat for Humanity's 60K Day!  This fundraising event connects the University community with the common goal of providing a home in St. Paul for a family in need.  Local sponsors will be present and there will be a live concert from noon-1:00PM.",
        "cost": 0,
        "friends": 0,
        "friendimg": "assets/img/friends/0.png",
        "image": "assets/img/habitat.jpg"
      },
      {
        "name": "CSCI Pre-registration Mingle",
        "group": "Association for Computing Machinery-Women",
        "date": "4/14/17",
        "time": "10am-12pm",
        "location": "Physics and NanoTechnology 130",
        "description_short": "Hello Computer Science Majors! We have an opportunity for you to discuss you upcoming schedule for the next semester with you peers and advisor Kelly Thomas!",
        "description": "Hello Computer Science Majors! We have an opportunity for you to discuss you upcoming schedule for the next semester with you peers and advisor Kelly Thomas!",
        "cost": 0,
        "friends": 2,
        "friendimg": "assets/img/friends/2.png",
        "image": "assets/img/pics/Acm-w.jpg"
      },
      {
        "name": "La La Dance",
        "group": "Latin Dance Club",
        "date": "4/15/17",
        "time": "3:00 PM - 5:00 PM",
        "location": "University Rec Center",
        "description_short": "All in the fabulous La La Dance!",
        "description": "Come and have fun at La La Dance! This is a ball held by LDC of UMN, and you are welcomed to learn some basic Latin dance steps or show your own steps with the music! We also have some fun steps from La La Land!\nNo dancing experience is required. Our club members will teach you some basic steps! No partner is required. You will always find a partner in the dance pool.",
        "cost": 5,
        "friends": 3,
        "friendimg": "assets/img/friends/3.png",
        "image": "assets/img/laladance.jpg"
      },

      {
        "name": "Cyborg-Unicorn Cook-In ",
        "group": "Association for Computing Machinery",
        "date": "4/20/17",
        "time": " 6:30-9:30pm",
        "location": "Keller Hall 3-126",
        "description_short": "A Cyborg-Unicorn Cook-In! Please come to room 3-126 in Keller Hall for lots of free-food and a great discussion about Cyborgs and Unicorns",
        "description": "",
        "cost": 0,
        "friends": 2,
        "friendimg": "assets/img/friends/2.png",
        "image": "assets/img/pics/Cyborg-Unicorn.jpg"
      },
      {   "name":"Basant",
          "group":"Indian Student Association",
          "date":"4/21/17",
          "time":" 5:00 PM - 8:00pm",
          "location":"Coffman Front Plaza",
          "description_short":"Please come to our end of the year Picnic for your favorite Indian and Pakistani food! Basant, is a kite festival shared with both Pakistani's and people of Northern India.",
          "description":"In conjunction with the Pakistani Student Association. Please come to our end of the year Picnic for your favorite Indian and Pakistani food! Basant, is a kite festival shared with both Pakistani's and people of Northern India. In order to celebrate here on campus, we will be providing kites!",
          "cost":0,
          "friends":0,
          "friendimg": "assets/img/friends/0.png",
          "image": "assets/img/pics/Basant.jpg"
        },
      {
        "name":"Spring Jam",
        "group":"SUA",
        "date":"4/22/17",
        "time":"12:00 pm",
        "location":"Lot 37",
        "description_short":"Spring Jam™ is a fun, trendy, and interactive environment that communicates a modern festival identity.",
        "description":"Spring Jam™ is a fun, trendy, and interactive environment that communicates a modern festival identity. The Spring Jam™ experience involves a high level of participation and a diverse lineup of music for the University of Minnesota student population to share together.",
        "cost":20,
        "friends": 4,
        "friendimg": "assets/img/friends/4.png",
        "image":"assets/img/pics/springjam.jpg"
      },
      {
          "name":"Holi: Colors that Unite",
          "group":"Bharat",
          "date":"4/23/17",
          "time":" 12:00- 4:00pm",
          "location":"East River Flats",
          "description_short":"Holi is one of the best events on campus! Come wearing white, and throw colors at your friends. (We also have water guns!)",
          "description":"THE MOST COLORFUL AND FUN EVENT OF THE YEAR IS FINALLY HERE - BHARAT’S HOLI 2K17!! Join us at East River Flats Park (behind Yudof) on April 23rd for the annual Holi festival!! It is one of the most popular and widely celebrated festivals in India. Known as the “festival of colors”, Holi signifies the arrival of spring and is celebrated with colors, good food, and is an opportunity to make great memories and have an amazing time.At the event, there will be color powders and water guns for FREE. Delicious food and beverages will be available for purchase.",
          "cost":0,
          "friends": 2,
          "friendimg": "assets/img/friends/2.png",
          "image":"assets/img/pics/holi.jpg"
        },
      {
        "name": "Laverne Cox Presentation",
        "group": "SUA",
        "date": "4/25/17",
        "time": "7:00 pm",
        "location": "Northrop Auditorium",
        "description_short": "Laverne Cox is coming to Northrop! Please go buy your tickets today!",
        "description": "Laverne Cox explores how the intersections of race, class, and gender uniquely affect the lives of trans women of color. Laverne draws from her own personal narrative to share how she has been able to navigate the world and all it's challenges. From growing up in Mobile, Alabama, raised by a single mother in a Christian family, to attending college in New York City to pursue a career as an actress, to finally finding the courage to step into the womanhood she always knew at heart was her destiny, Cox tells the story of the unique challenges along her journey to womanhood, professional achievement, self-acceptance, and love.",
        "cost": 12,
        "friends": 0,
        "friendimg": "assets/img/friends/0.png",
        "image": "assets/img/pics/Laverne_Cox.jpg"
      },
      {
        "name":"Jackson Hole Ski Trip",
        "group":"Ski and Snowboard Club",
        "date":"4/30/17",
        "time":"8:00am",
        "location":"Jackson Hole, WY",
        "description_short":"Our last trip of the season.",
        "description":"Join us for our last trip of the school year! We will be taking a bus, leaving at 8:00am from Superblock.",
        "cost":100,
        "friends":3,
        "friendimg":"assets/img/friends/3.png",
        "image":"assets/img/ssc05.jpg"
      },
      {
        "name": "Stroll in the Knoll",
        "group": "CEHD Student Board",
        "date": "5/5/17",
        "time": "11:00 AM - 2:00 PM",
        "location": "The Knoll, in from of Burton Hall",
        "description_short": "De-stress before finals with the CEHD USB!",
        "description": "De-stress before finals with the CEHD USB!  Enjoy free sandwiches and yard games as we celebrate the end of another successful school year.",
        "cost": 0,
        "friends": 4,
        "friendimg": "assets/img/friends/4.png",
        "image": "assets/img/stroll.jpg"
      },
      {
        "name": "Art Reception: designbats",
        "group": "UMN College of Design",
        "date": "5/8/17",
        "time": "6pm",
        "location": "Saint Paul Student Center- Art Gallery",
        "description_short": "Please come encourage your CDES friends at the art show! This theme for this gallery is the mysterious bat.",
        "description": "This exhibit examines the life of the bat population.Academic classes from a variety of Design disciplines will be creating visuals that re-envision this mammal. The intent behind each representation will be to help change how bats are perceived by the public sector. Bats are often misunderstood and are not credited with the quality of sustainability that they bring to our ecosystems. Visit this exhibition to learn more about this very important mammal and witness creative works by Design students across campus.",
        "cost": 0,
        "friends": 0,
        "friendimg": "assets/img/friends/0.png",
        "image": "assets/img/pics/DesignBats.jpg"
      },

      {
        "name": "Coding Competition",
        "group": "Association for Computing Machinery",
        "date": "5/10/17",
        "time": "5:00 pm",
        "location": "Keller Hall Atrium",
        "description_short": "Come for one last Coding Challenge before the semester is over! Mesa pizza provided",
        "description": "Come for one last Coding Challenge before the semester is over!",
        "cost": 0,
        "friends": 4,
        "friendimg": "assets/img/friends/4.png",
        "image": "assets/img/pics/coding.jpg"
      }
    ];

  }

  initializeEventsFilter(filter) {
    filter.events = this.events;
  }

  initializeGroupsFilter(filter) {
    filter.groups = this.groups;
  }

  getGroups() {
    return this.groups;
  }


  filter_groups(filter) {
    var forbidden_words = new Array("", "the", "of", "a", "club", "association", "group");
    filter.groups = this.groups.filter(function(group) {
      //check settings
      if(filter.settings.has_friends && (group.friends == 0)) {
        return false;
      }

      if(filter.filter_words.length > 0) {
        var i;
        for (i = 0; i < filter.filter_words.length; i++) {
          if (forbidden_words.indexOf(filter.filter_words[i]) > -1) {
            continue;
          }
          if (group.name.toLowerCase().includes(filter.filter_words[i])) {
            return true;
          }
          if (group.description.toLowerCase().includes(filter.filter_words[i])) {
            return true;
          }
        }
        return false;
      }
      return true;
    });
  }

  filter_events(filter) {
    console.log("filtering events");
    var forbidden_words = new Array("", "the", "of", "a", "club", "association", "group");
    filter.events = this.events.filter(function(event) {
      //check settings
      if(filter.settings.friends_attending && (event.friends == 0)) {
        return false;
      }

      if(filter.settings.free && (event.cost > 0)){
        return false;
      }

      var event_stats = event.date.split("/");
      if(event_stats[0] < filter.settings.date.month || (event_stats[0] == filter.settings.date.month && event_stats[1] < filter.settings.date.day)){
        return false;
      }

      //check keywords
      if(filter.filter_words.length > 0) {
        console.log("checking filter word");
        var i;
        for (i = 0; i < filter.filter_words.length; i++) {
          console.log(filter.filter_words[i]);
          if (forbidden_words.indexOf(filter.filter_words[i]) > -1) {
            continue;
          }
          if (event.name.toLowerCase().includes(filter.filter_words[i])) {
            return true;
          }
          if (event.group.toLowerCase().includes(filter.filter_words[i])) {
            return true;
          }
          if (event.description.toLowerCase().includes(filter.filter_words[i])) {
            return true;
          }
        }
        return false;
      }
      return true;
    })
  }

}
