const  GRAPH_WIDTH : number = 500;
const GRAPH_HEIGHT : number = 500;
const GRAPH_BORDER_MARGIN : number = 10;
const GRAPH_Y_AXIS_OFFSET : number = GRAPH_HEIGHT / 2 + GRAPH_BORDER_MARGIN;
const GRAPH_X_AXIS_START_POS : number = GRAPH_BORDER_MARGIN;
const GRAPH_X_AXIS_END_POS : number = GRAPH_WIDTH - GRAPH_BORDER_MARGIN;
const GRAPH_Y_AXIS_START_POS : number = GRAPH_BORDER_MARGIN;
const GRAPH_Y_AXIS_END_POS : number  = GRAPH_HEIGHT - GRAPH_BORDER_MARGIN;


const BOX_WIDTH : number  = 70;
const BOX_HEIGHT : number = 70;


const ANIMATION_PERIOD : number = 1000/20;





type Point        = {  x: number,  y : number };
type Velocity     = {  dx: number, dy : number };
type Acceleration = {  dx: number, dy : number };


class AnimatedBox {
    
   private width: number;
   private height: number;
   
   private position: Point    = {x:0,  y:0};
   private velocity: Velocity = {dx:0, dy:0};
   private acceleration: Acceleration = {dx:0, dy:0};
   

    constructor(intialPosition: Point, 
                initialSpeed: Velocity, 
                width: number, height: number) {

        this.width = width;             
        this.height = height;

        this.position = intialPosition;
        this.velocity = initialSpeed;
    }


    setAcceleration(acceleration: Acceleration) {

        this.acceleration.dx = acceleration.dx;
        this.acceleration.dy = acceleration.dy;
    }

    draw(context : CanvasRenderingContext2D) {
        
        // The position of the coordinate is at the center of the box, so to draw the rectangle, we need to find the top Left Corner of the box
        const xLeftCoord : number  = this.position.x - this.width / 2;
        const yRightCoord : number = this.position.x + this.width / 2;

    
        context.beginPath();    
        context.strokeStyle = '#ff0000';
        context.rect(xLeftCoord, yRightCoord, this.width, this.height);
        context.fillStyle = 'blue';
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = 'black';
        context.stroke();
        context.stroke();

        //console.log(`${xLeftCoord},${yRightCoord}`);

    }

    update() {

        this.velocity.dx += this.acceleration.dx;
        this.velocity.dy += this.acceleration.dy;

        this.position.x += this.velocity.dx;
        this.position.y += this.velocity.dy;
        
        if (this.position.x < 0)                  this.resetMovement( {x:0, y : this.position.y});
        else if (this.position.x > GRAPH_WIDTH)   this.resetMovement( {x:GRAPH_WIDTH, y : this.position.y});

        if (this.position.y < 0)                   this.resetMovement( {x:this.position.x, y : 0 });
        else if (this.position.y > GRAPH_HEIGHT)   this.resetMovement( {x:this.position.x, y : GRAPH_HEIGHT });

    }

    // This method simply put all movement variables at 0, in other words, it is a full break pedal...
    resetMovement(atPos : Point){

        this.position.x = atPos.x;
        this.position.y = atPos.y;
        this.velocity.dx =  this.velocity.dy = 0;
        this.acceleration.dx = this.acceleration.dy = 0;
    }

    toString() : string {
        return `[x,y] = [${this.position.x} ,${this.position.y} ], Speed = [${this.velocity.dx} ,${this.velocity.dy} ]`;
    }
}

let frameNumber : number = 0;

let animBox = new AnimatedBox( {  x:200 , y:200 },
                               { dx:0 ,  dy:0 },
                                BOX_WIDTH , BOX_HEIGHT);


function init() : void {
    console.log('running the init method...');


    setInterval( update, ANIMATION_PERIOD );
    setInterval( render, ANIMATION_PERIOD );

    console.log('Box toString is ' + animBox.toString() );


    animBox.setAcceleration( {dx:1, dy:0} );
    // // here you add listeners to dom elements
    // let box = document.getElementById("timeFieldCheckBox");
    // box.addEventListener("change", (e:Event) => TimeField_OnChange(e));
    //}
}


function render() : void {
    
    let canvas = document.getElementById('graph-canvas') as HTMLCanvasElement;
    let context = canvas.getContext("2d") as CanvasRenderingContext2D;
    
    eraseCanvas(context);

    animBox.update();
    animBox.draw(context);
}


function eraseCanvas(ctx : CanvasRenderingContext2D)  : void {

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, GRAPH_WIDTH, GRAPH_HEIGHT);
}



function  drawSegment(ctx : CanvasRenderingContext2D, 
                     fromPos : Point, 
                     toPos :  Point) : void {

  ctx.beginPath();
  ctx.moveTo(fromPos.x, fromPos.y );
  ctx.lineTo(toPos.x, toPos.y );
   
  ctx.strokeStyle = '#ff0000';
  ctx.stroke();
}


function update() : void {

    frameNumber++;

    //console.log(`Frame # ${frameNumber}`);

//     for (let i=0;i< rocks.length; i++ ){
//         rocks[i].update();
//       }   
}
  


init();
