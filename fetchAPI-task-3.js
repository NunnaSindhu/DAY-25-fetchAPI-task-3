//select the target elemet to display additional info
const displaymore= document.querySelector(".display");
//select the element to display some random jokes
const randomjokesDisplay= document.querySelector(".randomJokes");
randomjokesDisplay.innerHTML="Chuck Norris Jokes Here...."

//create a function to get the data
async function getData(){
    try{
const data= await fetch("https://api.chucknorris.io/jokes/random");
const response= await data.json();
return response;
console.log(response);
    }catch(error){
        console.log(error);
    }
}

//create a function to get the random jokes when you click the button
const randomJokes= async ()=>{
    const jokes= await getData();
    console.log(jokes);
    randomjokesDisplay.innerHTML=`
<div class="sub-container1">
${jokes.value}
</div>`;
}
//create a displayMore function to display addition info
const displayMore = async ()=>{
    const jokes= await getData();
    console.log(jokes);
    displaymore.innerHTML+=`
    <div class="sub-container2">
    <p><span>Created Date: ${jokes.created_at}</span>  <span>Updated Date: ${jokes.updated_at}</span></p>
    <a href="${jokes.url}" alt="chuknorris">Click Here For More Jokes</a>
    </div>`;
}
//call the function to display the content 
displayMore();