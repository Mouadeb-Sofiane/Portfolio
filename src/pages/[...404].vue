<script setup lang="ts">
import { ref, onMounted } from 'vue'
</script>

<template>
<div class="bar">
  <div class="ball"></div>
</div>

<div class="cre">
  Vous êtes perdu ? <br />
  <a to="/" target="_blank">Retournez à l'accueil.</a>
</div>
</template>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0081cb33;
  font-family: "Montserrat", sans-serif;
}
.ball {
  position: relative;
  bottom: 100px;
  left: calc(100% - 70px);
  width: 100px;
  height: 100px;
  background: #ff0022;
  border-radius: 50%;
  animation: ball-move 4s ease-in-out 2s infinite alternate;
}
.ball::after {
  position: absolute;
  content: '';
  top: 50px;
  right: 10px;
  width: 10px;
  height: 10px;
  background: #FFF;
  border-radius: 50%;
}
.bar {
  width: 500px;
  height: 25px;
  background: black;
  border-radius: 30px;
  transform: rotate(-15deg);
  filter: drop-shadow(20px 10px 4px gray);
  animation: up-down 4s ease-in-out 2s infinite alternate;
}
@keyframes up-down {
  from {transform: rotate(-15deg);}
  to {transform: rotate(15deg);}
}
@keyframes ball-move {
  from {left: calc(100% - 70px); transform: rotate(360deg);}
  to {left: calc(0% - 35px); transform: rotate(0deg);}
}
.cre {
  position: fixed;
  bottom: 8px;
  right: 2px;
  padding: 10px;
  border-radius: 10px;
  background: #333;
  color: #fff;
  cursor: pointer;
  font-size: 10px;
}
.cre a {
  background: #333;
  color: #fff;
  cursor: pointer;
}
</style>
