import { Pipe, PipeTransform } from '@angular/core';
import { Configuration } from './npmproxygenerator/npmproxygenerator.component';

@Pipe({
  name: 'npmconfigstring',
  pure:false
})
export class NpmconfigstringPipe implements PipeTransform {

  transform(value: Configuration, ...args: unknown[]): string {
console.log(value)
return  ("npm config set proxy http://"+value.username+":"+value.password+"@"+value.host+":"+value.port + "\r\n"+
"npm config set https-proxy http://"+value.username+":"+value.password+"@"+value.host+":"+value.port)
//https-proxy=http://ciancij:Testing12$@proxy.health.qld.gov.au:8080"
    //return null;
  }

}


