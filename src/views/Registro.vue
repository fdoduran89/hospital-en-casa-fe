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
                          <div class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                              <label class="form-label" for="registro_input_username">Login*</label>

                              <input type="text" v-model="user.username" id="registro_input_username"
                                class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_nombres">Nombres*</label>
                              <input id="registro_input_nombres" class="form-control form-control-lg"
                                type="text" v-model="user.username"/>
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_birthday">
                                Fecha de Nacimiento*</label>

                              <input id="registro_input_birthday" class="form-control form-control-sm" 
                                type="date" v-model="user.username"/>
                            </div>

                            <div class="form-outline" style="margin-top: 0.8rem;">
                              <label class="form-label" for="registro_input_perfil">Perfil*</label>

                              <select class="form-select form-control form-control-lg"
                                id="registro_input_perfil" name="registro_input_perfil" required
                                placeholder="Select a profile" selected="0" v-model="user.username">
                                <option value="0" disabled selected>Seleccione un Perfil</option>
                                <option value="Paciente">Paciente</option>
                                <option value="Personal Salud">Personal Salud</option>
                                <option value="Familiar">Familiar</option>
                              </select>

                              <br>
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_paciente">Paciente</label>

                              <input id="registro_input_paciente" class="form-control form-control-lg"
                                type="text" v-model="user.username"/>
                            </div>
                          </div>

                          <div class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                              <label class="form-label" for="registro_input_password">
                                Contraseña*</label>

                              <input type="text" v-model="user.username" id="registro_input_password"
                                class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_lastname">
                                Apellidos*</label>
                              <input type="text" v-model="user.username" id="registro_input_lastname" 
                                class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_phone">Celular*</label>

                              <input type="text" v-model="user.username" id="registro_input_phone" 
                                class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_parentesco">
                                Parentesco</label>

                              <select class="form-select form-control form-control-lg"
                                id="registro_input_parentesco" name="registro_input_parentesco" 
                                required placeholder="" selected="0" v-model="user.username">
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
                              <label class="form-label" for="registro_input_rol">Rol</label>

                              <select class="form-select form-control form-control-lg"
                                id="registro_input_rol" name="registro_input_rol" required
                                placeholder="" selected="0" v-model="user.username">
                                <option value="0" disabled selected>Rol</option>
                                <option value="Enfermero">Enfermero</option>
                                <option value="Medico_urgencias">Medico</option>
                                <option value="Auxiliar">Auxiliar</option>
                                <option value="Otro">Otro</option>
                              </select>

                              <br>
                            </div>

                            <div class="form-outline">
                              <label class="form-label" for="registro_input_especialidad">
                                Especialidad</label>

                              <select class="form-select form-control form-control-lg"
                                id="registro_input_especialidad" name="registro_input_especialidad" 
                                required placeholder="" selected="0" v-model="user.username">
                                <option value="0" disabled selected>Especialidad</option>
                                <option value="Pediatria">Pediatria</option>
                                <option value="Cardiologia">Cardiologia</option>
                                <option value="Otorrinolaringologia">Otorrinolaringologia</option>
                                <option value="Oftanmologia">Oftanmologia</option>
                                <option value="Odontologia">Odontologia</option>
                                <option value="Medicina_general">Medicina cd general</option>
                                <option value="Emergencia">Emergencia</option>
                                <option value="Otro">Otro</option>
                              </select>

                              <br>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 bg-indigo text-white">
                      <div class="p-5">
                        <h3 class="fw-normal mb-5">Detalles de Contacto</h3>

                        <div class="mb-4 pb-2">
                          <div class="form-outline form-white">
                            <label class="form-label" for="registro_input_direccion">Dirección</label>

                            <input type="text" v-model="user.username" id="registro_input_direccion" 
                              class="form-control form-control-lg" />
                          </div>
                        </div>

                        <div class="mb-4 pb-2">
                          <div class="form-outline form-white">
                            <label class="form-label" for="registro_input_referencia">
                              Punto de Referencia</label>

                            <input type="text" v-model="user.username" id="registro_input_referencia" 
                              class="form-control form-control-lg" />
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-5 mb-4 pb-2">
                            <div class="form-outline form-white">
                              <label class="form-label" for="registro_input_codigo_postal">
                                Código Postal</label>

                              <input type="text" v-model="user.username" id="registro_input_codigo_postal" 
                              class="form-control form-control-lg" />
                            </div>
                          </div>

                          <div class="col-md-7 mb-4 pb-2">
                            <div class="form-outline form-white">
                              <label class="form-label" for="registro_input_ciudad">Ciudad</label>

                              <input type="text" v-model="user.username" id="registro_input_ciudad" 
                                class="form-control form-control-lg" />
                            </div>
                          </div>
                        </div>

                        <div class="mb-4 pb-2">
                          <div class="form-outline form-white">
                            <label class="form-label" for="registro_input_pais">País</label>

                            <input type="text" v-model="user.username" id="registro_input_pais"
                              class="form-control form-control-lg" />
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-5 mb-4 pb-2">
                            <div class="form-outline form-white">
                              <label class="form-label" for="registro_input_codigo_area">
                                Código de Área</label>

                              <input type="text" v-model="user.username" id="registro_input_codigo_area" 
                                class="form-control form-control-lg" />
                            </div>
                          </div>

                          <div class="col-md-7 mb-4 pb-2">
                            <div class="form-outline form-white">
                              <label class="form-label" for="registro_input_telefono">Telefono</label>

                              <input type="text" v-model="user.username" id="registro_input_telefono"
                                class="form-control form-control-lg" />
                            </div>
                          </div>
                        </div>

                        <div class="mb-4">
                          <div class="form-outline form-white">
                            <label class="form-label" for="registro_input_email">Email</label>

                            <input type="text" v-model="user.username" id="registro_input_email"
                              class="form-control form-control-lg" />
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-start mb-4 pb-3">
                          <input class="form-check-input me-3" type="checkbox" v-model="user.username"
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
        user: {
          username: "",
          password: "",
          name: "",
          email: "",
          account: {
            lastChangeDate: (new Date()).toJSON().toString(),
            balance: 0,
            isActive: true
          }
        }
      }
    },
    methods: {
      processSignUp: function(){
        axios.post(
          "https://mision-tic-bank-be.herokuapp.com/user/",
          this.user,
          {headers: {}}
        )
        .then((result) => {
          let dataSignUp = {
          username: this.user.username,
          token_access: result.data.access,
          token_refresh: result.data.refresh,
        }

        this.$emit('completedSignUp', dataSignUp)
        })
        .catch((error) => {
          console.log(error)

          alert("ERROR: Fallo en el registro.");
        });
      }
    }
  }
</script>

<style scoped>
  .bg-indigo {
    background-color: rgb(108, 99, 255);
  }
</style>
