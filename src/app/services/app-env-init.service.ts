import {Injectable} from '@angular/core';
import {GlobalVariables} from 'cobis-commons';

@Injectable({
    providedIn: 'root'
  })
export class AppEnvInitService {

  constructor() {}

  public init(envPath: string): Promise<any> {
    console.log("init: " + envPath);
    return fetch(envPath)
      .then((response) => response.json())
      .then(json => GlobalVariables.env = json);
  }

}