var emoji1,emoji1image,emoji2,emoji2image
var gamestate="teacher"

function preload(){
    teacherimage=loadImage("whjrfriends (4).jpg")
    emoji2image=loadImage("snowflake.png")
    shivamimage=loadImage("whjrfriends (5).jpg")
    kashviimage=loadImage("whjrfriends (7).jpg")

    abrarimage=loadImage("whjrfriends (6).jpg")

teddyimage=loadImage("cartoonteddy.png")
sealimage=loadImage("cartoonsealwithball.png")

}

function setup(){

createCanvas(1530,750)

emoji1=createSprite(width/2,height/2,80,80)
emoji1.addImage(teacherimage)
emoji1.visible=false
emoji1.scale=3.5

emoji5=createSprite(width/2,height/2,80,80)
emoji5.addImage( shivamimage)
emoji5.visible=false
emoji5.scale=3

emoji6=createSprite(width/2,height/2,80,80)
emoji6.addImage( abrarimage)
emoji6.visible=false
emoji6.scale=3

emoji7=createSprite(width/2,height/2,80,80)
emoji7.addImage( kashviimage)
emoji7.visible=false
emoji7.scale=3




teddy=createSprite(width/8,height/2,80,80)
teddy.addImage(teddyimage)
teddy.scale=3

seal=createSprite(1200,height/2,80,80)
seal.addImage( sealimage)
seal.scale=2

nextbutton=createSprite(1300,100,60,60)
nextbutton.shapeColor=("red")
nextbutton.visible=false

nextbutton2=createSprite(1300,400,60,60)
nextbutton2.shapeColor=("red")
nextbutton2.visible=false

nextbutton3=createSprite(1300,100,60,60)
nextbutton3.shapeColor=("red")
nextbutton3.visible=false

backbutton1=createSprite(200,100,60,60)
backbutton1.shapeColor=("blue")
backbutton1.visible=false

backbutton2=createSprite(200,600,60,60)
backbutton2.shapeColor=("blue")
backbutton2.visible=false

backbutton3=createSprite(200,100,60,60)
backbutton3.shapeColor=("blue")
backbutton3.visible=false




emojigroup=new Group()
emojigroup2=new Group()

emojigroup3=new Group()

emojigroup4=new Group()

}

function draw(){
background("green")


drawSprites();

if(gamestate==="teacher"){

    emoji1.visible=true
    nextbutton.visible=true


fill("red")
textSize(50)
stroke("black")
textFont("Algerian")
text("G  adeline christina" ,width/3,height/1.2)

fill("green")
textSize(50)
stroke("black")
textFont("Algerian")
text("she is our teacher who teaches us coding" ,300,700)
text("and yes she teaches good" ,400,750)

teacherfall()

fill("red")
text("next student" ,1150,200)

}

if(mousePressedOver(nextbutton)&&gamestate==="teacher"){
gamestate="shivam"

}

if(gamestate==="shivam"){

    emoji5.visible=true
    emoji1.visible=false
    nextbutton2.visible=true
    nextbutton.visible=false
    backbutton1.visible=true

fill("red")
textSize(50)
stroke("black")
textFont("Algerian")
text("shivam bhavar" ,width/3,height/1.2)
teacherfall()

fill("red")
text("next student" ,1150,500)
text("back",130,180)

fill("green")
textSize(50)
stroke("black")
textFont("Algerian")
text("shivam the most creative student of this batch " ,200,700)
text("there are no words for this child hats offf to this child" ,50,750)
emojigroup.destroyEach()
shivamfall()

}

if(mousePressedOver(nextbutton2)&&gamestate==="shivam"){
    gamestate="abrar"
    
    }
    
    if(gamestate==="abrar"){
    
        emoji6.visible=true
        emoji5.visible=false
        nextbutton3.visible=true
        nextbutton2.visible=false
        backbutton1.visible=false
        backbutton2.visible=true


    fill("red")
    textSize(50)
    stroke("black")
    textFont("Algerian")
    text("abrar" ,width/3,height/1.2)
    abrarfall()
    
    fill("red")
    text("next student" ,1150,200)
    text("back",130,680)

    fill("green")
textSize(50)
stroke("black")
textFont("Algerian")
text("abrar.. he is our ghost expert he always finds new" ,300,700)
text("new ways of frightening his teacher" ,400,750)
    emojigroup.destroyEach()
    emojigroup2.destroyEach()

    
    
    }


    if(mousePressedOver(nextbutton3)&&gamestate==="abrar"){
        gamestate="kashvi"
        
        }
        
        if(gamestate==="kashvi"){
        
            emoji7.visible=true
            emoji6.visible=false
           // nextbutton4.visible=true
            nextbutton3.visible=false
            backbutton3.visible=true
            backbutton2.visible=false
        
        fill("red")
        textSize(50)
        stroke("black")
        textFont("Algerian")
        text("kaashvi goel" ,width/3,height/1.2)
        kashvifall()
        
        fill("red")
        text("next student" ,1150,500)
        text("back",130,180)
        emojigroup.destroyEach()
        emojigroup3.destroyEach()

        fill("green")
textSize(50)
stroke("black")
textFont("Algerian")
text("kaashvi or kitabi kida... always studying....she has a very",10,700)
text("beautiful room for which she has been praised by teacher" ,20,750)
    
        
        
        }

        if(mousePressedOver(backbutton1)&&gamestate==="shivam"){
        gamestate="teacher"
        emoji1.visible=true
        emoji5.visible=false
        nextbutton2.visible=false
        backbutton1.visible=false
        emojigroup2.destroyEach()

        }

        if(mousePressedOver(backbutton2)&&gamestate==="abrar"){
            gamestate="shivam"
            emoji5.visible=true
            emoji6.visible=false
            nextbutton3.visible=false
            backbutton2.visible=false
            emojigroup3.destroyEach()
    
            }

            if(mousePressedOver(backbutton3)&&gamestate==="kashvi"){
                gamestate="abrar"
                emoji6.visible=true
                emoji7.visible=false
                nextbutton3.visible=false
                backbutton3.visible=false
                emojigroup4.destroyEach()
        
                }











}


function teacherfall(){


    if(frameCount%10===0){
        emoji2=createSprite()
        emoji2.x=Math.round(random(width/1,width/20))
        emoji2.velocityY=5
        emoji2.width=20
        emoji2.height=20
        emoji2.addImage(teacherimage)
        emoji2.scale=0.3
        emojigroup.add(emoji2)
    }

}


function shivamfall(){


    if(frameCount%10===0){
        emoji3=createSprite()
        emoji3.x=Math.round(random(width/1,width/20))
        emoji3.velocityY=5
        emoji3.width=20
        emoji3.height=20
        emoji3.addImage(shivamimage)
        emoji3.scale=0.3
        emojigroup2.add(emoji3)
    }

}


function abrarfall(){


    if(frameCount%10===0){
        emoji4=createSprite()
        emoji4.x=Math.round(random(width/1,width/20))
        emoji4.velocityY=5
        emoji4.width=20
        emoji4.height=20
        emoji4.addImage(abrarimage)
        emoji4.scale=0.3
        emojigroup3.add(emoji4)
    }

}


function kashvifall(){


    if(frameCount%10===0){
        emoji10=createSprite()
        emoji10.x=Math.round(random(width/1,width/20))
        emoji10.velocityY=5
        emoji10.width=20
        emoji10.height=20
        emoji10.addImage(kashviimage)
        emoji10.scale=0.3
        emojigroup4.add(emoji10)
    }

}