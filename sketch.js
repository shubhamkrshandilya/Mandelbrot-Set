let maxCount;
function setup() {
   createCanvas(480,480);
   background(31);
   maxCount = 100;
   loadPixels();
   for(let i=0; i <= width; i+=1){
      for(let j=0; j <= height; j+=1){
         let xt = map(i, 0, width, -2.5, 2);
         let yt = map(j, 0, height, -2, 2);
         let p = (i + j*width)*4;
         let col = numOfIteration(xt, yt);
         pixels[p + 0] =  col*255;
         pixels[p + 1] =  col*120;
         pixels[p + 2] =  col*183;
         pixels[p + 3] =  200;
      }
   }
   updatePixels();
}

function numOfIteration(xt, yt){
   let iCount = 0, x = 0, y = 0;
   while(x*x + y*y <= 4 && iCount < maxCount){
      let temp = x*x - y*y + xt;
      y = 2*x*y + yt;
      x = temp;
      iCount += 1;
   }
   return map(iCount, 0, maxCount, .2, .9);
}
