<template>
  <main>
    <home-user-list/>
    <div class="spin__block">
      <h1>XDICE  RANDOM GENERATOR</h1>
      <home-spin />
      <div class="button__block">
        <span>Bet</span>
        <div class="amount">
          <button class="button__down" @click="() =>{if(bet>0){bet--}}">down</button>
          <input type="number" v-model="bet" min="1">
          <button class="button__up" @click="bet++">up</button>
        </div>
        <button class="button__play" @click="addPlayer">Регистрация</button>
      </div>
    </div>
  </main>
</template>

<script>
import HomeUserList from '@/components/home/HomeUserList.vue';
import HomeSpin from '@/components/home/HomeSpin.vue';

export default {
  components:{
    HomeUserList,
    HomeSpin
  },
  data(){
    return{
      bet: 1
    }
  },
  methods:{
    addPlayer(){

    }
  }
}
</script>

<style lang="scss" scoped>
  main{
    display: flex;
    gap: 68px;
    justify-content: center;
    align-items: flex-start;
    margin-top: 25px;
  }

  h1{
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 35px;
  }
  .spin__block{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button__down{
    width: 60px;
    height: 30px;
    background: #000000;
    border-radius: 10px;
    transition: all .3s ease;
    &:hover{
      transform: scale(1.1);
    }
  }
  .button__up{
    width: 60px;
    height: 30px;
    background: #26A17B;
    border-radius: 10px;
    transition: all .3s ease;
    &:hover{
      transform: scale(1.1);
    }
  }

  .button__play{
    width: 188px;
    height: 40px;
    background: #42239A;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    &:hover{
      box-shadow: inset 0 0 0 25px #26A17B;
    }
  }

  button{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: white;
    border: none;
  }

  input[type=number]{
    width: 70px;
    height: 40px;
    background: #F6F7F9;
    border: 1px solid #D8DFE7;
    box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }

  input[type=number]::-webkit-inner-spin-button{
    appearance: none;
  }
  .button__block{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    .amount{
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 5px 0 34px;
    }

    span{
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #000000;
    }
  }
</style>