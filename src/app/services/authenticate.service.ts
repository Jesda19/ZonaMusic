import { register } from 'swiper/element/bundle';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private storage: Storage) {}

  // Método para el login del usuario
  loginUser(credentials: any) {
    return new Promise(async (accept, reject) => {
      const user = await this.storage.get('user'); // Obtener el usuario del storage
      const encodedPassword = btoa(credentials.password); // Codificar la contraseña
      const validation =
        credentials.email == user.email &&
        encodedPassword == user.password; // Validar credenciales
      if (validation) {
        accept('Login Correcto y Contraseña Correcta'); // Credenciales correctas
      } else {
        reject('Login Incorrecto o Contraseña Incorrecta'); // Credenciales incorrectas
      }
    });
  }

  // Método para registrar un nuevo usuario
  registerUser(registerData: any) {
    registerData.password = btoa(registerData.password); // Codificar contraseña
    return this.storage.set('user', registerData); // Guardar usuario en el storage
  }
}
