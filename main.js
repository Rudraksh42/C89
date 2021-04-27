
var canvas=new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:playery,left:playerx
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playery,left:playerx
        });
        canvas.add(block_image_object);
});
}
window.addEventListener("key_down",key_down);
function key_down(e){

    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true && keypressed=='80'){

        console.log("p and shift press together");
        block_image_height=+10;
        block_image_width=+10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_wedth").innerHTML=block_image_width;
    }

    if(e.shiftkey && keypressed=='77'){

        console.log("m and shift press together");
        block_image_height=-10;
        block_image_width=-10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML=block_image_width;

    }

    if(keypressed=='38'){
        console.log("keypressed up");
       up();
    }
    if(keypressed=='40'){
        console.log("keypressed down");
        down();
    }
    if(keypressed=='39'){
        console.log("keypressed right");
        right();
    }
    if(keypressed=='37'){
        console.log("keypressed left");
        left();
    }
    if(keypressed=='68'){
        new_image('dark_green.png');
        console.log("keypressed d");
        
    }
    if(keypressed=='84'){
        console.log("keypressed t");
        new_image('trunk.png');
    }
    
    if(keypressed=='76'){
        console.log("keypressed l");
        new_image('light_green.png');
    }
    if(keypressed=='71'){
        console.log("keypressed g");
        new_image('ground.png');
    }
    if(keypressed=='87'){
        console.log("keypressed w");
        new_image('wall.png');
    }
    if(keypressed=='89'){
        console.log("keypressed y");
        new_image('yellow_wall.png');
    }
    if(keypressed=='82'){
        console.log("keypressed r");
        new_image('roof.png');
    }
    if(keypressed=='67'){
        console.log("keypressed c");
        new_image('cloud.png');
    }
    if(keypressed=='85'){
        console.log("keypressed u");
        new_image('unique.png');
    }
}

function up(){

   if(playery >=0){

  playery=playery-block_image_height;
  console.log("block image height= "+block_image_height);
  console.log("when up arrow is pressed,X="+ playerx +" Y=" + playery);
  canvas.remove(player_object);
  player_update();
}
}

function down(){
    if(playery<=500){
        playery=playery+block_image_height;
        conosle.log("block image height="+block_image_height);
        console.log("when down arrow is pressed,X= "+playerx+"y="+playery);
        canvas.remove(player_object);
        player_update();
        
    }
}

function right(){
    if(playerx<=850){
    playerx=playerx+block_image_width;
    console.log("block image width="+block_image_width);
    console.log("when right arrow is pressed,X="+playerx+"y="+playery);
    canvas.remove(player_object);
    player_update();
    }
}

function left(){
    if(playerx>=0){
        playerx=playerx-block_image_width;
        console.log("block image width="+block_image_width);
        console.log("when left arrow is pressed,X="+playerx+"y="+playery);
        canvas.remove(player_object);
        player_update();

    }
}