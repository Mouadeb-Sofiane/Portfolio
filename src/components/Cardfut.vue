<script setup lang="ts">
  import { defineProps } from 'vue';
  import { ref } from "vue";
</script>

<template>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16">
                <div class="flex justify-center text-center ">
                    <div class="card animated-card">
                        <div></div>
                        <div class="description">
                            <div class="name" >Sofiane Mouadeb</div>
                            <div class="stats-container">
                                <div class="figure">
                                    <div>87 VELO</div>
                                    <div>82 BOXE</div>
                                    <div>99 FOOTBALL</div>
                                </div>
                                <div class="figure">
                                    <div>70 DESSIN</div>
                                    <div>89 MANGA</div>
                                    <div>95 INFORMATIQUE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </template>
  
  <style>
  .card {
    height: 500px;
    border: 4px #f1f1f1 solid;
    max-width: 290px;
    width: 90%;
    background: url(../assets/img/sof11.png), #f1f1f1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;
    font-family: 'Viga';
    box-shadow: 10px 10px 5px #888888;
  }
  
  .description {
    height: 200px;
    background: #f1f1f1;
  }
  
  .name {
    background: #f1f1f1;
    font-size: 25px;
    text-align: center;
  }
  
  .stats-container {
    display: flex;
    width: 100%;
    justify-content: center;
    height: inherit;
    gap: 20px;
    text-justify: auto;
  }
  
  .figure {
    display: flex;
    width: 100%;
    gap: 20px;
    flex-direction: column;
    font-size: 14px;
    margin-top: 10px;
    align-items: center;
    height: inherit;
    font-weight: 600;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  </style>
  