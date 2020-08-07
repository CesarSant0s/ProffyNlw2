document.querySelector("#add-time")
.addEventListener('click', clonefiled)

function clonefiled() {
    // node(cloneNode) se refere a tags html
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach( a => {
        a.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}