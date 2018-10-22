var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
controls = new THREE.OrbitControls(camera, renderer.domElement);


// big wire frame cube
var floorGeometry = new THREE.CubeGeometry(5, 5, 5);
var floorMaterial = new THREE.MeshBasicMaterial({ color: '#433F81', side: THREE.DoubleSide, wireframe: true });
var bigCube = new THREE.Mesh(floorGeometry, floorMaterial);
bigCube.position.y = -0.25;
scene.add(bigCube);

// ring buffers
var cube = createTexturedCube(0);
var cube2 = createTexturedCube(-45);
var cube3 = createTexturedCube(-125);
scene.add(cube);
scene.add(cube2);
scene.add(cube3);
scene.add(createRingBuffer(-7, '#66656d'));
scene.add(createRingBuffer(-15, '#52515b'));
scene.add(createRingBuffer(-25, '#3f3e47'));
scene.add(createRingBuffer(-35, '#2c2b33'));
scene.add(createRingBuffer(-45, '#17171c'));
scene.add(createRingBuffer(-55, '#66656d'));
scene.add(createRingBuffer(-65, '#52515b'));
scene.add(createRingBuffer(-75, '#3f3e47'));
scene.add(createRingBuffer(-85, '#2c2b33'));
scene.add(createRingBuffer(-95, '#17171c'));
scene.add(createRingBuffer(-105, '#3f3e47'));
scene.add(createRingBuffer(-115, '#2c2b33'));
scene.add(createRingBuffer(-125, '#17171c'));

function createTexturedCube(zPosition) {
    // small cube with textured faces
    var smallCubeMaterials = [
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/1_dot.png'), side: THREE.DoubleSide }),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/2_dots.png'), side: THREE.DoubleSide }),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/3_dots.png'), side: THREE.DoubleSide }),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/4_dots.png'), side: THREE.DoubleSide }),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/5_dots.png'), side: THREE.DoubleSide }),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/6_dots.png'), side: THREE.DoubleSide })
    ];
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshFaceMaterial(smallCubeMaterials);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.z = zPosition;
    return cube;
}
function createRingBuffer(zPosition, color) {
    var ringBufferGeometry = new THREE.RingBufferGeometry(1, 5, 32);
    var ringBufferMaterial = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
    var ringBufferMesh = new THREE.Mesh(ringBufferGeometry, ringBufferMaterial);
    ringBufferMesh.position.z = zPosition;
    return ringBufferMesh;
}

camera.position.z = 7;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 3.0);
scene.add(ambientLight);

var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += Math.random() / 70;
    cube.rotation.y += Math.random() / 70;
    bigCube.rotation.x -= Math.random() / 70;
    bigCube.rotation.y -= Math.random() / 70;
    setTimeout(() => {
        camera.position.z -= 0.5
    }, 5000)
    renderer.render(scene, camera);
};

render();