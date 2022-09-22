<template>
  <div class="pom">
    <h4>pomodoro</h4>
    <div class="btn">
      <BtnGroups text="pomodoro"/>
      <BtnGroups text="short break"/>
      <BtnGroups text="long break"/>
    </div>
    <Time />
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
  h4{
    margin: 2rem 0;
    letter-spacing: .2em;
  }
  .btn{
    display:flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.5);
    /* padding: 2px; */
    margin-bottom: 3rem;
    border-radius: 25px;
  }
  @media screen and (min-width:768px) {
    .btn{
      width: 330px;
    }
  }
</style>