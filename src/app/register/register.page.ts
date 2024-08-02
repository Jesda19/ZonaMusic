import { AuthenticateService } from './../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
/* import { register } from 'swiper/element/bundle'; */

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.FormBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
      name: new FormControl('', Validators.compose([Validators.required])),
      last_name: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {}

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
  register(registerData: any) {
    this.storage.set('user', registerData);
    this.authService.registerUser(registerData).then((res) => {
      this.navCtrl.navigateBack('/login');
    });
  }
}
