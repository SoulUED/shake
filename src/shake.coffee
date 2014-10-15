shake =
  range: 800,

  lastX: 0,

  lastY: 0,

  lastZ: 0,

  lastUpdate: 0,

  shakeIng: true,

  shakeHandle: (e) ->
    rotation = e.accelerationIncludingGravity;
    curlTime = new Date().getTime();
    diffTime = curlTime - shake.lastUpdate;

    if (shake.shakeIng)
      if (diffTime > 100)
        shake.lastUpdate = curlTime;
        x = rotation.x;
        y = rotation.y;
        z = rotation.z;

        speed = Math.abs(x + y + z - shake.lastX - shake.lastY - shake.lastZ);
        speed = (speed/diffTime)*10000;

        if (speed > shake.range)
          shake.shakeIng = false;
          console.log shake.shakeIng;
          shake.callback();

        shake.lastX = x;
        shake.lastY = y;
        shake.lastZ = z;

    return;

  addListener: (callback) ->
    @.callback = callback;
    window.addEventListener "devicemotion", @.shakeHandle, false;

    return;

  removeListener: ->
    window.removeEventListener "devicemotion", @.shakeHandle, false;
    return;

  recoverListener: ->
    window.addEventListener "devicemotion", @.shakeHandle, false;

shake.addListener ->
  document.body.style.background = "red";
  document.getElementById("X").innerText += "  a:aa  ";
  setTimeout ->
    shake.shakeIng = true;
  , 5000;
  return;
