<template>
  <div class="registro">
    <section class="h-100 h-custom gradient-custom-2">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <form v-on:submit.prevent="processSignUp">
            <div class="col-12">
              <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-6">
                      <div class="p-5">
                        <h3 class="fw-normal mb-5" style="color: #4835d4;">Información General</h3>

                        <div class="row">
                          <div id="first_column" class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                              <label class="form-label" for="registro_input_username">Login*</label>

                              <input type="text" v-model="registro.user.username" id="registro_input_username"
                              class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_nombres">Nombres*</label>
                              <input id="registro_input_nombres" class="form-control form-control-lg" required
                              type="text" v-model="registro.user.name"/>
                            </div>

                              <div class="form-outline" style="margin-top: 0.8rem;">
                              <label class="form-label" for="registro_input_perfil">Perfil*</label>

                              <select class="form-select form-control form-control-lg"
                                id="registro_input_perfil" name="registro_input_perfil" required
                                placeholder="Select a profile" selected="0" v-model="registro.user.perfil"
                                @change="cambiarPerfil">

                                <option value="0" disabled selected>Seleccione un Perfil</option>
                                <option value="Personal Salud">Personal Salud</option>
                                <option  value="Paciente">Paciente</option>
                                <option value="Familiar">Familiar</option>
                                <option value="Auxiliar">Auxiliar</option>
                              </select>

                              <br>
                            </div>


                          </div>

                          <div id="second_column" class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                              <label class="form-label" for="registro_input_password">
                                Contraseña*</label>

                              <input type="text" v-model="registro.user.password" id="registro_input_password" required
                                class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_lastname">
                                Apellidos*</label>
                              <input type="text" v-model="registro.user.lastname" id="registro_input_lastname"
                                class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_phone">Celular*</label>

                              <input type="text" v-model="registro.user.phone" id="registro_input_phone"
                                class="form-control form-control-lg" />
                            </div>

                            <div id="psalud" v-if="psalud_options" >

                              <div class="form-outline">
                                <label class="form-label" for="registro_input_rol">Rol</label>

                                <select class="form-select form-control form-control-lg"
                                  id="registro_input_rol" name="registro_input_rol" required
                                  placeholder="" selected="0" v-model="registro.psalud.rol">
                                  <option value="0" disabled selected>Rol</option>
                                  <option value="Enfermero">Enfermero</option>
                                  <option value="Medico">Medico</option>
                                  <option value="Otro">Otro</option>
                                </select>

                                <br>
                              </div>


                              <div class="form-outline">
                                <label class="form-label" for="registro_input_especialidad">
                                  Especialidad</label>

                                <select class="form-select form-control form-control-lg"
                                  id="registro_input_especialidad" name="registro_input_especialidad" 
                                  required placeholder="" selected="0" v-model="registro.psalud.especialidad">
                                  <option value="0" disabled selected>Especialidad</option>
                                  <option value="Pediatria">Pediatria</option>
                                  <option value="Cardiologia">Cardiologia</option>
                                  <option value="Otorrinolaringologia">Otorrinolaringologia</option>
                                  <option value="Oftanmologia">Oftanmologia</option>
                                  <option value="Odontologia">Odontologia</option>
                                  <option value="Medicina general">Medicina cd general</option>
                                  <option value="Emergencia">Emergencia</option>
                                  <option value="Otro">Otro</option>
                                </select>

                                <br>
                              </div>

                              <!-- marca -->
                            </div>

                            <div id="paciente" v-if="paciente_options">

                                <div id="medico">
                                <label for="" class="form-label">
                                  Medico
                                </label>
                                  <!-- TODO: hacer lista de medico -->
                                <input type="text" class="form-control form-control-sm" v-model="registro.paciente.psalud_id" required>
                                </div>

                              <div class="form-outline">
                                <label class="form-label" for="registro_input_birthday">
                                  Fecha de Nacimiento*</label>

                                <input id="registro_input_birthday" class="form-control form-control-sm"
                                type="date" required v-model="registro.paciente.birthday"/>
                              </div>

                              <div class="mb-4 pb-2">
                                <div class="form-outline form-white">
                                  <label class="form-label" for="registro_input_direccion">Dirección</label>

                                  <input type="text" v-model="registro.paciente.city" id="registro_input_direccion" required
                                    class="form-control form-control-lg" />
                                </div>
                              </div>
                            </div>


                            <div id="familiar" v-if="familiar_options">

                              <div class="form-outline">
                              <label class="form-label" for="registro_input_parentesco">
                                Parentesco</label>

                              <select class="form-select form-control form-control-lg"
                                id="registro_input_parentesco" name="registro_input_parentesco" 
                                required placeholder="" selected="0" v-model="registro.familiar.parentesco">
                                <option value="0" disabled selected>Parentesco</option>
                                <option value="Madre">Madre</option>
                                <option value="Padre">Padre</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Tio(a)">Tio(a)</option>
                                <option value="Abuelo(a)">Abuelo(a)</option>
                                <option value="Conyugue">Conyugue</option>
                                <option value="Ninguno">Otro</option>
                              </select>

                              <br>
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_paciente">Paciente</label>

                              <input id="registro_input_paciente" class="form-control form-control-lg"
                                type="text" required v-model="registro.familiar.id_paciente"/>
                                
                            </div>

                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 bg-indigo text-white">
                      <div class="p-5">
                        <h3 class="fw-normal mb-5">Detalles de Contacto</h3>


                        <div class="mb-4">
                          <div class="form-outline form-white">
                            <label class="form-label" for="registro_input_email">Email</label>

                            <input type="text" v-model="registro.user.email" id="registro_input_email" required
                              class="form-control form-control-lg" />
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-start mb-4 pb-3">
                          <input class="form-check-input me-3" type="checkbox"
                            value="" id="form2Example3c" />

                          <label class="form-check-label text-white" for="form2Example3">
                            Acepto los <a href="#!" class="text-white"><u>
                              Terminos y Condiciones</u></a> del servicio.
                          </label>
                        </div>

                        <button type="submit" class="btn btn-light btn-lg"
                          data-mdb-ripple-color="dark">Registrarse</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Registro',
    data: function(){
      return {
        registro: {
          user: {
            username: "",
            password: "",
            perfil: "",
            name: "",
            lastname: "",
            phone: "",
            email: ""
          },
          paciente: {
            city: "",
            birthday: "",
            psalud_id: "",
            username: ""
            },
          psalud: {
            rol: "",
            especialidad: "",
            username: ""
          },
          familiar: {
            parentesco: "",
            id_paciente: "",
            username_id: "",
          }
        },
        paciente_options: false,
        psalud_options: false,
        familiar_options: false
      }
    },
    methods: {
      processSignUp: function(){
        axios.post(
          //"https://hospitalizacion-en-casa-g60-e1.herokuapp.com/user/",
          "http://localhost:8000/user/",
          this.registro.user,
          {headers: {}}
        )
        .then((result) => {
          let dataSignUp = {
          username: this.registro.user.username,
        }
        if(this.registro.user.perfil=="Paciente"){
                this.registro.paciente.username = this.registro.user.username;
                axios.post("http://127.0.0.1:8000/paciente/", this.registro.paciente,{headers:{}})
            .then((result)=>{
                alert("Registro Exitoso");
                
            }).catch((error)=>{
                console.log(error)
                alert("Error: fallo el registro");
            });
          }else if(this.registro.user.perfil=="Personal Salud"){
                this.registro.psalud.username = this.registro.user.username;
                axios.post("http://127.0.0.1:8000/psalud/", this.registro.psalud,{headers:{}})
            .then((result)=>{
                alert("Registro Exitoso");
                
            }).catch((error)=>{
                console.log(error)
                alert("Error: fallo el registro");
            });
          }else if(this.registro.user.perfil=="Familiar"){
                this.registro.familiar.username = this.registro.user.username;
                axios.post("http://127.0.0.1:8000/familiar/", this.registro.familiar,{headers:{}})
            .then((result)=>{
                alert("Registro Exitoso");
                
            }).catch((error)=>{
                console.log(error)
                alert("Error: fallo el registro");
            });
      }
        this.$emit('completedSignUp', dataSignUp)
        })
        .catch((error) => {
          console.log(error)
          alert("ERROR: Fallo en el registro.");
        });
      },  
      show_paciente_options: function(){
        this.paciente_options = true;
        this.psalud_options = false;
        this.familiar_options = false;
      },
      show_psalud_options: function(){
        this.paciente_options = false;
        this.psalud_options = true;
        this.familiar_options = false;
      },
      show_familiar_options: function(){
        this.paciente_options = false;
        this.psalud_options = false;
        this.familiar_options = true;
      },
      cambiarPerfil: function(){
        if(this.registro.user.perfil == "Paciente"){
          this.show_paciente_options();
        }
        else if(this.registro.user.perfil == "Personal Salud"){
          this.show_psalud_options();
        }
        else if(this.registro.user.perfil == "Familiar"){
          this.show_familiar_options();
        }
      }
    },
  }
</script>

<style scoped>
  .bg-indigo {
    background-color: rgb(108, 99, 255);
  }
</style>