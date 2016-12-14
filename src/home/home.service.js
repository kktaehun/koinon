/**
 * Home Service
 */

'use strict';

export default class HomeService {

  constructor(Restangular) {
    this.Restangular = Restangular;
    console.log('Home Service');
  }

  getUserName() {
    return 'username';
  }

  getUserInfo() {
    this.Restangular.all('').get('info.json').then(info => {
      console.log(info);
   });
 }

}
