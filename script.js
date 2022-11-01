// tag off informations 
class Information extends HTMLElement {
    connectedCallback(){
        let title = this.getAttribute('title')
        let details = this.getAttribute('details')
        this.innerHTML = `<p><b> ${title} : </b>${details}</p>`
    }
}
customElements.define('add-info',Information)
// presentation of my certificate :
let certificates = [
    'wordpress',
    'Websites_Design_with_HTML&CSS',
    'PBPFF',
    'front_end_course',
    'FFS_for_Business',
    'BPFFS_specialization'
]
let num = 0
function pass(value){
    if (value == '+') {
        if (num < certificates.length) {
            document.getElementById('cert').src = `my_certficate/${certificates[num]}.jpg`
            num++
        } else {
            num = 0
        }
    }
    else {
        if (num != 0) {
            document.getElementById('cert').src = `my_certficate/${certificates[num-1]}.jpg`
            num--
        } else {
            num = certificates.length
        }
    }
}