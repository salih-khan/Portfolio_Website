<template>
  <div class="home">
    <div class="s1">
      <Header />
      <h4 id="web_dev" class="animate-text">I am a web developer</h4>

      <img src="../assets//Images/click-element.gif" alt="" width="600" height="500" id="img">
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: 'Oregan';
  src: url('../assets/Fonts/Oregon/OregonLdoBook-4BYD.ttf');
}

@font-face {
  font-family: 'Oregan Invisible';
  src: url('../assets/Fonts/Oregon/OregonLdoVanishingBold-mLmv.ttf');
}

.home {
  margin: 0;
  padding: 0;
}

.s1 {
  width: 100vw;
  height: 100vh;
  /* background: url('../assets/Images/2590670.webp'); */
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0;
  padding: 0;
}

#web_dev {
  color: purple;
  text-align: center;
  font-family: 'Oregan';
  font-size: 2rem;
  overflow: hidden; /* Ensures text is hidden while animating */
}

.animate-text {
  display: inline-block; /* Inline-block ensures the animation works with block containers */
  animation: slide-in 2s ease-out forwards; /* Runs the slide-in animation */
  white-space: nowrap; /* Prevents text from wrapping during the animation */
}

/* Animation Keyframes */
@keyframes slide-in {
  0% {
    transform: translateX(-100%); /* Start off-screen to the left */
    opacity: 0; /* Fully transparent at the start */
  }
  100% {
    transform: translateX(200%); /* Slide into place */
    opacity: 1; /* Fully visible at the end */
  }
}

#img{
  text-align: center;
    justify-content: center;
    display: flex;
    margin: auto;
    align-items: center;
    border-radius: 3rem;
    transform: translateY(25%);
}
</style>
