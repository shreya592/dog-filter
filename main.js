noseX= 0;
noseY= 0;

function preload()
{
nose= loadImage('https://i.postimg.cc/mk3FFN3t/unnamed-1.png');
}

function setup()
{
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
image(video, 0, 0, 300, 300);
fill(255, 0, 0);
stroke(255, 0, 0);
//circle(noseX, noseY, 20);
image(nose, noseX, noseY, 70, 70);
}

function take_snapshot()
{
    save("dog filter.png");
}

function modelLoaded()
{
    console.log("Pose net is initlized");
    
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x-30;
        noseY= results[0].pose.nose.y-30;
        console.log("nose x= " + noseX);
        console.log("nose y= " + noseY);
    }
}