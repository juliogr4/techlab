import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {
  content = [
    {
      type: 'h1',
      text: 'SQL Tutorial',
      styles: {
        color: 'blue',
        'font-weight': 'bold'
      }
    },
    {
      type: 'paragraph',
      text: 'SQL is a standard language for storing, manipulating, and retrieving data in databases.',
      styles: {
        'font-style': 'italic' // Exemplo de estilo personalizado para parágrafo
      }
    },
    {
      type: 'image',
      src: 'assets/images/sql.jpg',
      alt: 'SQL Logo',
      styles: {
        'max-width': '30%', // Exemplo de estilo personalizado para imagem
        border: '2px solid #ccc'
      }
    },
    {
      type: 'code',
      code: `
          CREATE PROCEDURE
          AS 
          SELECT * FROM tb_user;
        `,
    },
    {
      type: 'paragraph',
      text: 'This is how you can create a simple stored procedure in SQL.',
      styles: {}
    }
  ];

  copyCode(code: string | undefined) {
    navigator.clipboard.writeText(code ?? "").then(() => {
      alert('Code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  }
}
