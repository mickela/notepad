let buttons = document.getElementsByClassName('promptModal');
    
for(let button of buttons){
    button.addEventListener('click', ()=>{
        const { noteid, notetitle } = button.attributes;

        document.getElementById('title').textContent = notetitle.value + "?";
        document.getElementById('hiddenInp').value = noteid.value;
    })  
}
