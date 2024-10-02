<template>
<div :style='{"border":"1px solid #9ce3b5","padding":"20px","boxShadow":"0px 2px 6px #ccc,inset 0px 0px 600px 0px #e0f8e8","margin":"20px auto 0","borderRadius":"16px","background":"#fff","width":"1200px","position":"relative"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="预约编号" prop="yuyuebianhao">
              <el-input v-model="ruleForm.yuyuebianhao" placeholder="预约编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="医生账号" prop="yishengzhanghao">
            <el-input v-model="ruleForm.yishengzhanghao" 
                placeholder="医生账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="医生姓名" prop="yishengxingming">
            <el-input v-model="ruleForm.yishengxingming" 
                placeholder="医生姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="职称" prop="zhicheng">
            <el-input v-model="ruleForm.zhicheng" 
                placeholder="职称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="科室" prop="keshi">
            <el-input v-model="ruleForm.keshi" 
                placeholder="科室" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="出诊日期" prop="chuzhenriqi">
            <el-input v-model="ruleForm.chuzhenriqi" 
                placeholder="出诊日期" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="挂号费" prop="guahaofei">
            <el-input v-model="ruleForm.guahaofei" 
                placeholder="挂号费" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="预约时间" prop="yuyueshijian" >
              <el-date-picker
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.yuyueshijian" 
                  type="datetime"
                  placeholder="预约时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="患者账号" prop="huanzhezhanghao">
            <el-input v-model="ruleForm.huanzhezhanghao" 
                placeholder="患者账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="患者姓名" prop="huanzhexingming">
            <el-input v-model="ruleForm.huanzhexingming" 
                placeholder="患者姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="性别" prop="xingbie">
            <el-input v-model="ruleForm.xingbie" 
                placeholder="性别" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="年龄" prop="nianling">
            <el-input v-model="ruleForm.nianling" 
                placeholder="年龄" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="手机号码" prop="shoujihaoma">
            <el-input v-model="ruleForm.shoujihaoma" 
                placeholder="手机号码" clearable ></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"20px 0 20px 0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","boxShadow":"1px 2px 3px #aaa","margin":"0 20px 0 0","color":"#fff","outline":"none","borderRadius":"4px","background":"linear-gradient(180deg, rgba(17,112,210,1) 0%, rgba(8,179,68,1) 100%)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #bbb","cursor":"pointer","padding":"0","boxShadow":"1px 2px 6px #ccc","margin":"0","color":"#999","outline":"none","borderRadius":"4px","background":"#fff","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            yuyuebianhao : false,
            yishengzhanghao : false,
            yishengxingming : false,
            zhicheng : false,
            keshi : false,
            chuzhenriqi : false,
            guahaofei : false,
            yuyueshijian : false,
            huanzhezhanghao : false,
            huanzhexingming : false,
            xingbie : false,
            nianling : false,
            shoujihaoma : false,
            sfsh : false,
            shhf : false,
            ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          yuyuebianhao: this.getUUID(),
          yishengzhanghao: '',
          yishengxingming: '',
          zhicheng: '',
          keshi: '',
          chuzhenriqi: '',
          guahaofei: '',
          yuyueshijian: '',
          huanzhezhanghao: '',
          huanzhexingming: '',
          xingbie: '',
          nianling: '',
          shoujihaoma: '',
          ispay: '',
        },
        rules: {
          yuyuebianhao: [
          ],
          yishengzhanghao: [
          ],
          yishengxingming: [
          ],
          zhicheng: [
          ],
          keshi: [
          ],
          chuzhenriqi: [
          ],
          guahaofei: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          yuyueshijian: [
          ],
          huanzhezhanghao: [
          ],
          huanzhexingming: [
          ],
          xingbie: [
          ],
          nianling: [
          ],
          shoujihaoma: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
          ispay: [
          ],
        },
      };
    },
    computed: {



    },
    components: {
    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.yuyueshijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='yuyuebianhao'){
              this.ruleForm.yuyuebianhao = obj[o];
              this.ro.yuyuebianhao = true;
              continue;
            }
            if(o=='yishengzhanghao'){
              this.ruleForm.yishengzhanghao = obj[o];
              this.ro.yishengzhanghao = true;
              continue;
            }
            if(o=='yishengxingming'){
              this.ruleForm.yishengxingming = obj[o];
              this.ro.yishengxingming = true;
              continue;
            }
            if(o=='zhicheng'){
              this.ruleForm.zhicheng = obj[o];
              this.ro.zhicheng = true;
              continue;
            }
            if(o=='keshi'){
              this.ruleForm.keshi = obj[o];
              this.ro.keshi = true;
              continue;
            }
            if(o=='chuzhenriqi'){
              this.ruleForm.chuzhenriqi = obj[o];
              this.ro.chuzhenriqi = true;
              continue;
            }
            if(o=='guahaofei'){
              this.ruleForm.guahaofei = obj[o];
              this.ro.guahaofei = true;
              continue;
            }
            if(o=='yuyueshijian'){
              this.ruleForm.yuyueshijian = obj[o];
              this.ro.yuyueshijian = true;
              continue;
            }
            if(o=='huanzhezhanghao'){
              this.ruleForm.huanzhezhanghao = obj[o];
              this.ro.huanzhezhanghao = true;
              continue;
            }
            if(o=='huanzhexingming'){
              this.ruleForm.huanzhexingming = obj[o];
              this.ro.huanzhexingming = true;
              continue;
            }
            if(o=='xingbie'){
              this.ruleForm.xingbie = obj[o];
              this.ro.xingbie = true;
              continue;
            }
            if(o=='nianling'){
              this.ruleForm.nianling = obj[o];
              this.ro.nianling = true;
              continue;
            }
            if(o=='shoujihaoma'){
              this.ruleForm.shoujihaoma = obj[o];
              this.ro.shoujihaoma = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.huanzhezhanghao!=''&&json.huanzhezhanghao) || json.huanzhezhanghao==0){
                this.ruleForm.huanzhezhanghao = json.huanzhezhanghao
            }
            if((json.huanzhexingming!=''&&json.huanzhexingming) || json.huanzhexingming==0){
                this.ruleForm.huanzhexingming = json.huanzhexingming
            }
            if((json.xingbie!=''&&json.xingbie) || json.xingbie==0){
                this.ruleForm.xingbie = json.xingbie
            }
            if((json.nianling!=''&&json.nianling) || json.nianling==0){
                this.ruleForm.nianling = json.nianling
            }
            if((json.shoujihaoma!=''&&json.shoujihaoma) || json.shoujihaoma==0){
                this.ruleForm.shoujihaoma = json.shoujihaoma
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('guahaoxinxi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('guahaoxinxi/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('guahaoxinxi/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('guahaoxinxi/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #999;
	  background: #fff;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #999;
	  background: #fff;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #999;
	  background: #fff;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #999;
	  background: #fff;
	  width: 400px;
	  font-size: 14px;
	  min-height: 120px;
	}
</style>
