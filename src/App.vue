<template>
  <div>
    <div>
      计划任务：<input type="text" class="int" v-model="num">  
      <button @click="fn1">新增</button>
    </div>
    
    <table border="1" style="border-collapse: collapse;">
        <thead>
          <tr>
            <th>编号</th>
            <th>任务</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(item,i) in list" :key="item.id" >
            <td>{{i+1}}</td>
            <td>{{item.name}}</td>
            <td><a href="#">删除</a></td>
          </tr>
          <!-- <tr >
            <td>2</td>
            <td>学习摄影</td>
            <td><a href="#">删除</a></td>
          </tr> -->
        </tbody>

    </table>


    <h3>需求：</h3>
    <p>1、把list数据渲染页面内</p>
    <p>2、新增一个计划任务</p>
    <p>3、删除任务计划</p>
    <p>4、挑战任务：数据本地化</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {id:1,name:"学习VUE"},
        {id:2,name:"学习摄影"},
        {id:3,name:"睡觉3天"},
      ],
      num: '',

    }
  },
  methods:{
    fn1(){
      // let num = 1
      if (this.num === '') {
        return alert('不能为kong')
      }

      let name1 = 'zs'; 
      this.list.forEach((item) => {
        if (item.id === num) {
          name1 = item.name
        }
      });

      
        let one ={
          id:this.id,
          name:name1
        }
        
        this.list.push(one);
        // // console.log(this.list.push(one));
        // console.log(this.list.name);
      
    }
  }

  
}
</script>

<style>

</style>