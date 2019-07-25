<template>
  <div id="nav">
    <div class="nav">    
            <p>Main</p>
            <p>Work</p>
            <p>About</p>
            <p>Contact</p>                
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavSection',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.nav{
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 9vmin;
    height: 6vmin;
    align-items: center;
    padding: 2vmin 0;
    z-index: 100;
}

.nav > p{
    padding-left: 8vmin;
    font-weight: bolder;
    font-size: 2em;
    margin: 0;
    /* font-family: Product Sans; */
}

p:hover{
    transform: scale(1.2);
    transition: .3s;
    transition-timing-function: cubic-bezier();
}

p{
    transform: scale(1);
    transition: .3s;
    transition-timing-function: cubic-bezier();
}


</style>
