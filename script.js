let q1=document.querySelector(".q-1").textContent;
console.log(q1)
let q2=document.querySelector(".q-2").textContent;
console.log(q2)
let q3=document.querySelector(".q-3").textContent;
console.log(q3)
let q4=document.querySelector(".q-4").textContent;
console.log(q4)
let q5=document.querySelector(".q-5").textContent;
console.log(q5)

let submit =document.querySelector(".Submit")
console.log(submit)
submit.addEventListener("click",()=>{
    async function check(q1,q2,q3,q4,q5){
        score = 0;
        if (q1 === " What is the capital of France?" ){
            let ans = await document.querySelector(".ans1")
            console.log(ans.value)
            if (ans.value === "paris"){
               score+=1;
            }
        }
        if (q2 === " How many continents are there on Earth?" ){
            let ans2 = await document.querySelector(".ans2")
            console.log(ans2.value)
            if (ans2.value === "7"){
               score+=1;
            }
        }
        if (q3 === " Who wrote the play Romeo and Juliet?" ){
            let ans3 = await document.querySelector(".ans3")
            console.log(ans3.value)
            if (ans3.value === "william shakespeare"){
               score+=1;
            }
        }
        if (q4 === " What gas do plants absorb from the atmosphere?" ){
            let ans4 = await document.querySelector(".ans4")
            console.log(ans4.value)
            if (ans4.value === "carbon dioxide"){
               score+=1;
            }
        }
        if (q5 === " What planet is known as the Red Planet?" ){
            let ans5 = await document.querySelector(".ans5")
            console.log(ans5.value)
            if (ans5.value === "mars"){
               score+=1;
            }
        }


        let checkScore=document.querySelector(".checkscore")
        checkScore.style.display="block";
        checkScore.innerHTML=`<h3>Your Score = ${score}  🎉</h3>`
    }

    check(q1,q2,q3,q4,q5)
})