<template>
  <div class="butn">
    <button @click="onClick" :class="{anims: animate}" class="btnn" ref="numm">{{text}}</button>
  </div>
</template>

<script>
  export default {
    name: 'Settings', 
    props:{ 
      color: String,
      id: Number,
      text: String, 
    },
    data(){
      return{
        Id: this.id,
        animate: false
      }
    },
    methods:{
      
      onClick(e){
        e.preventDefault()
        this.$emit('butn-func', this.Id)

        this.animate = true;
        setTimeout(() => {
          this.animate = false
        }, 1000)

      }
    }
  }
</script>

<style scoped>

  .btnn{
    padding: 15px;
    font-size: 11px;
    letter-spacing: 1px;
    border-radius:25px;
    border:none;
    cursor: pointer;
    outline:none;
    flex: 1;
    color:#fff;
    font-weight: bold;
    /* width: 100%; */

  }
  .anims{
    animation: anim .2s linear;
    transition: .2s
  }
  @keyframes anim{
    from{
      transform: scale(.8);
    }
    to{
      transform: scale(1);
    }
  }
  @media screen and (min-width:375px) {
    .btnn{
      font-size: 14px;
    }
  }
  @media screen and (min-width:768px) {
    .btnn{
      font-size: 15px;
    }
  }

</style>