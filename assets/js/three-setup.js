// ===================================================
//  GENERIC THREE.JS SETUP FOR ALL PAGES
// ===================================================

function createScene(canvasId) {
    const container = document.getElementById(canvasId);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    return { scene, camera, renderer };
}

function animateObjects(renderer, scene, camera, animateFn) {
    function animate() {
        requestAnimationFrame(animate);
        animateFn();
        renderer.render(scene, camera);
    }
    animate();
}
