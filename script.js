

var amogi = [
    
    [
        [0,1,1,0,0],
        [1,1,1,1,1],
        [1,2,1,1,0],
        [1,2,1,1,1],
    ],
    [
        [1,2,1,1,1],
        [1,2,1,1,0],
        [1,1,1,1,1],
        [0,1,1,0,0],
    ],
    [
        [0,1,1,0,0],
        [1,1,1,1,0],
        [1,2,1,0,0],
        [1,2,1,1,0],
    ],
    [
        [1,2,1,1,0],
        [1,2,1,0,0],
        [1,1,1,1,0],
        [0,1,1,0,0],
    ]
];


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var place ;
$.getJSON("./placept1.json",function(dat){
    place = dat;
    $.getJSON("./placept2.json",function(dat){
        place = place.concat(dat);
        console.log("loaded");
        amoooggguusss();
    });
});


var amogusCheckOffset = {x:1,y:0};

function amoooggguusss(){
    for(var amogiform=0;amogiform<amogi.length;amogiform++){

        var amogus = amogi[amogiform];
       debugger;
    for(var x=0;x<2000-4;x++){
    
        for(var y=0;y<2000-5;y++){

            var sus  =true;

            var potentialAmogusColor = 
                place[x+amogusCheckOffset.x][y+amogusCheckOffset.y];
            
           

                for(var amogusx=0;amogusx<amogus.length;amogusx++){
                    for(var amogusy=0;amogusy<amogus[0].length;amogusy++){
                        
                        var sussy = amogus[amogusx][amogusy];
                        var placedColor = place[x+amogusx][y+amogusy];
                        
                        
                        if(placedColor=="imposter"){
                            //already called
                            sus=false;
                            break;
                        }

                        if(sussy == 1){
                            //bod
                            if(potentialAmogusColor == placedColor){
                                //kinda sus
                            }else{
                                sus=false;
                                break;
                            }
                        }else if(sussy == 2){
                            //eyes
                            if(potentialAmogusColor == placedColor){
                                //it doesnt have eyes.
                                sus=false;
                                break;
                            }else{
                                //kinda sus
                            }
                        }
                
                    }
                }

            if(sus){
                //there's an amogus among us
                var amogus = amogi[amogiform];
                for(var amogusx=0;amogusx<amogus.length;amogusx++){
                    for(var amogusy=0;amogusy<amogus[amogusx].length;amogusy++){
                        var sussy = amogus[amogusx][amogusy];

                        if(sussy!=0){
                            place[x+amogusx][y+amogusy] = "imposter";
                        }

                        if(sussy==1){
                            ctx.fillStyle=potentialAmogusColor;
                            ctx.fillRect(x+amogusx,y+amogusy,1,1);
                        }
                        else if(sussy == 2){
                            ctx.globalAlpha = 0.2;
                            ctx.fillStyle="#00ffff";
                            ctx.fillRect(x+amogusx,y+amogusy,1,1);
                            ctx.globalAlpha = 0.8;
                        }
                    }
                }
            }
        }
    }
}
    console.log("done");
    $("#loadingMessage").hide();
}

var testetetse = 0;
function drawAmogusTest(){
    testetetse+=5;
    var amogus = amogi[1];
    for(var amogusx=0;amogusx<amogus.length;amogusx++){
        for(var amogusy=0;amogusy<amogus[amogusx].length;amogusy++){
            var sussy = amogus[amogusx][amogusy];
            if(sussy==1){
                ctx.fillStyle="#ff0000";
                ctx.fillRect(amogusx,testetetse+amogusy,1,1);
            }
            else if(sussy == 2){
                ctx.fillStyle="#00ffff";
                ctx.fillRect(amogusx,testetetse+amogusy,1,1);
            }
        }
    }
}
