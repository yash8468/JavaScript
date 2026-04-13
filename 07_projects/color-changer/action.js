const button=document.querySelectorAll(".button")
const body=document.querySelector("html")

button.forEach(function(button){
    console.log(button);

    button.addEventListener("click",function(e){

        console.log(e)
        const color=e.target.id;

        switch(color){
            case "grey":
                body.style.backgroundColor=`${color}`
                break;
            case "white":
                body.style.backgroundColor=`${color}`
                break;
            case "blue":
                body.style.backgroundColor=`${color}`
                break;
            case "yellow":
                body.style.backgroundColor=`${color}`
                break;
            case "black":
                body.style.backgroundColor=`${color}`
                break;
            case "red":
                body.style.backgroundColor=`${color}`
                break;
            default:
                console.log("click correctly on the box");
                break;
        }

    
    });
})