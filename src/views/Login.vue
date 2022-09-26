<template>
  <div class="login">
    <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/images/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid">
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center row-custom">
            <div class="col-md-8">
              <div class="mb-4 bg-info text-white">
                <div contenteditable="true" spellcheck="true" class="h4 mega" data-selected="true" data-label-id="0">Hospital en casa</div>
                
            </div>
            <form v-on:submit.prevent="processLogInUser">
              <div class="form-group first input-padding">
                <label id="user_username" class="label-single">Username
                <input type="text" v-model="user.username" placeholder="Usuario" required>
              </label>
              </div>
              <div class="form-group last input-padding">
                <label id="user_password"> Password:
                <input type="password" v-model="user.password" placeholder="Contraseña" required>
                </label>
              </div>
              
              <div class="mb-1 align-items-center">
                <label class="control control--checkbox mb-0">
                  <div class="caption mb-4">Recuerdame
                    <input type="checkbox" checked="checked" class="small-checkbox"/>
                  </div>
                  <div class="control__indicator"></div>
                </label>
                <div>
                  
                  <input type="submit" value="Iniciar sesión" v-on:click="loadLogIn" class="btn btn-block btn-primary button-login">
                </div>
              </div>
              
            </form>
            <div class="ml-auto"><a href="#" class="forgot-pass forgot-password">Olvide mi contraseña</a></div> 
            <div class="ml-auto"><a href="registro" class="registro">Registro</a></div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
      data:function(){
          return{
              user:{
                  username:"",
                  password:""
              }
          }
      },
      methods:{
          processLogInUser: function(){
              axios.post("https://hospitalizacion-en-casa-g60-e1.herokuapp.com/login/",
              this.user)//, {header:{}})
              .then((result)=>{
                  console.log(result);
                   let dataLogin={
                      username: this.user.username,
                      //token_access: result.data.access,
                      //token_refresh: result.data.refresh,
                   }
                   this.$emit('completedLogin', dataLogin)
                   alert("Login correcto")
              }).catch((error)=>{
                  if(error.response.status=="401")
                      alert("ERROR 401: Credenciales Incorrectas");
              }
              );
          }
      }
  }
  </script>

<style scoped>
  .mega{
    padding-bottom: 19px;
    padding-top: 16px;
    background-color: rgb(108, 99, 255);
    position: relative;
  }

  .row-custom{
    position:relative;
    top:45px
  }

  .remember-me{
    margin-right:-7px;
    position:relative;
    left:118px;
    top:-25px
  }

  .forgot-password{
    margin-left: -5px;
    position:relative;
    top:55px
  }

  .button-login{
    position: relative;
    background-color: rgb(108, 99, 255);
    top: -10px;
  }

  .small-checkbox{
    position:relative;
    left:12px;
    top:-5px
  }

  .form-post{
    background-color:rgb(190,187,187);
  }

  .input-padding{
    padding: 0px 5px 18px 5px;
  }

  .label-single{
    padding-top: 8px;
  }
</style>