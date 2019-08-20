<template>
<div>
    <div class="headnav">
        <div class="left">
            <img src="../assets/images/zj.png" alt="" width="80px" height="80px">
            <h1>个人资金管理系统</h1>
        </div>
        <div class="right">
            <h5  >欢迎：{{user}}</h5>
            <h5  @click="remove" style="top:20px; right:5px;cursor: pointer; color:red">  退 出 登 录</h5>
        </div>
    </div>
</div>
    
</template>>
<script>
export default {
    data(){
        return {
            user:sessionStorage.user
        }
    },
    methods:{
        remove(){
            sessionStorage.clear()
            location.reload()
        }
    }
   
   
}
</script>
<style scoped>
.headnav{
    width: 100%;
    height: 80px;
    background-color: #2D374F;
    position: relative;
}
h1{
    display: inline;
    position: absolute;
    font-family: '隶书';
    color:white;
    

}


h5{
    
    display: inline;
    position: absolute;
    right: 5px;
    top:-10px;
    color: aliceblue;
    font-size: 20px;
    font-family: '隶书';
    
}
</style>