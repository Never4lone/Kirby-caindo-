var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8d3b0d03-8781-4881-bf06-d67e889d5925","af5f92cc-383e-4b6a-8285-eb5f52a33442","e2aaf752-78fb-4bdc-b100-7524f514600b","44a739f0-c370-48ec-8e8e-09596ce9b05c","1a873e49-4ac3-4486-9126-e6ca2576c3e9","1c6ca4f1-7bc4-4ad2-adb6-884d511620f0","8d697643-e43c-44d3-a698-ce8c49ac24ca","17e7bf4c-3721-4216-8913-94eea18664d1","c3209af1-2e35-4e71-a2e1-6b2e8231b111"],"propsByKey":{"8d3b0d03-8781-4881-bf06-d67e889d5925":{"name":"nuvem","sourceUrl":null,"frameSize":{"x":499,"y":841},"frameCount":1,"looping":true,"frameDelay":12,"version":"rK6lGbe30e.v_LzWq2ER7rgGjC.VGevc","loadedFromSource":true,"saved":true,"sourceSize":{"x":499,"y":841},"rootRelativePath":"assets/8d3b0d03-8781-4881-bf06-d67e889d5925.png"},"af5f92cc-383e-4b6a-8285-eb5f52a33442":{"name":"kiby","sourceUrl":"assets/v3/animations/h_fs3vRwH9k15tSohOpRjCqu44tDss7XIVPwOLGxBUo/af5f92cc-383e-4b6a-8285-eb5f52a33442.png","frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"drFIxQVsj.KV_JA8C5xZj_cqUvdelxwR","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/v3/animations/h_fs3vRwH9k15tSohOpRjCqu44tDss7XIVPwOLGxBUo/af5f92cc-383e-4b6a-8285-eb5f52a33442.png"},"e2aaf752-78fb-4bdc-b100-7524f514600b":{"name":"kiby2","sourceUrl":null,"frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":12,"version":"rHbMZjmNMrdcEChA6Zb635VVE7OJVT0H","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/e2aaf752-78fb-4bdc-b100-7524f514600b.png"},"44a739f0-c370-48ec-8e8e-09596ce9b05c":{"name":"sbp","sourceUrl":null,"frameSize":{"x":1500,"y":1500},"frameCount":1,"looping":true,"frameDelay":12,"version":"ili5yIUMkVjpl7eHrSVnxsjOas3YaQpm","loadedFromSource":true,"saved":true,"sourceSize":{"x":1500,"y":1500},"rootRelativePath":"assets/44a739f0-c370-48ec-8e8e-09596ce9b05c.png"},"1a873e49-4ac3-4486-9126-e6ca2576c3e9":{"name":"sbp2","sourceUrl":null,"frameSize":{"x":1393,"y":417},"frameCount":1,"looping":true,"frameDelay":12,"version":"mMMCh.9_RdIngbWcFouhH0EgpfNQCJUN","loadedFromSource":true,"saved":true,"sourceSize":{"x":1393,"y":417},"rootRelativePath":"assets/1a873e49-4ac3-4486-9126-e6ca2576c3e9.png"},"1c6ca4f1-7bc4-4ad2-adb6-884d511620f0":{"name":"chef","sourceUrl":"assets/v3/animations/h_fs3vRwH9k15tSohOpRjCqu44tDss7XIVPwOLGxBUo/1c6ca4f1-7bc4-4ad2-adb6-884d511620f0.png","frameSize":{"x":1500,"y":1500},"frameCount":1,"looping":true,"frameDelay":4,"version":"htVDeF2Vlcgk4qKNEkO3PGng6gaHN4x9","loadedFromSource":true,"saved":true,"sourceSize":{"x":1500,"y":1500},"rootRelativePath":"assets/v3/animations/h_fs3vRwH9k15tSohOpRjCqu44tDss7XIVPwOLGxBUo/1c6ca4f1-7bc4-4ad2-adb6-884d511620f0.png"},"8d697643-e43c-44d3-a698-ce8c49ac24ca":{"name":"kig","sourceUrl":"assets/v3/animations/h_fs3vRwH9k15tSohOpRjCqu44tDss7XIVPwOLGxBUo/8d697643-e43c-44d3-a698-ce8c49ac24ca.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"sTuMMJHTyJ8xLe0RfqHjfPPeiTKT_PzW","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/h_fs3vRwH9k15tSohOpRjCqu44tDss7XIVPwOLGxBUo/8d697643-e43c-44d3-a698-ce8c49ac24ca.png"},"17e7bf4c-3721-4216-8913-94eea18664d1":{"name":"skull","sourceUrl":"assets/v3/animations/h_fs3vRwH9k15tSohOpRjCqu44tDss7XIVPwOLGxBUo/17e7bf4c-3721-4216-8913-94eea18664d1.png","frameSize":{"x":160,"y":160},"frameCount":1,"looping":true,"frameDelay":4,"version":"UMGFt2poyej9MPPEq5TM3XZFZRXQzZMM","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/v3/animations/h_fs3vRwH9k15tSohOpRjCqu44tDss7XIVPwOLGxBUo/17e7bf4c-3721-4216-8913-94eea18664d1.png"},"c3209af1-2e35-4e71-a2e1-6b2e8231b111":{"name":"grama","sourceUrl":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"oy1yIltrLNQf4iGHFFcLGgYTezk0.f73","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b=createSprite(200, 200, 10, 10);
b.setAnimation("nuvem");
var b2=createSprite(200, 1041, 10, 10);
b2.setAnimation("nuvem");
b.velocityY=-9;
b2.velocityY=-9;

var H=createSprite(200, 100, 20, 20);
H.setAnimation("kiby");
H.scale=0.05;

var ob=createSprite(95, 600, 200, 4);
ob.velocityY=-8;
ob.setAnimation("sbp2");
ob.scale=0.13;

var ob2=createSprite(370, 1000, 200, 4);
ob2.velocityY=-8;
ob2.setAnimation("sbp");
ob2.scale=0.13;

var ob3=createSprite(50, 2000, 200, 4);
ob3.velocityY=-8;
ob3.setAnimation("sbp");
ob3.scale=0.13;

var ob4=createSprite(335, 2000, 200, 4);
ob4.velocityY=-8;
ob4.setAnimation("sbp2");
ob4.scale=0.13;

var n=0;
var w=0;
var t=0;
var ww=0;

var ob5=createSprite(1000, 800, 20, 20);
ob5.setAnimation("sbp");
ob5.velocityY=-8;
ob5.scale=0.13;

var chef=createSprite(10000, -2000, 20, 20);
chef.setAnimation("chef");
chef.scale=0.17;
chef.velocityY=-45;

var kig=createSprite(90, 740, 20, 20);
kig.setAnimation("kig");
kig.scale=0.3;

var dang=createSprite(200, 200, 340, 400);

var gameState="play";

var grama=createSprite(200, 100, 20, 20);
  grama.setAnimation("grama");
  
function draw(){
  background("cyan");
  createEdgeSprites();
  dang.visible=false;
  dang.shapeColor = "red";
  grama.visible=false;
  
  H.bounceOff(leftEdge);
  H.bounceOff(rightEdge);
  chef.bounceOff(leftEdge);
  chef.bounceOff(rightEdge);
  
  if (gameState==="play"){
    H.scale=0.05;
     if (keyDown("left")){
  H.x=H.x-3.7;
  H.setAnimation("kiby2");
}
}
if (keyDown("right")){
  H.x=H.x+3.7;
  H.setAnimation("kiby");
}
if (ww===1){
  gameState="win";
}

  
  death();
  
  if (gameState==="death"){
   b.velocityY=0;
   b2.velocityY=0;
   ob.velocityY=0;
   ob2.velocityY=0;
   ob3.velocityY=0;
   ob4.velocityY=0;
   ob5.velocityY=0;
   chef.velocityY=0;
  H.setAnimation("skull");
  H.scale=0.4;
  stopSound("assets/candi.mp3");
  background("red");
  textSize(20);
  fill("white");
  text("Press X to restart", 150, 200);
  if (keyDown("x")){
    H.y=100;
    H.x=200;
    w=0;
    t=0;
    n=0;
    ob.x=95;
    ob.y=600;
    ob.visible=true;
    ob2.x=370;
    ob2.y=1000;
    ob2.visible=true;
    ob3.visible=true;
    ob3.x=50;
    ob3.y=2000;
    ob4.visible=true;
    ob4.x=335;
    ob4.y=2000;
    ob5.x=1000;
    ob5.y=800;
    ob5.visible=true;
    b.visible=true;
    b2.visible=true;
    b.velocityY=-9;
   b2.velocityY=-9;
   ob.velocityY=-8;
   ob2.velocityY=-8;
   ob3.velocityY=-8;
   ob4.velocityY=-8;
   ob5.velocityY=-8;
   chef.velocityY=-45;
    stopSound("X2Download.com---Super-Mario-World-Game-Over-(128-kbps).mp3");
    playSound("assets/candi.mp3", true);
    H.setAnimation("kiby");
    gameState="play";
  }
  }
  
  if (gameState==="win"){
    win();
  }
  
 if (b.y<-404){
   b.y=1041;
 }
 if (b2.y<-400){
   b2.y=1041;
 }
 
  if (ob.y<-2){
    ob.y=820;
    ob.x=50;
    n=n+1;
    w=w+1;
  }
  if (ob2.y<-800){
    ob2.y=820;
    ob2.x=340;
    w=w+1;
  }
  if (ob3.y<0){
    ob3.y=10000;
    ob3.velocityY=0;
    w=w+1;
  }
  if (ob4.y<0){
ob4.y=10000;
ob4.velocityY=0;
    w=w+1;
  }
  if (n>3){
    ob.x=10000;
  }
  if (n==3){
    kig.velocityY=-8;
    ob5.x=95;
  }
 if (w===8){
   ob2.destroy();
   chef.y=600;
   chef.x=200;
   dang.visible=true;
 }
 
 if (dang.visible===true){
   t=t+1;
 }
 
 if (t>20){
   dang.visible=false;
 }
 if (t===40){
   dang.visible=true;
 }
 if (t>60){
   dang.visible=false;
 }
 //aqui eu tava tentando fazer um timer (q nem o t, n e w) mas n funcionou, eu n sei pq
   //if (chef.y>-20);{
  //chef.x=20000;
//}

//if (chef.x===20000){
//  ww=ww+1;
//}

  drawSprites();
}

 playSound("assets/candi.mp3", true);
 
 function death(){
   if (H.isTouching(ob) || H.isTouching(ob2)||H.isTouching(ob3) || H.isTouching(ob4)|| H.isTouching(ob5)||H.isTouching(chef)){
    gameState="death";
    H.y=H.y-13;
    ob.visible=false;
    ob2.visible=false;
    ob3.visible=false;
    ob4.visible=false;
    ob5.visible=false;
    b.visible=false;
    b2.visible=false;
    playSound("X2Download.com---Super-Mario-World-Game-Over-(128-kbps).mp3", false);
   }
 }
 function win(){
  b2.visible=false;
  b.y=80;
  b.x=200;
  grama.visible=true;
  H.velocityY=8;
 }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
