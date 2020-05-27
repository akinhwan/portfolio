<template>
  <div id="contact">
    <h1 class="header">Contact</h1>
    <div class="grid">
      <div class="information">
        <div class="my-email">
          <font-awesome-icon
            :icon="['far', 'envelope-open']"
            size="1x"
            class="information-fai"
          />
          <p class="dropaline">Drop a line</p>
          <a
            href="mailto:akinhwan@gmail.com?subject=Your #1 Fan&body=Oh my gosh I can't believe I finally got a hold of you"
            >akinhwan@gmail.com</a
          >
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
            <a class="phonenumber" href="tel:+1-202-507-9205"
              >+1 (202) 507-9205</a
            >
          </p>
        </div>
      </div>

      <div class="footer">
        <a
          href="https://github.com/akinhwan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="4x" class="fai" />
        </a>
        <!-- <a
          href="https://stackoverflow.com/users/6286223/akin-hwan?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon
            :icon="['fab', 'stack-overflow']"
            size="4x"
            class="fai"
          />
        </a> -->
        <a
          href="https://medium.com/@akinhwan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon
            :icon="['fab', 'medium-m']"
            size="4x"
            class="fai"
          />
        </a>
        <a
          href="https://twitter.com/akinhwan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" size="4x" class="fai" />
        </a>
        <a
          href="https://www.linkedin.com/in/akinhwan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon
            :icon="['fab', 'linkedin-in']"
            size="4x"
            class="fai"
          />
        </a>
        <!-- <a
          href="https://www.patreon.com/bePatron?u=2405263"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'patreon']" size="4x" class="fai" />
        </a> -->
        <!-- <a
          href="https://www.youtube.com/channel/UCduQGCaFUTOq1LMOP9zOUNA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" size="4x" class="fai" />
        </a> -->
        <a
          href="https://codepen.io/akinhwan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'codepen']" size="4x" class="fai" />
        </a>
      </div>

      <div class="copyright">
        <font-awesome-icon :icon="['far', 'copyright']" size="1x" class="fai" />
        <p class="copyright-text">2020 Akinhwan. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

export default {
  name: "ContactSection",
  data() {
    return {};
  },
  methods: {
    onSubmitGoogleSheets() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbx09n_0mSzsN4ALj8x4XaZuPZBXbGu59j9SXhwZFpKYdggLBMwR/exec";
      const form = document.forms["submit-to-google-sheet"];

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
      this.$refs.emailInput.value = "";
      this.email = "";
      this.$refs.submitForm.style.display = "none";
      this.$refs.thankyou.style.display = "flex";
    },
  },
  components: {
    FontAwesomeIcon,
  },
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
  display: grid;
  align-items: center;
  justify-content: space-around;
  margin: 5vh 0;
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
  font-size: calc(24px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: -45px;
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
  display: grid;
  grid-template-columns: repeat(5, minmax(8vw, 1fr));
  position: relative;
  padding: 16px 0;
  margin: 0 13rem;
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
    grid-template-columns: repeat(auto-fill, minmax(41vw, 1fr));
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
