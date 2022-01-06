// tag off informations 
class Information extends HTMLElement {
    connectedCallback(){
        let title = this.getAttribute('title')
        let details = this.getAttribute('details')
        this.innerHTML = '<p><b>'+title+' : </b>'+details+'</p>'
    }
}
customElements.define('add-info',Information)