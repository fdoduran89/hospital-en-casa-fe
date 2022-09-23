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
            <form action="#" method="post" class="form-post">
              <div class="form-group first input-padding">
                <label for="id" class="label-single">ID</label>
                <input type="text" class="form-control" id="id">
              </div>
              
              <input type="submit" value="Consultar" class="btn btn-block btn-primary button-consulta">
              
              <div class="social-login">
                <a href="#" class="facebook">
                  <span class="icon-facebook mr-3"></span> 
                </a>
                <a href="#" class="twitter">
                  <span class="icon-twitter mr-3"></span> 
                </a>
                <a href="#" class="google">
                  <span class="icon-google mr-3"></span> 
                </a>
              </div>
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'consultas',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

  .button-consulta{
    position:relative;
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