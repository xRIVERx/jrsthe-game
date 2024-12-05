enum SpriteKindLegacy {
    Player,
    Projectile,
    Enemy,
    Food,
    Object
}
namespace SpriteKind {
    export const ACE = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart == true) {
        greenLaser = sprites.createProjectileFromSprite(assets.image`GreenLaser`, tie, 0, -140)
        greenLaser.startEffect(effects.coolRadial, 100)
        music.playTone(932, music.beat(BeatFraction.Sixteenth))
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        music.playTone(784, music.beat(BeatFraction.Sixteenth))
    }
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKindLegacy.Projectile, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
})
let DeathStar: Sprite = null
let textBaron: TextSprite = null
let textDoubleAce: TextSprite = null
let textAce: TextSprite = null
let projectile: Sprite = null
let EnemyFire: Sprite = null
let greenLaser: Sprite = null
let tie: Sprite = null
let gameStart = false
gameStart = false
music.spooky.play()
effects.blizzard.startScreenEffect()
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffff111111111111111ffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffff1111111111111111111ffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff11111111111111111111111fffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff111111111111111111111111111fffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffff1111111111111111111111111111111ffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffff111111111111111111111111111111111fffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff11111111111111111111111111111111111fffffffffffffffff111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff1111111111111111111111111111111111111fffffffffffffffff111ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffff111111111111111111111111111111111111111ffffffffffffffffff11fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffff11111111111111111111111111111111111111111ffffffffffffffffff11ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffff11111111111111111111111111111111111111111fffffffffffffffffff11fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11fffffffffffffffffff1111111111111111111111111111111111111111111fffffffffffffffffff11ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff1111111111111111111111111111111111111111111ffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff11fffffffffffffffffff111111111111111111111111111111111111111111111fffffffffffffffffff11fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff11ffffffffffffffffffff111111111111111111111111111111111111111111111ffffffffffffffffffff11ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff11ffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffff11fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffffffffff1fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11ffffffffffffffffffff1111111111111111111111111111111111111111111111111ffffffffffffffffffff11ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11fffffffffffffffffffff1111111111fffffff111111111111111fffffff1111111111fffffffffffffffffffff11fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff111111111fffffffff1111111111111fffffffff111111111ffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff11ffffffffffffffffffffff11111111fffffffffff11111111111fffffffffff11111111ffffffffffffffffffffff11ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff11fffffffffffffffffffffff11111111fffffffffff11111111111fffffffffff11f11111fffffffffffffffffffffff11fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff11111111fffffffffff11111111111fffffffffff11f11111ffffffffffffffffffffffff1fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff11ffffffffffffffffffffffff1111ff11fffffffffff11111111111fffffffffff1ff11111ffffffffffffffffffffffff11ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1fffffffffffffffffffffffff11111f11fffffffffff11111111111fffffffffff1f111111fffffffffffffffffffffffff1ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff11fffffffffffffffffffffffff11111f11fffffffffff11111111111fffffffffff1f111111fffffffffffffffffffffffff11fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff11111f11fffffffffff11111111111fffffffffff1f111111ffffffffffffffffffffffffff1fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff11111ff11fffffffff1111111111111fffffffff11f111111ffffffffffffffffffffffffff1fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff11ffffffffffffffffffffffffff111111f111fffffff111111111111111fffffff111ff11111ffffffffffffffffffffffffff11ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffff111111f111111111111111111111111111111111111f11111fffffffffffffffffffffffffff1ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff11fffffffffffffffffffffffffff111111f111111111111111ff1ff1111111111111111ff1111fffffffffffffffffffffffffff11fffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff11111ff111111111111111ff1fff1111111111111111ffff1ffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff111111111111111ffffffff1111111111111111111fffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff11111111111111111111fff11fff1111111111111111111fffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    fffffffffffffffffffffffffff11ffffffffffffffffffffffffffffff111111111111111111ffff11ffff11111111111111111ffffffffffffffffffffffffffffff11ffffffffffffffffffffffff
    fffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff111111111111111111fff111ffff11111111111111111fffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
    fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff11111111111111111fff1111fff1111111111111111ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
    fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff11111111111111111fff1111fff1111111111111111ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
    ffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffff11fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1fff11111f1111111111111f11111111111111fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff11111f1111111f11111ff11111111ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff111111111111f1111111f1111111ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff111ff111ff1111111111111ff111ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff111ff111ff111ff111ff111ff111ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff111ff111ff111ff111ff111ffff11ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff111ff111ff111ff111ff111ffff11fffffffffffffffffffffffffff11111ffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffff11111fffffffffffffffffffffffff11ff111ff11111111f11111ff111fffffffffffffffffffffffffff11111ffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffff11111fffffffffffffffffffffffff111f11111111111111111111111ffffffffffffffffffffffffffff11111ffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffff11111ffffffffffffffffffffffffff1111111111111111111111111fffffffffffffffffffffffffffff11111ffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffff11111111fffffffffffffffffffffff1111111111111111111111111ffffffffffffffffffffffffffff11111111ffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffff11111111111ffffffffffffffffffffff11111111111111111111111fffffffffffffffffffffffff111111111111ffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffff11fffffffff11111111111111ffffffffffffffffffff111111111111111111111fffffffffffffffffffffff111111111111111fffff11fffffffffffffffffffffff
    fffffffffffffffffffffffffff1fffffffff111111111111111111fffffffffffffffff1111111111111111111ffffffffffffffffffff1111111111111111111fffff1ffffffffffffffffffffffff
    fffffffffffffffffffffffffff1fffffffff1111111111111111111111fffffffffffffff111111111111111fffffffffffffffffff1111111111111ffff11111fffff1ffffffffffffffffffffffff
    fffffffffffffffffffffffffff1fffffffff11111fffffff1111111111111ffffffffffffff11111111111fffffffffffffffff1111111111111ffffffffffffffffff1ffffffffffffffffffffffff
    fffffffffffffffffffffffffff11ffffffffffffffffffffffff1111111111111fffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffff11ffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffff111111111111ffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff111111111111fffffffffffffff111111111111fffffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffff1111111111111fffffff1111111111111fffffffffffffffffffffffffffffffff11fffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1111111111111111111111111fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffff111111111111fff1111111111111fffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1111111111111ffffffffff111111111111ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffff111111111111fffffffffffffffff1111111111111fffffffffffffffffffffffff11ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff111111111111ffffffffffffffffffffffff1111111111111fffffff11111fffffffff1fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff11ffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffff1111111111111ffff11111ffffffff11fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff11fffffffff11111ffff111111111111ffffffffffffffffffffffffffffffffffffff111111111111111111fffffff11ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1fffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffff1fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11ffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffff11fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11fffffff11111111111fffffff1111111111ffffffffffffffffffff1111ffffffffffffffffff111111ffffff11ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffff1111111fffffffffff1111111111fff111111111111fff1111111ffffffffffffffffff11111ffffff1fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff11ffffffff11111fffffffffff1111111111fff111111111111fff1111111ffffffffffffffffff11111fffff11fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff11fffffff11111fffffffffff111ffffffffff111111111111fff1111111ffffffffffffffffff11111ffff11ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff11ffffff11111fffffffffff111ffffffffff111ffffff111fffffff111ffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff111ffffffffff111ffffff111fffffff111ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffff111ffffffffff111ffffff111fffffff111fffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffff1111111111fff111ffffff111fffffff111ffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffff1111111111fff111ffffff111fffffff111fffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffff1111111111fff111ffffff111fffffff111ffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffff111fff111ffffff111fffffff111ffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffff111fff111ffffff111fffffff111fffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffff111fff111ffffff111fffffff111ffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffff111fff111ffffff111fffffff111ffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffff1111111111fff111111111111ffff111111111ffffffffffff111fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffff1111111111fff111111111111ffff111111111ffffffffff111fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffff1111111111fff111111111111ffff111111111fffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(5000)
gameStart = true
game.splash("JRS: THE GAME", "ALL GUTS, NO SHIELDS")
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
effects.blizzard.endScreenEffect()
let xwing = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 8 8 1 1 . . . . . 
    . 1 2 1 1 1 1 8 8 1 1 1 1 2 1 . 
    . 1 2 1 1 1 1 1 1 1 1 1 1 2 1 . 
    . 1 2 1 1 1 1 f f 1 1 1 1 2 1 . 
    . 1 2 1 1 1 1 f f 1 1 1 1 2 1 . 
    . 1 . . . 1 1 f f 1 1 . . . 1 . 
    . 1 . . . . 1 f f 1 . . . . 1 . 
    . 1 . . . . 1 1 1 1 . . . . 1 . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    `
let projectile2 = assets.image`RedLaser`
tie = sprites.create(assets.image`Tie Fighter`, SpriteKindLegacy.Player)
tie.setFlag(SpriteFlag.StayInScreen, true)
tie.bottom = 120
controller.moveSprite(tie, 100, 100)
info.setLife(1)
effects.starField.startScreenEffect()
game.onUpdateInterval(2000, function () {
    EnemyFire = sprites.createProjectileFromSprite(projectile2, projectile, 0, 100)
    EnemyFire.setKind(SpriteKindLegacy.Enemy)
})
forever(function () {
    for (let index = 0; index < 2; index++) {
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Double))
        music.playTone(587, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 2; index++) {
            music.playTone(523, music.beat(BeatFraction.Eighth))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Eighth))
            music.playTone(494, music.beat(BeatFraction.Quarter))
            music.playTone(440, music.beat(BeatFraction.Eighth))
            music.playTone(440, music.beat(BeatFraction.Quarter))
            music.playTone(784, music.beat(BeatFraction.Double))
            music.playTone(587, music.beat(BeatFraction.Whole))
        }
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Eighth))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Double))
    }
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Double))
})
forever(function () {
    if (info.score() == 25) {
        textAce = textsprite.create("You're an ACE!")
        textAce.x = 80
        textAce.y = 20
        pause(2000)
        textAce.destroy(effects.ashes, 100)
    }
    if (info.score() == 50) {
        textDoubleAce = textsprite.create("You're a DOUBLE ACE!")
        textDoubleAce.x = 80
        textDoubleAce.y = 20
        pause(2000)
        textDoubleAce.destroy(effects.ashes, 100)
    }
    if (info.score() == 100) {
        textBaron = textsprite.create("You're a BARON!")
        textBaron.x = 80
        textBaron.y = 20
        pause(2000)
        textBaron.destroy(effects.ashes, 100)
    }
})
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(xwing, randint(-20, 20), 75)
    projectile.setKind(SpriteKindLegacy.Enemy)
    projectile.x = randint(10, 150)
})
game.onUpdateInterval(20000, function () {
    DeathStar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Player)
})
