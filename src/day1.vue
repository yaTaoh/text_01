<template>
  <div>
    <p>123456</p>
    <a :href="msg">{{ name[1] }}</a>
    <p>
      {{ num }}
      <button @click="add(2)">加几个件</button>
    </p>
    <a href="msg1" @click.prevent="fn1">必应</a>
    <br>

    <!-- 翻转案例 -->
    <!-- 点击需要注册事件 -->
    <!-- 得到数值参数，转为数组，反转，输出，接收 -->
    <h2>翻转案例</h2>
    <h3>{{ anli }}</h3>
    <button @click="reve">反转</button>
    <br>

    <!-- 案例2：按钮控制隐藏 -->
    <!-- 点击说明需要注册事件 -->
    <!-- 按钮控制先隐藏 -->
    <div class="anli2" v-show="key"></div>
    <button class="bt2" @click="key =! key">{{ key?'显示':'隐藏' }}</button>


  </div>
</template>

<script>
export default {
  data(){
    return {
      num:1,
      info:'zhangsan',
      name:["123","456","789"],
      obj:{
        name:"moxing",
        age:19
      },
      msg:"https://www.baidu.com/",
      msg1:"https://cn.bing.com/?pc=BG00",
      anli:"这是一对数字和一堆文字",
      key:true
    }
  },
  methods:{
    add(a){
      this.num+=a
    },
    fn1(){
      console.log('123');
    },
    reve(){
      let old = this.anli.split("")
      let old1 = old.reverse()
      let anliNew = old1.join("")
      this.anli = anliNew
    }
    
  }

}
</script>

<style lang="less">
  span{
    background-color: pink;
  };
  .anli2{
    width: 50px;
    height: 50px;
    background-color: #222;
  }
  

</style>