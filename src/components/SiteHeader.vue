<template>
    <header>
        <nav>
            <ul>
                <div class="nav__block--left">
                    <li>
                        <router-link id="logo" rel="nofollow" to="/" data-content="Xdice">Xdice</router-link>
                    </li>
                    <li>
                        <router-link id="home" rel="nofollow" to="/" data-content="Главная">Главная</router-link>
                    </li>
                </div>
                <div class="nav__block--right">
                    <li>
                        <router-link id="login" rel="nofollow" to="/" data-content="Войти">Войти</router-link>
                    </li>
                    <li id="registration">
                        <router-link rel="nofollow" to="/">Регистрация</router-link>
                    </li>
                </div>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'SiteHeader'
}
</script>

<style lang="scss" scoped>
    header{
        margin-top: 16px;
        border-bottom: 1px solid#F3F3F4;
    }

    ul{
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li a{
        position: relative;
        display: inline-block;
        overflow: hidden;
        padding: 20px 18px;
        color: rgba(255, 255, 255, 0.8);
        transition: .5s;
        &::before {
            position: absolute;
            content: attr(data-content);
            top: 20px;
            left: 18px;
            width: 0;
            color: #42239A;
            text-decoration: none;
            white-space: nowrap;
            overflow: hidden;
            transition: width .5s ease;
        }
        &:hover::before {
            width: 100%;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    .nav__block--left{
        margin-left: 80px;
        display: flex;
        gap: 100px;
        align-items: center;
    }
    .nav__block--right{
        margin-right: 80px;
        display: flex;
        gap: 45px;
        align-items: center;
    }

    #logo{
        font-weight: 800;
        font-size: 40px;
        line-height: 47px;
        color: #000000;
    }

    #login, #home{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    #registration{
        width: 188px;
        height: 40px;
        background: #42239A;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .5s ease-in-out;
        a{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
        }
        &:hover{
            cursor: pointer;
            box-shadow: inset 0 0 0 25px #26A17B;
        }
    }
</style>