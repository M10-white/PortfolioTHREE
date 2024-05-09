import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70, iw/ih)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const texture = new THREE.TextureLoader().load('assets/images/stone.jpg')
const material = new THREE.MeshPhongMaterial({map: texture})
const cube = new THREE.Mesh(geometry, material)

const light = new THREE.PointLight(0xeeeeee)

scene.add(cube)
scene.add(light)

camera.position.set(0, 0, 3)
light.position.set(0, 0, 3)


const renderer = new THREE.WebGLRenderer({canvas})

window.addEventListener('resize', handleWindowResize);

handleWindowResize();

loop()

function loop() {
    requestAnimationFrame(loop)
    renderer.render(scene, camera)
}

function handleWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}




