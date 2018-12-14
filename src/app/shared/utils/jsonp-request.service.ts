import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonpRequestService {

  constructor() { }

  private handleData(data: any) {
    const keys = Object.keys(data)
    const keysLen = keys.length
    return keys.reduce((pre, cur, index) => {
      const value = data[cur]
      const flag = index !== keysLen - 1 ? '&' : ''
      return `${pre}${cur}=${value}${flag}`
    }, '')
  }

  request(url: string, data: any) {

    const script = document.createElement('script');    // 动态创建script标签
    window.jsonpCb = (res) => {
      document.body.removeChild(script)
      delete window.jsonpCb
      return of(res);
    };
    script.src = `${url}?${this.handleData(data)}&cb=jsonpCb`
    document.body.appendChild(script)
  }
}


// 使用方式
// JsonpRequestService.request({
//   url: 'http://localhost:9871/api/jsonp',
//   data: {
//     msg: 'helloJsonp'
//   }
// }).subscribe(res => {
//   console.log(res)
// })