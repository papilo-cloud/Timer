<template>
  <div class="time">
    <div class="sec">
      <svg id="svg" >
         <circle :class="selected" ref="circle" fill="none"
      stroke-width="15" stroke="cl"
     />
      </svg>
      <div class="timeout">
        <h1 class="h1" ref="time">17:59</h1>
        <button class="ref" @click="start" ref="start">Start</button>
      </div>
     
    </div>
  </div>
</template>
 
<script>

   

  export default { 
   
    name: 'Time',
    data(){
      return{
       
    },
  
    methods:{
     

  }
</script>

<style scoped>
  
</style>