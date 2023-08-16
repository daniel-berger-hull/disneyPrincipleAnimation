var GRAPH_WIDTH = 500;
var GRAPH_HEIGHT = 500;
var GRAPH_BORDER_MARGIN = 10;
var GRAPH_Y_AXIS_OFFSET = GRAPH_HEIGHT / 2 + GRAPH_BORDER_MARGIN;
var GRAPH_X_AXIS_START_POS = GRAPH_BORDER_MARGIN;
var GRAPH_X_AXIS_END_POS = GRAPH_WIDTH - GRAPH_BORDER_MARGIN;
var GRAPH_Y_AXIS_START_POS = GRAPH_BORDER_MARGIN;
var GRAPH_Y_AXIS_END_POS = GRAPH_HEIGHT - GRAPH_BORDER_MARGIN;
var BOX_WIDTH = 70;
var BOX_HEIGHT = 70;
var ANIMATION_PERIOD = 1000 / 20;
var AnimatedBox = /** @class */ (function () {
    function AnimatedBox(intialPosition, initialSpeed, width, height) {
        this.position = { x: 0, y: 0 };
        this.velocity = { dx: 0, dy: 0 };
        this.acceleration = { dx: 0, dy: 0 };
        this.width = width;
        this.height = height;
        this.position = intialPosition;
        this.velocity = initialSpeed;
    }
    AnimatedBox.prototype.setAcceleration = function (acceleration) {
        this.acceleration.dx = acceleration.dx;
        this.acceleration.dy = acceleration.dy;
    };
    AnimatedBox.prototype.draw = function (context) {
        // The position of the coordinate is at the center of the box, so to draw the rectangle, we need to find the top Left Corner of the box
        var xLeftCoord = this.position.x - this.width / 2;
        var yRightCoord = this.position.x + this.width / 2;
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
    };
    AnimatedBox.prototype.update = function () {
        this.velocity.dx += this.acceleration.dx;
        this.velocity.dy += this.acceleration.dy;
        this.position.x += this.velocity.dx;
        this.position.y += this.velocity.dy;
        if (this.position.x < 0)
            this.resetMovement({ x: 0, y: this.position.y });
        else if (this.position.x > GRAPH_WIDTH)
            this.resetMovement({ x: GRAPH_WIDTH, y: this.position.y });
        if (this.position.y < 0)
            this.resetMovement({ x: this.position.x, y: 0 });
        else if (this.position.y > GRAPH_HEIGHT)
            this.resetMovement({ x: this.position.x, y: GRAPH_HEIGHT });
    };
    // This method simply put all movement variables at 0, in other words, it is a full break pedal...
    AnimatedBox.prototype.resetMovement = function (atPos) {
        this.position.x = atPos.x;
        this.position.y = atPos.y;
        this.velocity.dx = this.velocity.dy = 0;
        this.acceleration.dx = this.acceleration.dy = 0;
    };
    AnimatedBox.prototype.toString = function () {
        return "[x,y] = [".concat(this.position.x, " ,").concat(this.position.y, " ], Speed = [").concat(this.velocity.dx, " ,").concat(this.velocity.dy, " ]");
    };
    return AnimatedBox;
}());
var frameNumber = 0;
var animBox = new AnimatedBox({ x: 200, y: 200 }, { dx: 0, dy: 0 }, BOX_WIDTH, BOX_HEIGHT);
function init() {
    console.log('running the init method...');
    setInterval(update, ANIMATION_PERIOD);
    setInterval(render, ANIMATION_PERIOD);
    console.log('Box toString is ' + animBox.toString());
    animBox.setAcceleration({ dx: 1, dy: 0 });
    // // here you add listeners to dom elements
    // let box = document.getElementById("timeFieldCheckBox");
    // box.addEventListener("change", (e:Event) => TimeField_OnChange(e));
    //}
}
function render() {
    var canvas = document.getElementById('graph-canvas');
    var context = canvas.getContext("2d");
    eraseCanvas(context);
    animBox.update();
    animBox.draw(context);
}
function eraseCanvas(ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, GRAPH_WIDTH, GRAPH_HEIGHT);
}
function drawSegment(ctx, fromPos, toPos) {
    ctx.beginPath();
    ctx.moveTo(fromPos.x, fromPos.y);
    ctx.lineTo(toPos.x, toPos.y);
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
}
function update() {
    frameNumber++;
    //console.log(`Frame # ${frameNumber}`);
    //     for (let i=0;i< rocks.length; i++ ){
    //         rocks[i].update();
    //       }   
}
init();
