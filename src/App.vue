<template>
  <div id="app">
    <full-page :options="options" ref="fullpage">
      <!-- <router-link to="/main2">Main2</router-link> -->
      <!-- <router-view /> -->
      <Main class="section" data-sal="fade" />
      <Work class="section" data-sal="fade" />
      <!-- <About class="section" data-sal="fade"/> -->
      <Contact class="section" data-sal="fade" />
    </full-page>
    <div class="subscription">
      <h2 class="sub-text">Receive occassional updates from me</h2>
      <div class="form-right">
        <form
          @submit.prevent="onSubmitGoogleSheets"
          name="submit-to-google-sheet"
          ref="submitForm"
        >
          <input
            name="email"
            ref="emailInput"
            placeholder="RayTomlinson@arpa.net"
            id="tlemail"
            type="email"
            required
          />
          <button id="tlbutton" value="Subscribe" type="submit">Send</button>
        </form>
        <h2 ref="thankyou" style="display: none;">
          ✔️ Thank you for subscribing 🙏
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import FullPage from "vue-fullpage.js/src/FullPage.vue";
// import fullPageMixin from 'vue-fullpage.js/src/fullPageMixin';
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import sal from "sal.js";

export default {
  name: "App",
  data() {
    return {
      options: {
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["main", "work", "contact"],
        showActiveTooltip: true,
        anchors: ["1", "2", "3"],
        // normalScrollElements: "#work"
      },
    };
  },
  mounted() {
    sal();
  },
  components: {
    FullPage,
    Nav,
    Main,
    About,
    Work,
    Contact,
  },
};
</script>

<style>
@import "../node_modules/sal.js/dist/sal.css";

.subscription {
  width: inherit;
  position: fixed;
  bottom: 0;
  font-family: "Space Mono", monospace;
  background-color: black;
  min-height: 80px;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
}
.sub-text {
  margin: auto !important;
  vertical-align: center;
  display: flex;
  align-items: center;
}

.form-right {
  display: flex !important;
  align-items: center !important;
}

#app {
  background-color: rgba(0, 0, 0, 0.3);
  height: 70vh;
  width: 70vw;
  border-radius: 15px;
  position: fixed;
}

@media screen and (max-width: 400px) {
  #app {
    height: 80vh;
    width: 80vw;
  }
}

body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #311b92,
    #ba68c8,
    #1e88e5,
    #43a047,
    #c51162,
    #d50000,
    #e65100
  );
  background-repeat: no-repeat;
  background-size: 1000% 1000%;
  animation: gradient 96s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}
p {
  font-family: "Space Mono", monospace;
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
body::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
.fp-tableCell {
  vertical-align: unset !important;
}
#fp-nav.right {
  right: 2vw;
  transform: scale(1.5);
}
#fp-nav ul li .fp-tooltip {
  color: white;
  font-family: Product Sans;
}
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: white;
}
@media (max-width: 500px) {
  #fp-nav ul li .fp-tooltip {
    display: none !important;
  }
}
</style>
