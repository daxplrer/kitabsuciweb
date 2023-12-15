/** @type {HTMLInputElement} */
const searchinp = document.querySelector('input#searchinp')//#searchinp
const searchbtn = document.querySelector('button#searchbtn')
const refbtns = document.querySelectorAll('button[ke_doa=""]')
var ontype = false
var timeout
function istyping(){
    return ontype
}
searchbtn.addEventListener('click', (_ev)=>{
    /** @type {string} */
const currenttxt = (searchinp.value.toLowerCase())
    let containstxt = false
    refbtns.forEach((el, _i)=>{
        console.log(el.textContent.includes(currenttxt, 0), currenttxt)
    console.log(el.textContent)
    if (!el.classList.contains('d-hidden')) el.classList.add('d-hidden') 
    if ((el.textContent.toLowerCase()).includes(currenttxt, 0)) {
        if (el.classList.contains('d-hidden')) el.classList.remove('d-hidden')
        containstxt = true
    }
})
})