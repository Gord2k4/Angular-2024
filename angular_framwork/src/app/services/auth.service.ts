import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

type User = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000/auth'; // Đảm bảo URL này chính xác
  http = inject(HttpClient);

  constructor() {}

  registerUser(data: User) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  loginUser(data: User) { // Thay đổi kiểu thành User
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data); // Đảm bảo định nghĩa kiểu phản hồi
  }
}
