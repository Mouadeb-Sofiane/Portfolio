<template>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      class="dev-icon"
      :style="style">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="none" />
      <path
        v-bind:d="pathD"
        fill="none"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Animation path for 'dev' symbol
        pathD: "M20,50 L40,70 L60,30 L80,50", 
        style: {
          width: "100px",
          height: "100px",
          animation: "spin 2s linear infinite"
        }
      };
    }
  };
  </script>
  
  <style scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .dev-icon {
    animation: rotate 3s ease-in-out infinite;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  