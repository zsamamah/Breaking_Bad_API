// let data;
// async function getData(){
//     const fetched = await fetch("https://www.breakingbadapi.com/api/characters");
//     data = await fetched.json();
//     // console.log(data[0]);
//     for(let i=0;i<data.length;i++){
//         const a=document.getElementById("actor");
//         const x=document.createElement("option");
//         const b=document.createTextNode(data[i].name);
//         x.appendChild(b);
//         x.setAttribute("value",i);
//         a.appendChild(x);
//     }
//     // alert("loaded");
//     document.getElementById("name").innerHTML=data[0].name;
// }
// getData();

let my_data;
fetch("https://www.breakingbadapi.com/api/characters")
.then(function(response){
    // console.log(response);
    return response.json();
})
.then(function(data){
    // console.log(data);
    my_data=data;
    for(let i=0;i<data.length;i++){
    const a=document.getElementById("actor");
    const x=document.createElement("option");
    const b=document.createTextNode(data[i].name);
    x.appendChild(b);
    x.setAttribute("value",i);
    a.appendChild(x);
    }
    console.log(data[0]);
})
.catch((err)=>{console.log("error="+err)});

function change(){
    const index = document.getElementById("actor").value;
    document.getElementById("a_name").innerText=my_data[index].name;
    document.getElementById("bdate").innerHTML=my_data[index].birthday;
    document.getElementById("a_img").src=my_data[index].img;
    document.getElementById("nickname").innerHTML=my_data[index].nickname;
    document.getElementById("portrayed").innerHTML=my_data[index].portrayed;
    document.getElementById("status").innerHTML=my_data[index].status;
    document.getElementById("occupation").innerHTML="";
    for(let i=0;i<my_data[index].occupation.length;i++)
        document.getElementById("occupation").innerHTML+=my_data[index].occupation[i] + "\n";
}