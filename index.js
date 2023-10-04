let body = document.querySelector("body");
let btns = document.querySelectorAll(".button")
btns.forEach((item)=>{
    item.addEventListener('click',function(e){
        let change = e.target.id;
        switch (change){
            case "red":
                body.style.backgroundColor="#D80032";
                break;
            case "green":
                body.style.backgroundColor="#186F65";
                break;
            case "blue":
                body.style.backgroundColor="#1450A3";
                break;
            case "dark":
                body.style.backgroundColor="#212121";
                break;
            case "orange":
                body.style.backgroundColor="#CD5C08";
                break;
            case "purple":
                body.style.backgroundColor="#713ABE";
                break;
            case "brown":
                body.style.backgroundColor="#9A3B3B";
                break;
            case "grey":
                body.style.backgroundColor="#7D7C7C";
                break;
        }
    })
})