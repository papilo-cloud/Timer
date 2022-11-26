<template>
  <div class="pom">
    <h4>pomodoro</h4>
    <div class="btn">
      <BtnGroups text="pomodoro" class="but active" :id="1" @butn-func="setTimer" />
      <BtnGroups text="short break" class="but" :id="2" @butn-func="setTimer"/>
      <BtnGroups text="long break" class="but" :id="3" @butn-func="setTimer"/>
    </div>
    <div class="time">
    <div class="sec">
      <svg id="svg" >
         <circle :class="selected" ref="circle" fill="none"
      stroke-width="15" stroke="cl"
     />
      </svg>
      <div class="timeout">
        <h1 class="h1" ref="time">25:00</h1>
        <button class="ref" @click="start" ref="start" :class="{ anims: animate }">Start</button>
      </div>
     
    </div>
  </div>
  </div>
</template> 
 
<script>
import BtnGroups from './BtnGroups.vue';

    var reset = false
    var paused = false
    var timeOut = 1500
    // let x = this.audios
    var aud 
export default {
    name: "Pomodro",
    components: { BtnGroups},
    props:{
      selected: String,
      pomo: Number,
      short: Number,
      long: Number,

    },
       
    data() {
      return{
        // number: this.time,
        select:'',
        animate: false,
        animates: false,
        alarmOut: false,
        // audios: "/media/Stopwatch-sound-effect.64cbdf0e.mp3",
      }
    },
    mounted() {
      aud = (new Audio(require('@/assets/Stopwatch-sound-effect.mp3')))
      const reff = document.querySelectorAll('.but')

      for (let i = 0; i < reff.length; i++) {
        reff[i].addEventListener('click', function(){
          let x = document.getElementsByClassName('active')[0]
          x.className = x.className.replace('active','')
				this.className += ' active'
        })
        
      }
    },
    methods:{
     
      setTimer(n){  
        // alert('')
        console.log('the id is: ', n);
        if(n === 1){
          this.pomodoro()
        }
        if(n === 2){
          this.shortBreak()
        } 
        if(n === 3){
          this.longBreak()
        }
        this.animates = true;
       
       
      },

      rotatex(remain){
	// got this piece from Chamu Mutezva ChamuMutezva...
      	
        const x = this.$refs.circle
        const crcmfrn = x.getTotalLength()
        console.log(crcmfrn)
        x.style.transition = 'none'
        x.style.strokeDasharray = crcmfrn
        x.style.strokeDashoffset = crcmfrn
        // x.style.transition = `${y}s linear`
        const offset = crcmfrn - remain / timeOut * crcmfrn
        x.style.strokeDashoffset = offset
      },

       timer(sec) {
	// got this piece from Chamu Mutezva ChamuMutezva...
				let anim = sec;
				let contrl = setInterval(() =>{
          const displayTime = this.$refs.time
          const mins = Math.floor(sec / 60)
          const displayMin = mins < 10 ? `0${mins}` : mins
          const secs = sec % 60
          const displaySec = secs < 10 ? `0${secs}` : secs
          sec--
          displayTime.innerText = `${displayMin}:${displaySec}`
          
          
          if(reset){
            clearInterval(contrl)
            reset = false
          }
          if(sec === 10){
            aud.play()
            }
         
          if (sec === 0) {
            this.alarmOut = false
            displayTime.innerHTML = "00:00"
            this.$refs.start.innerHTML = "Start"
            clearInterval(contrl)
            aud.pause()
          }
          if (!paused) {
            clearInterval(contrl)
          }
          this.rotatex(anim - sec)

		}, 1000)
		},

     // HELPER FUNC FOR EACH TIMER...
    pomodoro () {
        reset = true
        let z = this.pomo
        if(z < 15){
          alert('The min value is 15')
          z = 15
        }
        if(z > 25){
          alert('The max value is 25')
          z = 25
        }
        timeOut = z * 60
        this.timer(timeOut)
        
        console.log(z)
		},
    shortBreak () {
        reset = true
        let z = this.short
        if(z < 1){
          alert('The min value is 1')
          z = 1
        }
        if(z > 5){
          alert('The max value is 5')
          z = 5
        }
        timeOut = z * 60
        this.timer(timeOut)
		},
    longBreak () {
        reset = true
        let z = this.long
        if(z < 5){
          alert('The min value is 5')
          z = 5
        }
        if(z > 15){
          alert('The max value is 15')
          z = 15
        }
        timeOut = z * 60
        this.timer(timeOut)
		},
      
    start(){

      console.log("start and pause button")
      paused = !paused

      this.animate = true;
      setTimeout(() => {
        this.animate = false
      }, 4000)

      if (paused) {
        this.$refs.start.innerHTML = "Pause"
      } else {
          this.$refs.start.innerHTML = "Start"
        if (timeOut <= 0) {
          this.timer(timeOut)
          return
        } else {
          this.timeLeft()
          this.timer(timeOut)
        }

      }

      if (timeOut <= 0) {
        this.$refs.start.innerHTML = "Start"
        return
      } 
      else {
        this.timer(timeOut)
      }

    },
    timeLeft(){
      const left = this.$refs.time.innerHTML
      const [min, sec] = left.split(':')
      timeOut = Number(min) * 60 + Number(sec)
      return timeOut
    }
      
    },
    
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

  /* Classes */
  .serif{
    font-family:  "Audiowide", sans-serif;;
  }
  .sans{
    font-family:"ABeeZee", sans-serif;
  }
  .verd{
    font-family: "Autour One", sans-serif
  }
  .btn{
    color: #fff;
  }
  .active{
    /* background: red; */
    transition: .2s;
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
    font-size: 19px;
    letter-spacing: .2em;
  }
  .but{
    color: #fff;
    width: 100%;
    flex: 1
  }
  .btn{
    display:flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.3);
    flex-wrap: wrap;
    padding: 4px;
    margin-bottom: 4rem;
    border-radius: 35px;
  }
  .animss{
    animation: anime .2s linear;
  }
  @keyframes anime{
    from{
      transform: scale(.8);
    }
    to{
      transform: scale(1);
    }
  }
  @media screen and (min-width:768px) {
    .btn{
      width: 420px;
    }
  }
  /* // Time Styling */
  .time{
    position: relative;
    overflow: hidden;
    width: 270px;
    height: 270px;
    background-color: #1E213F;
    box-shadow:-1em -1em 2em .5em #353a70, 2em 2em 3em  rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 2.5rem;
  }
  .sec{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 240px;
    height: 240px;
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
    width: 220px;
    height: 220px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  svg circle{
    cx: 110;
    cy:110;
    r: 106;
    stroke-width: 7;
    stroke-linecap: round;
    stroke: #F87070;
    transform: rotate(-90deg);
    stroke-dasharray: 666.02;
    stroke-dashoffset: 666.02;
    transform-origin: 50% 50%;
     /* animation: anims 2s infinite; */
  }
  @keyframes anims{
    from{ stroke-dashoffset: 603.2;}
    to{ stroke-dashoffset: 0;}
  }

  /* Button Animation */
  .anims{
    animation: anim .2s linear;
  }
  @keyframes anim{
    from{
      transform:translateX(50%) scale(.8);
    }
    to{
      transform:translateX(50%) scale(1);
    }
  }
  .color1 svg circle{
    background: #F87070;
  }
  .color2 svg circle{
    stroke: #70F380;
  }
  .color3 svg circle{
    stroke: #70f3f8; 
  }
  .timeout{
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: red;
    z-index: 100000000;
  }
  .h1{
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 3.5em;
    transform: translate(-50%,-50%);
  }
  .timeout .ref{
    position: absolute;
    /* right: 50%; */
    right: 50%;
    top: 3em;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 3px;
    border: none;
    outline: none;
    transform: translateX(50%);
    /* transform: translateX(50%); */
    text-align: center;
    cursor: pointer;
  }
    /* .ref:focus{
      animation: anims 2s linear;
      border: 1px dashed #fff;
      border-radius: 5px;
      padding: 5px;
  } */

  /* @keyframes anim {

      100%{stroke-dashoffset: 0}
  } */
  @media screen and (min-width:768px) {
    .time{
      width: 360px;
      height: 360px;
    }
    .sec{
      width: 330px;
      height: 330px;
    }
    .time svg{
      width: 310px;
      height: 310px;
    }
    svg circle{
    cx: 155;
    cy:155;
    r: 150;
    stroke-width: 8;
    stroke-linecap: round;
    stroke: #F87070;
    stroke-dasharray: 942.5;
    stroke-dashoffset: 942.5;
  }
  .timeout .ref{
    top: 4em;
    letter-spacing: 4.5px;
  }
  
  .h1{
    font-size: 5em;
  }
  }
</style>
