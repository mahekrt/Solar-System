import * as THREE from '/build/three.module.js';
//import {BLOOMPASS} from '/three/examples/jsm/postprocessing/BloomPass.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';
//import Stats from '/jsm/libs/stats.module.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera (75, window.innerWidth/window.innerHeight, 0.1, 10000);
camera.position.z = 1500;


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
//renderer.setClearColor(0xe2433);
document.body.appendChild( renderer.domElement );
var controls = new OrbitControls(camera,renderer.domElement);
 


//stars
var particles = new THREE.CircleGeometry(5);
for (var p = 0; p < 10000; p++) {
    var particle = new THREE.Vector3(Math.random() * 5500 -2000, Math.random() * 8000 -2000, Math.random() * 8000 - 2000);
    particles.vertices.push(particle);
}

var particleMaterial = new THREE.ParticleBasicMaterial({ color: 0xffffff, size: 2 });
var particleSystem = new THREE.ParticleSystem(particles, particleMaterial);
scene.add(particleSystem);

//Planets
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const light_p = new THREE.PointLight( 0xffffff, 6, 6000 );
light_p.position.set( 0, 0, 0 );
scene.add( light_p );


//sun
var sunGeo = new THREE.SphereGeometry(100, 32, 32);
var sunMaterial = new THREE.MeshPhongMaterial();
var sun = new THREE.Mesh(sunGeo, sunMaterial);
sunMaterial.map = new THREE.TextureLoader().load('images/sunmapthumb.jpg');
scene.add(sun);
sun.position.set(0,0,0);

//mercury
var merGeo = new THREE.SphereGeometry(20, 32, 32);
var merMaterial = new THREE.MeshPhongMaterial();
var mercury = new THREE.Mesh(merGeo, merMaterial);
merMaterial.map = new THREE.TextureLoader().load('images/mercurymapthumb.jpg');
merMaterial.bumpMap = new THREE.TextureLoader().load('images/mercurybumpthumb.jpg');
merMaterial.bumpScale = 0.05;
scene.add(mercury);
mercury.position.set(-400, 0, 0);


//venus
var venusGeo = new THREE.SphereGeometry(35, 32, 32);
var venusMaterial = new THREE.MeshPhongMaterial();
var venus = new THREE.Mesh(venusGeo, venusMaterial);
venusMaterial.map = new THREE.TextureLoader().load('images/venusmapthumb.jpg');
venusMaterial.bumpMap = new THREE.TextureLoader().load('images/venusbumpthumb.jpg');
venusMaterial.bumpScale = 0.05;
scene.add(venus);
venus.position.set(-600, 0, 0);

//earth
var earthGeo = new THREE.SphereGeometry(35, 32, 32);
var earthMaterial = new THREE.MeshPhongMaterial();
var earth = new THREE.Mesh(earthGeo, earthMaterial);
earthMaterial.map = new THREE.TextureLoader().load('images/earthmap.jpg');
earthMaterial.bumpMap = new THREE.TextureLoader().load('images/earthbump.jpg');
earthMaterial.bumpScale = 0.05;
earthMaterial.specularMap = new THREE.TextureLoader().load('images/earthspec.jpg');
earthMaterial.specular = new THREE.Color('grey');
scene.add(earth);
earth.position.set(-800, 0, 0);

//moon
var moonGeo = new THREE.SphereGeometry(25,32,32);
var moonMat = new THREE.MeshPhongMaterial();
var moon = new THREE.Mesh(moonGeo, moonMat);
moonMat.map = new THREE.TextureLoader().load('images/moonmap1k.jpg');
scene.add(moon);
moon.position.set(-1600,0,0);


//mars
var marsGeo = new THREE.SphereGeometry(25,32,32);
var marsMaterial = new THREE.MeshPhongMaterial();
var mars = new THREE.Mesh(marsGeo, marsMaterial);
marsMaterial.map = new THREE.TextureLoader().load('images/marsmapthumb.jpg');
marsMaterial.bumpMap = new THREE.TextureLoader().load('images/marsbumpthumb.jpg');
marsMaterial.bumpScale = 0.05;
scene.add(mars);
mars.position.set(-1020, 0, 0);

//jupiter
var jupGeo = new THREE.SphereGeometry(70,32,32);
var jupMaterial = new THREE.MeshPhongMaterial();
var jupiter = new THREE.Mesh(jupGeo, jupMaterial);
jupMaterial.map = new THREE.TextureLoader().load('images/jupitermapthumb.jpg');
scene.add(jupiter);
jupiter.position.set(-1400, 0, 0);

//saturn
var satGeo = new THREE.SphereGeometry(60,32,32);
var satMaterial = new THREE.MeshPhongMaterial();
var saturn = new THREE.Mesh(satGeo, satMaterial);
satMaterial.map = new THREE.TextureLoader().load('images/saturnmapthumb.jpg');
scene.add(saturn);
saturn.position.set(-1700, 0, 0);

var satRing = new THREE.RingGeometry (85,100,35);
var texture1 = new THREE.TextureLoader().load("images/saturnringcolorthumb.jpg");
var satRingMat = new THREE.MeshLambertMaterial ({side: THREE.DoubleSide, map:texture1});
var saturnRings = new THREE.Mesh(satRing, satRingMat);
//saturnRings.map = new THREE.TextureLoader().load("saturnringcolorthumb.jpg");
//saturnRings.pattern = new THREE.TextureLoader().load("saturnringpatternthumb.gif");
saturnRings.rotation.x = Math.PI / 2;
saturn.add(saturnRings);

//uranus
var uranusGeo = new THREE.SphereGeometry(50,32,32);
var uranusMaterial = new THREE.MeshPhongMaterial();
var uranus= new THREE.Mesh(uranusGeo, uranusMaterial);
uranusMaterial.map = new THREE.TextureLoader().load('images/uranusmapthumb.jpg');
scene.add(uranus);
uranus.position.set(-2000, 0, 0);

var uraRing= new THREE.RingGeometry (80,100,35);
var texture2 = new THREE.TextureLoader().load("images/saturnringcolorthumb.jpg");
var texture3 = new THREE.TextureLoader().load("images/uranusringcolor.jpg");
var uraRingMat = new THREE.MeshLambertMaterial ({side: THREE.DoubleSide, map:texture2, map:texture3});
var uranusRings = new THREE.Mesh(uraRing, uraRingMat);
//uranusRings.map = new THREE.TextureLoader().load("uranusringcolor.jpg");
//uranusRings.trans = new THREE.TextureLoader().load("uranusringtrans.jpg");
uranusRings.rotation.x = Math.PI / 2;
uranus.add(uranusRings);

//neptune
var nepGeo = new THREE.SphereGeometry(40,32,32);
var nepMaterial = new THREE.MeshPhongMaterial();
var neptune= new THREE.Mesh(nepGeo, nepMaterial);
nepMaterial.map = new THREE.TextureLoader().load('images/neptunemapthumb.jpg');
scene.add(neptune);
neptune.position.set(-2300, 0, 0);

//orbits
var orbits = function(name, radius, delta){
  var theta = 0;
  var diff = 2 * Math.PI/delta;
  var orbitGeo = new THREE.Geometry();
  var orbitMat = new THREE.LineBasicMaterial({color: 0xffffff});
  for (theta; theta<= 2 * Math.PI; theta+=diff){
    orbitGeo.vertices.push(new THREE.Vector3(radius * Math.cos(theta) * 1.8 , 0, radius * Math.sin(theta)));
}
var orbit = new THREE.Line (orbitGeo, orbitMat);
scene.add(orbit);
}
orbits(mercury, 400, 1000);
orbits(venus, 600, 2000);
orbits(earth, 800, 3000);
orbits(mars, 1020, 4000);
orbits(jupiter, 1400, 5000);
orbits(saturn, 1700, 6000);
orbits(uranus, 2000, 7000);
orbits(neptune, 2300, 8000);

var mer_t=0;
var revolution_mercury= function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(mer_t) * 1.8;
    name.position.z = radius * Math.sin(mer_t);
    
    mer_t+=diff;
}

var venus_t=0;
var revolution_venus= function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(venus_t) * 1.8;
    name.position.z = radius * Math.sin(venus_t);
    
    venus_t+=diff;
}

var earth_t=0;
var revolution_earth= function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(earth_t) * 1.8;
    name.position.z = radius * Math.sin(earth_t);
    
    earth_t+=diff;
}

var moon_t=0;
var revolution_moon = function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(moon_t) * 1.8;
    name.position.z = radius * Math.sin(moon_t);
    
    moon_t+=diff;
}

var mars_t=0;
var revolution_mars= function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(mars_t) * 1.8;
    name.position.z = radius * Math.sin(mars_t);
    
    mars_t+=diff;
}

var jup_t=0;
var revolution_jup= function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(jup_t) * 1.8;
    name.position.z = radius * Math.sin(jup_t);
    
    jup_t+=diff;
}

var sat_t=0;
var revolution_sat= function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(sat_t) * 1.8;
    name.position.z = radius * Math.sin(sat_t);
    
    sat_t+=diff;
}

var uranus_t=0;
var revolution_uranus= function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(uranus_t) * 1.8;
    name.position.z = radius * Math.sin(uranus_t);
    
    uranus_t+=diff;
}

var nep_t=0;
var revolution_nep= function(radius, delta, name){
    var diff = 2 * Math.PI/delta;
    name.position.x = radius * Math.cos(nep_t) * 1.8;
    name.position.z = radius * Math.sin(nep_t);
    
    nep_t+=diff;
}
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove(event){
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerWidth) * 2 + 1;

}



animate();
function animate(){
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  controls.update();
  mercury.rotation.y +=0.001;
  venus.rotation.y +=0.001;
  earth.rotation.y +=0.001;
  mars.rotation.y +=0.001;
  jupiter.rotation.y +=0.001;
  saturn.rotation.y +=0.001;
  uranus.rotation.y +=0.001;
  neptune.rotation.y +=0.001;
  revolution_mercury(400, 1000, mercury);
  revolution_venus(600, 2000, venus);
  revolution_earth(800, 3000, earth);
  revolution_moon(730, 3000, moon);
  revolution_mars(1020, 4000, mars);
  revolution_jup(1400, 5000, jupiter);
  revolution_sat(1700, 6000, saturn);
  revolution_uranus(2000, 7000, uranus);
  revolution_nep(2300, 8000, neptune);
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects([earth]);
  console.log(intersects);
}





