<template>
  <div class="main" :class="select">
    <Pomodro :selected="selected" :class="selected" :pomo="pomo" :short="short" :long="long" />
    <div class="settings" v-show="shows">
        <form >
          <div class="h2">
            <h2>Settings</h2>
            <button @click="toggleShow">
              <img src="../assets/icon-close.svg" alt="close">
            </button>
          </div>
          <h6>Time (minutes)</h6>
          <div class="number">
            <div class="num">
            <label>
              pomodoro <br>
              <input  ref="num1" type="number" min="15" max="25" value="25" v-model="pomo" >
            </label>
            </div>
            <div class="num">
            <label>
              short break <br>
              <input ref="num2" type="number" min="1" max="5" value="5" v-model="short">
            </label>
            </div>
            <div class="num">
            <label>
              long break <br>
              <input ref="num3" type="number" min="5" max="15" value="15" v-model="long" >
            </label>
          </div>
          </div>
          <div class="check1">
            <h6>Font</h6>
            <div>
              <label  v-for="font in fonts" :key="font">
              <input type="radio" ref="items" name="style" :value="font" :id="font">
              <span class="check">Aa</span>
            </label>
            </div>
          </div>
          <div class="check2">
            <h6>color</h6>
            <div>
              <label v-for="theme in themes" :key="theme">
              <input type="radio"  ref="item" name="comp" :value="theme" :id="theme">
              <span class="check"></span>
            </label>
            </div>
          </div>
          <button class="apply" @click="onSubmit" >Apply</button>
        </form>
    
  </div>
    <button class="button" @click="onClick"><img src="../assets/icon-settings.svg" alt="asset"></button>
    <div class="foot">
      <p>Made with &#128150; by <a href="tel:+2348060408434">Badamasi</a></p>
    </div>
  </div>
</template> 

<script>
import Pomodro from './Pomodro.vue'; 
  export default {
    name:'Main', 
    components: {
    Pomodro,
    },
    data(){
      return{
        themes:['color1','color2','color3'],
        fonts:['serif','sans','verd'],
        selected:'color1',
        select:'serif',
        shows:false,
        pomo: 25,
        short: 5,
        long: 15,
      }
    }, 
    mounted(){
      let z = this.$refs.items
      let zz = this.$refs.item

      z[0].checked = true
      zz[0].checked = true
      // for(let i in x){
          
      //  } 

    },
    methods:{

      onClick(){
        this.shows = !this.shows
        console.log('click');
      },
      toggleShow(e){
         e.preventDefault()
        this.shows = !this.shows
      },


      // SETTINGS FUNCTIONS
      onSubmit(e){
        e.preventDefault()
        this.shows = !this.shows
        alert('Changes you made will be saved')

        var y = this.$refs.item
        var x = this.$refs.items

        for(let i in y){
          y[0].checked == true
          if(y[i].checked){
            if(y[i].id === 'color1'){
              this.selected = 'color1'
            }
            if(y[i].id === 'color2'){
              this.selected = 'color2'
            }
            if(y[i].id === 'color3'){
              this.selected = 'color3'
            }
          }
       }

       for(let i in x){
          if(x[i].checked){
            if(x[i].id === 'serif'){
              this.select = 'serif'
            }
            if(x[i].id === 'sans'){
              this.select = 'sans'
            }
            if(x[i].id === 'verd'){
              this.select = 'verd'
            }
          }
       }  
        // console.log(y)
        
    }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.foot{
  margin: 0;
  margin-top: 4em 0 0 0;
  padding: 10px 0;
  letter-spacing: 1px;
}
.foot a{
  color: #fff;

}
body{
  background: #1E213F;
  color: #fff,#EFF1FA;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

  .main{
    position: relative;
    max-width: 700px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#EFF1FA;
    
  }

  /* CHANGING FONTS & COLORS */

  .serif, .serif button{
    font-family:  "Audiowide", sans-serif;;
  }
  .sans, .sans button{
    font-family:"ABeeZee", sans-serif;
  }
  .verd, .verd button{
    font-family: "Autour One", sans-serif
  }
  
   button{
    /* background: #F87070; */
    background: transparent;
  }
  .button{
    margin-bottom: 2rem;
    font-size:22px;
    cursor: pointer;
    border:none;
    outline: none;
    background: transparent;
  }
  /* SETTINGS STYLES */
  
  .settings{
    color:#000;
    padding: 1.2rem;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  
  .h2{
    position: relative;
    margin: 0;
    padding: 0;
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }
  .h2 button{
    border:none;
    outline:none;
    font-size: 32px;
    cursor: pointer;
    background:transparent
  }
  .h2::after{
    content:'';
    position: absolute;
    height: 4px;
    width: 100%;
    background: #EFF1FA;
    bottom: 0;
    left: 0;
  }
   h2, h4{
    padding: 0;
    margin: 0;
  }
  .settings h6{
    text-align: center;
    font-weight: lighter;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  form .number{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 1.2rem;
    overflow: hidden;
  }
  form .apply{
    position: fixed;
    border: none;
    outline: none;
    padding: 12px 22px;
    letter-spacing: 2px;
    border-radius: 25px;
    background: #F87070;
    color:#fff;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
  .number::before, .check1::before{
    content:'';
    position: absolute;
    height: 3px;
    background: #EFF1FA;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  }
  .number .num{
    flex: 400px;
  }
  form{
    width: 100%;
     background-color: #fff;
     border-radius: 15px;
  }
  .num label{
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #777;
    align-items: center;
  }
  .num input{
    padding: 8px;
    width: 150px;
    margin: 5px 0;
    border:none;
    outline:none;
    border-radius:8px;
    background:#EFF1FA;
    font-weight: bold;
  }
  .check1, .check2 {
    position: relative;
    padding: .5rem 1.2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0;
  }
  .check1 > div{
    margin: 0;
    padding: 0;
  }
  .check2{
    padding-bottom: 20px;
  }
  .check1 label, .check2 label{
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
    display: inline-block;
    cursor:pointer;

  }
   .check{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
        background: #EFF1FA;
        border-radius: 50%;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .check2 .check{
        background: transparent;
  }
  .check2 .check::after{
    content:'';
    position:absolute;
    display:none
  }
  .check2 input:checked ~ .check::after{
    display: block;
  }
  .check2 .check::after{
    left: 15px;
    top: 10px;
    width: 5px;
    height: 14px;
    border:solid #161932;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
  .check1 label input:checked ~ .check, .check2 label input:checked ~ .check {
    background: #161932;
    color: #fff;
  }
  .check2 label input:checked ~ .check {
    background: transparent;
    color: #fff;
  }
  .check2 label:nth-child(1){
    background: #F87070;
  }
  .check2 label:nth-child(2){
    background: #70F380;
  }
  .check2 label:nth-child(3){
    background: #70f3f8;
  }
  .check1 label input, .check2 label input{
    opacity: 0;
  }
  @media screen and (min-width:700px) {
    .number{
      justify-content: space-evenly;
    }
    .number .num{
    flex: 200px;
  }
    .num label{
      display: block;
    }
    .check1, .check2 {
   
    flex-direction: unset;
  }
  }
</style>