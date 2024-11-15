import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  authService = inject(AuthService);
  router = inject(Router);

  handleSubmit() {
    console.log(this.registerForm.value);
    this.authService.registerUser(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/login');
        console.log('ok');
      },
      error: () => alert('Error'),
    });
  }
}
