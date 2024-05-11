import * as THREE from 'three'
import GLTFLoader from 'gltfloader'
 
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xCCCCCC) 

const camera = new THREE.PerspectiveCamera(70, iw / ih)

const geometry = await GLTFLoader.loadGeometry('assets/characters/bibi.glb')
const texture = await GLTFLoader.loadTexture('assets/characters/bibi.png')
const material = new THREE.MeshPhongMaterial({ map: texture, roughness: 0.5, metalness: 0.5 })
material.ambient = new THREE.Color(0xFFFFFF)

const ambientLight = new THREE.AmbientLight(0xFFFFFF)// Lumière ambiante

const mesh = new THREE.Mesh(geometry, material)

const light = new THREE.PointLight(0xffffff)
const textureLoader = new THREE.TextureLoader();

const dialogGeometry = new THREE.BoxGeometry(15, 0.5, 1)
const dialogueTexture = textureLoader.load('assets/images/sand.png')
const dialogMaterial = new THREE.MeshPhongMaterial({ map: dialogueTexture, roughness: 0.5, metalness: 0.5 })
dialogMaterial.ambient = new THREE.Color(0xFFFFFF)
const dialogMesh = new THREE.Mesh(dialogGeometry, dialogMaterial)

const backgroundTexture = textureLoader.load('assets/images/map.png');
const backgroundGeometry = new THREE.PlaneGeometry(13, 6, 5);
const backgroundMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture })
const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial)

// Ajout scène
scene.add(backgroundMesh)
scene.add(light)
scene.add(mesh)
scene.add(ambientLight)
scene.add(dialogMesh)

mesh.rotation.y += Math.PI

backgroundMesh.position.set(0, 2.5, -1)
mesh.position.set(0, 0, 0) 
dialogMesh.position.set(0, 0.1, 0)
camera.position.set(0, 2.5, 3)
light.position.set(0, 0, 0)
ambientLight.position.set(0, 1, 1)

const renderer = new THREE.WebGLRenderer({ canvas })

let t = 0
const clock = new THREE.Clock()

window.addEventListener('resize', handleWindowResize)

handleWindowResize()

loop()

function loop() {
  t += clock.getDelta()
  mesh.morphTargetInfluences[0] = Math.abs(Math.cos(t))
  //mesh.rotation.y = Math.cos(t/2)
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}

function handleWindowResize() {
    const width = window.innerWidth
    const height = window.innerHeight
    
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
}

setTimeout(() => {
  mesh.rotation.y += Math.PI
}, 13000)


//  A FAIRE PROCHAINEMENT
//  - QUAND TOUT LES TEXTES SONT PASSER ET QUE LES BOITE DE DIALOGUES ONT DISPARU
//    AFFICHER 2 BOUTONS "oui" et "non"
//  - IDEE D'AJOUT DE MUSIQUE
//  - CHANGER LE PORTAIL COMPLETEMENT

