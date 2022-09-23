<template>
  <div class="pom">
    <h4>pomodoro</h4>
    <div class="btn">
      <BtnGroups text="pomodoro" class="but active" id="1"/>
      <BtnGroups text="short break" class="but" id="2"/>
      <BtnGroups text="long break" class="but" id="3"/>
    </div>
    <Time :class="selected"/>
  </div>
</template> 

<script>
import BtnGroups from './BtnGroups.vue';
import Time from './Time.vue';
  export default {
    name: "Pomodro",
    components: { BtnGroups, Time },
    data() {
      return{
        props:{
          selected: String
        },
        butns:[
          {
            id: 1,
            text: 'pomodoro'
          },
           {
            id: 2,
            text: 'short break'
          },
           {
            id: 3,
            text: 'long break'
          }
        ]
      }
    },
    mounted() {
      const reff = document.querySelectorAll('.but')
      
      for (let i = 0; i < reff.length; i++) {
        reff[i].addEventListener('click', function(){
          let x = document.getElementsByClassName('active')[0]
          x.className = x.className.replace('active','')
				this.className += ' active'
        })
        
      }
    }
}
</script>

<style scoped>
  .pom{
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 1rem;
  }
  .but{
    color: #fff;
  }
  .active{
    /* background: red; */
    border-radius:25px;
    color: #161932;
  }
  .color1 .active{
    background: #F87070;
    color: #fff;
  }
  .color2 .active{
    background: #70F380;
  }
  .color3 .active{
    background: #70f3f8; 
  }
  h4{
    margin: 2rem 0;
    letter-spacing: .2em;
  }
  .but{
    color: #fff;
  }
  .btn{
    display:flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.3);
    padding: 3px;
    margin-bottom: 3rem;
    border-radius: 25px;
  }
  @media screen and (min-width:768px) {
    .btn{
      width: 360px;
    }
  }
</style>