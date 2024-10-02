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
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="药品名称" prop="yaopinmingcheng">
					<el-input v-model="ruleForm.yaopinmingcheng" placeholder="药品名称" clearable  :readonly="ro.yaopinmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="药品名称" prop="yaopinmingcheng">
					<el-input v-model="ruleForm.yaopinmingcheng" placeholder="药品名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info' && !ro.yaopintupian" label="药品图片" prop="yaopintupian">
					<file-upload
						tip="点击上传药品图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.yaopintupian?ruleForm.yaopintupian:''"
						@change="yaopintupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-else-if="ruleForm.yaopintupian" label="药品图片" prop="yaopintupian">
					<img v-if="ruleForm.yaopintupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.yaopintupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.yaopintupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="药品类型" prop="yaopinleixing">
					<el-select :disabled="ro.yaopinleixing" v-model="ruleForm.yaopinleixing" placeholder="请选择药品类型" >
						<el-option
							v-for="(item,index) in yaopinleixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="药品类型" prop="yaopinleixing">
					<el-input v-model="ruleForm.yaopinleixing"
						placeholder="药品类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="剂型" prop="jixing">
					<el-select :disabled="ro.jixing" v-model="ruleForm.jixing" placeholder="请选择剂型" >
						<el-option
							v-for="(item,index) in jixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="剂型" prop="jixing">
					<el-input v-model="ruleForm.jixing"
						placeholder="剂型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="保质期" prop="baozhiqi">
					<el-input v-model="ruleForm.baozhiqi" placeholder="保质期" clearable  :readonly="ro.baozhiqi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="保质期" prop="baozhiqi">
					<el-input v-model="ruleForm.baozhiqi" placeholder="保质期" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="生产厂家" prop="shengchanchangjia">
					<el-input v-model="ruleForm.shengchanchangjia" placeholder="生产厂家" clearable  :readonly="ro.shengchanchangjia"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="生产厂家" prop="shengchanchangjia">
					<el-input v-model="ruleForm.shengchanchangjia" placeholder="生产厂家" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="规格" prop="guige">
					<el-input v-model="ruleForm.guige" placeholder="规格" clearable  :readonly="ro.guige"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="规格" prop="guige">
					<el-input v-model="ruleForm.guige" placeholder="规格" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="单价" prop="danjia">
					<el-input v-model="ruleForm.danjia" placeholder="单价" clearable  :readonly="ro.danjia"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="单价" prop="danjia">
					<el-input v-model="ruleForm.danjia" placeholder="单价" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="数量" clearable  :readonly="ro.shuliang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="数量" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="生产日期" prop="shengchanriqi">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.shengchanriqi" 
						type="date"
						:readonly="ro.shengchanriqi"
						placeholder="生产日期"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.shengchanriqi" label="生产日期" prop="shengchanriqi">
					<el-input v-model="ruleForm.shengchanriqi" placeholder="生产日期" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="入库日期" prop="rukuriqi">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.rukuriqi" 
						type="date"
						:readonly="ro.rukuriqi"
						placeholder="入库日期"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.rukuriqi" label="入库日期" prop="rukuriqi">
					<el-input v-model="ruleForm.rukuriqi" placeholder="入库日期" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="入库批号" prop="rukupihao">
					<el-input v-model="ruleForm.rukupihao" placeholder="入库批号" clearable  :readonly="ro.rukupihao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="入库批号" prop="rukupihao">
					<el-input v-model="ruleForm.rukupihao" placeholder="入库批号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="经办人" prop="jingbanren">
					<el-input v-model="ruleForm.jingbanren" placeholder="经办人" clearable  :readonly="ro.jingbanren"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="经办人" prop="jingbanren">
					<el-input v-model="ruleForm.jingbanren" placeholder="经办人" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="药品说明" prop="yaopinshuoming">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.yaopinshuoming" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.yaopinshuoming" label="药品说明" prop="yaopinshuoming">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.yaopinshuoming"></span>
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
				yaopinmingcheng : false,
				yaopintupian : false,
				yaopinleixing : false,
				jixing : false,
				baozhiqi : false,
				yaopinshuoming : false,
				shengchanchangjia : false,
				guige : false,
				danjia : false,
				shuliang : false,
				shengchanriqi : false,
				rukuriqi : false,
				rukupihao : false,
				jingbanren : false,
			},
			
			
			ruleForm: {
				yaopinmingcheng: '',
				yaopintupian: '',
				yaopinleixing: '',
				jixing: '',
				baozhiqi: '',
				yaopinshuoming: '',
				shengchanchangjia: '',
				guige: '',
				danjia: '',
				shuliang: '',
				shengchanriqi: '',
				rukuriqi: '',
				rukupihao: '',
				jingbanren: '',
			},
		
			yaopinleixingOptions: [],
			jixingOptions: [],
			
			rules: {
				yaopinmingcheng: [
					{ required: true, message: '药品名称不能为空', trigger: 'blur' },
				],
				yaopintupian: [
				],
				yaopinleixing: [
				],
				jixing: [
				],
				baozhiqi: [
				],
				yaopinshuoming: [
				],
				shengchanchangjia: [
				],
				guige: [
				],
				danjia: [
					{ required: true, message: '单价不能为空', trigger: 'blur' },
					{ validator: validateNumber, trigger: 'blur' },
				],
				shuliang: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				shengchanriqi: [
				],
				rukuriqi: [
				],
				rukupihao: [
				],
				jingbanren: [
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
						if(o=='yaopinmingcheng'){
							this.ruleForm.yaopinmingcheng = obj[o];
							this.ro.yaopinmingcheng = true;
							continue;
						}
						if(o=='yaopintupian'){
							this.ruleForm.yaopintupian = obj[o];
							this.ro.yaopintupian = true;
							continue;
						}
						if(o=='yaopinleixing'){
							this.ruleForm.yaopinleixing = obj[o];
							this.ro.yaopinleixing = true;
							continue;
						}
						if(o=='jixing'){
							this.ruleForm.jixing = obj[o];
							this.ro.jixing = true;
							continue;
						}
						if(o=='baozhiqi'){
							this.ruleForm.baozhiqi = obj[o];
							this.ro.baozhiqi = true;
							continue;
						}
						if(o=='yaopinshuoming'){
							this.ruleForm.yaopinshuoming = obj[o];
							this.ro.yaopinshuoming = true;
							continue;
						}
						if(o=='shengchanchangjia'){
							this.ruleForm.shengchanchangjia = obj[o];
							this.ro.shengchanchangjia = true;
							continue;
						}
						if(o=='guige'){
							this.ruleForm.guige = obj[o];
							this.ro.guige = true;
							continue;
						}
						if(o=='danjia'){
							this.ruleForm.danjia = obj[o];
							this.ro.danjia = true;
							continue;
						}
						if(o=='shuliang'){
							this.ruleForm.shuliang = obj[o];
							this.ro.shuliang = true;
							continue;
						}
						if(o=='shengchanriqi'){
							this.ruleForm.shengchanriqi = obj[o];
							this.ro.shengchanriqi = true;
							continue;
						}
						if(o=='rukuriqi'){
							this.ruleForm.rukuriqi = obj[o];
							this.ro.rukuriqi = true;
							continue;
						}
						if(o=='rukupihao'){
							this.ruleForm.rukupihao = obj[o];
							this.ro.rukupihao = true;
							continue;
						}
						if(o=='jingbanren'){
							this.ruleForm.jingbanren = obj[o];
							this.ro.jingbanren = true;
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
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.yaopinleixingOptions = "中药,西药,中成药".split(',')
            this.jixingOptions = "颗粒,胶囊,注射剂,丸剂,口服液体剂,贴剂,喷剂".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `yaopinxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.yaopinshuoming = this.ruleForm.yaopinshuoming.replace(reg,'../../../springboote9xw2/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {




	if(this.ruleForm.yaopintupian!=null) {
		this.ruleForm.yaopintupian = this.ruleForm.yaopintupian.replace(new RegExp(this.$base.url,"g"),"");
	}

























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
				url: "yaopinxinxi/page", 
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
					   url: `yaopinxinxi/${!this.ruleForm.id ? "save" : "update"}`,
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
						 this.parent.yaopinxinxiCrossAddOrUpdateFlag = false;
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
			   url: `yaopinxinxi/${!this.ruleForm.id ? "save" : "update"}`,
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
				 this.parent.yaopinxinxiCrossAddOrUpdateFlag = false;
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
      this.parent.yaopinxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    yaopintupianUploadChange(fileUrls) {
	    this.ruleForm.yaopintupian = fileUrls;
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
