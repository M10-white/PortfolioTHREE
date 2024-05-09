import * as THREE from 'three'
import GLTFLoader from 'gltfloader'
 
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xCCCCCC) 

const camera = new THREE.PerspectiveCamera(70, iw / ih)

const geometry = await GLTFLoader.loadGeometry('assets/characters/bibi.glb')
const texture = await GLTFLoader.loadTexture('assets/characters/bibi.png')
const material = new THREE.MeshPhongMaterial({ map: texture, roughness: 0.5, metalness: 0.5 })
material.ambient = new THREE.Color(0xFFFFFF)

const ambientLight = new THREE.AmbientLight(0x404040)// Lumière ambiante

const mesh = new THREE.Mesh(geometry, material)

const light = new THREE.PointLight(0xffffff)

const dialogGeometry = new THREE.BoxGeometry(15, 0.5, 1)
const dialogMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
const dialogMesh = new THREE.Mesh(dialogGeometry, dialogMaterial)

const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load('assets/images/map.jpg');
const backgroundGeometry = new THREE.PlaneGeometry(13, 13, 5);
const backgroundMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture });
const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);

backgroundMesh.position.z = -1;

// Ajoutez le maillage à la scène
scene.add(backgroundMesh);
scene.add(light)
scene.add(mesh)
scene.add(ambientLight)
scene.add(dialogMesh)

dialogMesh.position.set(0, 0.1, 0)
camera.position.set(0, 2.5, 3)
light.position.set(0, 1, 1)

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



//  A FAIRE PROCHAINEMENT
//  - AGRANDIR LES BOXS DE DIALOGUES POUR MIEUX INTEGRER LE BOUTON
//  - QUAND TOUT LES TEXTES SONT PASSER ET QUE LA BOITE DE DIALOGUES A DISPARU
//    LE SPRIT DOIT SE DEPLACER VERS LA GAUCHE ET FAIRE PLACE A LA PROCHAINE IDEE
