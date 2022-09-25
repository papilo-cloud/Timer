<template>
  <div class="butn">
    <button @click="onClick" class="btnn" ref="numm">{{text}}</button>
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
        Id: this.id
      }
    },
    methods:{
      onClick(e){
      //  const x = this.$refs.numm
        // alert()
        e.preventDefault()
        this.$emit('butn-func', this.Id)
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