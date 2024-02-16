<template>
  <div ref="scene"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    // Initialiser la scène avec un fond d'espace étoilé
    const scene = new THREE.Scene();

    // Charger la texture de cube pour le fond d'étoiles
    const spaceTexture = new THREE.CubeTextureLoader()
      .setPath('')
      .load(['right.jpg', 'left.jpg', 'top.jpg', 'bottom.jpg', 'front.jpg', 'back.jpg']);
    scene.background = spaceTexture;

    // Initialiser la caméra
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.z = 2;

    // Initialiser le rendu avec un fond transparent
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.scene.appendChild(renderer.domElement);

    // Ajouter une sphère représentant la Terre avec la texture
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('./public/earth_texture.jpg'),
      transparent: true,
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Ajouter des étoiles blanches (particules) dans l'espace
    const starsGeometryWhite = new THREE.BufferGeometry();
    const starsMaterialWhite = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.005 });

    const starsVerticesWhite = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;

      starsVerticesWhite.push(x, y, z);
    }

    starsGeometryWhite.setAttribute('position', new THREE.Float32BufferAttribute(starsVerticesWhite, 3));
    const starsWhite = new THREE.Points(starsGeometryWhite, starsMaterialWhite);
    scene.add(starsWhite);

    // Ajouter des étoiles jaunes (particules) dans l'espace
    const starsGeometryYellow = new THREE.BufferGeometry();
    const starsMaterialYellow = new THREE.PointsMaterial({ color: 0xFFFF00, size: 0.005 });

    const starsVerticesYellow = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;

      starsVerticesYellow.push(x, y, z);
    }

    starsGeometryYellow.setAttribute('position', new THREE.Float32BufferAttribute(starsVerticesYellow, 3));
    const starsYellow = new THREE.Points(starsGeometryYellow, starsMaterialYellow);
    scene.add(starsYellow);

    // Ajouter une lumière ambiante
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Ajouter une lumière directionnelle
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Ajouter la lune qui tourne autour de la Terre
    const moonGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('./public/moon.jpg'),
      roughness: 0,
      metalness: 0,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    // Ajuster la position initiale de la caméra pour centrer la planète
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      const newWidth = window.innerWidth * 0.2;
      const newHeight = window.innerHeight * 0.2;

      // Ajuster la taille de la scène
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotation de la Terre avec une vitesse plus lente
      earth.rotation.y += 0.001;

      // Rotation de la lune autour de la Terre
      moon.position.x = 1.1 * Math.cos(Date.now() * 0.001);
      moon.position.z = 1.1 * Math.sin(Date.now() * 0.001);

      // Mise à jour de l'animation des étoiles blanches
      starsWhite.rotation.y += 0.0001;

      // Mise à jour de l'animation des étoiles jaunes
      starsYellow.rotation.y -= 0.0001;

      renderer.render(scene, camera);
    };

    animate();
  },
};
</script>

<style>
  #scene {
    width: 20%;
    height: 20%;
    background-color: #111111;
  }
  
</style>
