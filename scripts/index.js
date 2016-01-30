window.onload=function(){
	var dakk=document.getElementById('dakk');
	var tu=document.getElementsByClassName('tu');
	var biaodian=document.getElementsByClassName('biaodian');
	var zuozuo=document.getElementById('zuozuo');
	var youyou=document.getElementById('youyou');
	var index=1;
	var timerId;
	var time=2000;
	var els2=biaodian[0];
	els2.style.background='white';
	var previous=tu[0];
	previous.style.display='block';
	var kaiguan=true;
		
	var fn=function(){
		if(index==5){
			index=0;
		}
		previous.style.display='none';
		els2.style.background=null;
		tu[index].style.display='block';
		biaodian[index].style.background='white';
		previous=tu[index];
		els2=biaodian[index];
		index++; 	
	}
	timerId=setInterval(fn,time);
	for(var i=0;i<biaodian.length;i++){ 
		biaodian[i].index=i;
		biaodian[i].onclick=function(){
			els2.style.background=null;
			this.style.background='white';
			previous.style.display='none';
			tu[this.index].style.display='block';
			clearInterval(timerId);
			els2=this;
			previous=tu[this.index];
			kaiguan=false;
			index=this.index;
		}
		tu[i].onmouseover=function(){
			clearInterval(timerId);
		}
		tu[i].onmouseout=function(){
			if(kaiguan==true){
				timerId=setInterval(fn,time);
			}
		}
	}

	youyou.onclick=function(){
		if(index==4){index=-1;}
			index++;
			previous.style.display='none';
			els2.style.background=null;
			tu[index].style.display='block';
			biaodian[index].style.background='white';
			previous=tu[index];
			els2=biaodian[index];
			kaiguan=false;
			// if(kaiguan==true){
				clearInterval(timerId);
			// }		
	}
	zuozuo.onclick=function(){
		if(index==0){index=5;}
			index--;
			previous.style.display='none';
			els2.style.background=null;
			tu[index].style.display='block';
			biaodian[index].style.background='white';
			previous=tu[index];
			els2=biaodian[index];
			kaiguan=false;
			// if(kaiguan==true){
				clearInterval(timerId);
			// }
	}

 // （function(){
 // 	// xxxxxxxxxxxxxxxxx
 // 	// xxxxxxxxxx
 // 	// xxxxxxxx
 // })();

 // （function(){
 // 	// xxxxxxxxxxxxxxxxx
 // 	// xxxxxxxxxx
 // 	// xxxxxxxx
 // })();

 // （function(){
 // 	// xxxxxxxxxxxxxxxxx
 // 	// xxxxxxxxxx
 // 	// xxxxxxxx
 // })();
	// youyou.onclick=(function(){
	// 	var ind=0;
	// 	return function(){
	// 		if(ind==3){
	// 			return;
	// 		}
	// 		console.log(1);
	// 		ind++
	// 	}
	// })();

}