var x=document.getElementById('sidenav')
var y=document.getElementById('burger')
var z=document.getElementById('space')
const a=document.querySelector(".icon")
const cir=document.getElementById("circel")
const rec= document.getElementById("rectangle")
const hver=document.getElementById("hver")
const t2=document.getElementById("t2")
const i1=document.getElementById("image1")
const sec1=document.getElementById("sec1")
const sec2=document.getElementById("sec2")
const about=document.getElementById("about")
const name=document.getElementById("name")
const pro=document.getElementById("pro")
const pro1=document.getElementById("pro1")
const pro2=document.getElementById("pro2")
const pro3=document.getElementById("pro3")
const adr=document.getElementById("adr")
const abt=document.getElementById("abt")
const home=document.getElementById("home")
const hire=document.getElementById("hire")
const contact=document.getElementById("contact")
const blog=document.getElementById("blog")



//blog h1 p animation
blog.addEventListener("click",()=>{
    document.getElementById("s3h1").setAttribute("class","s3c1");
    document.getElementById("s3p").setAttribute("class","s3c2");
    document.getElementById("s3p2").setAttribute("class","s3c2");
})
function removerFun(){
    document.getElementById("s3h1").removeAttribute("class");
    document.getElementById("s3p").removeAttribute("class");
    document.getElementById("s3p2").removeAttribute("class");
}
//about page animation
home.addEventListener("click",()=>{
    secFun2();
    removerFun();
})
hire.addEventListener("click",()=>{
    secFun2()
    removerFun();
})
contact.addEventListener("click",()=>{
    secFun2()
    removerFun();
})
blog.addEventListener("click",()=>{
    secFun2()
})
abt.addEventListener("click",()=>{
    secFun1()
    removerFun();
})
function secFun1(){
    document.getElementById("about").setAttribute("class","sec2about");

    // about.style.opacity="1";
    // name.style.left="280px";
    // pro.style.right="270px";
    // pro1.style.left="480px";
    // pro2.style.right="455px";
    // pro3.style.left="620px";
    // adr.style.right="400px";
}
function secFun2(){
    document.getElementById("about").removeAttribute("class");

    // about.style.opacity="0";
    // name.style.left="0";
    // pro.style.right="0";
    // pro1.style.left="0";
    // pro2.style.right="0";
    // pro3.style.left="0";
    // adr.style.right="0";
}
//section 1 image box and text;
hver.addEventListener("mouseover",()=>{
    t2.style.left="37%";
    i1.style.left="41%";
    hver.addEventListener("mouseout",()=>{
        t2.style.left="35%";
        i1.style.left="43%";
    })
});
i1.addEventListener("mouseover",()=>{
    t2.style.left="37%";
    i1.style.left="41%";
    i1.addEventListener("mouseout",()=>{
        t2.style.left="35%";
        i1.style.left="43%";
    })
});
t2.addEventListener("mouseover",()=>{
    t2.style.left="37%";
    i1.style.left="41%";
    t2.addEventListener("mouseout",()=>{
        t2.style.left="35%";
        i1.style.left="43%";
    })
});
//burger
document.getElementById('burger').addEventListener("click",()=>{
    if(x.style.width==="250px"){
       a.classList.remove('toggle');
        y.style.left="10px";
        z.style.width="0";
        x.style.width=0; 
    }else{
        a.classList.add('toggle');
        y.style.left="190px";
        z.style.width="250px";
        x.style.width="250px";
    }
    // x.style.width==="250px" ? x.style.width=0 : x.style.width="250px";
});
//  switch
rec.addEventListener("click",()=>{ 
   if(cir.style.left==="21px"){
       cir.style.left="2px";
       rec.style.background="#202122";
       document.body.style.backgroundColor = " #202122";
       z.style.backgroundColor="#202122";
       cir.style.background="#7c887f";
       home.style.backgroundColor=" #202122";
       abt.style.backgroundColor=" #202122";
       blog.style.backgroundColor=" #202122";
       hire.style.backgroundColor=" #202122";
       contact.style.backgroundColor=" #202122";
   }else{
       cir.style.left="21px";
       rec.style.background="#7c887f";
       z.style.backgroundColor=" #7c887f";
       document.body.style.backgroundColor=" #7c887f";
       cir.style.background="#202122";
       home.style.backgroundColor=" #7c887f";
        abt.style.backgroundColor=" #7c887f";
        blog.style.backgroundColor=" #7c887f";
        hire.style.backgroundColor=" #7c887f";
        contact.style.backgroundColor=" #7c887f";
   }
});




// #e81230;
// rgb(110, 22, 99); }   


