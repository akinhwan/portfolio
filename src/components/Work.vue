<template>
  <div id="work">
    <div class="work">
      <h1 class="header">Work</h1>

      <div
        class="pubmed card"
        v-tilt="{ max: 50, speed: 500, perspective: 1000 }"
      >
        <a
          href="http://bit.ly/2qdmSQ9"
          target="_blank"
          rel="noopener noreferrer"
          >PubMed</a
        >
        <p class="caption">Search Engine for Biomedical Literature</p>
        <div class="year-made">'18</div>
      </div>

      <div
        class="pitchgen card"
        v-tilt="{ max: 50, speed: 500, perspective: 1000 }"
      >
        <a
          href="http://bit.ly/2RQIJda"
          target="_blank"
          rel="noopener noreferrer"
          >PitchGen</a
        >
        <p class="caption">Neural Network text generation of Startup Ideas</p>
        <div class="year-made">'19</div>
      </div>

      <div class="posterday card" v-tilt="{max: 50, speed: 500, perspective: 1000}">
        <a href="https://bit.ly/2wF0Mgg" target="_blank" rel="noopener noreferrer">PosterDay</a>
        <div class="year-made">'20</div>
      </div>

      <!-- <div class="rides card" v-tilt="{max: 50, speed: 500, perspective: 1000}">
        <a href="http://bit.ly/2HBd8XU" target="_blank" rel="noopener noreferrer">Rides</a>
        <div class="year-made">'17</div>
      </div> -->

      <div
        class="graphicdesign card"
        v-tilt="{ max: 50, speed: 500, perspective: 1000 }"
      >
        <a
          href="http://bit.ly/2IW4Ysq"
          target="_blank"
          rel="noopener noreferrer"
          >Design</a
        >
        <div class="year-made">'11-'12</div>
      </div>
      <div
        class="threed card"
        v-tilt="{ max: 50, speed: 500, perspective: 1000 }"
      >
        <a
          href="http://bit.ly/2HBdeyK"
          target="_blank"
          rel="noopener noreferrer"
          >3D</a
        >
        <div class="year-made">'16</div>
      </div>
      <div
        class="processing card"
        v-tilt="{ max: 50, speed: 500, perspective: 1000 }"
      >
        <a
          href="http://bit.ly/2HrWXyu"
          target="_blank"
          rel="noopener noreferrer"
          >Processing</a
        >
        <div class="year-made">'14-'15</div>
      </div>
      <div
        class="loginpage card"
        v-tilt="{ max: 50, speed: 500, perspective: 1000 }"
      >
        <a
          href="http://bit.ly/2JM0hTq"
          target="_blank"
          rel="noopener noreferrer"
          >Xhibit</a
        >
        <div class="year-made">'17</div>
      </div>
      <!-- <div class="transit card" v-tilt="{max: 50, speed: 500, perspective: 1000}">
        <a href="http://bit.ly/2vh6pjf" target="_blank" rel="noopener noreferrer">Transit</a>
        <div class="year-made">'18</div> -->
      </div> 
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
      trying8: false,
    };
  },
  components: {
    FontAwesomeIcon,
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
    },
  },
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
  display: none;
}
.year-made {
  display: none;
}

.card {
  background-color: grey;
  transition: 0.5s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: scale(1.1);
}

a {
  text-decoration: none;
  font-family: Product Sans;
  font-size: 5vmin;
  color: white;
  padding: 10px;
  height: 100%;
  text-shadow: 2px 2px 30px white, 1px 1px 70px white;
}

.caption {
  color: white;
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
  height: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(273px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(168px, 1fr));
  padding: 5vmin;
  grid-gap: 5vmin;
  border-radius: 15px;
  overflow: hidden;
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
  transform-style: preserve-3d;
}

.rides {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("/static/img/rideshare_screenshot.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.pubmed {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.95)),
    url("/static/img/pubmed.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.posterday {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.95)),
    url("/static/img/posterday.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pitchgen {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.95)),
    url("/static/img/pitchgen.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card > a {
  transform: translateZ(20px);
}
.graphicdesign {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("/static/img/pattern.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.threed {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("/static/img/pointyhedra.gif");
  background-size: 530px;
  background-position: center;
  background-repeat: no-repeat;
}
.processing {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("/static/img/3d_line.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.processing > a {
  font-size: 4vmin;
}
.transit {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("/static/img/transit.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.loginpage {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("/static/img/loginpage.png");
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
    grid-template-rows: repeat(auto-fill, minmax(47px, 1fr));
  }
}
</style>
