/** @param {HTMLButtonElement} el */
var disabled = false
var realans = '_'
for (const [i, el] of document.querySelectorAll('button[ansbtn=""]').entries()){
    console.log(el)
    let realansbtn = false
    let clickedthisbtn = false
    if (typeof el.id==="string" && el.id==='correctans'){
        el.removeAttribute('id')
        realansbtn = true
        realans = el.textContent
    }
    el.addEventListener('click', (_ev)=>{
            if (disabled) return
            disabled = true
            const datarecEv = new Event('DXPL_ONDONECLICK')
            clickedthisbtn = true
            document.querySelectorAll('button[ansbtn=""]').forEach((el2)=>el2.dispatchEvent(datarecEv))
            setTimeout(()=>{
                location.replace('/quiz')
            }, 5000)
    })
    el.addEventListener('DXPL_ONDONECLICK', (_ev)=>{
        el.classList.remove('btn-outline-light')
        if (realansbtn) el.classList.add(`btn${clickedthisbtn?'':'-outline'}-success`)
        else el.classList.add(`btn${clickedthisbtn?'':'-outline'}-danger`)
    })
}