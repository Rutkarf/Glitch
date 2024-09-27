import * as THREE from "three";

const canvas = document.getElementById("animation-container");
const context = canvas.getContext("webgl");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  context: context,
  antialias: true,
});

const geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const coin = new THREE.Mesh(geometry, material);
scene.add(coin);

function animate() {
  requestAnimationFrame(animate);
  coin.rotation.x += 0.01;
  coin.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
