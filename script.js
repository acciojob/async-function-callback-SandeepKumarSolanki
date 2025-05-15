const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
const btn = document.getElementById('btn');
btn.addEventListener('click' , async ()=>{
	try {
		let res = await fetch(url);
		let data = await res.json();
		console.log(data);
		
		let output = document.getElementById('output');
		output.innerText = `${data}`;
	} catch (error) {
		console.log(error);
	}
})
