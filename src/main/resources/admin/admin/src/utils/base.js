const base = {
    get() {
        return {
            url : "http://localhost:8080/springboote9xw2/",
            name: "springboote9xw2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboote9xw2/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医院信息管理系统"
        } 
    }
}
export default base
