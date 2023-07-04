import validator from "validator";
export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    };

    init(){
        this.events();
        console.log('init')
    };

    events(){
        if(!this.form) return;
        console.log('event')
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validade(e);
        })
    }

    validade(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]') 
        const passwordInput = el.querySelector('input[name="password"]') 
        console.log(emailInput,passwordInput);
        let error = false;
        if(!validator.isEmail(emailInput.value)){
            alert(this.mensagem('email invalido'));
            console.log('email false')
            error = true;
        }
        if(!passwordInput.value.length < 3 || passwordInput.value.length > 50){
            alert('Senha precisa ter entre 3 e 50 caracteres.');
            error = true;
        }

        if(!error){
            console.log('submit')
            el.submit();
        };
    }

    mensagem(msg){
        let divMsgRow = document.createElement('div');
        divMsgRow.innerHTML(msg);
    }
    
        // <% if(errors.length > 0) { %>
        //     <div class="row">
        //         <div class="col my-1">
        //             <div class="alert alert-danger">
        //                 <% errors.forEach(erro => { %>
        //                     <%= erro %> *
        //                 <% }) %>
        //             </div>
        //         </div>
        //     </div>
        //     <% } %>
    
    
}