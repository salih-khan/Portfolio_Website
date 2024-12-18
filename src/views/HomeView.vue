<template>
  <div class="home">
    <div class="s1">
      <div class="content">
        <div class="img_section">
          <img src="../assets/Images/20241112_192110.jpg" alt="" width="400" height="400">
        </div>  
        <div class="info_section">
          <h1>Hi, I'm Salih</h1>
          <h3>Web developer</h3>
          <p>I am a full stack developer.</p>
        </div>  
      </div>
      <h1 id="scroll">I think you should scroll</h1>


    </div>

    <div class="s1_end"></div>

    <div class="s2">

      <div class="s2_inner">

      </div>
    </div>
  </div>
</template>

<style>
.s1{
  width: 100vw;
  height: 90vh;
  position: relative;
  background-color: black;
}

#scroll{
  position: absolute;
  bottom: 0px;
  width: auto;
  margin: auto;
  color: black;
  font-size: 1rem;
  left: 50%;
  transform: translate(-50%, 2.5rem);
  font-family: 'Oregan';
  background-color: gold;
  border-radius: 0.5rem;
  padding: 1rem;
}

.content{
  width: 1000px;
  text-align: center;
  justify-content: center;
  margin: auto;
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.info_section{
  text-align: left;
  font-weight: lighter;
  color: white;
  font-family: "Oregan";
}

.info_section h1{
  border-left: 5px solid yellow;
  color: white;
  padding-left: 1rem;
}

.img_section img{
  box-shadow: 10px 10px 0px  white;
}

.s1_end{
  height: 10vh;
  background-color: white;
  background-image: url("../assets/Images/grid_black.jpg");
  background-attachment: fixed; 
  background-position: center; 
  background-repeat: repeat; 
  background-size: 200px;
}



.s2{
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url("../assets/Images/darkbg.webp");
  background-size: cover;
  justify-content: center;
  align-items: center;
}

.s2_inner{
  position: absolute; 
  top: 50%; 
  left: 50%; 
  width: 1000px; 
  height: 600px; 
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.5); 
  /* Slight white background with transparency */ 
  backdrop-filter: blur(5px); /* Frosted glass effect */ 
  -webkit-backdrop-filter: blur(5px); /* Support for Safari */ 
  border-radius: 15px; /* Optional: Rounded corners for a polished look */ 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Shadow for a 3D effect */ 
  color: white; /* Text color */
}
</style>