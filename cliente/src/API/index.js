export const SERVERURL = 'http://localhost:5000/';
export const API_SERVER = SERVERURL+'1.0.0/';
export const STRAPI_URL = 'http://localhost:3030/';
export const STRAPI_API = STRAPI_URL+'api/';
// const API_SERVER = 'http://localhost:3055/1.0.0';
// const API_SERVER = 'https://cei1.herokuapp.com/1.0.0';

export class Eventos {
    static calendarEvents = async function(){
          let result = await fetch(`${STRAPI_API}eventos`)
          return result.json()
    }
    static get = async function(){
        let result = await fetch(`${API_SERVER}eventos`)
        return result.json()
    }
}

export class Auth {
    static validate = async function(usuario, contrasena){
          let resultValidate = {'access':false, 'data':null};

          return await fetch(`${STRAPI_URL}admin/login`,{
            method: "POST",
            body: JSON.stringify({email: usuario, password: contrasena}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json())
          .then(json => {
            json = json.data
            if(json.user){
                resultValidate.access = true;
                resultValidate.data =  {  usuario: json.email, correo: json.email, nombre: json.firstname }
                return resultValidate;
            }else{
                resultValidate.access = false;
                resultValidate.data = 'Usuario o contraseña incorrecta';
                return resultValidate;
            }
          })
          .catch(err => {
            resultValidate.access = false;
            resultValidate.data = 'Ocurrio un error al validar el acceso';
            return resultValidate;
        });
    }
}