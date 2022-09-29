<template>
  <div class="header">
    <h2>Hospital App</h2>
    <nav>
        <button v-if="isRegistro" v-on:click="loadRegistro"> Registro </button>
        <button v-if="isLogin" v-on:click="loadLogin">Login</button>
        <button v-if="is_auth" v-on:click="loadConsulta"> Consulta Paciente </button>
        <button v-if="isHome" v-on:click="loadHome"> Home </button>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        
    </nav>
  </div>
<div class="main-component">
  <router-view 
    v-on:completedLogin="completedLogin"
    v-on:completedRegistro="completedRegistro"
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
          is_auth: false,
          isLogin: false,
          isRegistro: true,
          isHome: false,
          isLogOut: false,
        }
    },
    methods:{
      veryAuth: function(){
        this.isLogin = false;
        this.isRegistro = true;
        this.isLogOut = false,
        this.is_auth= localStorage.getItem("isAuth") || false;
        if(this.is_auth== false)
          this.$router.push({name:"login"});
          

        else
          this.$router.push({name:"home"});
          this.isLogOut = true;
      },
      loadLogin: function(){
          this.$router.push({name:"login"});
          this.isRegistro = true;
          this.isLogin = false;
      },
      loadRegistro: function(){
          this.$router.push({name:"registro"});
          this.isLogin = true;
          this.isRegistro = false;

      },
      completedLogin: function(data){
  
          localStorage.setItem("isAuth", true);
          localStorage.setItem("username", data.username);
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
        this.isHome = false;
        this.isRegistro = true;
        this.isConsulta = true;
      },
      loadConsulta:function(){
      this.$router.push({name:"consultas"});
      this.isRegistro = false;
      this.isConsulta = false;
      this.isHome = true;
    }
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
