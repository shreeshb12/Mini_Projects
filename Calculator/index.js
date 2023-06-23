const display=document.getElementById('display');
const buttons=document.querySelectorAll('button');
display.value="00";
console.log(display);
buttons.forEach((btn) => {
    btn.addEventListener('click',(event)=>{
        if(event.target.id==='ac'){
            display.value="00";
        }
        else if(event.target.id==='de')
        {
            display.value=display.value.slice(0,-1)
        }
        else if(event.target.id==='='){
            display.value=eval(display.value);
        }
        else{
            if(display.value=='00')
            {
                display.value=event.target.id;
                return;
            }
            display.value+=event.target.id;
        }
    })
});