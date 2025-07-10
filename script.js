//your JS code here. If required.
 const name = document.getElementById("name").value.trim();
 const age = document.getElementById("age").value.trim();
 /* validation lagao  */
if(name === " " || age === " "){
	 alert(Please enter valid details.);
}
 /* Convert age to number for comparison */
      const ageNumber = Number(age);

// promise create

const myAgePromise = new promise( (resole,reject) =>{
	setTimeOut(()=>{
		if( myAgePromise > 18){
			resolve(name);
		}
		else{
			reject(name);
		}
	},4000);
});

// handle promise results
myAgePromise.then((name)=>{
	alert(Welcome, . You can vote.);
}).catch(()=>{
	alert(Oh sorry . You aren't old enough.);
})

