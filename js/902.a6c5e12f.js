"use strict";(self["webpackChunkxd"]=self["webpackChunkxd"]||[]).push([[902],{7825:function(s,e,i){i.r(e),i.d(e,{default:function(){return v}});var a=i(3396),t=i(9242),r=i(7139),l=i.p+"img/password.1623ec99.svg";const o=s=>((0,a.dD)("data-v-5e5560f7"),s=s(),(0,a.Cn)(),s),n=o((()=>(0,a._)("div",{class:"titleWrapper"},[(0,a._)("h1",null,"Войти"),(0,a._)("p",{class:"welcome"},"Рады снова видеть Вас!")],-1))),d={class:"wrapper__email"},c={class:"wrapper__password"},p=o((()=>(0,a._)("button",{type:"submit",title:"Submit"},"Войти",-1))),m={class:"navWrapper"};function u(s,e,i,o,u,w){const h=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("main",null,[(0,a._)("form",{action:"#",method:"post",onSubmit:e[5]||(e[5]=(0,t.iM)(((...s)=>w.checkingForm&&w.checkingForm(...s)),["prevent"]))},[n,(0,a._)("div",d,[(0,a._)("span",{class:(0,r.C_)([{active:u.isActiveEmail},"err"])},(0,r.zw)(u.emailErr),3),(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=s=>u.email=s),onBlur:e[1]||(e[1]=(...s)=>w.checkingEmail&&w.checkingEmail(...s))},null,544),[[t.nr,u.email]])]),(0,a._)("div",c,[(0,a._)("span",{class:(0,r.C_)([{active:u.isActivePassword},"err"])},(0,r.zw)(u.passwordErr),3),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=s=>u.password=s),onBlur:e[3]||(e[3]=(...s)=>w.checkingPassword&&w.checkingPassword(...s))},null,544),[[t.nr,u.password]]),(0,a._)("img",{src:l,alt:"",onClick:e[4]||(e[4]=(...s)=>w.visibilityPas&&w.visibilityPas(...s))})]),p,(0,a._)("div",m,[(0,a.Wm)(h,{id:"registration",rel:"nofollow",to:"/registration"},{default:(0,a.w5)((()=>[(0,a.Uk)("Регистрация")])),_:1}),(0,a.Wm)(h,{id:"updatePassword",rel:"nofollow",to:"/registration"},{default:(0,a.w5)((()=>[(0,a.Uk)("Забыли пароль?")])),_:1})])],32)])}i(7658);var w=i(65),h={data(){return{password:"",email:"",isActiveEmail:!1,isActivePassword:!1,emailErr:"",passwordErr:""}},computed:{...(0,w.Se)("UserModules",["getUserData"])},mounted(){""===this.getUserData.userEmail&&(document.querySelector(".nav__block--right").style.display="none")},methods:{...(0,w.OI)("UserModules",["setEmailAndPassword"]),checkingEmail(s){this.email.length>0&&!1!==Boolean(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))&&!0===this.email.includes("gmail")?(s.target.style.border="1px solid rgba(38, 161, 123, 0.45)",this.isActiveEmail=!1,this.emailValid=!0):(s.target.style.border="1px solid rgb(203 0 20 / 45%)",!1===Boolean(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))?(this.emailErr="Неверный формат почты",this.isActiveEmail=!0):!1===this.email.includes("gmail")&&(this.emailErr="Только почтовый сервис GMAIL",this.isActiveEmail=!0),this.emailValid=!1)},checkingPassword(s){console.log(s+"pas")},checkingForm(){!1!==this.emailValid&&!1!==this.passwordValid&&(this.$router.push("/"),this.setEmailAndPassword({email:this.email,password:this.password}),console.log(this.password,this.getUserData))},visibilityPas(){"password"===document.querySelector(".wrapper__password input").type?document.querySelector(".wrapper__password input").type="text":document.querySelector(".wrapper__password input").type="password"}}},_=i(89);const g=(0,_.Z)(h,[["render",u],["__scopeId","data-v-5e5560f7"]]);var v=g}}]);
//# sourceMappingURL=902.a6c5e12f.js.map