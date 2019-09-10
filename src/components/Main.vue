<template>
  <div id="mainComponent">
    <div class="main">
      <!-- <div class="scroll-down"></div> -->
      <div class="left-col">
        <p class="name">Andrew Kim</p>

        <!-- :text='["Frontend Engineer", "Web Developer", "UX Designer"]' -->
        <!-- prettier-ignore -->
        <vue-typer
          class="jobtitle"
          :text='["Front-End Dev", "UI/UX Designer"]'
          :repeat="Infinity"
          :erase-delay="70"
          :pre-erase-delay="2000"
          erase-style="backspace"
          caret-animation="phase"
        ></vue-typer>

        <!-- <div class="resume">
          <a
            id="aikresume"
            href="http://bit.ly/2YssENj"
            target="_blank"
            rel="noopener noreferrer"
          >View my Resume</a>
          <font-awesome-icon :icon="['far', 'file-pdf']" size="2x" class="far" color="white" />
        </div> -->
        <!-- <form action="https://getform.io/f/9d0bba9d-b70b-41e8-a83a-b2d97b8fcc63" method="POST">
            <input
              type="email"
              placeholder="FreeIdeas@inbox.org"
              name="email"
              id="tlemail"
              required
            />
            <button type="submit" id="tlbutton" value="Subscribe">Submit</button>
          </form> -->
      </div>
      <div class="right-col profile" v-tilt="{max: 50, speed: 500, perspective: 1000}"></div>
    </div>
  </div>
</template>

<script>
import { page } from "vue-analytics";
import { VueTyper } from "vue-typer";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

export default {
  name: "main",
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
  grid-template-rows: repeat(auto-fill, minmax(380px, 1fr));
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
  .header {
    top: -60px;
    left: 0px;
    transform: unset;
  }
}

#tlemail {
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  -webkit-appearance: none;
  color: #fff;
  font-size: 1.3vw;
  font-family: "Space Mono", monospace;
  padding-top: 7px;
  width: 15vw;
}

#tlemail::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

#tlbutton {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 3px 20px;
  font-size: 1.3vw;
  font-family: "Space Mono", monospace;
}

/* .scroll-down {
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
} */
</style>
