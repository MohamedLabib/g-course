let screen   = document.getElementById('screen');
let buttonArea  = document.querySelector('.buttons');
let buttons  = document.querySelectorAll('.button');

buttons.forEach((e)=>{
    e.addEventListener('click', (btn)=>{
        switch(btn.target.innerText){
            case("c"):
            screen.innerText = '';
            break ;
            case('←'):
            screen.innerText = screen.innerText.slice(0, -1);
            break;
            case('='):
            try{
                screen.innerText = eval(screen.innerText);
            }catch{
                screen.innerText = 'Error!'
            }
            break;  
            default:
                screen.innerText += btn.target.innerText ; 
        }

    })
})