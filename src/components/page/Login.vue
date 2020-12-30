<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">科学用药助手</div>
            <el-form :model="user" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="uid">
                    <el-input v-model="user.uid" placeholder="请输入账号">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="user.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                    <el-button type="primary" @click="dialogFormVisible = true">注册</el-button>
                    <el-dialog title="用户注册" :visible.sync="dialogFormVisible">

                    <!--弹出的注册框-->
                    <el-form :model="form">
                        <el-form-item label="用户名" :label-width="formLabelWidth">
                            <el-input v-model="form.uid" autocomplete="off" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" :label-width="formLabelWidth">
                            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" :label-width="formLabelWidth">
                            <el-radio v-model="form.gender" label=0>男</el-radio>
                            <el-radio v-model="form.gender" label=1>女</el-radio>
                        </el-form-item>
                        <el-form-item label="年龄" :label-width="formLabelWidth">
                            <el-input v-model="form.age"></el-input>
                        </el-form-item>
                        <el-form-item label="电话" :label-width="formLabelWidth">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="生日" :label-width="formLabelWidth">
                            <el-date-picker
                            v-model="form.birth"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="身高" :label-width="formLabelWidth">
                            <el-input v-model="form.height"></el-input>
                        </el-form-item>
                        <el-form-item label="体重" :label-width="formLabelWidth">
                            <el-input v-model="form.weight"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="register()">确 定</el-button>
                    </div>
                    </el-dialog>
                </div>
                <p class="login-tips">Tips : 请保护好您的用户名和密码哦</p>
            </el-form>
        </div>
    </div>
</template>

<script>
import { login } from '../../api/index'
import { register } from '../../api/index'

export default {
    data: function() {
        return {
            user: {
                uid: '',
                password: '',
            },
            rules: {
                uid: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            dialogFormVisible: false,
            form:{
                uid: '',
                name: '',
                age: 0,
                gender: 0,
                phone: '',
                birth: '',
                height: '',
                weight: '',
                avatar: '1',
                password: ''
            },
            formLabelWidth: '80px'
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    login(this.user).then(res=>{
                        if(res.status=='success'){
                            this.$message.success('登录成功')
                            localStorage.setItem('ms_username',this.user.uid)
                            this.$router.push('/')
                        }
                    }).catch(res=>{
                        this.$message.error('登录失败，请重试！')
                    })
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        register() {
            let temp = this.form.birth
            this.form.birth = ''+temp.getFullYear()+'-'+(temp.getMonth()+1)+'-'+temp.getDate()
            this.form.age = parseInt(this.form.age)
            this.form.gender = parseInt(this.form.gender)
            this.form.height = parseInt(this.form.height)
            this.form.weight = parseInt(this.form.weight)
            console.log(this.form)
            register(this.form).then(res=>{
                 if(res.status == 'success'){
                   this.$message.success("注册成功，请登录")
                   this.dialogFormVisible = false
                 }
                 else
                   this.$message.error("注册失败，请重试")
            })
        }
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #117337;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
    margin-left: 0px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>