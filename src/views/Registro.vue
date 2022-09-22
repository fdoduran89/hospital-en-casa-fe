<template>
  <section class="h-100 h-custom gradient-custom-2">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
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
                          <input type="text" id="registro_input_username" class="form-control form-control-lg" />
                          <label class="form-label" for="registro_input_username">Login*</label>
                        </div>

                        <div class="form-outline">
                          <input id="registro_input_password" class="form-control form-control-lg" type="password"/>
                          <label class="form-label" for="registro_input_password">Contraseña*</label>
                        </div>

                        <div class="form-outline">
                          <input id="registro_input_birthday" class="form-control form-control-sm" type="date"/>
                          <label class="form-label" for="registro_input_birthday">Fecha de Nacimiento</label>
                        </div>

                        <div class="form-outline" style="margin-top: 0.8rem;">
                          <select class="form-select form-control form-control-lg"
                            id="registro_input_perfil" name="registro_input_perfil" required
                            placeholder="Select a profile" selected="0">
                            <option value="0" disabled selected>Seleccione un Perfil</option>
                            <option value="Paciente">Paciente</option>
                            <option value="Medico">Medico</option>
                            <option value="Familiar">Familiar</option>
                          </select>
                          <br>
                        </div>

                        <div class="form-outline" style="margin-top: 0.8rem;">
                          <select class="form-select form-control form-control-lg "
                            id="registro_input_perfil" name="registro_input_paciente" required
                            placeholder="Select a patient" selected="0">
                            <option value="0" disabled selected>Seleccione un Paciente</option>
                            <option value="1">Pedro Perez</option>
                          </select>
                          <br>
                        </div>

                      </div>

                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input type="text" id="registro_input_name" class="form-control form-control-lg" />
                          <label class="form-label" for="registro_input_name">Nombres</label>
                        </div>

                        <div class="form-outline">
                          <input type="text" id="registro_input_lastname" class="form-control form-control-lg" />
                          <label class="form-label" for="registro_input_lastname">Apellidos</label>
                        </div>

                        <div class="form-outline">
                          <input type="text" id="registro_input_phone" class="form-control form-control-lg" />
                          <label class="form-label" for="registro_input_phone">Celular</label>
                        </div>

                        <div class="form-outline">
                          <select class="form-select form-control form-control-lg"
                            id="registro_input_parentesco" name="registro_input_parentesco" required
                            placeholder="" selected="0">
                            <option value="0" disabled selected>Parentesco</option>
                            <option value="Madre">Madre</option>
                            <option value="Padre">Padre</option>
                            <option value="Hijo(a)">Hijo(a)</option>
                            <option value="Hermano(a)">Hermano(a)</option>
                            <option value="Tio(a)">Tio(a)</option>
                            <option value="Abuelo(a)">Abuelo(a)</option>
                            <option value="Conyugue">Conyugue</option>
                            <option value="Ninguno">Ninguno</option>
                          </select>
                          <br>
                        </div>

                        <div class="form-outline">
                          <select class="form-select form-control form-control-lg"
                            id="registro_input_rol" name="registro_input_rol" required
                            placeholder="" selected="0">
                            <option value="0" disabled selected>Rol Medico</option>
                            <option value="Enfermero">Enfermero</option>
                            <option value="Medico_urgencias">Medico_urgencias</option>
                            <option value="Medico_general">Medico_general</option>
                            <option value="Pediatra">Pediatra</option>
                            <option value="Anestesiologo">Anestesiologo</option>
                            <option value="Cirujano">Cirujano</option>
                            <option value="Internista">Internista</option>
                            <option value="Otro">Ninguno</option>
                          </select>
                          <br>
                        </div>

                        <div class="form-outline">
                          <select class="form-select form-control form-control-lg"
                            id="registro_input_perfil" name="registro_input_perfil" required
                            placeholder="" selected="0">
                            <option value="0" disabled selected>Especialidad</option>
                            <option value="Pediatria">Pediatria</option>
                            <option value="Cardiologia">Cardiologia</option>
                            <option value="Otorrinolaringologia">Otorrinolaringologia</option>
                            <option value="Oftanmologia">Oftanmologia</option>
                            <option value="Odontologia">Odontologia</option>
                            <option value="Medicina_general">Medicina_general</option>
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
                        <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea2">Dirección</label>
                      </div>
                    </div>

                    <div class="mb-4 pb-2">
                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea3" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea3">Punto de Referencia</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-5 mb-4 pb-2">

                        <div class="form-outline form-white">
                          <input type="text" id="form3Examplea4" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea4">Código Postal</label>
                        </div>

                      </div>
                      <div class="col-md-7 mb-4 pb-2">

                        <div class="form-outline form-white">
                          <input type="text" id="form3Examplea5" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea5">Ciudad</label>
                        </div>

                      </div>
                    </div>

                    <div class="mb-4 pb-2">
                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea6" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea6">País</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-5 mb-4 pb-2">

                        <div class="form-outline form-white">
                          <input type="text" id="form3Examplea7" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea7">Código de Área</label>
                        </div>

                      </div>
                      <div class="col-md-7 mb-4 pb-2">

                        <div class="form-outline form-white">
                          <input type="text" id="form3Examplea8" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea8">Telf Fijo</label>
                        </div>

                      </div>
                    </div>

                    <div class="mb-4">
                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea9" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea9">Email</label>
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-start mb-4 pb-3">
                      <input class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                      <label class="form-check-label text-white" for="form2Example3">
                       Acepto los <a href="#!" class="text-white"><u>Terminos y Condiciones</u></a> del servicio.
                      </label>
                    </div>

                    <button type="button" class="btn btn-light btn-lg"
                      data-mdb-ripple-color="dark">Registrarse</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Registro'
  }
</script>