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
    getListArticles(callback){
        axios({
            method: "get",
            url: config.pathUrlApi + "/articles/list"
        }).then(res =>{
            callback(res.data);
        }).catch(error =>{
            callback(error.response)
        })
    }
}
