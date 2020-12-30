<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 信息
        </el-breadcrumb-item>
        <el-breadcrumb-item>完善信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model="form.uid" placeholder="请输入用户名"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>

          <el-form-item label="性别">
            <el-select v-model="form.gender" placeholder="请选择">
              <el-option key="man" label="男" value=0></el-option>
              <el-option key="woman" label="女" value=1></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="年龄">
            <el-input v-model="form.age" placeholder="请输入您的年龄"></el-input>
          </el-form-item>

          <el-form-item label="出生日期">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date"
                value-format="yyyy-MM-dd"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="身高">
            <el-input v-model="form.height" placeholder="在这里输入您的身高"></el-input>
          </el-form-item>
          <el-form-item label="体重">
            <el-input v-model="form.weight" placeholder="在这里输入您的体重"></el-input>
          </el-form-item>

          <el-form-item label="手机号码">
            <el-input v-model="form.phone" placeholder="请输入您的电话号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { update } from '../../api/index'

export default {
  name: "baseform",
  data() {
    return {
      form: {
        uid: "",
        age: 0,
        gender: 0,
        phone: "",
        password: "",
        birth: "",
        height: "",
        weight: ""
      },
    };
  },
  methods: {
    onSubmit() {
      update(this.form).then(res=>{
        if(res.status == 'success')
           alert('更新成功')
        else 
           alert('更新失败')
      })
    },
  },
};
</script>
