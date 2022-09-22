<template>
  <div class="time">
    <div class="sec">
      <svg id="svg" >
         <circle ref="circle" fill="none"
      stroke-width="15"
     />
      </svg>
      <h1 class="h1">17:59</h1>
    </div>
  </div>
</template>

<script>
  export default { 
    name: 'Time',
  }
</script>

<style scoped>
  .time{
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 250px;
    background-color: #1E213F;
    box-shadow:-1em -1em 2em .5em #353a70, 2em 2em 3em  rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  .sec{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: -2em -2em 3em  rgba(0, 0, 0, 0.5),inset 2em 2em 3em  rgba(0, 0, 0, 0.1);
  }
  span{
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 4em;
    color: #fff;
  }
  .time svg{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  svg circle{
    cx: 100;
    cy:100;
    r: 96;
    stroke-width: 8;
    stroke-linecap: round;
    stroke: #F87070;
  }
  .h1{
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 3.5em;
    transform: translate(-50%,-50%);
  }
  @media screen and (min-width:768px) {
    .time{
      width: 330px;
      height: 330px;
    }
    .sec{
      width: 300px;
      height: 300px;
    }
    .time svg{
      width: 280px;
      height: 280px;
    }
    svg circle{
    cx: 140;
    cy:140;
    r: 135;
    stroke-width: 8;
    stroke-linecap: round;
    stroke: #F87070;
  }
  .h1{
    font-size: 5em;
  }
  }
</style>