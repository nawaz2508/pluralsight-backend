document.getElementById("absibtns").addEventListener("click",absign);
async function absign() {
    let login_data={
        username:document.getElementById("absiu").value,
        password:document.getElementById("absip").value
    }

    login_data=JSON.stringify(login_data);
    console.log(login_data);
    let re=`https://masai-api-mocker.herokuapp.com/auth/login`

    let ret=await fetch(re,{
        method:"post",
        body:login_data,
        headers:{
            "content-type":"application/json"
        },
    })

    let data=await ret.json();
    console.log(data)

    let username=document.getElementById("absiu").value;
    let token=data.token;
    
    
    if(token==undefined){
        alert("PLEASE ENTER A VALID USERNAME")
        return;
    }else{
        alert("YOU HAVE SUCCESSFULLY LOGIN")
       getprofile(username,token);

    setTimeout(function(){
        window.location.href="/home"
    },3000)

    }
    
    async function getprofile(username,token){
            console.log(token)
        let api=`https://masai-api-mocker.herokuapp.com/user/${username}`

        let res=await fetch(api,{
            method:"get",
            headers:{
                "content-type":"applicationprofile",
                Authorization: `Bearer ${token}`
            }
        });

        let ab=await res.json();
        console.log(ab)
        document.getElementById("absiappend").append("HI!"+"---"+ab.name)
        localStorage.setItem("username",JSON.stringify(ab.name))
    }
    
        
}
