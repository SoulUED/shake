shake =
  timeInterval: 0,

  range: 5,

  interval: 0,

  shakeIng: true,

  shakeHandle: (e) ->
    rotation = e.acceleration;
    shake.interval += e.interval;
    if shake.interval > shake.timeInterval
      range =  parseInt rotation.x + parseInt rotation.y + parseInt rotation.z;
      range = Math.round(range);
      shake.interval = 0;

      if range > shake.range && shake.shakeIng
        shake.shakeIng = false;
        shake.callback();
        shake.shakeIng = true;

    return;

  addListener: (callback) ->
    @.callback = callback;
    window.addEventListener "devicemotion", @.shakeHandle, false;

    return;

  removeListener: ->
    window.removeEventListener "devicemotion", @.shakeHandle, false;

    return;

shake.addListener ->
  document.getElementById("X").innerText += "a:";
  return;
