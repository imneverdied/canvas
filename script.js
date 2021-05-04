var AAA = 1;
var currentDateTime = "";
function draw() {
  var canvas = document.getElementById("canvas");
  var image = document.getElementById("image");
  image.src = canvas.toDataURL();

  // canvas.width = canvas.clientWidth * window.devicePixelRatio;
  // canvas.height = canvas.clientHeight * window.devicePixelRatio;
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    var ALLwidth = 300;
    var ALLlength = 100;
    ctx.clearRect(0, 0, ALLwidth, ALLlength); //畫布重設

    ctx.fillRect(25, ALLlength, ALLwidth, 3); //X軸
    ctx.fillRect(25, 0, 3, ALLlength); //Y軸

    //ctx.fillStyle = "blue";     //顏色
    //ctx.fillRect(X軸位置, Y軸位置, 寬度, 高度); //Y軸

    for (let i = 25; i < ALLwidth; i += 25) {
      ctx.fillRect(i, 95, 3, 5); //X軸刻度
    }
    for (let i = 0; i < ALLlength; i += 25) {
      ctx.fillRect(25, i, 7, 3); //Y軸刻度
    }

    //ctx.fillStyle = "blue"; //顏色
    //ctx.fillRect(50, 66, 3, 3);

    //ctx.moveTo(50, 50);
    ctx.beginPath();
    for (let i = 50; i < ALLwidth; i += 25) {
      let ran = Math.floor(Math.random() * 100) + 1;
      ctx.lineTo(i, ran);
    }
    ctx.stroke();
  }

  ctx.fillText("0", 15, 100);
  ctx.fillText("25", 10, 80);
  ctx.fillText("50", 10, 55);
  ctx.fillText("75", 10, 30);
  ctx.fillText("100", 5, 7);

  ctx.fillText(moment().format("HH:mm:ss"), 250, 10);

  if (AAA === 1) {
    var num = 1;
    for (let i = 50; i < ALLwidth; i += 25) {
      ctx.fillText(num, i, 115);
      num++;
    }
    AAA = AAA + 1;
  }
  document.getElementById("link").click();
  setTimeout("draw()", 1000);
}
