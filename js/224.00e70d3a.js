"use strict";(self["webpackChunkxd"]=self["webpackChunkxd"]||[]).push([[224],{9224:function(s,i,e){e.r(i),e.d(i,{default:function(){return k}});var a=e(3396),t=e(9242),r=e(7139);const l=s=>((0,a.dD)("data-v-0c4d4edc"),s=s(),(0,a.Cn)(),s),n=l((()=>(0,a._)("h1",null,"Регистрация",-1))),o=l((()=>(0,a._)("p",{class:"welcome"},"Здравствуйте, рады Вас видеть!",-1))),d={class:"wrapper__name"},c={class:"wrapper__email"},m={class:"wrapper__password"},h=l((()=>(0,a._)("button",{type:"submit",title:"Submit"},"Зарегистрироваться",-1))),p=l((()=>(0,a._)("br",null,null,-1))),u=l((()=>(0,a._)("br",null,null,-1)));function w(s,i,e,l,w,g){const _=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("main",null,[(0,a._)("form",{action:"#",method:"post",onSubmit:i[6]||(i[6]=(0,t.iM)(((...s)=>g.checkingForm&&g.checkingForm(...s)),["prevent"]))},[n,o,(0,a._)("div",d,[(0,a._)("span",{class:(0,r.C_)([{active:w.isActiveName},"err"])},(0,r.zw)(w.nameErr),3),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=s=>w.name=s),onBlur:i[1]||(i[1]=(...s)=>g.checkingName&&g.checkingName(...s))},null,544),[[t.nr,w.name]])]),(0,a._)("div",c,[(0,a._)("span",{class:(0,r.C_)([{active:w.isActiveEmail},"err"])},(0,r.zw)(w.emailErr),3),(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":i[2]||(i[2]=s=>w.email=s),onBlur:i[3]||(i[3]=(...s)=>g.checkingEmail&&g.checkingEmail(...s))},null,544),[[t.nr,w.email]])]),(0,a._)("div",m,[(0,a._)("span",{class:(0,r.C_)([{active:w.isActivePassword},"err"])},(0,r.zw)(w.passwordErr),3),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":i[4]||(i[4]=s=>w.password=s),onBlur:i[5]||(i[5]=(...s)=>g.checkingPassword&&g.checkingPassword(...s))},null,544),[[t.nr,w.password]])]),h,(0,a.Wm)(_,{id:"login",rel:"nofollow",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Войти! У меня уже есть аккаунт")])),_:1}),(0,a._)("p",null,[(0,a.Uk)("Нажимая Зарегистрироваться вы соглашаетесь с условиями"),p,(0,a.Wm)(_,{rel:"nofollow",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)(" пользовательского соглашения Xdice")])),_:1}),(0,a.Uk)(" и"),u,(0,a.Uk)("подтверждаете, что Вам есть 18 лет!")])],32)])}e(7658);var g={data(){return{name:"",email:"",password:"",nameErr:"",emailErr:"",passwordErr:"",isActiveName:!1,isActiveEmail:!1,isActivePassword:!1,nameValid:!1,emailValid:!1,passwordValid:!1}},mounted(){document.querySelector(".nav__block--right").style.display="none"},methods:{checkingName(s){this.name.length<=20&&this.name.length>=3?(s.target.style.border="1px solid rgba(38, 161, 123, 0.45)",this.isActiveName=!1,this.nameValid=!0):(s.target.style.border="1px solid rgb(203 0 20 / 45%)",this.name.length<3?(this.nameErr="Минимум 3 символа",this.isActiveName=!0):(this.nameErr="Максимум 20 символов с пробелом",this.isActiveName=!0),this.nameValid=!1)},checkingEmail(s){this.email.length>0&&!1!==Boolean(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))&&!0===this.email.includes("gmail")?(s.target.style.border="1px solid rgba(38, 161, 123, 0.45)",this.isActiveEmail=!1,this.emailValid=!0):(s.target.style.border="1px solid rgb(203 0 20 / 45%)",!1===Boolean(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))?(this.emailErr="Неверный формат почты",this.isActiveEmail=!0):!1===this.email.includes("gmail")&&(this.emailErr="Только почтовый сервис GMAIL",this.isActiveEmail=!0),this.emailValid=!1)},checkingPassword(s){const i=s=>!(s===s.toLowerCase());this.password.length>=8&&this.password.length<=40&&!0===i(this.password)?(s.target.style.border="1px solid rgba(38, 161, 123, 0.45)",this.isActivePassword=!1,this.passwordValid=!0):(s.target.style.border="1px solid rgb(203 0 20 / 45%)",this.password.length<8?(this.passwordErr="Минимум 8 символа",this.isActivePassword=!0):this.password.length>40?(this.passwordErr="Максимум 40 символов с пробелом",this.isActivePassword=!0):(this.passwordErr="В пароле должна присутствовать заглавная буква",this.isActivePassword=!0),this.passwordValid=!1)},checkingForm(){!1!==this.nameValid&&!1!==this.emailValid&&!1!==this.passwordValid&&this.$router.push("/confirmation")}}},_=e(89);const v=(0,_.Z)(g,[["render",w],["__scopeId","data-v-0c4d4edc"]]);var k=v}}]);
//# sourceMappingURL=224.00e70d3a.js.map