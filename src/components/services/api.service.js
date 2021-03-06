import axios from "axios";
import config from "../../configs/index.config";

export default class ApiService{
    login(param , callback){
        axios({
            method: "post",
            url: config.pathUrlApi + "/users/login",
            data: param
        }).then(res =>{
            callback(res.data);
        }).catch(error =>{
            callback(error);
        });
    }

    //----------------------articles
    getListArticles(page , itemPerPage , callback){
        axios({
            method: "get",
            url: config.pathUrlApi + "/articles/list?page=" + page + "&itemPerPage=" + itemPerPage
        }).then(res =>{
            callback(res.data);
        }).catch(error =>{
            callback(error.response)
        })
    }
    createArticle(param , callback){
        axios({
            method: "post",
            url: config.pathUrlApi + "/articles/create",
            data: param
        }).then(res =>{
            callback(res.data);
        }).catch(error =>{
            callback(error.response)
        })
    }


    //------------------------upload file
    uploadSingleFile(param, callback){
        axios({
            method:"post",
            url:config.pathUrlApi + "/uploads",
            data: param
        }).then(res =>{
            callback(res.data);
        }).catch(error =>{
            callback(error.response)
        })
    }
}
