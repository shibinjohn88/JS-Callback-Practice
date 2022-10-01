function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  function moveWithArrowKeys(left, bottom, directionChange) {
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + "px";
    element.style.bottom = y + "px";

    // change value of x and y based on direction
    function moveCharacter() {
      if (direction === "west") {
        x -= 1;
      }
      if (direction === "north") {
        y += 1;
      }
      if (direction === "east") {
        x += 1;
      }
      if (direction === "south") {
        y -= 1;
      }
      element.style.left = x + "px";
      element.style.bottom = y + "px";
    }

    // call the function passed every 1 ms
    setInterval(moveCharacter, 1);

    // event listener when key is pressed
    document.addEventListener("keydown", function (e) {
      if (e.repeat) return;

      if (e.key === "ArrowLeft") {
        direction = "west";
      }
      if (e.key === "ArrowUp") {
        direction = "north";
      }
      if (e.key === "ArrowRight") {
        direction = "east";
      }
      if (e.key === "ArrowDown") {
        direction = "south";
      }
      if (typeof(directionChange) === 'function') {
        directionChange(direction);
      }
        
    });

    // event listener when key is released
    document.addEventListener("keyup", function (e) {
      direction = null;
      directionChange(direction);
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
