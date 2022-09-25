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
        <h1 class="h1" ref="time">17:59</h1>
        <button class="ref" @click="start" ref="start">Start</button>
      </div>
     
    </div>
  </div>
  </div>
</template> 
 
<script>
import BtnGroups from './BtnGroups.vue';

    var reset = false
    var paused = false
    var timeOut = 300

export default {
    name: "Pomodro",
    components: { BtnGroups},
    props:{
      selected: String,
      time: String,

    },
       
    data() {
      return{
        number: this.time,
        select:'',
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
    },
    methods:{
     
      setTimer(n){  
        // alert('')
        console.log('the id is: ', n);
        if(n === 1){
          this.pomodoro()
          console.log('Hello');
        }
        if(n === 2){
          console.log('hi')
        } else{
          console.log('what')
        }
       
      },

      rotatex(remain){
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
				let tem = sec;
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
				if (sec === 0) {
					displayTime.innerHTML = "00:00"
					this.$refs.start.innerHTML = "Start"
					// alarmSetter()
					clearInterval(contrl)
				}
				if (!paused) {
      clearInterval(contrl)
      // console.log(seconds)
      }
      this.rotatex(tem - sec)

		}, 1000)
    // HELPER FUNC FOR EACH TIMER...
		},
      pomodoro () {
        reset = true
        timeOut = this.number.value * 60
        this.timer(timeOut)
		},
      
    start(){

        console.log("start and pause button")
        paused = !paused
        console.log(paused)

        if (paused) {
        this.$refs.start.innerHTML = "Pause"
        } else {
        this.$refs.start.innerHTML = "Start"
        if (timeOut <= 0) {
          return
        } else {
          this.timeLeft()
          this.timer(timeOut)
        }

        }

        if (timeOut <= 0) {
        this.$refs.start.innerHTML = "Start"
        //   break__selectors.forEach(selected => {
        // if (selected.checked) {

        //   if (selected.id == "short") {
        // 	// resetShort = false
        // 	shortBreakMode()
        //   } else if (selected.id == "long") {
        // 	longBreakMode()
        //   } else {
        // 	setPomodoro()
        //   }
        // }

        paused = !paused
        // numb.innerHTML = "Pause"
        return
        } 
        else {
        // numb.innerHTML = "Start"
        this.timer(timeOut)
        }

        },
        timeLeft(){
            const left = this.$refs.time.innerHTML
            const [min, sec] = left.split(':')
            timeOut = min * 60 + sec
            // return timeOut
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
  .btn{
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
  @media screen and (min-width:768px) {
    .btn{
      width: 360px;
    }
  }
  /* // Time Styling */
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
    margin-bottom: 2.5rem;
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
    transform: rotate(-90deg);
    stroke-dasharray: 603.2;
    stroke-dashoffset: 603.2;
    transform-origin: 50% 50%;
     animation: anim 2s infinite;
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
    left: 50%;
    top: 3em;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 3px;
    border: none;
    outline: none;
    transform: translateX(-50%);
  }
    .ref:focus{
      animation: anims 2s linear;
      border: 1px dotted #fff;
      border-radius: 5px;
      padding: 2px;
  }

  @keyframes anim {

      100%{stroke-dashoffset: 0}
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
    stroke-dasharray: 848.23;
    stroke-dashoffset: 848.23;
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