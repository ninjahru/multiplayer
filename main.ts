let player1: Sprite = null
let player2: Sprite = null
let snack:Sprite = null 
let icescream:Sprite = null 

scene.setBackgroundColor(7)
info.setScore(0)
info.player2.setScore(0)
info.setLife(12)
info.player2.setLife(12)
icescream  = sprites.create(img`
    . . . . . 3 3 b 3 3 d d 3 3 . .
    . . . . 3 1 1 d 3 d 1 1 1 1 3 .
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3
    . 3 1 1 d 1 1 1 1 d d 1 1 b . .
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 .
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 .
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 .
    . 4 4 d 1 1 1 1 1 1 d d d b b .
    . 4 d b d 1 1 1 1 1 1 1 1 3 . .
    4 d d 5 b d 1 1 1 1 1 1 1 3 . .
    4 5 d 5 5 b b d 1 1 1 1 d 3 . .
    4 5 5 d 5 5 d b b b d d 3 . . .
    4 5 5 5 d d d d 4 4 b 3 . . . .
    . 4 5 5 5 4 4 4 . . . . . . . .
    . . 4 4 4 . . . . . . . . . . .
`,SpriteKind.Enemy)

player1 = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`,SpriteKind.Player)
player1.setPosition(20, 20)
controller.moveSprite(player1)
player1.setFlag(SpriteFlag.StayInScreen, true)

player2 = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`,SpriteKind.Player)
player2.setPosition(100, 50)
controller.player2.moveSprite(player2)
player2.setFlag(SpriteFlag.StayInScreen, true)

snack = sprites.create(img`
    . . . . . . . 6 . . . . . . . .
    . . . . . . 8 6 6 . . . 6 8 . .
    . . . e e e 8 8 6 6 . 6 7 8 . .
    . . e 2 2 2 2 e 8 6 6 7 6 . . .
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
    e 2 2 2 2 2 2 2 4 e 2 e e c . .
    e e 2 e 2 2 4 2 2 e e e c . . .
    e e e e 2 e 2 2 e e e c . . . .
    e e e 2 e e c e c c c . . . . .
    . c c c c c c c . . . . . . . .
`,SpriteKind.Food)
snack.setPosition(70, 95)



sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    
    if (sprite == player1) {
        info.changeScoreBy(1)
    }

     if (sprite == player2) {
       info.player2.changeScoreBy(1)
    }

    
    

    if (info.score() > 4) {
        player2.destroy()
    }

    if (info.player2.score() > 4) {
        player1.destroy()
    }

    otherSprite.setPosition(Math.randomRange(20,110), Math.randomRange(20,110))

})


let cooldown = true


game.onUpdateInterval(2000, function() {
    icescream.setPosition(Math.randomRange(0,150), 0)
    icescream.setVelocity(0, 50)
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
         
        if (cooldown) {
            info.changeScoreBy(-1)
            info.player2.changeLifeBy(-1)

            cooldown = false
            info.changeLifeBy(-1)
            pause(4000)
        }
        cooldown = true 
        
    })


})