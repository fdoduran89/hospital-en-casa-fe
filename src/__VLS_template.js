export default ({
data: function () {
return {
is_auth: false
};
},
methods: {
veryAuth: function () {
this.is_auth = localStorage.getItem("isAuth") || false;
if (this.is_auth == false)
this.$router.push({ name: "login" });

else
this.$router.push({ name: "registro" });
},
loadLogin: function () {
this.$router.push({ name: "login" });
},
loadRegistro: function () {
this.$router.push({ name: "registro" });
},
completedLogin: function (data) {

localStorage.setItem("isAuth", true);
localStorage.setItem("username", data.username);
alert("Auntentificación Exitoda");
this.veryAuth();
},
completedRegistro: function (data) {
alert("Registro Exitoso");
this.completedLogin(data);
},
logOut: function () {
localStorage.clear();
alert("Sesion cerrada");
this.veryAuth();
},
loadHome: function () {
this.$router.push({ name: "home" });
},
loadConsulta: function () {
this.$router.push({ name: "consultas" });
}
},
created: function () {
this.veryAuth();
}
});
function __VLS_template() {
// @ts-ignore
[is_auth, loadConsulta, logOut, completedLogin, completedRegistro];
return {};
}
