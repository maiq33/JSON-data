var data;

function preload() {
  
  data = loadJSON("birds.json")
}

function draw(){
  noCanvas();
  //var bird = data.birds[1].members[2]
  //createP(bird);

  var birds = data.birds;

  

  for ( var i = 0; i < birds.length; i++){
    createElement('h1', birds[i].family);
    var members = birds[i].members;
    for (let j = 0; j < birds.length; j++) {
      createDiv(members[j]);
      
    }
  
  }
    
}