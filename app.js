let notesContainer=document.querySelector('.notes')
let btn=document.querySelector('.btn')
let notes=document.querySelectorAll('.input-box')

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('notes')
}

showNotes()

btn.addEventListener('click',()=>{
   let inputBox=document.createElement('p')
   let img=document.createElement('img')
   inputBox.className='input-box'
   inputBox.setAttribute('contenteditable','true')
   img.src="./images/delete.png"
   inputBox.append(img)
   notesContainer.append(inputBox)
   console.log(inputBox);

})

notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }else if(e.target.tagName==='p'){
        notes=document.querySelectorAll('.input-box')
        notes.forEach(element => {
            element.onkeyup=function(){
                updateStorage()
            }
        });
    }
})




let updateStorage=()=>{
    localStorage.setItem('notes',notesContainer.innerHTML)
}

document.addEventListener('keydown',(e)=>{
   if(e.key==='Enter'){
    document.execCommand('insertLineBreak')
    e.preventDefault()
   }
})