<template>
    <section class="todoapp">


<!-- 头部：输入框 -->
<header class="header">
  <h1>todos</h1>
  <input class="new-todo" placeholder="输入新计划" autofocus @keydown.enter="add" v-model.trim="str">
</header>


<!-- 列表： -->
<section class="main">
  <input id="toggle-all" class="toggle-all" type="checkbox" v-model="ck">
  <label for="toggle-all">Mark all as complete</label>
  <ul class="todo-list">
      
      <todo v-for="item in arr" :key="item.id" :item="item" @aaa="del"></todo>

  </ul>
</section>


<!-- 底部：状态栏 -->
<footer class="footer">
  <span class="todo-count">剩余<strong>{{last}}</strong>未完成 </span>
  <ul class="filters">
    <li>
      <a :class="{selected:num ===1}" @click="change(1)" href="#/">全部</a>
    </li>
    <li>
      <a :class="{selected:num ===2}" @click="change(2)" href="#/active">未完成</a>
    </li>
    <li>
      <a :class="{selected:num ===2}" @click="change(3)" href="#/completed">已完成</a>
    </li>
  </ul>
  <button class="clear-completed" @click="clear">清除已完成</button>
</footer>


</section>
</template>

<script>
import "./todos.css"
import todo from "./components/todo.vue"
export default {
  components:{
    todo,
  },
  data(){
    return{
    //   list: [
    //   { id: 1, name: '吃饭', isDone: true },
    //   { id: 2, name: '睡觉', isDone: false },
    //   { id: 3, name: '打豆豆', isDone: true }
    // ],
    //   arr: [
    //   { id: 1, name: '吃饭', isDone: true },
    //   { id: 2, name: '睡觉', isDone: false },
    //   { id: 3, name: '打豆豆', isDone: true }
    // ],
    list:JSON.parse(localStorage.getItem("todo"))||[],
    arr:JSON.parse(localStorage.getItem("todo"))||[],
    str:'',
    num:1,
    }
  },
  methods:{
    // 删除
    del(id){
      let i = this.list.findIndex(ele=>ele.id===id)
      this.list.splice(i,1)
    },
    // 添加
    add(){
      if(this.str === ''){
        return alert('111')
      }
      let one = {
        id: Math.random(), 
        name: this.str, 
        isDone: false 
      }
      this.list.push(one)
      this.str=''
    },
    // 清楚已完成
    clear(){
      this.list = this.list.filter(ele=>ele.isDone === false)
    },
    change(a){
      this.num = a
      if (this.num ===1 ){
        this.arr = this.list
      }else if (this.num === 2){
        this.arr = this.list.filter(ele=>ele.isDone==false);
      }else if (this.num==3) {
        this.arr = this.list.filter(ele=>ele.isDone==true);
      }
    }
    
  },
  computed:{
    // 大小表
    ck:{
    get(){
      return this.list.every(ele=>ele.isDone === true)
    },
    set(val){
      this.list.forEach(ele=>ele.isDone = val)
    }
  },
  // 剩余未完成
  last(){
    return this.list.filter(ele=>ele.isDone === false).length
  }

  },
  watch:{
    list:{
      deep:true,
      handler(){
        localStorage.setItem("todo",JSON.stringify(this.list))
      }
    }
  }

}
</script>
  

<style>

</style>