<template>
 <div class="login">
     <div class="title"><h1>资金管理系统</h1></div>
    <div class="box">
      <el-form :model="loginuser"  :rules="rules" ref="loginform" label-width="110px" class="loginform">
        
        
         <el-form-item label="邮箱" prop="email">
          <el-input  v-model="loginuser.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginuser.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
         
        
      
        <el-form-item>
         
    <el-button type="primary" class="submit_btn"  @click="submit('loginform')">登录</el-button>
  </el-form-item>
</el-form>
         <div class="register_go">
        没有账号？ 点击 <router-link to="/register"> 注册</router-link>
    </div>
    </div>
   
 </div>
</template>

<script>

 export default{
  
   data(){
     
     return {loginuser:{
      
       email:'',
       password:'',
       
     }, 
     
     
     rules:{
      
       email:[{
         type:"email",
         required:true,
         message:"邮箱格式不正确",
         trigger:"blur"
       }],
       password:[
         {
         required:true,
         message:"密码不能为空",
         trigger:"blur"
       },
       {
         min:6,
         max:16,
         message:"密码长度必须在6-30位之间",
         trigger:"blur"
       }
       ],
       
     }
   }
   
  
   },
   
    methods: {
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/login",this.loginuser)
           .then(res=>{
            console.log(res)
             this.$message({
               message:"登录成功！",
               type:"success"
              
             })
             
             sessionStorage.setItem('user',res.data.name)
             sessionStorage.setItem('email',res.data.email)
             sessionStorage.setItem('time',res.data.date)
             console.log(sessionStorage.email)
             this.$router.push('/index')
           })
           .catch(res=>{
             this.$message({
               message:"账号或密码错误",
               type:"error"
             })
           })
           
          }
          
        });
      },
     
    }
   
   

   
 }
 
</script>

<style scoped>
.login{
    width: 100%;
    height: 969px;
  background: url("../assets/images/bg2.jpeg");
  background-size: 100% 100%;
 
}
.title{
  position: absolute;
  left: 45%;
  margin-top: 220px;
  color:whitesmoke
  
}
.box{
  position: absolute;
  height: 250px;
  width: 300px;
  background-color: aliceblue;
  left: 42.5%;
  margin-top: 300px;
  opacity:.8

}
.el-form{
  position: absolute;
  left: -50px;
  margin-top: 50px;
}
.submit_btn{
  width: 100%;
}
.register_go{
    position: absolute;
    right: 28%;
    bottom: 5px;
    font-size: 13px;
}
a{
text-decoration: none;
color: blue
}

</style>
