import './App.css';
import a from "./images/veda.webp";
import b from "./images/logo.png";
import c from "./images/m1.JPG";
import d from "./images/m3.jpg";
import e from "./images/m4.jfif";
import f from "./images/back.jpg";

import {useState, useEffect} from "react";
import { initializeApp } from "firebase/app";

import {
  getFirestore,collection,addDoc
} from 'firebase/firestore';



function App() {

  const images=[c,d,e];

  const firebaseConfig = 
  {
  apiKey: "AIzaSyCcEwCOKoxIpnEtjv7rvcnHNsX2tSGPGPw",
  authDomain: "wcsc-df1e2.firebaseapp.com",
  projectId: "wcsc-df1e2",
  storageBucket: "wcsc-df1e2.appspot.com",
  messagingSenderId: "137394445409",
  appId: "1:137394445409:web:581295b0a167c7bba1de20"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db=getFirestore();
const coll=collection(db,'users');


  const [n,setn]=useState(0)

  const [scrollPosition,setScrollPosition]=useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
   }
 
 //func to add to db

 const sub=(e)=>
  {
    e.preventDefault();
    var d=document.getElementsByTagName("input");
    if(d[0].value.trim()!="" && d[1].value.trim()!=""&& d[2].value.trim()!="")
    alert("Thanks for registering");
    addDoc(coll,
    {
      Name:document.getElementById("1").value,
      Phone:document.getElementById("2").value,
      Course:document.getElementById("3").value
    })
    .then(()=>{
      document.getElementsByTagName("form")[0].reset();
      document.getElementsByClassName("App")[0].style.display="block";
      document.getElementsByClassName("form")[0].style.display="none";
    });
  }

 const click=()=>{
    document.getElementsByClassName("App")[0].style.display="none";
    document.getElementsByClassName("form")[0].style.display="flex";
  }
 
 //useEffect for carousel

  useEffect(()=>
  {
    const id = setTimeout(()=>{
    setn((n+1)%3)},4000);

    window.addEventListener("scroll", handleScroll);

    return()=>{
      clearTimeout(id);
      window.removeEventListener("scroll", handleScroll);
      };
  },[n,scrollPosition]);

  const events=[["Foundation Course \nஅடிப்படைப்\nபயிற்சி","6 AM - 8 AM(12 days)\n10 AM - 1 PM(6 days)\n5:30PM - 7:30PM(12 days)"],
  ["Introspection Courses","Introspection-1\nIntrospection-2\nIntrospection-3"],
  ["Brahmagnyanam\nCourse\nபிரம்ம ஞானம் \nபயிற்சி ஆழியார்","The Final stage of\nIntrospection courses"],["Events & Lectures",
  "We also conduct sessions \nfor training the youth\nto stay fit mentally and\nphysically "]]

  return (
    <div>
      <div className="form">
        <div className="form-data">
          <br/>
          <h1> Register </h1>
          <br/>
          <form onSubmit={sub}>
            <center>
            <label for="name"> Name </label>
            </center>
            <input classname="input" id="1" required/>
            <br/>
            <center><label for="name"> Phone </label></center>
            <input classname="input" id="2" required/>
            <br/>
            <center><label for="nName"> Course </label></center>
            <input classname="input" id="3" list="courses" required/>
            <datalist id="courses">
              <option value="Introspection-I"/>
              <option value="Introspection-2"/>
              <option value="Introspection-3"/>
              <option value="Brahmagnyanam"/>
              <option value="FC( 6:30 - 7 am )"/>
              <option value="FC( 11 am - 12 pm )"/>
              <option value="FC( 6:30 am - 7 pm )"/>
            </datalist>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="thanks">
          <p class="thk">Thanks For Registering Have a Great Day</p>
        </div>
      </div>

      <div className="App">
        <div className={(scrollPosition>1)? 'navbar1 navbar2':"navbar1"}>
          <h1 className="temple">Temple of Consciousness Kasakkaranoor</h1>
          <a href="#banner">Home</a>
          <a href="#event">Events</a>
          <a href="#memory">Memories</a>
        </div>

        <div className="desc">

          <div className="logo_des"> 
            <div className="mobile-h"><h2>Temple of Consciousness Kasakkaranoor</h2></div>
            <div><img className="veda" src={b}/></div>
            <div className="vedatxt">
              <h1>About WCSC</h1>
              <br/>
              <p classname="vtxt">In 1958 Vethathiri Maharishi founded the World Community Service Centre (WCSC), a non-profit registered society with a view to work towards World Peace through individual peace. As of today, about 400 Trusts and about 2300 Centres/ Sub Centres have been registered and affiliated to WCSC in India, and lakhs of people have benefited physically, mentally, socially and spiritually from the teachings and practices
              </p>
            </div>
            <div><img className="build" src={f}/></div>
            </div>
          </div>

          <div className="container" id="banner">
            <div className="banner">
              <div className="logo">
                <img src={a} className="logo-img" />
              </div>

              <div className="skytxt">
                <p className="vtxt">
                <span>Joint Meditation</span><br/>(கூட்டு தியானம்)<br/>
                Timing- 6:30 am-7:00 am,<br/>11am - 12pm, 6:30pm - 7pm<br/><br/>
                <span> Weekly Lecture</span><br/>
                Timing-Every wednesday<br/>7 pm - 7:30 pm<br/>
                <br/><span>Mounam</span><br/>(மௌனம்)<br/>
                Timing- every second saturday 9:30 am- 5:00pm
                </p>
              </div>
            </div>
          </div>
          <h1 className="event" id="event">Events</h1>
          <div className="cards" >
          {
            events.map((e)=>(
            <div className="card-tot">
              <div className="top-card">
                <h2 className="course"><pre>{e[0]}</pre></h2> 
              </div>
              <div className="hid-card">
                <br />
                <div>
                  <br/>
                  <p classname="card-data"><pre>{e[1]}</pre></p>
                  <button className={(e[0]=="Events & Lectures")?"disable":""} onClick={click}>Register</button>
                </div>
              </div>
            </div>
            ))
          }
          </div>

          <h1 className="nost" id="memory">Memories</h1>
          <div className="carousel">
            <img  className="image1" src={images[n]} />
            <img  className="image" src={images[(n+1)%images.length]} />
            <img  className="image2" src={images[(n+2)%images.length]} />
          </div>
          <br/>
          <br/>
          <div className="footer">
              <div className="contact">
                <h2>Contact Us..</h2>
                <p>9629795911</p>
                <p>9384448289</p>
                <p>9865394776</p>
                <p>8220622624</p>
              </div>
              <div className="address">
                <h2>Reach Out..</h2>
                <p>Opp to Bhavani Hospital<br/>Ragavan Street,Swarnapuri<br/>Five Roads<br/>Salem-636004</p>
              </div>
          </div>
     </div>
  </div>
  );
}

export default App;
