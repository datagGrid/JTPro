window.onload=function(){


	let footer=document.querySelector("footer");
	let oA=footer.getElementsByTagName("a");
	console.log(oA);
	
		for(let i=0;i<=oA.length-1;i++){
			oA[i].onclick=function(){
				for(let j=0;j<=oA.length-1;j++)
				{
					oA[j].classList.remove("active");
				}
				oA[i].classList.add("active");
			}
		}
		
	}
