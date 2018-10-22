var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
controls = new THREE.OrbitControls(camera, renderer.domElement);

var cubeMaterials = [
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/1_dot.png'), side: THREE.DoubleSide }),
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/2_dots.png'), side: THREE.DoubleSide }),
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/3_dots.png'), side: THREE.DoubleSide }),
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/4_dots.png'), side: THREE.DoubleSide }),
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/5_dots.png'), side: THREE.DoubleSide }),
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/6_dots.png'), side: THREE.DoubleSide })
];
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);





var floorGeometry = new THREE.CubeGeometry(5, 1, 5);
var floorMaterial = new THREE.MeshBasicMaterial({ color: '#433F81', side: THREE.DoubleSide, wireframe: true });
var floorCube = new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.y = -2;
scene.add(floorCube);



camera.position.z = 5;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 3.0);
scene.add(ambientLight);

var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

render();