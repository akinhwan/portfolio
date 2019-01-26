<template>
  <div id="work">
    <div class="work">
        <h1 class="header">Work</h1>
        <div class="pubmed card">
          <a href="http://bit.ly/2qdmSQ9" target="_blank" rel="noopener noreferrer">PubMed</a>
          <p class="caption">Search Engine for Biomedical Literature</p>
          <div class="year-made">'18</div>
        </div>

        <div class="odpcec card">
          <a href="http://bit.ly/2qfy12Q" target="_blank" rel="noopener noreferrer">ODPC</a>
          <p class="caption">Open Door Presbyterian English Congregation</p>
          <div class="year-made">'18</div>
        </div>
        
        <div class="kas card">
          <a href="http://bit.ly/2RhS10j" target="_blank" rel="noopener noreferrer">KAS</a>
          <p class="caption">Korean American Story Organization</p>
          <div class="year-made">'18</div>
        </div>
        
        <!-- <div class="spaces card">
          <a href="http://bit.ly/2H4NYE8" target="_blank" rel="noopener noreferrer">Spaces</a>
          <font-awesome-icon :icon="['fas', 'lock']" size="1x" class="fas" />
          <a @click="trying1 = !trying1" target="_blank" rel="noopener noreferrer">Spaces</a>
          <input autofocus v-show="trying1" type="text" id="workpass1" placeholder="Enter Password" @keyup.enter.prevent="validatePass('http://bit.ly/2H4NYE8', 1);">
          <p class="caption">a meeting room booking application</p>
          <div class="year-made">'18</div>
        </div> -->

        <div class="slack card">
          <a href="http://bit.ly/2HzxsZv" target="_blank" rel="noopener noreferrer">Slack</a>
          <!-- <font-awesome-icon :icon="['fas', 'lock']" size="1x" class="fas" />
          <a @click="trying2 = !trying2" target="_blank" rel="noopener noreferrer">Slack</a>
          <input autofocus v-show="trying2" type="text" id="workpass2" placeholder="Enter Password" @keyup.enter.prevent="validatePass('http://bit.ly/2HzxsZv', 2);">
          <p class="caption">real-time messaging for workplace collaboration internal communication, adapted for signage </p> -->
          <div class="year-made">'17</div>
        </div>

        <div class="rides card">
          <a href="http://bit.ly/2HBd8XU" target="_blank" rel="noopener noreferrer">Rides</a>
          <!-- <font-awesome-icon :icon="['fas', 'lock']" size="1x" class="fas" />
          <a @click="trying3 = !trying3" target="_blank" rel="noopener noreferrer">Rides</a>
          <input autofocus v-show="trying3" type="text" id="workpass3" placeholder="Enter Password" @keyup.enter.prevent="validatePass('http://bit.ly/2HBd8XU', 3);"> -->
          <!-- <p class="caption">tabular display of ETA, pricing, and vehicle types</p> -->
          <div class="year-made">'17</div>
        </div>

        <!-- <div class="telliscope card">
          <font-awesome-icon :icon="['fas', 'lock']" size="1x" class="fas" />
          <a @click="trying4 =! trying4" target="_blank" rel="noopener noreferrer">Telliscope</a>
          <input autofocus v-show="trying4" type="text" id="workpass4" placeholder="Enter Password" @keyup.enter.prevent="validatePass('http://bit.ly/2JJxi2B', 4);">
          <p class="caption">UX freelance contracts with Telliscope LLC</p>
          <div class="year-made">'16</div>
        </div> -->
        <div class="graphicdesign card">
          <a href="http://bit.ly/2IW4Ysq" target="_blank" rel="noopener noreferrer">Design</a>
          <!-- <p class="caption">Typefaces, patterns, logos made between 11'-14'</p> -->
          <div class="year-made">'11-'12</div>
        </div>
        <div class="threed card">
          <a href="http://bit.ly/2HBdeyK" target="_blank" rel="noopener noreferrer">3D</a>
          <!-- <p class="caption">3D Printed Chess pieces, Processing Sketches, and Data Viz</p> -->
          <div class="year-made">'16</div>
        </div>
        <div class="processing card">
          <a href="http://bit.ly/2HrWXyu" target="_blank" rel="noopener noreferrer">Processing</a>
          <!-- <p class="caption"></p> -->
          <div class="year-made">'14-'15</div>
        </div>
        <div class="loginpage card">
          <a href="http://bit.ly/2JM0hTq" target="_blank" rel="noopener noreferrer">Xhibit</a>
          <!-- <p class="caption"></p> -->
          <div class="year-made">'17</div>
        </div>
        <div class="transit card">
          <a href="http://bit.ly/2vh6pjf" target="_blank" rel="noopener noreferrer">Transit</a>
          <!-- <font-awesome-icon :icon="['fas', 'lock']" size="1x" class="fas" />
          <a @click="trying5=!trying5" target="_blank" rel="noopener noreferrer">Transit</a>
          <input v-show="trying5" type="text" id="workpass5" placeholder="Enter Password" @keyup.enter.prevent="validatePass('http://bit.ly/2vh6pjf', 5);" autofocus> -->
          <!-- <p class="caption"></p> -->
          <div class="year-made">'18</div>
        </div>
        <!-- <div class="directory card">
          <font-awesome-icon :icon="['fas', 'lock']" size="1x" class="fas" />
          <a @click="trying6=!trying6" target="_blank" rel="noopener noreferrer">Directory</a>
          <input autofocus v-show="trying6" type="text" id="workpass6" placeholder="Enter Password" @keyup.enter.prevent="validatePass('http://bit.ly/2H2iLkS', 6);">
          <p class="caption"></p>
          <div class="year-made">'17</div>
        </div> -->
        <!-- <div class="inout card">
          <font-awesome-icon :icon="['fas', 'lock']" size="1x" class="fas" />
          <a @click="trying7=!trying7" target="_blank" rel="noopener noreferrer">In&amp;Out</a>
          <input autofocus v-show="trying7" type="text" id="workpass7" placeholder="Enter Password" @keyup.enter.prevent="validatePass('http://bit.ly/2HAyc0A', 7);">
          <p class="caption"></p>
          <div class="year-made">'17</div>
        </div> -->
        <!-- <div class="queue card">
          <font-awesome-icon :icon="['fas', 'lock']" size="1x" class="fas" />
          <a @click="trying8=!trying8" target="_blank" rel="noopener noreferrer">Queue</a>
          <input autofocus v-show="trying8" type="text" id="workpass8" placeholder="Enter Password" @keyup.enter.prevent="validatePass('http://bit.ly/2EOJr2v', 8);">
          <p class="caption"></p>
          <div class="year-made">'18</div>
        </div> -->
        
    </div> 
  </div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

export default {
  name: "work",
  data() {
    return {
      msg: "Work Work Work",
      trying1: false,
      trying2: false,
      trying3: false,
      trying4: false,
      trying5: false,
      trying6: false,
      trying7: false,
      trying8: false
    };
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    validatePass(link, n) {
      if (document.getElementById(`workpass${n}`).value == "akinto") {
        console.log("validated!");
        this.openWindow(link);
        this.trying1 = false;
        this.trying2 = false;
        this.trying3 = false;
        this.trying4 = false;
        this.trying5 = false;
        this.trying6 = false;
        this.trying7 = false;
        this.trying8 = false;
        document.getElementById(`workpass${n}`).value = "";
      } else {
        alert("Contact me to view this work");
        console.log("unvalidated....");
      }
    },
    openWindow(link) {
      window.open(link);
    }
  }
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 80px;
  left: -200px;
  margin: 0;
  transform: rotate(-90deg);
  color: white;
  letter-spacing: 10px;
  font-family: Product Sans, "Space Mono", monospace;
  font-size: 10vmin;
  font-weight: bolder;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
}
.fas {
  color: white;
  /* visibility: hidden; */
  display: none;
}
.year-made {
  /* visibility: hidden; */
  display: none;
}

.card {
  background-color: grey;
  transition: 0.5s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

#workpass1,
#workpass2,
#workpass3,
#workpass4,
#workpass5,
#workpass6,
#workpass7,
#workpass8 {
  height: 2vw;
  width: 10vw;
  font-family: Product Sans;
  margin: auto;
  font-size: 1.5vw;
  /* display: none; */
}
.card:hover {
  /* opacity: 0.5; */
  transform: scale(1.1);
}

a {
  text-decoration: none;
  font-family: Product Sans;
  /* font-weight: bolder; */
  font-size: 5vmin;
  color: white;
  padding: 10px;
  height: 100%;
  text-shadow: 2px 2px 30px white, 1px 1px 70px white;
}

.caption {
  color: white;
  /* visibility: hidden; */
  display: none;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar {
  width: 12px;
  background-color: rgba(255, 255, 255, 0.75);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

.work {
  /* background: linear-gradient(rgba(40,44,53,1), 90%, rgba(255,255,255,1)); */
  /* background: rgba(40,44,53,1); */
  height: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(211px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(110px, 1fr));
  /* grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr); */
  /* margin-bottom: 5vmin; */
  padding: 5vmin;
  grid-gap: 5vmin;
  border-radius: 15px;
  /* overflow: overlay; Behaves the same as auto, but with the scrollbars drawn on top of content instead of taking up space. Only supported in WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome or Opera) browsers.*/
  overflow: hidden;
  /* margin: 5vmin; */
}

.work > p {
  color: white;
  font-size: 2vmin;
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
  line-height: 5vmin;
  text-align: justify;
}

.card {
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.slack {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/slack_screenshot.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.rides {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/rideshare_screenshot.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.spaces {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/spaces_screenshot.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.pubmed {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.95)),
    url("../assets/pub_med_labs.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.kas {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.95)),
    url("../assets/kas.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.odpcec {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.95)),
    url("../assets/odpcec.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
/* .telliscope {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/landing.png");
  background-size: 630px; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
.graphicdesign {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/pattern.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.threed {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/chess_set.gif");
  background-size: 530px;
  background-position: center;
  background-repeat: no-repeat;
}
.processing {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/3d_line.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.processing > a {
  font-size: 4vmin;
}
/* .queue {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/queue.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
.transit {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/transit.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
/* .directory {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/directory.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
/* .inout {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/inout.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
.loginpage {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/loginpage.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 500px) {
  .header {
    top: -60px;
    left: 0px;
    transform: unset;
  }
}

@media (max-width: 765px) {
  .work {
    grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
  }
}
</style>
