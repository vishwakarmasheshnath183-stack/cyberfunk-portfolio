// ===================================================
//  ANIMATIONS FOR EACH PAGE
// ===================================================

// Float cubes, rotating cyber particles, glow grid

function floatingCubes(scene) {
    const cubes = [];

    for (let i = 0; i < 20; i++) {
        const geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const mat = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            wireframe: true
        });

        const cube = new THREE.Mesh(geo, mat);

        cube.position.x = (Math.random() - 0.5) * 8;
        cube.position.y = (Math.random() - 0.5) * 5;
        cube.position.z = (Math.random() - 0.5) * 6;

        cubes.push(cube);
        scene.add(cube);
    }

    return cubes;
}

function animateCubes(cubes) {
    cubes.forEach(c => {
        c.rotation.x += 0.01;
        c.rotation.y += 0.01;
    });
}

// ================================
//   APPLY TO EACH PAGE
// ================================

// HOME
if (document.getElementById("three-background")) {
    const { scene, camera, renderer } = createScene("three-background");
    const cubes = floatingCubes(scene);

    animateObjects(renderer, scene, camera, () => {
        animateCubes(cubes);
    });
}

// ABOUT
if (document.getElementById("three-bg-about")) {
    const { scene, camera, renderer } = createScene("three-bg-about");
    const cubes = floatingCubes(scene);

    animateObjects(renderer, scene, camera, () => {
        animateCubes(cubes);
    });
}

// SKILLS
if (document.getElementById("three-bg-skills")) {
    const { scene, camera, renderer } = createScene("three-bg-skills");
    const cubes = floatingCubes(scene);

    animateObjects(renderer, scene, camera, () => {
        animateCubes(cubes);
    });
}

// PROJECTS
if (document.getElementById("three-bg-projects")) {
    const { scene, camera, renderer } = createScene("three-bg-projects");
    const cubes = floatingCubes(scene);

    animateObjects(renderer, scene, camera, () => {
        animateCubes(cubes);
    });
}

// CONTACT
if (document.getElementById("three-bg-contact")) {
    const { scene, camera, renderer } = createScene("three-bg-contact");
    const cubes = floatingCubes(scene);

    animateObjects(renderer, scene, camera, () => {
        animateCubes(cubes);
    });
}
