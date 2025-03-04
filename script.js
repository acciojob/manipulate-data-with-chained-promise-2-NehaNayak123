//your JS code here. If required.
const arr=[1, 2, 3, 4];
let output=document.getElementById("output")
function initial(arr){
	const even=[];
	return new Promise(resolve=>{
		for(let t of arr){
			if(t%2==0){
				even.push(t)
			}
		}
		resolve(even)
	})
	.then(()=>{
			setTimeout(()=>{
				output.innerHTML=`${even}`
			},1000)
	})
	.then(()=>{
		output.innerHTML="";
		let mult2=[];
		for(let t of even){
			mult2.push(t*2)
		}
		setTimeout(()=>{
			output.innerHTML=`${mult2}`
		},3000)
	})
}
initial(arr)

