<template>
    <div ref="container"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  
  export default {
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // Créer une scène
        const scene = new THREE.Scene();
  
        // Créer une caméra
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 5;
  
  
        // Créer un rendu
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
  
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        scene.add(directionalLight);
  
  
        const spaceTexture = new THREE.CubeTextureLoader()
          .setPath('')
          .load(['right.jpg', 'left.jpg', 'top.jpg', 'bottom.jpg', 'front.jpg', 'back.jpg']);
  
        scene.background = spaceTexture;
        // Créer un rendu
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.container.appendChild(renderer.domElement);
  
        // Charger le modèle GLB
        const loader = new GLTFLoader();
        loader.load('./public/avatar2_1.glb', (gltf) => {
          const avatar = gltf.scene;
  
          // Parcourir tous les objets du modèle pour appliquer des textures
          avatar.traverse((child) => {
            if (child.isMesh) {
              // Charger votre texture ici
              const textureLoader = new THREE.TextureLoader();
              const texture = textureLoader.load('./public/tex/texture_2.jpg');
  
              // Appliquer un matériau avec la texture
              const material = new THREE.MeshStandardMaterial({ map: texture });
              child.material = material;
            }
          });
          scene.add(avatar);
          renderer.render(scene, camera);
        }, undefined, (error) => {
          console.error('Erreur de chargement du modèle GLB', error);
        });
      },
    },
  };
  </script>
  