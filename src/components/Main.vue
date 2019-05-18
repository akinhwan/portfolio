<template>
  <div id="mainComponent">
    <!-- <nav></nav> -->
    <div class="main">
      <div class="scroll-down"></div>
      <div class="left-col">
        <p class="name">Andrew Inhwan Kim</p>

        <!-- <p class="jobtitle">Frontend Engineer</p> -->
        <vue-typer
          class="jobtitle"
          :text='["Frontend Engineer", "Web Developer", "UX Designer"]'
          :repeat="Infinity"
          :erase-delay="70"
          :pre-erase-delay="1000"
          erase-style="backspace"
          caret-animation="phase"
        ></vue-typer>

        <!-- <p class="location">Currently based in Northern Virginia</p> -->
        <!-- <p class="tagline">I have an eye for how it looks, but also the knowledge of why it behaves.</p> -->
        <div class="resume">
          <a
            id="aikresume"
            href="http://bit.ly/30sK4KZ"
            target="_blank"
            rel="noopener noreferrer"
          >View my Resume</a>
          <font-awesome-icon :icon="['far', 'file-pdf']" size="2x" class="far" color="white"/>
        </div>
      </div>
      <div class="right-col profile" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500">
        <!-- <img src="/static/img/profile.jpg" alt="Profile Photo" class="profile-photo">      -->
        <!-- <h1>Welcome to my portfolio</h1> -->
      </div>
    </div>
    <div class="wave-bottom-container">
      <div class="wave"></div>
      <div class="wave wave2"></div>
    </div>
  </div>
</template>

<script>
import { page } from "vue-analytics";
import { VueTyper } from "vue-typer";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
// import VanillaTilt from "vanilla-tilt";

export default {
  name: "MainSection",
  data() {
    return {
      msg: "Main Front First Business Card"
    };
  },
  components: {
    VueTyper,
    FontAwesomeIcon
  },
  methods: {
    track() {
      page("/");
    }
  }
};
</script>

<style >
.far {
  padding-left: 10px;
}
.resume {
  display: flex;
  align-items: flex-end;

  transition: 0.5s;
}

.resume:hover {
  opacity: 0.5;
  transition: 0.5s;
}
#aikresume {
  color: white;
  font-family: Product Sans, "Space Mono", monospace;
  font-size: calc(14px + (22 - 10) * ((100vw - 300px) / (1600 - 300)));
}

.vue-typer {
  font-family: "Space Mono", monospace;
  color: #fff !important;
}

.vue-typer .custom.char {
  color: #fff;
  text-shadow: 2px 2px 30px white, 1px 1px 70px white;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: white;
}

.main {
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(353px, 1fr));
}

.profile {
  display: flex;
  align-self: center;
  justify-self: center;
  border-radius: 50%;
  height: 17vw;
  width: 17vw;
  background-image: url("/static/img/profile2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 10%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 1), 0 15px 12px rgba(0, 0, 0, 1);
}

.left-col {
  padding-left: 10vmin;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.right-col {
  /* grid-column: 2/3; */
}

.name {
  position: relative;
  margin: 0;
  color: white;
  letter-spacing: 10px;
  font-family: Product Sans, "Space Mono", monospace;
  font-size: calc(55px + (42 - 10) * ((100vw - 300px) / (1600 - 300)));
  font-weight: bolder;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
}

.jobtitle {
  color: white;
  font-size: calc(26px + (35 - 10) * ((100vw - 300px) / (1600 - 300)));
}

.tagline {
  color: white;
  font-size: 2vmin;
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
}

.location {
  color: white;
  font-size: 2vmin;
  font-weight: 300;
  font-family: "Product Sans", sans-serif;
  padding-top: 60px;
}

.canvas-wrap {
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

canvas {
  display: block;
}

@font-face {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Product Sans"), local("ProductSans-Regular"),
    url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVE9eOcEg.woff2)
      format("woff2");
  unicode-range: U + 0400-045f, U + 0490-0491, U + 04b0-04b1, U + 2116;
}

.wave-bottom-container {
  z-index: 50;
  overflow: hidden;
  width: 100%;
  height: 30%;
  position: absolute;
  /* bottom: 0.7px; */
  /* bottom: 95px; */
}
.wave {
  background: url("/static/img/curve.svg") repeat-x;
  width: 210vw;
  height: 7vh;
  /* bottom: 131.5px; */
  position: absolute;
  /* right: 0px; */
  animation: wave 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0) scaleY(-1);
}

.wave2 {
  /* // top: -175px; */
  animation: wave 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) -1s infinite;
  animation-direction: reverse;
  left: 400px;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -1600px;
  }
}
@keyframes wave2 {
  0% {
    margin-left: -1600px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes swell {
  0%,
  100% {
    transform: translate3d(0, -25px, 0) scaleY(-1);
  }
  50% {
    transform: translate3d(0, 5px, 0) scaleY(-1);
  }
}

@media (max-width: 500px) {
  .main {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: 70% 30%;
  }
  .name {
    font-size: 11vw;
  }
  .jobtitle {
    font-size: 5vw;
  }
  #aikresume {
    font-size: 3.5vw;
  }
  .profile {
    align-self: unset;
    height: 30vw;
    width: 30vw;
  }
  .fa-2x {
    font-size: 1em;
  }
  .wave {
    width: 320vw;
  }
  .header {
    top: -60px;
    left: 0px;
    transform: unset;
  }
}

.scroll-down {
  position: absolute;
  bottom: 160px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-bottom: 12px solid #fff;
  border-right: 12px solid #fff;
  border-radius: 5px;
  left: 50%;
  transform: translate(-50%, 0%) rotate(45deg);
  animation: fade_move_down 4s ease-in-out infinite;
}
@keyframes fade_move_down {
  0% {
    transform: translate(0, -10px) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 10px) rotate(45deg);
    opacity: 0;
  }
}
</style>
