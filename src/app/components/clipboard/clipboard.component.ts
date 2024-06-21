import { Component } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent {
  copyCode() {
    const code = `
  CREATE PROCEDURE
  AS 
  SELECT * FROM tb_user
  `;
    navigator.clipboard.writeText(code).then(() => {
      alert('Código copiado para a área de transferência!');
    }).catch(err => {
      console.error('Erro ao copiar o código: ', err);
    });
  }
}
