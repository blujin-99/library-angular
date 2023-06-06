import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  
  status = signal<boolean>(false)

  constructor() { }


  
}
