// variables
let timer=document.querySelector('.timer');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');
let seconds=0;
let minutes=0;
let hours=0;

// starts the timer
start.addEventListener('click',(event)=>{
    let time=null;
    let id=setInterval(()=>{
        let string
        seconds+=1;
        if(seconds>=60)
        {
            minutes+=1;
            seconds=0;
            if(minutes>=60)
            {
                hours+=1;
                minutes=0;
            }
        }

        // pause the timer

        timer.innerHTML=((hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds))
        stop.addEventListener('click',()=>{
            clearInterval(id);
        })

        // resets the timer

        reset.addEventListener('click',()=>{
            clearInterval(id);
            seconds=0;
            minutes=0;
            hours=0;
            timer.innerHTML='00:00:00';
        })
    },1000)
})