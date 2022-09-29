<template>
  <div class="home">
    <div class="row">    
      <div class="col-md-6">
      <img src="../assets/images/home.png" alt="Image" class="img-fluid">
      </div>
      <div class="col-md-6 display-6 text-center">
      <div class="greetings alert">
      ¡Bienvenido <span> {{username}} </span>! a tu mejor opcion para
        cuidarte en casa
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { functionTypeAnnotation } from '@babel/types';
import axios from 'axios';
export default {
  name: 'Home',
  data: function (){
    return {
      username: localStorage.getItem("username") || ""
    }
  },
}


</script>
