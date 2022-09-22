<template>
  <div class="butn">
    <button class="btnn">{{text}}</button>
  </div>
</template>

<script>
  export default {
    name: 'Settings', 
    props:{
      color: String,
      text: String
    }
  }
</script>

<style scoped>

  .btnn{
    padding: 15px;
    font-size: 11px;
    /* color: #000; */
    letter-spacing: 1px;
    border-radius:25px;
    border:none;
    outline:none;

  }

</style>