AFRAME.registerComponent("bowarrow", {
  schema: {
    arrowTemplate: { default: "#arrow-template" },
    triggerKeyCode: { default: 32 } //spacebar
  },

  init: function() {
    var that = this;
    document.body.onkeyup = function(e) {
      if (e.keyCode == that.data.triggerKeyCode) {
        that.shoot();
      }
    };
  },

  shoot: function() {
    this.createArrow();
  },

  createArrow: function() {
    var el = document.createElement("a-entity");
    el.setAttribute("remove-in-seconds", 5);
    el.setAttribute("forward", "speed:0.1");

    var tip = document.querySelector("#cam");
    el.setAttribute("position", this.getInitialArrowPosition(tip));
    el.setAttribute("rotation", this.getInitialArrowRotation(tip));

    var scene = document.querySelector("a-scene");
    scene.appendChild(el);
  },

  getInitialArrowPosition: function(spawnerEl) {
    var position = spawnerEl.getAttribute("position");
    var worldPosition = new THREE.Vector3();
    worldPosition.setFromMatrixPosition(spawnerEl.object3D.matrixWorld);
    return worldPosition;
  },
  getInitialArrowRotation: function(spawnerEl) {
    var worldDirection = new THREE.Vector3();
    spawnerEl.object3D.getWorldDirection(worldDirection);
    this.vec3RadToDeg(worldDirection);
    return worldDirection;
  },
  vec3RadToDeg: function(rad) {
    rad.set(
      rad.y * 90,
      -90 + -THREE.Math.radToDeg(Math.atan2(rad.z, rad.x)),
      0
    );
  }
});

AFRAME.registerComponent("forward", {
  schema: {
    speed: { default: 0.1 }
  },

  init: function() {
    var worldDirection = new THREE.Vector3();

    this.el.object3D.getWorldDirection(worldDirection);
    worldDirection.multiplyScalar(-1);

    this.worldDirection = worldDirection;
    console.error(this.worldDirection);
  },

  tick: function() {
    var el = this.el;

    var currentPosition = el.getAttribute("position");
    var newPosition = this.worldDirection
      .clone()
      .multiplyScalar(this.data.speed)
      .add(currentPosition);
    el.setAttribute("position", newPosition);
  }
});

AFRAME.registerComponent("remove-in-seconds", {
  schema: {
    default: 1
  },

  init: function() {
    setTimeout(this.destroy.bind(this), this.data * 1000);
  },

  destroy: function() {
    var el = this.el;
    el.parentNode.removeChild(el);
  }
});

AFRAME.registerComponent("spawn-in-circle", {
  schema: {
    radius: { type: "number", default: 1 }
  },

  init: function() {
    var el = this.el;
    var center = el.getAttribute("position");

    var angleRad = this.getRandomAngleInRadians();
    var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
    var worldPoint = {
      x: circlePoint.x + center.x,
      y: center.y,
      z: circlePoint.y + center.z
    };
    el.setAttribute("position", worldPoint);

    var angleDeg = (angleRad * 180) / Math.PI;
    var angleToCenter = -1 * angleDeg + 90;
    var rotationStr = "0 " + angleToCenter + " 0";
    el.setAttribute("rotation", rotationStr);
  },

  getRandomAngleInRadians: function() {
    return Math.random() * Math.PI * 2;
  },

  randomPointOnCircle: function(radius, angleRad) {
    var x = Math.cos(angleRad) * radius;
    var y = Math.sin(angleRad) * radius;
    return { x: x, y: y };
  }
});
