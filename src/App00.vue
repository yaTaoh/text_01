<template>
  <div>
    <div class="ox" v-show="key"></div>
    <button @click="key =! key">{{ key?'隐藏':'显示' }}</button>
    <br><hr>
    <select name="" id="" v-model="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    

    <!-- 案例3 -->
    <h2>{{title}}</h2>
    <h3>{{channel}}</h3>
    
    <button @click="edit" >编辑</button>
    <br>
    <div class="fore" v-show="key1">
      <div>
        标题：<input type="text" placeholder="请输入标题" v-model="title1">
      </div>
      <div>
        频道：<input type="text" placeholder="请输入频道" v-model="channel1">
      </div>
      <button @click="cannel">取消</button>
      <button @click="ok">确认</button>
    </div>
    

  </div>
</template>

<script>
export default {
  data(){
    return{
      key :true,
      num:2,
      title:"标题1",
      channel:"频道1",
      title1:"",
      channel1:"",
      key1:false
    }
  },
  methods:{
    edit(){
      this.title1 = this.title
      this.channel1 = this.channel
      this.key1 =! this.key1

    },
    ok(){
      this.title = this.title1
      this.channel = this.channel1
      this.title1 = ""
      this.channel1 = ""
      this.key1 =! this.key1
    },
    cannel(){
      this.title1 = ""
      this.channel1 = ""
      this.key1 =! this.key1
    }
  }
}
</script>

<style>
  .ox {
    width: 50px;
    height: 50px;
    background-color: #888;
    
  };
  /* .fore {
    display: none;

  }; */
  
</style>