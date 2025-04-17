// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let  ball=4, x= [0,canvas.width,0,0],y= [0,0,canvas.height,100], dx=[5,5,5,5], dy= [5,5,5,5], r= [70,40,30,20], color = ["#0095DD","red","yellow","green"],m= [70,40,30,20] ;

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
	
	for( let i=0 ; i < ball ; ++i)
	{
		x[i] = x[i] + dx[i];
		y[i] = y[i] + dy[i];

	}
		
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
	for( let i=0 ; i < ball ; ++i)
	{
		if(  x[i] < 0|| x[i] > canvas.width  )  dx[i] = -dx[i];
	    if(  y[i] < 0|| y[i] > canvas.height )  dy[i] = -dy[i];

	}
    
	for( let i=0 ; i < ball ; ++i)
	{
		for( let j=i+1 ;  j< ball ; ++j)
	  {
		if((x[i]-x[j])*(x[i]-x[j]) + (y[i]-y[j])*(y[i]-y[j]) <= (r[i]+r[j])*(r[i]+r[j]))
		{
		  
		  
		   [dx[i], dx[j]] = [ 2*(m[i]*dx[i]+m[j]*dx[j])/(m[i]+m[j])-dx[i], 2*(m[i]*dx[i]+m[j]*dx[j])/(m[i]+m[j])-dx[j]];
		   [dy[i], dy[j]] = [ 2*(m[i]*dy[i]+m[j]*dy[j])/(m[i]+m[j])-dy[i] ,2*(m[i]*dy[i]+m[j]*dy[j])/(m[i]+m[j])-dy[j]];
		}
		
      }

	}	
	
	 for( let i=0 ; i < ball ; ++i)
	{
		
		drawBall(x[i], y[i], r[i], color[i]);

	}
	 
    requestAnimationFrame(draw);
}
draw();