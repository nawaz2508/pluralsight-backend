document.getElementById("absubtns").addEventListener("click", creat);
        
let d;
async function creat(){
    let data={
    name:document.getElementById("absuname").value,
    email:document.getElementById("absuemail").value,
    password:document.getElementById("absupassword").value,
    mobile:document.getElementById("absumobile").value,
    username:document.getElementById("absuusername").value,
    description:document.getElementById("absuabout").value
    }
    console.log(data);
    let response=await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
            method:"post",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        });

    d=await response.json();
    //console.log(d.error);
    abalert(d.error);
}

function abalert(d){
    console.log(d)
    if(d===false){
        alert("YOUR ACCOUNT HAS BEEN SUCCESSFULLY CREATED")
        setTimeout(function(){
            window.location.href="/signin"
        },2000)
    }else{
        alert("USER ALREADY EXISTED")
        
    }
}