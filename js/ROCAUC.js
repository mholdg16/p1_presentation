let color_text = "#DCDCDC";
let color_background = "#1E1E1E";
let color_positive = "#57A64A";
let color_negative = "#9A5334";
let color_threshold = "#FFD700";
let color_ROC = "#4EC9B0";
let color_random_line = "#D69D85";

let window_size = 480;

let positive_data = [0,0,0,0,2,5,8,4,3,0,0];
let negative_data = [0,4,5,7,4,2,0,0,0,0,0];
let offset = { positive: 0, negative: 0 };

let threshold = 5;

function setup() {
    let canvas = createCanvas(window_size*2,window_size);
    canvas.parent('ROCAUC_container');
}

function draw() {
    if (document.documentElement.classList.contains("draw-roc")) {
        background(color_background);
        drawAxes();
        drawDataPlots();
        drawROCPlot();
    }
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
    text('Score', 3*window_size / 2 - 40, window_size - 20);
    translate(window_size+35, window_size / 2 + 40);
    rotate(-HALF_PI);
    text('Antal',0,0);
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
        let ty = positive_data[i + offset.positive] || 0;
        line(window_size+50+lx*sf,window_size-50-ly*sf,window_size+50+i*sf,window_size-50-ty*sf);
        lx = i; ly = ty;
    }

    //Draw negatives
    stroke(color_negative);
    lx = 0, ly = 0;
    for ( let i = 0; i < 11; i++ ) {
        let ty = negative_data[i + offset.negative] || 0;
        line(window_size+50+lx*sf,window_size-50-ly*sf,window_size+50+i*sf,window_size-50-ty*sf);
        lx = i; ly = ty;
    }

    //Draw threshold line
    stroke(color_threshold);
    line(window_size+50+threshold*sf, 50,window_size+50+threshold*sf,window_size-50);
}
function drawROCPlot() {
    let fprs = (new Array(11)).map(() => 0);
    let tprs = (new Array(11)).map(() => 0);

    let roc_auc = 0;

    for ( let i = 0; i < 11; i++ ) {
        let j = i + offset.positive;
        if ( positive_data[j] !== undefined ) {
            let tp = positive_data.slice(j,positive_data.length).reduce(sumArray);
            let p = positive_data.reduce(sumArray);
            tprs[i] = tp / p * 10;
        }

        let k = i + offset.negative;
        if ( negative_data[k] !== undefined ) {
            let fp = negative_data.slice(k,negative_data.length).reduce(sumArray);
            let n = negative_data.reduce(sumArray);
            fprs[i] = fp / n * 10;
        }

        if ( i > 0 && fprs[i] !== undefined && fprs[i-1] !== undefined && tprs[i] !== undefined && tprs[i-1] !== undefined) {
            roc_auc += 0.5*(tprs[i]+tprs[i-1])*(fprs[i-1]-fprs[i]);
        }
    }

    stroke(color_text);
    strokeWeight(2);
    text('ROC-AUC: '+roc_auc.toFixed(0), window_size-100, window_size-10);

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

function keyPressed(event) {
    if (document.documentElement.classList.contains("draw-roc")) {
        switch(event.key) {
            case 'r': offset.positive = offset.negative = 0; threshold = 5; break;
            case 'a': offset.positive++; break;
            case 'd': offset.positive--; break;
            case 'z': offset.negative++; break;
            case 'x': offset.negative--; break;
            case 'q': threshold = Math.max(0, threshold - 1); break;
            case 'e': threshold = Math.min(10, threshold + 1); break;
        }
    }
}

function sumArray(total, num) {
    return total + num;
}
