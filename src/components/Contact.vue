<template>
  <div id="contact">
    <h1 class="header">Contact</h1>
    <!-- <nav></nav> -->
    <!-- <div class="recommendations">

    </div>-->
    <div class="grid">
      <div class="information">
        <!-- <h1>Say Hello!</h1> -->
        <div class="my-email">
          <font-awesome-icon :icon="['far', 'envelope-open']" size="1x" class="information-fai"/>
          <p class="dropaline">Drop a line</p>
          <a
            href="mailto:akinhwan@gmail.com?subject=Your #1 Fan&body=Oh my gosh I can't believe I finally got a hold of you"
          >akinhwan@gmail.com</a>
        </div>
        <div class="my-phone">
          <font-awesome-icon
            :icon="['fas', 'phone']"
            color="white"
            size="1x"
            class="information-fai"
          />
          <p>
            <span class="sayhello">Say Hello</span>
            <a class="phonenumber" href="tel:+1-202-507-9205">+1 (202) 507-9205</a>
          </p>
        </div>
      </div>

      <div class="faq">
        <p>Q:What's your greatest strength/weakness?</p>
        <!-- <p>A:Blue</p> -->
        <p>Q:Where do you see yourself in ten years?</p>
        <!-- <p>A:Blue</p> -->
        <p>Q:How have you overcome a challenge?</p>
        <!-- <p>A:Blue</p> -->
        <p>Q:What are your hobbies?</p>
        <!-- <p>A:Blue</p> -->
      </div>

      <div class="credits">
        <p>This site was built by me
          <font-awesome-icon
            :icon="['fas', 'hand-holding-heart']"
            color="white"
            size="1x"
            class="fas"
          /> With an assist from ...
        </p>

        <ul class="credits-list">
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Product_Sans"
              target="_blank"
              rel="noopener noreferrer"
            >Product Sans</a>
          </li>
          <li>
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>
            <font-awesome-icon
              :icon="['fab', 'vuejs']"
              color="white"
              size="1x"
              class="credits-fai"
            />
          </li>
          <li>
            <a
              href="https://fontawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
            >Fort Awesome</a>
            <font-awesome-icon
              :icon="['fab', 'fort-awesome']"
              color="white"
              size="1x"
              class="credits-fai"
            />
          </li>
          <li>
            <a
              href="https://alvarotrigo.com/fullPage/"
              target="_blank"
              rel="noopener noreferrer"
            >Fullpage.js</a>
          </li>
          <li>
            <a
              href="https://cngu.github.io/vue-typer/"
              target="_blank"
              rel="noopener noreferrer"
            >vueTyper</a>
          </li>
          <li>
            <a
              href="https://github.com/mciastek/sal"
              target="_blank"
              rel="noopener noreferrer"
            >Sal.js</a>
          </li>
        </ul>
      </div>

      <div class="footer">
        <a href="https://github.com/akinhwan" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'github']" size="4x" class="fai"/>
        </a>
        <a
          href="https://stackoverflow.com/users/6286223/akin-hwan?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'stack-overflow']" size="4x" class="fai"/>
        </a>
        <a href="https://medium.com/@akinhwan" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'medium-m']" size="4x" class="fai"/>
        </a>
        <a href="https://twitter.com/akinhwan" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'twitter']" size="4x" class="fai"/>
        </a>
        <a href="https://www.linkedin.com/in/akinhwan/" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" size="4x" class="fai"/>
        </a>
        <a href="https://soundcloud.com/akinhwan" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'soundcloud']" size="4x" class="fai"/>
        </a>
        <a
          href="https://www.youtube.com/channel/UCduQGCaFUTOq1LMOP9zOUNA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" size="4x" class="fai"/>
        </a>
        <a href="https://codepen.io/akinhwan/" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'codepen']" size="4x" class="fai"/>
        </a>
      </div>

      <div class="subscription">
        <h2>Sign up for updates. No spam included.</h2>
        <!-- <form @submit.prevent="onSubmit" action="">
                <input ref="emailInput" type="email" name="email" placeholder="heyHEYhey@email.com" required @keyup.enter.native="onSubmit">
                <button>submit</button>
        </form>-->
        <div class="form-right">
          <!-- <form style="padding:3px;text-align:center;" action="https://tinyletter.com/akinhwan" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/akinhwan', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
                <p><input type="email" placeholder="heyHEYhey@gmail.com" name="email" id="tlemail" required  /></p>
                <input type="hidden" value="1" name="embed"/>
                <input type="submit" id="tlbutton" value="Subscribe" />
          </form>-->
          <form
            style="padding:3px;text-align:center;"
            class="gform"
            method="POST"
            data-email="example@email.net"
            action="https://script.google.com/macros/s/AKfycbxUCjy5zIYpfOt7Iv4E1EwxZ_fU6L6JAAm03pOW/exec"
          >
            <p>
              <input
                type="email"
                placeholder="heyHEYhey@gmail.com"
                name="email"
                id="tlemail"
                required
              >
            </p>
            <input type="hidden" value="1" name="embed">
            <input type="submit" id="tlbutton" value="Subscribe">
          </form>
        </div>
      </div>
    </div>
    <div class="copyright">
      <font-awesome-icon :icon="['far', 'copyright']" size="1x" class="fai"/>
      <p class="copyright-text">2018 Andrew Inhwan Kim. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
// import Footer from './Footer'
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

export default {
  name: "ContactSection",
  data() {
    return {
      msg: "Contact Contact Contact",
      email: []
    };
  },
  methods: {
    onSubmit(e) {
      this.email.push(this.$refs.emailInput.value);
      console.log(e);
      this.$refs.emailInput.value = "";
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  height: 70%;
}
.header {
  position: absolute;
  top: 150px;
  left: -280px;
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

.phonenumber {
  /* text-shadow: 2px 2px 5px white, 1px 1px 20px white; */
  /* text-decoration-line: underline; */
  text-decoration-style: wavy;
  color: white;
  font-weight: bolder;
  font-family: Product Sans;
  letter-spacing: 2px;
}
#contact {
  font-family: "Space Mono", monospace;
  display: flex;
  flex-direction: column;
}

.information {
  /* display: flex; */
  display: grid;
  align-items: center;
  justify-content: space-around;
  /* padding: 4.2vw 0; */
}
.information > h1 {
  color: white;
}
.information-fai {
  padding-right: 10px;
}
.my-email,
.my-email > a,
.my-phone {
  color: white;
}

.my-email > a {
  padding-left: 10px;
  font-weight: bolder;
  letter-spacing: 2px;
}

.my-email,
.my-phone {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(16px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}

.credits {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw 0;
  font-size: calc(10px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
.credits-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0;
}

.credits-list > li > a {
  color: white;
  font-size: calc(10px + (26 - 18) * ((100vw - 300px) / (1600 - 300)));
}
.credits-fai {
  padding-left: 5px;
}
.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: -45px;
}
.subscription {
  background-color: black;
  min-height: 80px;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(80px, 1fr));
}

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100%;
  font-size: 1.5vw;
}
form {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

form > p {
  margin: 0;
}

.form-right {
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 38%;
  padding-top: 7px;
  /* width: 50px; */
  width: 15vw;
}

#tlbutton {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 3px 20px;
  font-size: 1.3vw;
  font-family: "Space Mono", monospace;
}

.faq {
  text-align: center;
  color: white;
  display: none;
  grid-template-columns: 1fr 1fr;
  padding: 9px 0;
  visibility: hidden;
}

.fai {
  color: white;
  transition: 0.5s;
  width: 2vw;
}

.fai:hover,
fai:focus {
  opacity: 0.5;
  transition: 0.5s;
  transform: scale(1.25);
  animation-name: none !important;
}

.footer {
  font-size: 12px;
  /* display: flex;
    align-items: flex-end;
    justify-content: space-evenly; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8vw, 1fr));
  position: relative;
  padding: 16px 0;
}
.footer > a {
  margin: auto;
}

.copyright-text {
  color: white;
  font-size: calc(12px + (24 - 20) * ((100vw - 300px) / (1600 - 300)));
  padding-left: 10px;
}

@media (max-width: 500px) {
  .my-email,
  .my-phone {
    font-size: 4vw;
  }
  .dropaline {
    display: none;
  }
  .sayhello {
    display: none;
  }
  .credits {
    display: none;
  }
  .footer {
    grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));
  }
  .subscription {
    grid-template-rows: repeat(auto-fill, minmax(82px, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(36vw, 1fr));
  }
  .subscription > h2 {
    font-size: 4vw;
    padding: 4vw;
  }
  .copyright-text {
    font-size: 2.5vw;
  }
  .copyright > .fai {
    width: 3vw;
  }
  #tlbutton {
    font-size: 3.3vw;
  }
  #tlemail {
    padding-top: 15px;
    width: 35vw;
    font-size: 4vw;
  }
  .fai {
    width: 5vw;
  }
  .header {
    top: -60px;
    left: 0px;
    transform: unset;
  }
  .information {
    grid-template-rows: 90% 0%;
  }
}
</style>
