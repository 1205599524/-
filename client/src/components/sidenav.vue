<template>
<div>
    <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#2D374F"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
       <!-- <span>首页</span> -->
       <router-link to="/index/main"> 首页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-coin"></i>
          <span>资金管理</span>
        </template>
        
          <router-link to='/index/fund' class="item">资金流水</router-link>
          
          
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>账户信息</span>
        </template>
        
           <router-link to='/index/personal' class="item">个人信息</router-link>
          
      </el-submenu>
      
    </el-menu>
  </el-col>
</el-row>

</div>
    
</template>>
<script>

export default {
    
}
</script>
<style scoped>
a{
    text-decoration: none;
    color:white;
   
}
.item{
   margin-left: 43px;
    font-size: 13px;
}
.tac{
    margin-top: 1px;
}
.el-menu-vertical-demo{
    height: 888px;
    width: 200px;
    z-index: 9;
}


</style>