import { Admin } from './class/admim';
import { Usuario } from './class/usuario'

var usuario = new Usuario('usuario@gmail.com', '1234');
var admin = new Admin('admin@gmail.com', '4321', true);

console.log(usuario.ehAdmin());
console.log(admin.ehAdmin());