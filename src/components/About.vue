<template>
  <div id="about">
       
    <div class="about">
        <h1 class="header">About</h1>
        <p class="col-one">
          I was born in 1991, an only child in Annandale Virginia. I grew up with an obsession with LEGO and claimed I'd 
          become a concert violinist. In middle school I thought I'd end up in the NBA or the PGA. In high school I discovered 
          The Beatles and knew our band "Kung Food" was going to make it 😜. At New York University I began as an Economic Policy 
          major, but transferred midway to <a href="http://tisch.nyu.edu/" target="_blank" rel="noopener noreferrer">Tisch School 
          of the Arts</a> for Film and Television. I'm currently a government contractor Front End Developer at 
          <a href="https://www.mscweb.com/#science-technology-1" target="_blank" rel="noopener noreferrer">MSC</a> working on <a href="https://www.ncbi.nlm.nih.gov/labs/pubmed/" target="_blank" rel="noopener noreferrer"Pub Med Labs>
          Pub Med Labs</a> connecting people to the world's leading sources of biomedical information.
          People are often surprised to find out that I don't subscribe to Netflix 😨, but I am a huge fan of
          <a href="https://medium.com/@akinhwan/my-favorite-podcasts-4b39a3de637c" target="_blank" rel="noopener noreferrer">Podcasts</a>.
        </p>
        <p class="col-two">
          I'll probably enjoy golf till old age, my handicap is ~11. I love music, here is some hard hitting jazz for your soul <a href="https://youtu.be/CsxtKQW9ggg" target="_blank" rel="noopener noreferrer">A Love Supreme Part 2, Resolution by John Coltrane </a>, <a href="https://www.youtube.com/watch?v=pDga7tJL2UU" target="_blank" rel="noopener noreferrer">I Love Music by Ahmad Jamal</a>, and <a href="https://www.youtube.com/watch?v=U8pZZ5D3dVc" target="_blank" rel="noopener noreferrer">Yusef Lateef's Love Theme from Spartacus</a>. Also... <a href="https://www.youtube.com/watch?v=WKWFr9upIuU&t=882s" target="_blank" rel="noopener noreferrer">Brazilian Samba?</a>. Otherwise I enjoy listening to <a href="https://worldwidefm.net/" target="_blank" rel="noopener noreferrer">Worldwide FM radio</a> while I work. I grew up eating <a href="https://en.wikipedia.org/wiki/Gamja-tang" target="_blank" rel="noopener noreferrer">Gamja-tang</a>, and will drink most anything in smoothie form. 
          My favorite book is <a href="https://en.wikipedia.org/wiki/Meditations" target="_blank" rel="noopener noreferrer">Meditations</a> by <a href="https://en.wikipedia.org/wiki/Marcus_Aurelius" target="_blank" rel="noopener noreferrer">Marcus Aurelius</a>. A movie I could watch over and over again is <a href="https://www.youtube.com/watch?v=BnFjSHQFVkA" target="_blank" rel="noopener noreferrer">In the Mood for Love</a> by <a href="https://en.wikipedia.org/wiki/Wong_Kar-wai_filmography" target="_blank" rel="noopener noreferrer">Wong Kar-wai</a>. 
          My <a href="https://www.effectivealtruism.org/" target="_blank" rel="noopener noreferrer">mission</a> in life is to make the biggest impact on the most amount of people on this planet 🌎 
        </p>
        <!-- <p class="col-one">Digital Design present-day is consumed on-screen and can often be clinical and un-serendipitous, leaving a person passive and disengaged.
        My goal is to shine light on the tiniest of details that attribute to both the look and feel of an experience online, mobile, or wherever content may live in the future. I believe in a Designer's moral obligation to Alleviate, rather than to Exploit. I believe that if everything had the touch of optimal design, then everyone would operate a little smoother. My guiding sense of purpose is an Eclecticism, that serves as a basis for wide inspiration and deep learning.
        My ideal workplace or situation, involves an opportunity to learn, grow in responsibilities handed down to me, to contribute to something bigger than myself, and eventually be recognized for the change I've brought about.
        <p class="col-two">I have worked in a wide variety of open and closed environments with diverse teams of wildly ranging sizes.
        I have experience in film production, journalism, Front End Web-Development, and UX Design.
        I bring to the table fresh and innovative ideas, and am capable of taking harsh criticism or feedback to sculpt them into fully formed products.
        I come with the added advantage of having a storytelling frame of mind via synchronous audio visual arrangements.
        I am always looking to collaborate with like- minded pracitioners of inter-disciplinary work.
        I am available for design consultation, freelance projects and commissions for new designs and works. 
        
        I enjoy chess, ping-pong, basketball, golf, hiking, 
        Why tell you all this? Because I believe the thread of dreams and aspirations is more telling than any ol' curriculum vitae. 
        I'm obsessed with learning new things, and seek to be on the bleeding edge of technology and creativity.  
        </p> -->
    </div> 

    
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      msg: "About Me"
    };
  }
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 100px;
  left: -230px;
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
.about {
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 5vmin;
  grid-gap: 5vmin;
  border-radius: 15px;
  overflow: hidden;
}

.about > p {
  color: white;
  font-size: 2vmin;
  font-weight: 300;
  font-family: "Product Sans", sans-serif;
  line-height: 5vmin;
  text-align: justify;
}

.col-one > a,
.col-two > a {
  color: white;
}

.col-one {
  grid-column: 1/2;
  grid-row: 1/2;
  margin: 0;
}

.col-two {
  margin: 0;
  grid-column: 2/3;
  grid-row: 1/2;
}
@media (max-width: 500px) {
  .header {
    top: -60px;
    left: 0px;
    transform: unset;
  }
}
</style>
