canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="https://i.postimg.cc/YqdnnNX1/car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="https://i.postimg.cc/YqdnnNX1/car1.png";
car2_x=10;
car2_y=100;
background_image="https://postimg.cc/p9D2dqqZ";

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_imgTag;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keypressed=="38"){
        car1_up();
        console.log("up");
        
        }
        
        if(keypressed=="40"){
            car1_down();
            console.log("down");
            
        }
        
        if(keypressed=="37"){
            car1_left();
            console.log("left");
            
        }
        
        if(keypressed=="39"){
            car1_right();
            console.log("right");
            
        }

        if(keypressed=="87"){
            car2_up();
            console.log("up");
            
        }

        if(keypressed=="83"){
            car2_down();
            console.log("down");
            
        }

        if(keypressed=="65"){
            car2_left();
            console.log("left");
            
        }

        if(keypressed=="68"){
            car2_right();
            console.log("right");
            
        }




}

