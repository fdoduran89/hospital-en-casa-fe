<template>
  <div class="header">
    <h2>Hospital App</h2>
    <nav>
        <a href="home"><button v-if="is_auth"> Home </button></a>
        <a href="consultas"><button v-if="is_auth" > Consulta Paciente </button></a>
        <a href="login"><button v-if="is_auth" > Cerrar Sesión </button></a>
    </nav>
  </div>
<div class="main-component">
  <router-view
    v-on:completedLogIn="completedLogIn"
    v-on:completedSignUp="completedSignUp"
  >
</router-view>
</div>
  <div class="footer">
    Ciclo 3 - 2022 Grupo 60-equipo 1
  </div>
</template>

<script>
  export default({
    data: function(){
        return{
          is_auth: false
        }
    },
    methods:{
      veryAuth: function(){
        this.is_auth= localStorage.getItem("isAuth") || false;
        if(this.is_auth== false)
          this.$router.push({name:"home"});
        else
          this.$router.push({name:"login"});
      },
      loadLogin: function(){
          this.$router.push({name:"login"})
      },
      loadRegistro: function(){
          this.$router.push({name:"registro"})
      },
      completedLogin: function(data){
  
          localStorage.setItem("isAuth", true);
          localStorage.setItem("username", data.username);
          //localStorage.setItem("token_access", data.token_access);
          //localStorage.setItem("token_refresh", data.token_refresh);
          alert("Auntentificación Exitoda");
          this.veryAuth();
      },
      completedRegistro: function(data){
          alert("Registro Exitoso");
          this.completedLogin(data);
      },
      logOut:function(){
        localStorage.clear();
        alert("Sesion cerrada");
        this.veryAuth();
      },
      loadHome:function(){
        this.$router.push({name:"home"});
      },
    },
    created:function(){
      this.veryAuth();
    }
  })
  </script>

<style>
  body {
    margin: 0 0 0 0;
  }
  .gradient-custom-2 {
  /* fallback for old browsers */
  background: #a1c4fd;
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1));
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1))
  }
  .bg-indigo {
    background-color: #4835d4;
  }
  .header {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 60px;
    background-color: rgb(108, 99, 255);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h2 {
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .footer {
    background-color: rgb(108, 99, 255);
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 20px;
  }
  .header nav button {
    background-color: rgb(108, 99, 255);
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;
  }
  .header nav button:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(108, 99, 255);
  }
  button {
    background-color: #ffffff;
    border: none;
    color: rgb(108, 99, 255);
  }
</style>
