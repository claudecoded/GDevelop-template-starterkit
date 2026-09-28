// Metadata: Attach this script to a Platformer Character behavior
// Ensure the object has the default PlatformerObject behavior named "PlatformerObject"

const player = runtimeScene.getObjects("Player")[0];
if (!player) return;

const platformerBehavior = player.getBehavior("PlatformerObject");

// Custom variables tracking states
let variables = player.getVariables();
let maxJumps = 2;
let currentJumps = variables.get("CurrentJumps").getAsNumber();
let isWallSliding = false;

// 1. Double Jump Logic
if (platformerBehavior.isOnFloor()) {
    variables.get("CurrentJumps").setNumber(0);
}

// Trigger this section only on "Jump" key pressed down (e.g., Spacebar)
if (runtimeScene.getGame().getInputManager().isKeyPressed(32)) { // 32 is Spacebar
    if (platformerBehavior.isOnFloor()) {
        platformerBehavior.simulateJumpKey();
        variables.get("CurrentJumps").setNumber(1);
    } else if (currentJumps < maxJumps && !platformerBehavior.isActionSimulated("Jump")) {
        platformerBehavior.simulateJumpKey();
        variables.get("CurrentJumps").setNumber(currentJumps + 1);
    }
}

// 2. Wall Slide Logic
// Checks if player is falling, against a wall, and pressing towards it
if (!platformerBehavior.isOnFloor() && platformerBehavior.isCollictingWithWall()) {
    let movingLeft = runtimeScene.getGame().getInputManager().isKeyPressed(37); // Left Arrow
    let movingRight = runtimeScene.getGame().getInputManager().isKeyPressed(39); // Right Arrow
    
    if (movingLeft || movingRight) {
        isWallSliding = true;
        // Cap the falling speed to simulate friction against the wall
        if (platformerBehavior.getCurrentSpeedY() > 100) {
            platformerBehavior.setSpeedY(100);
        }
    }
} else {
    isWallSliding = false;
}
