import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Foods } from 'src/app/model/food';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  form: FormGroup;
  name: string | undefined;
  searchItem: string = '';
  public user: User[] = [];
  public foods: Foods[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService,
    private ruta: Router,
    private userService: UserService,
    private activated: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      deviceInfo: this.formBuilder.group({
        deviceID: ['1786868768'],
        deviceType: ['DEVICE_TYPE_ANDROID'],
        notificationToken: ['67657575eececc34'],
      }),
    });
  }

  ngOnInit(): void {
    this.user = this.userService.getAll();
    // this.activated.params.subscribe((params) => {
    //   if (params['searchItem'])
    //     this.foods = this.food
    //       .getAll()
    //       .filter((food) =>
    //         food.foodName
    //           .toLowerCase()
    //           .includes(params['searchItem'].toLowerCase())
    //       );
    //   else this.foods = this.food.getAll();
    // });
  }

  isloged = () => this.auth.loggedIn();

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    if (this.form.invalid) {
      alert('Mal logueado');
      return;
    }
    event.preventDefault;
    this.auth.IniciarSesion(this.form.value).subscribe((data) => {
      console.log('DATA:' + JSON.stringify(data));
      this.ruta.navigate(['/home']);
    });
  }
  handleClear() {
    this.name = '';
  }
}
