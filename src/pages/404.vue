<script setup lang="ts">
import { ref, onMounted } from 'vue'
</script>

<template>
  <div class="bg">
    <div class="lightning">
    </div>
    <div class="rain">
 </div>
  </div>
</template>
<style>
* {
  margin: 0;
}

.bg {
  width: 100wh;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1608939070588-29794905e761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y3liZXJwdW5rJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60")
    center / 100% auto no-repeat;
  animation: color-change 10s linear infinite;
  position: relative;
}

.bg::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
  animation: flash 4s linear infinite;
}

.lightning {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  width: 80px;
  height: 144px;
  opacity: 0;
  animation: lightning 4s linear infinite;

  background: url("https://www.freepnglogos.com/uploads/lightning-png/download-lightning-png-transparent-image-and-clipart-2.png")
    top center / 100% auto no-repeat;
}

.rain {
  height: 100vh;
  background: url("https://www.freeiconspng.com/thumbs/rain-png/rain-png-transparent-9.png");
  /*   filter:  contrast(400%); */
  animation: rain 0.5s linear infinite;
}

@keyframes rain {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -20% 100%;
  }
}

@keyframes color-change {
  0%,
  100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
}

@keyframes flash {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  12% {
    opacity: 0.3;
  }
  14% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  22% {
    opacity: 0.6;
  }
  26% {
    opacity: 0;
  }
}

@keyframes lightning {
  0% {
    height: 0px;
  }
  8% {
    height: 0px;
    opacity: 0;
  }
  10% {
    opacity: 1;
    height: 88px;
  }
  11% {
    opacity: 0;
    height: 88px;
  }

  18% {
    height: 0px;
    opacity: 0;
  }
  20% {
    opacity: 1;
    height: 144px;
  }
  25% {
    opacity: 1;
    height: 144px;
  }
  40% {
    opacity: 0;
  }
}
</style>
