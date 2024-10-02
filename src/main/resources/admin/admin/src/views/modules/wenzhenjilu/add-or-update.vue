<template>
	<div class="addEdit-block" :style='{"minHeight":"100vh","padding":"30px 40px 30px","backgroundAttachment":"fixed","background":"url(http://codegen.caihongy.cn/20230316/ceb93d14d79c4fe1835e7b1e4ec86ed2.jpg)","backgroundSize":"100% 100%","backgroundPosition":"left top","backgroundRepeat":"no-repeat","height":"auto"}' style="width: 100%;">
		<el-form
			:style='{"padding":"50px 30px","boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","borderRadius":"6px","flexWrap":"wrap","background":"rgba(221,242,242,1)","display":"flex"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="130px"
		>
			<template >
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'" label="病历编号" prop="binglibianhao">
					<el-input v-model="ruleForm.binglibianhao" placeholder="病历编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.binglibianhao" label="病历编号" prop="binglibianhao">
					<el-input v-model="ruleForm.binglibianhao" placeholder="病历编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="患者账号" prop="huanzhezhanghao">
					<el-input v-model="ruleForm.huanzhezhanghao" placeholder="患者账号" clearable  :readonly="ro.huanzhezhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="患者账号" prop="huanzhezhanghao">
					<el-input v-model="ruleForm.huanzhezhanghao" placeholder="患者账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="患者姓名" prop="huanzhexingming">
					<el-input v-model="ruleForm.huanzhexingming" placeholder="患者姓名" clearable  :readonly="ro.huanzhexingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="患者姓名" prop="huanzhexingming">
					<el-input v-model="ruleForm.huanzhexingming" placeholder="患者姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie" placeholder="性别" clearable  :readonly="ro.xingbie"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie" placeholder="性别" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="年龄" prop="nianling">
					<el-input v-model="ruleForm.nianling" placeholder="年龄" clearable  :readonly="ro.nianling"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="年龄" prop="nianling">
					<el-input v-model="ruleForm.nianling" placeholder="年龄" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="就诊时间" prop="jiuzhenshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.jiuzhenshijian" 
						type="datetime"
						:readonly="ro.jiuzhenshijian"
						placeholder="就诊时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.jiuzhenshijian" label="就诊时间" prop="jiuzhenshijian">
					<el-input v-model="ruleForm.jiuzhenshijian" placeholder="就诊时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="医生账号" prop="yishengzhanghao">
					<el-input v-model="ruleForm.yishengzhanghao" placeholder="医生账号" clearable  :readonly="ro.yishengzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="医生账号" prop="yishengzhanghao">
					<el-input v-model="ruleForm.yishengzhanghao" placeholder="医生账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="医生姓名" prop="yishengxingming">
					<el-input v-model="ruleForm.yishengxingming" placeholder="医生姓名" clearable  :readonly="ro.yishengxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="医生姓名" prop="yishengxingming">
					<el-input v-model="ruleForm.yishengxingming" placeholder="医生姓名" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="textarea" v-if="type!='info'" label="患者症状" prop="huanzhezhengzhuang">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="患者症状"
					  v-model="ruleForm.huanzhezhengzhuang" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.huanzhezhengzhuang" label="患者症状" prop="huanzhezhengzhuang">
					<span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}'>{{ruleForm.huanzhezhengzhuang}}</span>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="textarea" v-if="type!='info'" label="诊断结果" prop="zhenduanjieguo">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="诊断结果"
					  v-model="ruleForm.zhenduanjieguo" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.zhenduanjieguo" label="诊断结果" prop="zhenduanjieguo">
					<span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}'>{{ruleForm.zhenduanjieguo}}</span>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="textarea" v-if="type!='info'" label="病历描述" prop="binglimiaoshu">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="病历描述"
					  v-model="ruleForm.binglimiaoshu" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.binglimiaoshu" label="病历描述" prop="binglimiaoshu">
					<span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}'>{{ruleForm.binglimiaoshu}}</span>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="textarea" v-if="type!='info'" label="注意事项" prop="zhuyishixiang">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="注意事项"
					  v-model="ruleForm.zhuyishixiang" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.zhuyishixiang" label="注意事项" prop="zhuyishixiang">
					<span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}'>{{ruleForm.zhuyishixiang}}</span>
				</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"20px 0 0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"5px","background":"#458C8C","width":"128px","lineHeight":"40px","fontSize":"18px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"5px","background":"#458C8C","width":"128px","lineHeight":"40px","fontSize":"18px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"5px","background":"#458C8C","width":"128px","lineHeight":"40px","fontSize":"18px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				binglibianhao : false,
				huanzhezhanghao : false,
				huanzhexingming : false,
				xingbie : false,
				nianling : false,
				huanzhezhengzhuang : false,
				zhenduanjieguo : false,
				binglimiaoshu : false,
				zhuyishixiang : false,
				jiuzhenshijian : false,
				yishengzhanghao : false,
				yishengxingming : false,
			},
			
			
			ruleForm: {
				binglibianhao: this.getUUID(),
				huanzhezhanghao: '',
				huanzhexingming: '',
				xingbie: '',
				nianling: '',
				huanzhezhengzhuang: '',
				zhenduanjieguo: '',
				binglimiaoshu: '',
				zhuyishixiang: '',
				jiuzhenshijian: '',
				yishengzhanghao: '',
				yishengxingming: '',
			},
		
			
			rules: {
				binglibianhao: [
				],
				huanzhezhanghao: [
				],
				huanzhexingming: [
				],
				xingbie: [
				],
				nianling: [
				],
				huanzhezhengzhuang: [
				],
				zhenduanjieguo: [
				],
				binglimiaoshu: [
				],
				zhuyishixiang: [
				],
				jiuzhenshijian: [
				],
				yishengzhanghao: [
				],
				yishengxingming: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
		this.ruleForm.jiuzhenshijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='binglibianhao'){
							this.ruleForm.binglibianhao = obj[o];
							this.ro.binglibianhao = true;
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
						if(o=='huanzhezhengzhuang'){
							this.ruleForm.huanzhezhengzhuang = obj[o];
							this.ro.huanzhezhengzhuang = true;
							continue;
						}
						if(o=='zhenduanjieguo'){
							this.ruleForm.zhenduanjieguo = obj[o];
							this.ro.zhenduanjieguo = true;
							continue;
						}
						if(o=='binglimiaoshu'){
							this.ruleForm.binglimiaoshu = obj[o];
							this.ro.binglimiaoshu = true;
							continue;
						}
						if(o=='zhuyishixiang'){
							this.ruleForm.zhuyishixiang = obj[o];
							this.ro.zhuyishixiang = true;
							continue;
						}
						if(o=='jiuzhenshijian'){
							this.ruleForm.jiuzhenshijian = obj[o];
							this.ro.jiuzhenshijian = true;
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
				}
				












			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.yishengzhanghao!=''&&json.yishengzhanghao) || json.yishengzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yishengzhanghao = json.yishengzhanghao
						this.ro.yishengzhanghao = true;
					}
					if(((json.yishengxingming!=''&&json.yishengxingming) || json.yishengxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yishengxingming = json.yishengxingming
						this.ro.yishengxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `wenzhenjilu/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {

























var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "wenzhenjilu/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `wenzhenjilu/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.wenzhenjiluCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `wenzhenjilu/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.wenzhenjiluCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
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
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.wenzhenjiluCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #000;
	  	  font-weight: 500;
	  	  width: 130px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 130px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 350px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 300px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: auto;
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
	  	  border: 1px solid #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  background: #fff;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  background: #fff;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  background: #fff;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  min-height: 150px;
	  	  height: auto;
	  	}
</style>
