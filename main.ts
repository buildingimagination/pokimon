namespace SpriteKind {
    export const StatusBar = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . 4 . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . . . . . . 4 . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 32, 55)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles16, function (sprite, location) {
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    mySprite.setPosition(8, 45)
    scene.setBackgroundColor(6)
    tiles.setCurrentTilemap(tilemap`Level2`)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
info.startCountdown(20)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . f . . . . . . f . . . . 
    . . . 5 . 5 . . . . 5 . 5 . . . 
    . . . . 5 . 5 . . 5 . 5 . . . . 
    . . . . . f . f f . f . . . . . 
    . . . . 5 5 . . . 5 5 . . . . . 
    . . . . . 5 f . f . 5 . . . . . 
    . . . . 2 5 5 . . 5 5 2 . . . . 
    . . . . 2 f . 5 5 . f 2 . . . . 
    . . . . . 5 f 5 f 5 5 . . f 5 . 
    . . . . . f . . . . f . 5 . . f 
    . . . . . 5 . . . . 5 5 . . 5 . 
    . . . . . f . . . . f . . f . . 
    . . . . . 5 . . . . 5 f 5 . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(29, 27)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite2.setStayInScreen(true)
mySprite.setPosition(0, 36)
mySprite2.follow(mySprite, 0.1)
mySprite2.follow(mySprite)
