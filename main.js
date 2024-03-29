noseX=0;
noseY=0;

difference=0;
rightWristX=0;
LeftWristX=0;



function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(660,150);

    video = createCapture(VIDEO);
    video.size(560,550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    background("#779eb2");

    document.getElementById("square_side").innerHTML = "Width and Height of Your Square is=" + difference +"px";

    fill("#800000");
    stroke("#800000");
    square(noseX,noseY, difference);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!!!!!!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = " +noseX+" noseY= "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX + "rightWristx = "+ rightWristX + "difference= "+ difference )
    }
}