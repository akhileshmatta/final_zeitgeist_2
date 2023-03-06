import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeredevents',
  templateUrl: './registeredevents.component.html',
  styleUrls: ['./registeredevents.component.css']
})
export class RegisteredeventsComponent implements OnInit{
  name2 : any = ""
  events : any = ""
  events_map: any = {
    1: "Block Chain",
    2: "Data Science",
    3: "Ethical Hacking",
    4: "Amazon Web Services",
    5: "Hackathon",
    6: "PresentIt",
    7: "Projekto",
    8: "Code Knights",
    9: "Geek Out",
    10: "Bug Hunt",
    11: "Tech Talks",
    12: "Brain It",
    13: "Code Wars",
    14: "Web Dev Challenge",
    15: "Selfie Clicks",
    16: "Capture It",
    17: "Meme Contest",
    18: "Reelz Contest",
    19: "PUBG",
    20: "Free Fire"
  }
  ngOnInit(){
    //this.events = JSON.parse(localStorage.getItem('events') || "")
    //this.events = this.events.map((val: any) => this.events_map[val]);
    //this.name =  localStorage.getItem('name') || ""

  //   const queryString = window.location.search
  //   const urlParams = new URLSearchParams(queryString)
  //   let data : any = urlParams.get('q') || ""
  //   console.log(urlParams)
  //   console.log(data)
  //   let dt = localStorage.getItem("q") || ""
  //   if(dt.length == 0){
  //     localStorage.setItem('q', data)
  //   }

  // console.log(JSON.parse(data))
  //let data = JSON.parse(localStorage.getItem("q") || "")
  //this.name = data?.user_details.user_name || "";
  let data3 : any = localStorage.getItem("q")
  console.log(data3)

  if (data3 == null){
    this.name2 = null
  }
  else{
    let data2 : any = JSON.parse(data3)
    this.name2 = data2?.user_details.user_name || "";
    this.events = data2?.registerd_events || "";
  this.events = this.events.map((val: any) => this.events_map[val]);
  }



  }

}
