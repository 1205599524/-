<template>
<div class="fund"> 
     <el-button type="primary" round class="add_btn" size="small"><router-link to="/index/fund/add">添加</router-link></el-button>
     <router-view></router-view>
    <template>     
  <el-table
    :data="tableData"
     :border="true"
    >
    <el-table-column
      label="类型"
      align='center'
      prop="type"
      width="200">
      
    </el-table-column>
    <el-table-column
      label="日期"
      prop='date'
      align='center'
      width="250">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
     
    </el-table-column>
    <el-table-column
      label="描述"
      prop='describe'
      align='center'
      width="200">
      
    </el-table-column>
    <el-table-column
      label="收入"
      prop='incode'
      align='center'
      width="200">
      <template slot-scope="scope">
        <span style="color: #40B555">{{ scope.row.incode }}</span>
      </template>
     
    </el-table-column>
    <el-table-column
      label="支出"
      prop="expend"
      align='center'
      width="200">
       <template slot-scope="scope">
        <span style="color: #CC453C">{{ scope.row.expend }}</span>
      </template>

    </el-table-column>
    <el-table-column
      label="现金"
      prop='cash'
      align='center'
      width="200">
       <template slot-scope="scope">
        <span style="color:#7FAEE0">{{ scope.row.incode }}</span>
      </template>
      
    </el-table-column>
    <el-table-column
      label="备注"
      prop='remark'
      align='center'
      width="200">
      
    </el-table-column>
    
    <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type='primary'
          @click="handleEdit(scope.$index, scope.row)"> 编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
</div>
    
</template>>
<script>
export default {
     data() {
      return {
        tableData: [
         ],
        editdata:{}
      }
    },
    methods: {
      handleEdit(index, row) {
        this.editdata={
            type:row.type,
            describe:row.describe,
            incode:row.incode,
            expend:row.expend,
            cash:row.cash,
            remark:row.remark,
            id:row._id
        }
        this.$router.push('/index/fund/edit')
      },
      handleDelete(index, row) {
          console.log(row._id)
       this.$axios.delete(`/api/delete${row._id}`)
       .then(res=>{
           this.$message('删除成功')
           location.reload()
       })
      }
    },
    created:function(){
        this.$axios.get("/api/index/fund")
        .then(res=>{
          this.tableData=res.data
          console.log(this.tableData)
        })
    }
    
}
</script>
<style scoped>
.el-table{
    position: absolute;
    top: 150px;
    left: 12%;
    width: 88%;
}
a{
    text-decoration: none;
    color: aliceblue
}
.add_btn{
    position: absolute;
    top:100px;
    right: 30px;
}

</style>