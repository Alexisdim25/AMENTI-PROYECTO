import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  subject: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const formData = {
      firstname: this.firstName,
      lastname: this.lastName,
      subject: this.subject
    };

    this.http.post<any>('/api/contact', formData).subscribe(
      () => {
        // Éxito: redirige a una página de confirmación o realiza otra acción
        this.router.navigate(['/confirmation']);
      },
      (error) => {
        // Error: muestra un mensaje de error o realiza otra acción
        console.error('Error al enviar el formulario:', error);
      }
    );
  }
}
