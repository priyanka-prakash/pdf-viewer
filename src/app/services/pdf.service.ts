import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }
  getPdf():string{
    return "/assets/demo.pdf";
  }
}
