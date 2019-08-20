<template>
<div>
  <div class="scroll">
    <div>
    <img src="../assets/images/zj.png" alt="" width="100px" height="100px" >
    <h1 >个人资金管理系统</h1>
    <h3>一 个 专 注 于 个 人 资 金 管 理 的 平 台</h3>
    <h4>当前用户：{{name}}</h4>
     <h4>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：{{email}}</h4>
     <h4>创建时间：{{date}}</h4>
    
    </div>
  </div>
   

</div>
    
</template>>
<script>
export default {
    data(){
        return{
            name:sessionStorage.user,
            email:sessionStorage.email,
            date:sessionStorage.time
        }
    }
   
    
}
</script>
<style scoped>

  h1{
    margin-top: 50px;
    color: aliceblue
  }
  img{
    margin-left: 26%;
    margin-top: 100px;
  }
  h3{
    margin-left: -10%;
    margin-top: 50px;
    color: aliceblue
  }
  h4{
      color: green;
      margin-top: 50px;
      margin-left: 10%
  }
 
 
 .scroll{
   display: flex;
    justify-content: center;
   height: 888px;
   position: absolute;
   top:81px;
   left:10%;
  width:90% ;
  overflow: hidden;
  background-image: url('../assets/images/bg2.jpeg');
    background-size:cover;
 }



</style>