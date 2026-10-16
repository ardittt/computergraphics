import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
camera.position.set(5, 6, 7)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
const pointLight = new THREE.PointLight(0xffffff, 400, 0, 1.6)
const ambientLight = new THREE.AmbientLight(0xffffff, 2.3)
scene.add(pointLight, ambientLight)

const geometry = new THREE.SphereGeometry(2, 32, 24);
const material = new THREE.MeshStandardMaterial({ color: 0xFCE570 ,wireframe:true})
const sun = new THREE.Mesh(geometry, material)
scene.add(sun)

const earthOrbit = new THREE.Object3D();
sun.add(earthOrbit)

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0X1E40FF, roughness: 0.9 })
)
earth.position.x = 6
earthOrbit.add(earth)

const control = new OrbitControls(camera, renderer.domElement);


 const moonOrbit =new THREE.Object3D()
earth.add(moonOrbit)
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.28,32,24),
    new THREE.MeshStandardMaterial({color:0xece1e1, roughness: 0.9})
)
  moon.position.x=1.6
  moonOrbit.add(moon)
// Mercury orbit
const mercuryOrbit = new THREE.Object3D();
sun.add(mercuryOrbit);

const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0x13034, roughness: 0.9 })
);

mercury.position.x = 4;
mercuryOrbit.add(mercury);


// Mercury moon
const mercuryMoonOrbit = new THREE.Object3D();
mercury.add(mercuryMoonOrbit);

const mercuryMoon = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0xbdbdbd, roughness: 0.9 })
    
);

mercuryMoon.position.x = 1;
mercuryMoonOrbit.add(mercuryMoon);
// Saturn orbit
const saturnOrbit = new THREE.Object3D();
sun.add(saturnOrbit);

const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 32, 24),
    new THREE.MeshStandardMaterial({
        color: 0xd6b77c,
        roughness: 0.9
    })
);

saturn.position.x = 14;
saturn.rotation.z =0.4;
saturnOrbit.add(saturn);


// Saturn ring
const ringGeometry = new THREE.RingGeometry(1.6, 2.4, 64);
const ringMaterial = new THREE.MeshStandardMaterial({
    color: 0xc9b27c,
    side: THREE.DoubleSide
});

const saturnRings = new THREE.Mesh(ringGeometry, ringMaterial);

saturnRings.rotation.x = Math.PI / 2;
saturn.add(saturnRings);






function animate() {
    requestAnimationFrame(animate)
    control.update()
    earthOrbit.rotation.y += 0.01
    moonOrbit.rotation.y +=0.04
    earth.rotation.y +=0.05
    mercuryOrbit.rotation.y += 0.02;
    mercuryMoonOrbit.rotation.y += 0.05;
    mercury.rotation.y += 0.03;
    sun.rotation.y +=0.006
    saturnOrbit.rotation.y += 0.004;

saturn.rotation.y += 0.02;
saturn.rotation.z +=0.04;
    renderer.render(scene, camera)
}
animate()