<template>
 <div class="register">
     <div class="title"><h1>资金管理系统</h1></div>
    <div class="box">
      <el-form :model="registeruser"  :rules="rules" ref="registerform" label-width="110px" class="registerform">
        
        <el-form-item label="用户名" prop="name">
          <el-input  v-model="registeruser.name" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
         <el-form-item label="邮箱" prop="email">
          <el-input  v-model="registeruser.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registeruser.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
         <el-form-item label="确认密码" prop="password2">
          <el-input  type="password" v-model="registeruser.password2" autocomplete="off" placeholder="请确认输入密码"></el-input>

        </el-form-item>
        
      
        <el-form-item>
         
    <el-button type="primary" class="submit_btn"   @click="submit('registerform')">注册</el-button>
  </el-form-item>
</el-form>
    </div>
 </div>
</template>

<script>
 export default{
   data(){
     var validatePass2 = (rule, value, callback) => {
        if (value !== this.registeruser.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
     return { registeruser:{
       name:'',
       email:'',
       password:'',
       password2:''
     },
     rules:{
       name:[{
         required:true,
         message:"用户名不能为空",
         trigger:"blur"
       },
       {
         min:2,
         max:20,
         message:"用户名必须在2-20个字符之间",
        trigger:"blur"
       }],
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
       password2:[{
         required:true,
         message:"请确认密码",
         trigger:"blur"
       },
      {
        validator:validatePass2,
        trigger:"blur"
      }]
     }
   }
  
   },
    methods: {
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$axios.post("/api/register",this.registeruser)
           .then(res=>{
             this.$message({
               message:"账号注册成功！",
               type:"success"
              
             })
             this.$router.push('/login')
           })
           .catch(res=>{
             this.$message({
               message:"邮箱已被注册",
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
.register{
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
  height: 400px;
  width: 300px;
  background-color: aliceblue;
  left: 42.5%;
  margin-top: 300px;
  opacity:.8

}
.el-form{
  position: absolute;
  left: -30px;
  margin-top: 50px;
}
.submit_btn{
  width: 100%;
}


</style>
