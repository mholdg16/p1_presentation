let color_text = "#DCDCDC";
let color_background = "#1E1E1E";
let color_positive = "#A63446";
let color_negative = "#007EA7";
let color_threshold = "#E5D352";
let color_ROC = "#048A81";
let color_random_line = "#C03221";

let window_size = 480;

let positive_data = [0,0,0,0,2,5,8,4,3,0,0];
let negative_data = [0,3,5,7,4,2,0,0,0,0,0];

let threshold = 5;

function setup() {
    let canvas = createCanvas(window_size*2,window_size);
    canvas.parent('ROCAUC_container');
}

function draw() {
    background(color_background);
    drawAxes();
    drawDataPlots();
    drawROCPlot();
}

function drawAxes() {
    stroke(color_text);
    strokeWeight(4);
    //Draw ROC-AUC axes
    line(50,50,50,window_size-50);
    line(50,window_size-50,window_size-50,window_size-50);
    line(50,50,40,60);
    line(50,50,60,60);
    line(window_size-50,window_size-50,window_size-60,window_size-40);
    line(window_size-50,window_size-50,window_size-60,window_size-60);
    //Draw text
    fill(color_text);
    strokeWeight(1);
    textSize(24);
    textStyle(NORMAL);
    text('FPR', window_size / 2 - 20, window_size - 20);
    translate(35, window_size / 2 + 40);
    rotate(-HALF_PI);
    text('TPR',0,0);
    rotate(HALF_PI);
    translate(-35, -(window_size / 2 + 40));

    //Draw data threshold axes
    strokeWeight(4);
    line(window_size+50,50,window_size+50,window_size-50);
    line(window_size+50,window_size-50,2*window_size-50,window_size-50);
    line(window_size+50,50,window_size+40,60);
    line(window_size+50,50,window_size+60,60);
    line(2*window_size-50,window_size-50,2*window_size-60,window_size-40);
    line(2*window_size-50,window_size-50,2*window_size-60,window_size-60);
    //Draw text
    strokeWeight(1);
    textSize(24);
    textStyle(NORMAL);
    text('Probability', 3*window_size / 2 - 40, window_size - 20);
    translate(window_size+35, window_size / 2 + 40);
    rotate(-HALF_PI);
    text('Count',0,0);
    rotate(HALF_PI);
    translate(-(window_size+35), -(window_size / 2 + 40));
}

let sf = (window_size-100)/10;
function drawDataPlots() {
    //Draw positives
    stroke(color_positive);
    strokeWeight(4);
    let lx = 0, ly = 0;
    for ( let i = 0; i < 11; i++ ) {
        line(window_size+50+lx*sf,window_size-50-ly*sf,window_size+50+i*sf,window_size-50-positive_data[i]*sf);
        lx = i; ly = positive_data[i];
    }

    //Draw negatives
    stroke(color_negative);
    lx = 0, ly = 0;
    for ( let i = 0; i < 11; i++ ) {
        line(window_size+50+lx*sf,window_size-50-ly*sf,window_size+50+i*sf,window_size-50-negative_data[i]*sf);
        lx = i; ly = negative_data[i];
    }

    //Draw threshold line
    stroke(color_threshold);
    line(window_size+50+threshold*sf, 50,window_size+50+threshold*sf,window_size-50);
}
function drawROCPlot() {
    let fprs = [0,0,0,0,0,0,0,0,0,0,0];
    let tprs = [0,0,0,0,0,0,0,0,0,0,0];
    for ( let i = 0; i < 11; i++ ) {
        let tp = positive_data.slice(i,positive_data.length).reduce(sumArray);
        let p = positive_data.reduce(sumArray);
        tprs[i] = tp / p * 10;

        let fp = negative_data.slice(i,negative_data.length).reduce(sumArray);
        let n = negative_data.reduce(sumArray);
        fprs[i] = fp / n * 10;
    }

    stroke(color_ROC);
    strokeWeight(4);
    let lx = 10, ly = 10;
    let tx, ty;
    for ( let i = 0; i < 11; i++ ) {
        line(50+lx*sf, window_size-50-ly*sf, 50+fprs[i]*sf, window_size-50-tprs[i]*sf);
        lx = fprs[i]; ly = tprs[i];

        if ( i == threshold ) {
            tx = 50+fprs[i]*sf;
            ty = window_size-50-tprs[i]*sf;
        }
    }
    stroke(color_threshold);
    fill(color_threshold);
    ellipse(tx,ty,15);

    stroke(color_random_line);
    strokeWeight(2);
    line(50,window_size-50,window_size-50,50);
}

function keyPressed() {
    if ( key == 'r') {
        positive_data = [0,0,0,0,2,5,8,4,3,0,0];
        negative_data = [0,3,5,7,4,2,0,0,0,0,0];
    } else if (key === 'a') {
        for ( let i = 0; i < 10; i++ ) {
            positive_data[i] = positive_data[i+1];
        }
    } else if (key === 'd') {
        for ( let i = positive_data.length-1; i > 0; i-- ) {
            positive_data[i] = positive_data[i-1];
        }
    } else if (key === 'z') {
        for ( let i = 0; i < 10; i++ ) {
            negative_data[i] = negative_data[i+1];
        }
    } else if (key === 'x') {
        for ( let i = negative_data.length-1; i > 0; i-- ) {
            negative_data[i] = negative_data[i-1];
        }
    } else if (key === 'q') {
        threshold -= 1;
    } else if (key === 'e') {
        threshold += 1;
    }
}

function sumArray(total, num) {
    return total + num;
}
