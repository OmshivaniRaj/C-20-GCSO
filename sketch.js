var car1,car2,car3,car4,car5 ;
var service1 , service2 , service3 , service4 , service5 ;
var Boundary1, Boundary2,Boundary3,Boundary4;
var outerline1,outerline2;
var speed , weight;

function setup() {
  createCanvas(1366,600);
  
speed = random(04,10);

  //MAKE CARS HERE
  var car1 = createSprite(30,100,46,30);
  car1.shapeColor = ("pink");
  car1.velocityX = speed;

  var car2 = createSprite(30,195,46,30);
  car2.shapeColor = ("pink");
  car2.velocityX = speed;

  var car3 = createSprite(30,300,46,30);
  car3.shapeColor = ("pink");
  car3.velocityX = speed;

  var car4 = createSprite(30,410,46,30);
  car4.shapeColor = ("pink");
  car4.velocityX = speed;

  var car5 = createSprite(30,520,46,30);
  car5.shapeColor = ("pink");
  car5.velocityX = speed;

  //MAKE OUTER LINE HERE
  var outerline1 = createSprite(20,20,2696,45);
  outerline1.shapeColor = ("orange");

  var outerline2 = createSprite(20,580,2696,45);
  outerline2.shapeColor = ("orange");

  //MAKE BOUNDARIES HERE
  var Boundary1 = createSprite(20,140,2696,05);
  Boundary1.shapeColor = ("white");

  var Boundary2 = createSprite(20,245,2696,05);
  Boundary2.shapeColor = ("white");

  var Boundary3 = createSprite(20,350,2696,05);
  Boundary3.shapeColor = ("white");

  var Boundary4 = createSprite(20,460,2696,05);
  Boundary4.shapeColor = ("white");

  //MAKE SERVICE CENTRE HERE
  var service1 = createSprite(1300,100,40,65);
  service1.shapeColor = ("purple");

  var service2 = createSprite(1300,195,40,65);
  service2.shapeColor = ("purple");

  var service3 = createSprite(1300,300,40,65);
  service3.shapeColor = ("purple");

  var service4 = createSprite(1300,410,40,65);
  service4.shapeColor = ("purple");

  var service5 = createSprite(1300,520,40,65);
  service5.shapeColor = ("purple");
  

}

function draw() {
  background(0); 
  
if (service1.x-car1.x < (car1.width+service1.width)/2){
car1.velocityX = 0;
 var deformation = 0.5*weight*speed*speed/22509;
 if (deformation<180){
   car1.shapeColor = color ("red");
 }
 if (deformation<180 && deformation>100){
   car1.shapeColor = color ("yellow");
 }
 if(deformation<100 && defromation>100){
  car1.shapColor = color("green")
 }

}
  
if (service2.x-car2.x < (car2.width+service2.width)/2){
  car2.velocityX = 0;
   var deformation = 0.5*weight*speed*speed/22509;
   if (deformation<180){
     car2.shapeColor = color ("red");
   }
   if (deformation<180 && deformation>100){
     car2.shapeColor = color ("yellow");
   }
   if(deformation<100 && defromation>100){
    car2.shapColor = color("green")
   }
  
  }

  if (service3.x-car3.x < (car3.width+service3.width)/2){
    car3.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22509;
     if (deformation<180){
       car3.shapeColor = color ("red");
     }
     if (deformation<180 && deformation>100){
       car3.shapeColor = color ("yellow");
     }
     if(deformation<100 && defromation>100){
      car3.shapColor = color("green")
     }
    
    }

    if (service4.x-car4.x < (car4.width+service4.width)/2){
      car4.velocityX = 0;
       var deformation = 0.5*weight*speed*speed/22509;
       if (deformation<180){
         car4.shapeColor = color ("red");
       }
       if (deformation<180 && deformation>100){
         car4.shapeColor = color ("yellow");
       }
       if(deformation<100 && defromation>100){
        car4.shapColor = color("green")
       }
      
      }

      if (service5.x-car5.x < (car5.width+service5.width)/2){
        car5.velocityX = 0;
         var deformation = 0.5*weight*speed*speed/22509;
         if (deformation<180){
           car5.shapeColor = color ("red");
         }
         if (deformation<180 && deformation>100){
           car5.shapeColor = color ("yellow");
         }
         if(deformation<100 && defromation>100){
          car5.shapColor = color("green")
         }
        
        }

  drawSprites();
}