import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { }

  getMeaningOfLife() : number{
    return 42;
  }

}
