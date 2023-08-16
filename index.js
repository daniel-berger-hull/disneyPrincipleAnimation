

// const GRAPH_WIDTH   = 500;
// const GRAPH_HEIGHT  = 500;


// const GRAPH_BORDER_MARGIN        = 10;


// const GRAPH_Y_AXIS_OFFSET    = GRAPH_HEIGHT/2 + GRAPH_BORDER_MARGIN;


// const GRAPH_X_AXIS_START_POS     = GRAPH_BORDER_MARGIN; 
// const GRAPH_X_AXIS_END_POS       = GRAPH_WIDTH  - GRAPH_BORDER_MARGIN;
// const GRAPH_Y_AXIS_START_POS     = GRAPH_BORDER_MARGIN; 
// const GRAPH_Y_AXIS_END_POS       = GRAPH_HEIGHT  - GRAPH_BORDER_MARGIN;



// function myFunction(p1, p2) {
 
//  console.log(5 + 6);
// }



// function drawGraph(dataPoints) {
 
//   var canvas = document.getElementById("graph-canvas");
//   var ctx = canvas.getContext("2d");
      
//   eraseCanvas(ctx);
//   drawAxis(ctx);

   
//  console.log("There are  " + dataPoints.length + " points to display...");

// const arrayEnd = dataPoints.length;
// let startPoint = {x:GRAPH_X_AXIS_START_POS, y:dataPoints[0]};



//   for (let i = 1; i < arrayEnd; i++) {


//   	  let endPoint = {x:startPoint.x+10, y:dataPoints[i]};
//      //console.log("Start Point is " + startPoint.x + " , " + startPoint.y + " to " +  endPoint.x + " , " + endPoint.y);
//      drawSegment(ctx, startPoint, endPoint);


//        startPoint = endPoint;
//     } 


// console.log("Done");
 
// }


// function eraseCanvas(ctx){
// 	  ctx.fillStyle = "#FFFFFF";
//     ctx.fillRect(0, 0, GRAPH_WIDTH, GRAPH_HEIGHT); 
// }

// function drawAxis(ctx){

//    /* Draw X Axis at the bottom of the graph */
//    ctx.beginPath();
// //   ctx.moveTo(GRAPH_X_AXIS_START_POS, GRAPH_Y_AXIS_END_POS);
// //   ctx.lineTo(GRAPH_X_AXIS_END_POS, GRAPH_Y_AXIS_END_POS);
//    ctx.moveTo(GRAPH_X_AXIS_START_POS, GRAPH_Y_AXIS_OFFSET);
//    ctx.lineTo(GRAPH_X_AXIS_END_POS, GRAPH_Y_AXIS_OFFSET);






//    ctx.strokeStyle = '#00ff00';
//    ctx.stroke();

//  /* Draw Y Axis on the left of the edge of the graph */
//    ctx.beginPath();
//     ctx.moveTo(GRAPH_X_AXIS_START_POS, GRAPH_Y_AXIS_START_POS);
//    ctx.lineTo(GRAPH_X_AXIS_START_POS, GRAPH_Y_AXIS_END_POS);
//    ctx.strokeStyle = '#00ff00';
//    ctx.stroke();
// }

// function  drawSegment(ctx, fromPos, toPos){

//   ctx.beginPath();
//    ctx.moveTo(fromPos.x, GRAPH_Y_AXIS_OFFSET - fromPos.y );
//    ctx.lineTo(toPos.x, GRAPH_Y_AXIS_OFFSET - toPos.y );
//    ctx.strokeStyle = '#ff0000';
//    ctx.stroke();
// }


// window.addEventListener('load', function () {

//     console.log('Page Loaded!!');
// });
  

