<template>
<div >
    <div class="bg"></div>
  <div class="add">
       <h2 >添加资金信息</h2>
      <el-form :model="database"  :rules="rules" ref="databaseform" label-width="200px" class="databaseform">
        
        <el-form-item label="类型" prop="type">
          <el-input  v-model="database.type" autocomplete="off" placeholder="请输入类型"></el-input>
        </el-form-item>
         <el-form-item label="描述" prop="describe">
          <el-input  v-model="database.describe" autocomplete="off" placeholder="请输入描述"></el-input>
        </el-form-item>
        <el-form-item label="收入" prop="incode">
          <el-input  v-model="database.incode" autocomplete="off" placeholder="请输入收入"></el-input>
        </el-form-item>
        <el-form-item label="支出" prop="expend">
          <el-input  v-model="database.expend" autocomplete="off" placeholder="请输入支出"></el-input>
        </el-form-item>
        <el-form-item label="现金" prop="cash">
          <el-input  v-model="database.cash" autocomplete="off" placeholder="请输入现金"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input  v-model="database.remark" autocomplete="off" placeholder="请输入备注"></el-input>
        </el-form-item>
      
        <el-form-item>
         
    <el-button type="primary" class="submit_btn"   @click="submit('databaseform')">添加</el-button>
    <el-button type="danger" class="cancel_btn"   @click="$router.push('/index/fund')">取消</el-button>
  </el-form-item>
</el-form>
  </div>
</div>
    
</template>>
<script>
export default {
   data(){
    
     return { database:{
       type:'',
       describe:'',
       incode:'',
        expend:'',
        cash:'',
        remark:''
     },
     rules:{
       type:[{
         required:true,
         message:"类型不能为空",
         trigger:"blur"
       },
       ],
       describe:[{
         
         required:true,
         message:"描述不能为空",
         trigger:"blur"
       }],
       incode:[
         {
         required:true,
         message:"收入不能为空",
         trigger:"blur"
       },
       ],
       expend:[{
         required:true,
         message:"支出不能为空",
         trigger:"blur"
       },
      ],
      cash:{
          required:true,
          message:'现金不能为空',
          trigger:'blur'
      },
      remark:{
          required:true,
          message:'备注不能为空',
          trigger:'blur'
      },
     }
   }
  
   },
   methods: {
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$axios.post("/api/add",this.database)
           .then(res=>{
             this.$message({
               message:"添加成功！",
               type:"success"
              
             })
             this.$router.push('/index/fund')
             location.reload()
            
           })
           .catch(res=>{
             this.$message({
               message:"服务器忙",
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
.add{
    height: 600px;
    width: 600px;
    background-color: white;
    border: 1px solid #E8EBEE;
    position: absolute;
    left: 35%;
    top:100px;
    z-index: 99;
}
.el-form{
  position: absolute;
  left: -80px;
  margin-top: 10px;
  width: 600px;
}
.submit_btn{
  width: 100%;
  margin-top:15px; 
}
.cancel_btn{
    width: 100%;
  margin-top:15px; 
  margin-left: -1px;

}
.bg{
    background-color: black;
    width: 100%;
    height: 969px;
    position: absolute;
    top: 0;
    z-index:66;
    opacity: 0.5;
}
h2{
    margin-left: 38%
}
</style>