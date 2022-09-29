<template>
  <div class="login">
    <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/images/paciente-consulta.png" alt="Image" class="img-fluid m-5">
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center row-custom">
            <div class="col-md-8 btn">
              <div class="mb-4 bg-info text-white">
                <div contenteditable="true" spellcheck="true" class="h4 mega" 
                  data-selected="true" data-label-id="0">Hospital en casa</div>
                
            </div>
            <form action="#" method="post" class="form-post">
              <div class="form-group first input-padding">
                <label for="id" class="label-single">ID Paciente</label>
                <input type="text" class="form-control" id="id" v-model="pacienteid">
              </div>
              
              <input type="submit" value="Consultar" 
                class="btn btn-block btn-primary button-consulta" v-on:click="processConsulta">
              
            </form>
            <br>
            <p> Ingrese el Id del paciente para poder continuar, 
                luego presione el boton consultar </p>
            <br>
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
      psalud_id:"",
      username: "",
      city: "",
      birthday: ""     
    }
  },
  methods:{
  processConsulta(){
    let id= this.pacienteid;
    alert(id);
    axios.get(`http://127.0.0.1:8000/consulpaciente/${id}`)
    .then((result) =>{
        this.psalud_id = result.data.psalud_id;
        this.username = result.data.username;
        this.city = result.data.city;
        this.birthday = result.data.birthday;
    }).catch((error)=>{
      alert("Aquí está el error");
      console.log(error);
    });
  }
},
created:function(){}
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
    top:65px
  }

  .button-consulta{
    position:relative;
    background-color: rgb(108, 99, 255);
    left:2px;
    top:-10px
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
