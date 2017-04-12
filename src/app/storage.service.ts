import {Injectable, TemplateRef} from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  templates = new Map<string, TemplateRef<any>>();
}
