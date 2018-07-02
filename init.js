var arrow;
var target;
var world;
var camera;
// var sceneEl = document.getElementById("world");
// console.log(sceneEl);
// var arrowEl = sceneEl.querySelector("#arrow");
var hasShot = false;
var hasPrepared = true;
var lastPosition = new CANNON.Vec3(0, 0, 0);
var currentPosition = new CANNON.Vec3(0, 0, 100);

var keyPressed = false;

AFRAME.registerComponent("listener", {
  tick: function() {
    console.log(this.el.getAttribute("position"));
  }
});

function shootArrow(delta) {
  //   hasShot = true;
  //   hasPrepared = false;
  //   let velocity = currentPosition.vsub(lastPosition).scale(1 / delta);
  // console.log("Velocity:", velocity);
  arrow = camera.removeChild(arrow);
  world.insertBefore(arrow, target);
  arrow.setAttribute("dynamic-body", "mass: 0.5");
  arrow.body.applyForce({ x: 0, y: 0, z: 100 }, { x: 0, y: 0, z: 0 });
  console.log("shot");
  //   arrow.body.applyLocalImpulse(velocity.scale(50), new CANNON.Vec3(0, 0, 100));
}
// dynamic-body="mass: 0.5"

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

window.onload = function() {
  world = document.getElementById("world");
  console.log(world);
  arrow = document.getElementById("arrow");
  console.log(arrow);
  target = document.getElementById("target");
  console.log(target);
  camera = document.getElementById("cam");

  drawTarget(5, 0, 5);

  document.addEventListener("keydown", function(e) {
    if (e.keyCode === 32) {
      if (keyPressed == false) {
        console.log("keydown [SPACE]");
        keyPressed = true;
        pullArrow();
      }
    }
  });

  document.addEventListener("keyup", function(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      console.log("keyup [SPACE]");
      releaseArrow();
      keyPressed = false;
    }
  });
  document.addEventListener("raycaster-intersection", function(e) {
    console.log("Intersection");
    console.log(e.el);
  });
  if (mobileAndTabletcheck() == true) {
    console.log("Mobile browser");
    document.addEventListener("click", function(e) {
      pullArrow();
      releaseArrow();
    });
  } else {
    console.log("Desktop browser");
  }
};

target.el.addEventListener("click", function(evt) {
  console.log(evt.detail.intersection.point);
});

function pullArrow() {
  anim = document.createElement("a-animation");
  anim.setAttribute("attribute", "position");
  anim.setAttribute("from", "-0.11 -0.2 -0.8");
  anim.setAttribute("to", "-0.11 -0.2 0");
  anim.setAttribute("dur", "2000");
  arrow.appendChild(anim);
}

function releaseArrow() {
  anim = document.createElement("a-animation");
  anim.setAttribute("attribute", "position");
  anim.setAttribute("to", "0 -0.2 -100");
  anim.setAttribute("from", "-0.11 -0.2 0");
  anim.setAttribute("dur", "2000");
  arrow.appendChild(anim);
}

function drawTarget(x, y, z) {
  var pos_str = x + " " + y + " " + z;
  target1 = document.createElement("a-cylinder");
  target2 = document.createElement("a-cylinder");
  target3 = document.createElement("a-cylinder");
  target4 = document.createElement("a-cylinder");
  target5 = document.createElement("a-cylinder");

  target1.setAttribute("class", "target");
  target1.setAttribute("position", pos_str);
  target1.setAttribute("rotation", "90 0 0");
  target1.setAttribute("radius", "1");
  target1.setAttribute("height", "0.1");
  target1.setAttribute("color", "#EFEFEF");
  target1.setAttribute("material", "roughness: 0.95");

  target2.setAttribute("radius", "0.8");
  target2.setAttribute("height", "0.15");
  target2.setAttribute("color", "black");

  target3.setAttribute("radius", "0.6");
  target3.setAttribute("height", "0.2");
  target3.setAttribute("color", "blue");

  target4.setAttribute("radius", "0.4");
  target4.setAttribute("height", "0.25");
  target4.setAttribute("color", "yellow");

  target5.setAttribute("radius", "0.2");
  target5.setAttribute("height", "0.3");
  target5.setAttribute("color", "red");

  target4.appendChild(target5);
  target3.appendChild(target4);
  target2.appendChild(target3);
  target1.appendChild(target2);
  world.appendChild(target1);
}
