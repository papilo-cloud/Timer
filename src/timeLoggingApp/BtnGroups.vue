<template>
  <div class="butn">
    <button @click="onClick" class="btnn" :id="id">{{text}}</button>
  </div>
</template>

<script>
  export default {
    name: 'Settings', 
    props:{ 
      color: String,
      text: String,
      id: String
    },
    methods:{
      onClick(id){
        alert(this.id)
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