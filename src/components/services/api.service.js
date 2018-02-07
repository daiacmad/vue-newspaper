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
}
