let slider = document.getElementById('myRange');
let setPasswordLength = document.getElementById("password_length");
setPasswordLength.innerText = slider.value;
let password_length = parseInt(slider.value);
let password = document.getElementById('final_password');
slider.oninput = function(){
    setPasswordLength.innerText = this.value;
    password_length = parseInt(this.value, 20);
}
let str = "";
function validateMaxPossibleCharOfPassword()
{        str = "";
        let upper_case = document.getElementById('upper_case');
        let lower_case = document.getElementById('lower_case');
        let numberr = document.getElementById('number');
        let spcl_char = document.getElementById('special_char');
        if(upper_case.checked)
        {
            str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(lower_case.checked)
        {
            str+="abcdefghijklmnopqrstuvwxyz";
        }
        if(numberr.checked)
        {
            str+="0123456789";
        }
        if(spcl_char.checked)
        {
            str+="#@$"
        }
}
function generate()
{    let pass="";
     slider.oninput = function(){
        setPasswordLength.innerText = this.value;
        password_length = parseInt(this.value);
    }
    console.log("legnth", password_length, "\n");
     for(let i=1;i<=password_length;i++)
     {
         let char = Math.floor(Math.random()*str.length);
         pass+=str.charAt(char);
     }
     console.log("pass ", pass, "\n");
     if(pass.length>0)
     {
        password.innerHTML = pass;
     }
     
}
document.getElementById('btn').addEventListener('click',generate);
document.getElementById('btn_copy').addEventListener('click',()=>{
    navigator.clipboard.writeText(password.textContent);
   // alert("Copied the text: " +  password.textContent);
})
