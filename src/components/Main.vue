<template>
  <div id="mainComponent">
    <div class="main">
      <div class="left-col">
        <p class="name">Andrew Kim</p>

        <!-- prettier-ignore -->
        <vue-typer
          class="jobtitle"
          :text='["Front-End Dev"]'
          :repeat="Infinity"
          :erase-delay="0"
          :pre-erase-delay="2000"
          erase-style="backspace"
          caret-animation="phase"
        ></vue-typer>

        <Modal
          v-if="showModal"
          @close="showModal = false"
          @keydown.esc="showModal = false"
        >
          <h1 slot="header" style="color: white;">
            Where should I send it to?
          </h1>

          <div slot="body">
            <form
              @submit.prevent="onSubmitGoogleSheets"
              name="submit-to-google-sheet"
            >
              <input
                name="email"
                placeholder="RayTomlinson@arpa.net"
                id="tlemail"
                type="email"
                required
              />
              <button id="tlbutton" value="Subscribe" type="submit">
                Send
              </button>
            </form>
          </div>
        </Modal>

        <button id="aikresume" @click="showModal = true" class="resume">
          <font-awesome-icon
            :icon="['far', 'file-pdf']"
            size="1x"
            class="far"
            color="white"
          />
          View my Resume
        </button>
      </div>
      <div
        class="right-col profile"
        v-tilt="{ max: 50, speed: 500, perspective: 1000 }"
      ></div>
    </div>
  </div>
</template>

<script>
import { page } from "vue-analytics";
import { VueTyper } from "vue-typer";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import Modal from "./Modal";

export default {
  name: "main",
  data() {
    return {
      msg: "Main Front First Business Card",
      showModal: false,
    };
  },
  components: {
    VueTyper,
    FontAwesomeIcon,
    Modal,
  },
  methods: {
    track() {
      page("/");
    },
    onSubmitGoogleSheets() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbx09n_0mSzsN4ALj8x4XaZuPZBXbGu59j9SXhwZFpKYdggLBMwR/exec";
      const form = document.forms["submit-to-google-sheet"];

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));

      this.showModal = false;
    },
  },
};
</script>

<style>
.far {
  padding: 0 10px;
}
.resume {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: fit-content;
  border-radius: 15px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5), 0 0px 20px rgba(0, 0, 0, 0.5);
  background-color: black;
  transition: 0.5s;
  border: none;
}

.resume:hover {
  opacity: 0.5;
  transition: 0.5s;
}
#aikresume {
  background-color: black;
  border: none;
  color: white;
  font-family: Product Sans, "Space Mono", monospace;
  font-size: calc(14px + (22 - 10) * ((100vw - 300px) / (1600 - 300)));
  padding-left: 1rem;
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

.name {
  letter-spacing: 1.25rem;
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
  font-size: calc(24px + (35 - 10) * ((100vw - 300px) / (1600 - 300)));
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
</style>
