// Tags :
customElements.define('add-member',class extends HTMLElement{
    connectedCallback(){
        let shadow = this.attachShadow({mode:'closed'})
        shadow.innerHTML = `<p>
                            <b>&nbsp;&nbsp;${this.getAttribute('name')} :</b>
                            ${this.getAttribute('rank')} .
                        </p>`
    }
})
//  coding
let output = `<div class="code" id="code">
                <h3>أعضاء الفريق</h3>
                <add-member name="عبدالرحيم" rank="قائد الفريق"></add-member>
                <add-member name="محمد" rank="مساعد القائد"></add-member>
                <add-member name="فارس" rank="مسوق الفريق"></add-member>
                <add-member name="أنس" rank="مصمم الفريق"></add-member>  
                <add-member name="حسام" rank="مبرمج الفريق"></add-member>  
                <add-member name="زهير" rank="منسق الأعمال"></add-member>           
            </div>\n`
let code = `<style>
    .output {
        width: 600px;
        height: 400px;
        border-radius: 15px;
        box-shadow: 0px 0px 7px 0px grey;
        direction: rtl;
        padding: 5px;
        color: rgb(67,67,67);
        font-size: 20px;
        font-family: system-ui;
    }
    h3 {
         text-align-last: center;
    }
    </style>
     <script>
        customElements.define('add-member',class extends HTMLElement{
            connectedCallback(){
                this.innerHTML = "<p><b>&nbsp;&nbsp;{this.getAttribute('name')} :</b>{this.getAttribute('rank')} .</p>"
                }
                })
                </script>
                \n${output}`
// presentation
let n = 0
let printing = setInterval(() => {
        document.getElementById('code').innerHTML += code[n] ;
        n++;
},50);
setTimeout(() => {
    clearInterval(printing);
    let point = 1
    setTimeout(() => {
        timer = setInterval(() => {
            document.getElementById('code').innerHTML = `loading ${' . '.repeat(point)}`
            point++
        },500);
    },150);
    setTimeout(() => {
        clearInterval(timer)
        alert('Be ready bro , the ouput is going to appear in the next momemnt')
        document.getElementById('code').innerHTML = document.getElementById('output').innerHTML
        document.getElementById('code').className = 'output'
        document.getElementById('code').style.display = 'block'
    }, 3000);
}, (code.length)*50);
// close
window.onbeforeunload = function() {
    if (document.getElementById('code').className == 'code') {
        return false
    }
}
//

