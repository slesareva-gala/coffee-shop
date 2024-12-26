<template>
  <div id="preloader">
    <div id="fountainG">
      <div id="fountainG_1" class="fountainG"></div>
      <div id="fountainG_2" class="fountainG"></div>
      <div id="fountainG_3" class="fountainG"></div>
      <div id="fountainG_4" class="fountainG"></div>
      <div id="fountainG_5" class="fountainG"></div>
      <div id="fountainG_6" class="fountainG"></div>
      <div id="fountainG_7" class="fountainG"></div>
      <div id="fountainG_8" class="fountainG"></div>
    </div>
  </div>
</template>
  
<style>
#preloader {
  display: block;
  width: 100%;
}

#preloader #fountainG {
  position: relative;
  width: 234px;
  height: 28px;
  left: 50%;
  top: 50%;
  margin-left: -117px;
  margin-top: -14px;
}

#preloader .fountainG {
  position: absolute;
  top: 0;
  background-color: #6f4e37;
  width: 28px;
  height: 28px;
  animation-name: bounce_fountainG;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  transform: scale(0.3);
  border-radius: 19px;
}

#preloader #fountainG_1 {
  left: 0;
  animation-delay: 0.1s;
}

#preloader #fountainG_2 {
  left: 29px;
  animation-delay: 0.25s;
}

#preloader #fountainG_3 {
  left: 58px;
  animation-delay: 0.4s;
}

#preloader #fountainG_4 {
  left: 88px;
  animation-delay: 0.55s;
}

#preloader #fountainG_5 {
  left: 117px;
  animation-delay: 0.7s;
}

#preloader #fountainG_6 {
  left: 146px;
  animation-delay: 0.85s;
}

#preloader #fountainG_7 {
  left: 175px;
  animation-delay: 1s;
}

#preloader #fountainG_8 {
  left: 205px;
  animation-delay: 1.14s;
}

@keyframes bounce_fountainG {
  0% {
    transform: scale(1);
    background-color: #6f4e37;
  }

  to {
    transform: scale(0.3);
    background-color: wheat;
  }
}
</style>