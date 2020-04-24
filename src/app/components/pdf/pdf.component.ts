import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
  providers:[PdfService]
})
export class PdfComponent implements OnInit {

  constructor( private pdfservice:PdfService) { }

  ngOnInit(): void {
    this.pdfSrc = this.pdfservice.getPdf();
  }

  page:number = 1;
  pdfSrc:string = '';

  onFileSelected (){
    let img : any = document.querySelector('#file');
    if(typeof(FileReader) !== 'undefined'){
      let reader = new FileReader();
      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
        console.log(this.pdfSrc);
      }
      reader.readAsArrayBuffer(img.files[0]);
    }

  }

}
