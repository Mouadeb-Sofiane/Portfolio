<template>
    <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';

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
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            this.$refs.container.appendChild(renderer.domElement);

            // Créer une sphère
            const geometry = new THREE.SphereGeometry(1, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            // Animation de la sphère
            const animate = () => {
                requestAnimationFrame(animate);
                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;
                renderer.render(scene, camera);
            };

            animate();
        },
    },
};
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
    }
</style>
