// Set the button 
let count =0;
const valueSpan = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

// Select all bttons
buttons.forEach((btns)=>{
    btns.addEventListener('click',()=>{
        if(btns.classList.contains('increase')){
            count++;
            console.log(count);   
        }else if(btns.classList.contains('reset')){
            count=0;
            console.log(count);
        }else if(btns.classList.contains('decrease')){
            count--;
            console.log(count);
        }
        valueSpan.textContent=count;
        
        colorize()
    })

})

function colorize(){
    if(count<0){
        valueSpan.style.color = 'red';
    }else if(count>0){  
        valueSpan.style.color = 'green'
    }else{
        valueSpan.style.color = 'black'
    }
}




