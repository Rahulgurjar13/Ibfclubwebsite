import VantaBase, { VANTA } from 'vanta';
import * as THREE from 'three';

// Define helper functions locally
const rn = (min, max) => Math.random() * (max - min) + min;
const ri = (min, max) => Math.floor(rn(min, max + 1));
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const mobileCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

class Effect extends VantaBase {
  static initClass() {
    this.prototype.defaultOptions = {
      color: 0xff8820,
      color2: 0xff8820,
      backgroundColor: 0x222222,
      size: 3,
      spacing: 35,
      showLines: true,
    };
  }

  constructor(options) {
    super(options);
    this.time = 0; // Add time tracking for animation
  }

  onInit() {
    const camera = this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.1, 5000);
    camera.position.x = 0;
    camera.position.y = 250;
    camera.position.z = 50;
    camera.tx = 0;
    camera.ty = 50;
    camera.tz = 350;
    camera.lookAt(0, 0, 0);
    this.scene.add(camera);

    const starsGeometry = this.starsGeometry = new THREE.BufferGeometry();
    const space = this.options.spacing;
    const points = [];
    this.initialPositions = []; // Store initial positions for animation

    for (let i = -30; i <= 30; i++) {
      for (let j = -30; j <= 30; j++) {
        const star = new THREE.Vector3();
        star.x = i * space + space / 2;
        star.y = rn(0, 5) - 150;
        star.z = j * space + space / 2;
        points.push(star);
        this.initialPositions.push({ x: star.x, y: star.y, z: star.z });
      }
    }
    starsGeometry.setFromPoints(points);

    const starsMaterial = new THREE.PointsMaterial({
      color: this.options.color,
      size: this.options.size,
    });
    const starField = this.starField = new THREE.Points(starsGeometry, starsMaterial);
    this.scene.add(starField);

    if (this.options.showLines) {
      const material = new THREE.LineBasicMaterial({ color: this.options.color2 });
      const linesGeo = new THREE.BufferGeometry();
      const linePoints = [];
      for (let i = 0; i < 200; i++) {
        const f1 = rn(40, 60);
        const f2 = f1 + rn(12, 20);
        const z = rn(-1, 1);
        const r = Math.sqrt(1 - z * z);
        const theta = rn(0, Math.PI * 2);
        const y = Math.sin(theta) * r;
        const x = Math.cos(theta) * r;
        linePoints.push(new THREE.Vector3(x * f1, y * f1, z * f1));
        linePoints.push(new THREE.Vector3(x * f2, y * f2, z * f2));
      }
      linesGeo.setFromPoints(linePoints);
      this.linesMesh = new THREE.LineSegments(linesGeo, material);
      this.scene.add(this.linesMesh);
    }
  }

  onUpdate() {
    this.time += 0.03; // Slower increment for smooth animation

    // Animate dots with increased Y movement and subtle X/Z oscillation
    const starsGeometry = this.starsGeometry;
    for (let j = 0; j < starsGeometry.attributes.position.array.length; j += 3) {
      const idx = j / 3;
      const x = this.initialPositions[idx].x;
      const y = this.initialPositions[idx].y;
      const z = this.initialPositions[idx].z;

      const newX = x + Math.sin(this.time + z * 0.02) * 2; // Subtle X oscillation
      const newY = y + Math.sin(this.time + x * 0.015 + z * 0.01) * 8; // Increased Y movement
      const newZ = z + Math.cos(this.time + x * 0.01) * 2; // Subtle Z oscillation

      starsGeometry.attributes.position.array[j] = newX;
      starsGeometry.attributes.position.array[j + 1] = newY;
      starsGeometry.attributes.position.array[j + 2] = newZ;
    }
    starsGeometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
    starsGeometry.attributes.position.needsUpdate = true;

    // Animate camera smoothly
    const c = this.camera;
    const rate = 0.01; // Slightly faster transition
    c.position.x += (c.tx - c.position.x) * rate;
    c.position.y += (c.ty - c.position.y) * rate;
    c.position.z += (c.tz - c.position.z) * rate;
    c.lookAt(0, 0, 0);

    // Animate lines with rotation
    if (this.linesMesh) {
      this.linesMesh.rotation.z += 0.003; // Slightly faster rotation
      this.linesMesh.rotation.x += 0.0015;
      this.linesMesh.rotation.y += 0.002;
    }
  }

  onMouseMove(x, y) {
    this.camera.tx = (x - 0.5) * 150; // Increased range for more interactivity
    this.camera.ty = 50 + y * 75; // Increased range
  }

  onRestart() {
    if (this.starField && this.scene) {
      this.scene.remove(this.starField);
    }
  }

  onDestroy() {
    if (this.starField && this.scene) {
      this.scene.remove(this.starField);
    }
    if (this.linesMesh && this.scene) {
      this.scene.remove(this.linesMesh);
    }
  }
}

Effect.initClass();
export default VANTA.register('DOTS', Effect);