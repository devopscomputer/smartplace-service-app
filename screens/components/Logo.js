import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

const Logo = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          overflow: hidden;
          background:rgb(255, 255, 255);
        }

        #instructions {
          position: absolute;
          color: #fff;
          bottom: 0;
          padding-bottom: 6px;
          font-family: sans-serif;
          width: 100%;
          text-align: center;
          pointer-events: none;
        }
      </style>
    </head>
    <body>
      <div id="three-container"></div>
     

      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r75/three.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/bas.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/TextGeometry.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/FontUtils.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/pnltri.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/droid_sans_bold.typeface.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>

      <script>
      ${`window.onload = init;

function init() {
  var root = new THREERoot({
    createCameraControls:false,
    antialias: true,
    fov:60
  });

  root.renderer.setClearColor(0xFFFFFF); // Fundo branco

  root.renderer.setPixelRatio(window.devicePixelRatio || 1);
  root.camera.position.set(0, 0, 400);

  var textAnimation = createTextAnimation();
  textAnimation.position.y = -10;
  root.scene.add(textAnimation);

  var tl = new TimelineMax({
    repeat:-1,
    repeatDelay:0.25,
    yoyo:true
  });
  tl.fromTo(textAnimation, 4,
    {animationProgress:0.0},
    {animationProgress:1.0, ease:Power1.easeInOut},
    0
  );

  createTweenScrubber(tl);
}

function createTextAnimation() {
  var geometry = generateTextGeometry('smartplace', {
    size:26,
    height:0,
    font:'droid sans',
    weight:'bold',
    style:'normal',
    anchor:{x:0.5, y:0.5, z:0.0}
  });

  THREE.BAS.Utils.separateFaces(geometry);

  return new TextAnimation(geometry);
}

function generateTextGeometry(text, params) {
  var geometry = new THREE.TextGeometry(text, params);
  geometry.computeBoundingBox();

  geometry.userData = {};
  geometry.userData.size = {
    width: geometry.boundingBox.max.x - geometry.boundingBox.min.x,
    height: geometry.boundingBox.max.y - geometry.boundingBox.min.y,
    depth: geometry.boundingBox.max.z - geometry.boundingBox.min.z
  };

  var anchorX = geometry.userData.size.width * -params.anchor.x;
  var anchorY = geometry.userData.size.height * -params.anchor.y;
  var anchorZ = geometry.userData.size.depth * -params.anchor.z;
  var matrix = new THREE.Matrix4().makeTranslation(anchorX, anchorY, anchorZ);

  geometry.applyMatrix(matrix);
  return geometry;
}

function TextAnimation(textGeometry) {
  var bufferGeometry = new THREE.BAS.ModelBufferGeometry(textGeometry);

  var aAnimation = bufferGeometry.createAttribute('aAnimation', 2);
  var aCentroid = bufferGeometry.createAttribute('aCentroid', 3);
  var aControl0 = bufferGeometry.createAttribute('aControl0', 3);
  var aControl1 = bufferGeometry.createAttribute('aControl1', 3);
  var aEndPosition = bufferGeometry.createAttribute('aEndPosition', 3);

  var faceCount = bufferGeometry.faceCount;
  var i, i2, i3, i4, v;
  var size = textGeometry.userData.size;

  var maxDelayX = 2.0;
  var maxDelayY = 0.25;
  var minDuration = 2;
  var maxDuration = 8;
  var stretch = 0.25;

  this.animationDuration = maxDelayX + maxDelayY + maxDuration - 3;
  this._animationProgress = 0;

  for (i = 0, i2 = 0, i3 = 0, i4 = 0; i < faceCount; i++, i2 += 6, i3 += 9, i4 += 12) {
    var face = textGeometry.faces[i];
    var centroid = THREE.BAS.Utils.computeCentroid(textGeometry, face);
    var delayX = Math.max(0, (centroid.x / size.width) * maxDelayX);
    var delayY = Math.max(0, (1.0 - (centroid.y / size.height)) * maxDelayY);
    var duration = THREE.Math.randFloat(minDuration, maxDuration);

    for (v = 0; v < 6; v += 2) {
      aAnimation.array[i2 + v] = delayX + delayY + Math.random() * stretch;
      aAnimation.array[i2 + v + 1] = duration;
    }

    for (v = 0; v < 9; v += 3) {
      aCentroid.array[i3 + v] = centroid.x;
      aCentroid.array[i3 + v + 1] = centroid.y;
      aCentroid.array[i3 + v + 2] = centroid.z;
    }

    var c0x = centroid.x + THREE.Math.randFloat(40, 120);
    var c0y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
    var c0z = THREE.Math.randFloatSpread(120);

    var c1x = centroid.x - THREE.Math.randFloat(80, 120);
    var c1y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
    var c1z = THREE.Math.randFloatSpread(120);

    for (v = 0; v < 9; v += 3) {
      aControl0.array[i3 + v] = c0x;
      aControl0.array[i3 + v + 1] = c0y;
      aControl0.array[i3 + v + 2] = c0z;

      aControl1.array[i3 + v] = c1x;
      aControl1.array[i3 + v + 1] = c1y;
      aControl1.array[i3 + v + 2] = c1z;
    }

    var x = centroid.x + THREE.Math.randFloatSpread(120);
    var y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
    var z = THREE.Math.randFloat(-20, 20);

    for (v = 0; v < 9; v += 3) {
      aEndPosition.array[i3 + v] = x;
      aEndPosition.array[i3 + v + 1] = y;
      aEndPosition.array[i3 + v + 2] = z;
    }
  }

  var material = new THREE.BAS.BasicAnimationMaterial({
    shading: THREE.FlatShading,
    side: THREE.DoubleSide,
    transparent: true,
    uniforms: {
      uTime: { type: 'f', value: 0 }
    },
    shaderFunctions: [
      THREE.BAS.ShaderChunk['cubic_bezier'],
      THREE.BAS.ShaderChunk['ease_out_cubic']
    ],
    shaderParameters: [
      'uniform float uTime;',
      'attribute vec2 aAnimation;',
      'attribute vec3 aCentroid;',
      'attribute vec3 aControl0;',
      'attribute vec3 aControl1;',
      'attribute vec3 aEndPosition;'
    ],
    shaderVertexInit: [
      'float tDelay = aAnimation.x;',
      'float tDuration = aAnimation.y;',
      'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
      'float tProgress = ease(tTime, 0.0, 1.0, tDuration);'
    ],
    shaderTransformPosition: [
      'vec3 tPosition = transformed - aCentroid;',
      'tPosition *= 1.0 - tProgress;',
      'tPosition += aCentroid;',
      'tPosition += cubicBezier(tPosition, aControl0, aControl1, aEndPosition, tProgress);',
      'transformed = tPosition;'
    ]
  }, {
    diffuse: 0x130FFF
  });

  THREE.Mesh.call(this, bufferGeometry, material);
  this.frustumCulled = false;
}
TextAnimation.prototype = Object.create(THREE.Mesh.prototype);
TextAnimation.prototype.constructor = TextAnimation;

Object.defineProperty(TextAnimation.prototype, 'animationProgress', {
  get: function () {
    return this._animationProgress;
  },
  set: function (v) {
    this._animationProgress = v;
    this.material.uniforms['uTime'].value = this.animationDuration * v;
  }
});

function THREERoot(params) {
  params = utils.extend({
    antialias: false,
    fov: 60,
    zNear: 1,
    zFar: 10000,
    createCameraControls: true
  }, params);

  this.renderer = new THREE.WebGLRenderer({ antialias: params.antialias });
  document.getElementById('three-container').appendChild(this.renderer.domElement);

  this.camera = new THREE.PerspectiveCamera(
    params.fov,
    window.innerWidth / window.innerHeight,
    params.zNear,
    params.zfar
  );

  this.scene = new THREE.Scene();

  if (params.createCameraControls) {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  }

  this.resize = this.resize.bind(this);
  this.tick = this.tick.bind(this);

  this.resize();
  this.tick();

  window.addEventListener('resize', this.resize, false);
}
THREERoot.prototype = {
  tick: function () {
    this.update();
    this.render();
    requestAnimationFrame(this.tick);
  },
  update: function () {
    this.controls && this.controls.update();
  },
  render: function () {
    this.renderer.render(this.scene, this.camera);
  },
  resize: function () {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
};

var utils = {
  extend: function (dst, src) {
    for (var key in src) {
      dst[key] = src[key];
    }
    return dst;
  },
  randSign: function () {
    return Math.random() > 0.5 ? 1 : -1;
  }
};

function createTweenScrubber(tween, seekSpeed) {
  seekSpeed = seekSpeed || 0.001;

  function stop() {
    TweenMax.to(tween, 2, { timeScale: 0 });
  }

  function resume() {
    TweenMax.to(tween, 2, { timeScale: 1 });
  }

  function seek(dx) {
    var progress = tween.progress();
    var p = THREE.Math.clamp((progress + (dx * seekSpeed)), 0, 1);
    tween.progress(p);
  }

  var _cx = 0;
  var mouseDown = false;
  document.body.style.cursor = 'pointer';

  window.addEventListener('mousedown', function (e) {
    mouseDown = true;
    document.body.style.cursor = 'ew-resize';
    _cx = e.clientX;
    stop();
  });
  window.addEventListener('mouseup', function () {
    mouseDown = false;
    document.body.style.cursor = 'pointer';
    resume();
  });
  window.addEventListener('mousemove', function (e) {
    if (mouseDown === true) {
      var cx = e.clientX;
      var dx = cx - _cx;
      _cx = cx;
      seek(dx);
    }
  });

  window.addEventListener('touchstart', function (e) {
    _cx = e.touches[0].clientX;
    stop();
    e.preventDefault();
  });
  window.addEventListener('touchend', function (e) {
    resume();
    e.preventDefault();
  });
  window.addEventListener('touchmove', function (e) {
    var cx = e.touches[0].clientX;
    var dx = cx - _cx;
    _cx = cx;
    seek(dx);
    e.preventDefault();
  });
}
`}
      </script>
    </body>
    </html>
  `;

  return (
    <Container>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={StyleSheet.absoluteFill}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        scalesPageToFit={false}
        scrollEnabled={false}
      />
    </Container>
  );
};

export default Logo;
