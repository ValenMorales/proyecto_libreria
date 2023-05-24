import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-gestionautor',
  templateUrl: './gestionautor.component.html',
  styleUrls: ['./gestionautor.component.scss']
})
export class GestionautorComponent {
  selectedPdf: any= null;

  constructor(private login: LoginService) {}
  get rol(): string {
    return this.login.rol;
  }

  selectPdf() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    input.addEventListener('change', (event: any) => {
      this.onFileSelected(event.target.files);
    });
    input.click();
  }

  onFileSelected(files: any) {
    if (files.length > 0) {
      this.selectedPdf = files[0];
      // Aquí puedes hacer lo que desees con el archivo seleccionado
      // Por ejemplo, guardar el archivo en tus documentos
      this.savePdf();
    }
  }

  savePdf() {
    if (this.selectedPdf) {
      // Generar una URL para el archivo seleccionado
      const fileUrl = URL.createObjectURL(this.selectedPdf);
      const link = document.createElement('a');
      // Descargar el archivo utilizando file-saver
      saveAs(fileUrl, this.selectedPdf.name);
  
      // Liberar la URL del archivo
      URL.revokeObjectURL(fileUrl);
    }
  }




}
