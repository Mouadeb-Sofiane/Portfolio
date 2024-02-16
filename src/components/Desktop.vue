<template>
    <div ref="threeContainer"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'Desktop',
    mounted() {
      this.initThreeAnimation();
    },
    methods: {
      initThreeAnimation() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
  
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.threeContainer.appendChild(renderer.domElement);
  
        // Création du rond
        const circleGeometry = new THREE.CircleGeometry(1, 32);
        const circleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const circle = new THREE.Mesh(circleGeometry, circleMaterial);
        scene.add(circle);
  
        const animate = () => {
          requestAnimationFrame(animate);
  
          // Obtenez les coordonnées de la souris
          const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
          const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  
          // Convertissez les coordonnées de la souris en coordonnées de l'écran
          const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
          vector.unproject(camera);
  
          // Mettez à jour la position du cercle pour suivre la souris
          circle.position.x = vector.x;
          circle.position.y = vector.y;
  
          renderer.render(scene, camera);
        };
  
        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.render(scene, camera);
        });
  
        window.addEventListener('mousemove', animate);
  
        animate(); // Appelez animate une fois pour rendre le cercle initial visible
      },
    },
  };
  </script>
  
  <style scoped>
    /* Ajoutez vos styles ici si nécessaire */
  </style>
  