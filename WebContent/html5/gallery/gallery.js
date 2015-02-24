function picClick(){
	/*alert(event.currentTarget.tagName);*/
	/*event.stopPropagation();*/
	
	/*if(event.target.tagName != "IMG")return;*/
	var img = document.createElement("img");
	img.src = event.target.src;
	img.style.height = "0px"
	
	img.addEventListener("show", function(e){
		alert("show show SHOW");
	});
	/*var box = document.getElementById("gallery-show-box");*/
	var box = document.querySelector(".gallery-show-box");
	var last;
	while(last = box.lastChild)
		box.removeChild(last);
	box.appendChild(img);
	
	move(img, "height","250px",1000,linear);
	
	event.preventDefault();
}

/*function move(target,to){
	if(target.style.left=="")
		target.style.left="0px";
	
	var from = parseInt(target.style.left);
	var to = parseInt(to);
	to = to + from;
	
	var id = setInterval(function(){
		from += 1*(to<from ? -1 : 1);
		
		if(from==to){
			clearInterval(id);
			target.style.left = to + "px";
			return;
		}
		target.style.left = from + "px";
			
	}, 10);
}*/
/*function move(target, property, to){
	if(target.style[property]=="")
		target.style[property]="0px";
	
	var from = parseInt(target.style[property]);
	var to = parseInt(to);
	to = to + from;
	
	var id = setInterval(function(){
		from += 1*(to<from ? -1 : 1);
		
		if(from==to){
			clearInterval(id);
			target.style[property] = to + "px";
			return;
		}
		target.style[property] = from + "px";
			
	}, 10);
}*/

function move(target, property, to, duration,easing){
	if(target.style[property]=="")
		target.style[property]="0px";
	
	var from = parseInt(target.style[property]);
	var to = parseInt(to);
	/*to = to + from;*/
	var start = new Date;
	
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed /duration;
		
		if(progress>1)
			progress=1;
		/*target.style[property] = (from+(to-from)*progress)+"px";*/
		if(easing)
			target.style[property] = (from+(to-from)*easing(progress))+"px";
		else
			target.style[property] = (from+(to-from)*progress)+"px";
		if (progress == 1){
			clearInterval(id);
			/*callback;*/
		}
	}, 10);
}
function aa(progress){
	return progress;
}
function linear(progress){
	return Math.pow(progress, 2);
}

window.addEventListener("load", function(){
	/*var pic1 = document.getElementById("gallery-pic1");
	var pics = document.getElementById("gallery-pic-list");*/
	var pic1 = document.querySelector("#gallery-pic1");
	var pics = document.querySelector(".gallery-pic-list");
	
	var file = document.getElementById("gallery-file");
	var fileButton = document.getElementById("file-button");
	
	fileButton.addEventListener("click", function(){
		var event = document.createEvent("MouseEvent");
		event.initEvent("click",true,true);
		
		var file = document.getElementById("gallery-file")
		file.dispatchEvent(event)
	});
	
	/*pics.onclick = picClick;
	pic1.onclick = picClick;*/
	
	pic1.addEventListener("click", picClick, false);
	pics.addEventListener("click", picClick, false);
	
	var prevBtn = document.querySelector(".gallery-prev-button");
	var nextBtn = document.querySelector(".gallery-next-button");
	
	
	prevBtn.addEventListener("click", function(){
		move(pics, "left", "-120px", 1000, aa);
	});
			
	nextBtn.addEventListener("click", function(){
		move(pics, "left", "120px", 3000, linear);
	});
	/*pics.style.left = 0;
	prevBtn.addEventListener("click", function(){
		var from = parseInt(pics.style.left);
		var to = from -120;
		var id = setInterval(function(){
			from -=1;
			if(from<to)
				clearInterval(id)
				pics.style.left = from+"px";
		}, 10)
	});
	nextBtn.addEventListener("click", function(){
		pics.style.left = "120px";
	});*/
	
	/*fileButton.addEventListener("click", function(){
		var event = new MouseEvent("click",{
			'view': window,
			'bubbles': true,
			'cancelable': true
		});
		var file = document.getElementById("gallery-file")
		file.dispatchEvent(event);
	});*/
	
	/*var pic1 = document.getElementById("gallery-pic1");
	var pic2 = document.getElementById("gallery-pic2");
	var pic3 = document.getElementById("gallery-pic3");*/
	/*pic1.onclick = picClick;
	pic2.onclick = picClick;
	pic3.onclick = picClick;*/
});


























