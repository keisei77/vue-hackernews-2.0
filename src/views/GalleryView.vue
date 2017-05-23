<template>
  <div class="gallery-view">
    <header class="title">
      <h1>Gallery View.</h1>
    </header>
    <!--<button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show" class="text">hello</p>
    </transition>
    <button @click="show = !show">
      Toggle
    </button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <p v-if="show">
        Demo
      </p>
    </transition>
    <button v-on:click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
    <button v-on:click="shuffle">Shuffle</button>
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list-complete" tag="p">
      <span
        v-for="item in items"
        v-bind:key="item"
        class="list-complete-item"
      >
        {{ item }}
      </span>
    </transition-group>

    <input v-model="query">
    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <li
        v-for="(item, index) in computedList"
        v-bind:key="item.msg"
        v-bind:data-index="index"
      >{{ item.msg }}</li>
    </transition-group>-->
    <render-comp :text="textValue"></render-comp>
  </div>
</template>

<script>
import List from '../components/List'

export default {
  data () {
    return {
      textValue: 'Hello world!'
    }
  },
  components: {
    renderComp: List()
  }
  // data () {
  //   return {
  //     items: []
      // show: true,
      // items: [1,2,3,4,5,6,7,8,9],
      // nextNum: 10,
      // query: '',
      // list: [
      //   { msg: 'Bruce Lee' },
      //   { msg: 'Jackie Chan' },
      //   { msg: 'Chuck Norris' },
      //   { msg: 'Jet Li' },
      //   { msg: 'Kung Fury' }
      // ]
  //   }
  // },
  // methods: {
    // beforeEnter: function (el) {
    //   el.style.opacity = 0
    //   el.style.transformOrigin = 'left'
    // },
    // enter: function (el, done) {
    //   Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
    //   Velocity(el, { fontSize: '1em' }, { complete: done })
    // },
    // leave: function (el, done) {
    //   Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
    //   Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
    //   Velocity(el, {
    //     rotateZ: '45deg',
    //     translateY: '30px',
    //     translateX: '30px',
    //     opacity: 0
    //   }, { complete: done })
    // },
    // randomIndex: function () {
    //   return Math.floor(Math.random() * this.items.length)
    // },
    // add: function () {
    //   this.items.splice(this.randomIndex(), 0, this.nextNum++)
    // },
    // remove: function () {
    //   this.items.splice(this.randomIndex(), 1)
    // },
    // shuffle: function () {
    //   this.items = _.shuffle(this.items)
    // },
    // beforeEnter: function (el) {
    //   el.style.opacity = 0
    //   el.style.height = 0
    // },
    // enter: function (el, done) {
    //   let delay = el.dataset.index * 150
    //   setTimeout(function () {
    //     Velocity(
    //       el,
    //       { opacity: 1, height: '1.6em' },
    //       { complete: done }
    //     )
    //   }, delay)
    // },
    // leave: function (el, done) {
    //   let delay = el.dataset.index * 150
    //   setTimeout(function () {
    //     Velocity(
    //       el,
    //       { opacity: 0, height: 0 },
    //       { complete: done }
    //     )
    //   }, delay)
    // }
  // },
  // computed: {
    // computedList: function () {
    //   return this.list.filter((item) => {
    //     return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
    //   })
    // }
//   }
}
</script>

<style lang="stylus">
.gallery-view
  .title
    color: pink

//   .fade-enter-active, .fade-leave-active 
//     transition: opacity .5s

//   .fade-enter, .fade-leave-active 
//     opacity: 0

//   .text
//     color: cyan

//   .flip-list-move
//     transition: transform 1s

//   .list-complete-item
//     transition: all 1s
//     display: inline-block
//     margin-right: 10px
  
//   .list-complete-enter, .list-complete-leave-active
//     opacity: 0
//     transform: translateY(30px)

//   .list-complete-leave-active
//     position: absolute
</style>
