import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const projects = [
      {
        id: 1,
        name: '724',
        owner: 'Saman Bamk',
        customer: 'People with banks accounts',
        email: '724@sb.ir',
        phone: '88888888',
        webSite: 'www.724.ir',
        language: 'Farsi',
        time: '(UTC+03:30)-Tehran',
        communicationEmail: false, 
        communicationSms: true, 
        communicationPhone: false,
        address1: 'Tehtan, mirdamad street',
        address2: 'Tehran, valiasr street',
        postCode: '09821',
        state: 'Khod mokhtar',
        country: 'Iran',
        city: 'Tehran'
      },
      {
        id: 2,
        name: '724',
        owner: 'Saman Bamk',
        customer: 'People with banks accounts',
        email: '724@sb.ir',
        phone: '88888888',
        webSite: 'www.724.ir',
        language: 'Farsi',
        time: '(UTC+03:30)-Tehran',
        communicationEmail: false, 
        communicationSms: true, 
        communicationPhone: false,
        address1: 'Tehtan, mirdamad street',
        address2: 'Tehran, valiasr street',
        postCode: '09821',
        state: 'Khod mokhtar',
        country: 'Iran',
        city: 'Tehran'
      },
      {
        id: 3,
        name: '724',
        owner: 'Saman Bamk',
        customer: 'People with banks accounts',
        email: '724@sb.ir',
        phone: '88888888',
        webSite: 'www.724.ir',
        language: 'Farsi',
        time: '(UTC+03:30)-Tehran',
        communicationEmail: false, 
        communicationSms: true, 
        communicationPhone: false,
        address1: 'Tehtan, mirdamad street',
        address2: 'Tehran, valiasr street',
        postCode: '09821',
        state: 'Khod mokhtar',
        country: 'Iran',
        city: 'Tehran'
      },
      {
        id: 4,
        name: '724',
        owner: 'Saman Bamk',
        customer: 'People with banks accounts',
        email: '724@sb.ir',
        phone: '88888888',
        webSite: 'www.724.ir',
        language: 'Farsi',
        time: '(UTC+03:30)-Tehran',
        communicationEmail: false, 
        communicationSms: true, 
        communicationPhone: false,
        address1: 'Tehtan, mirdamad street',
        address2: 'Tehran, valiasr street',
        postCode: '09821',
        state: 'Khod mokhtar',
        country: 'Iran',
        city: 'Tehran'
      },
      {
        id: 5,
        name: '724',
        owner: 'Saman Bamk',
        customer: 'People with banks accounts',
        email: '724@sb.ir',
        phone: '88888888',
        webSite: 'www.724.ir',
        language: 'Farsi',
        time: '(UTC+03:30)-Tehran',
        communicationEmail: false, 
        communicationSms: true, 
        communicationPhone: false,
        address1: 'Tehtan, mirdamad street',
        address2: 'Tehran, valiasr street',
        postCode: '09821',
        state: 'Khod mokhtar',
        country: 'Iran',
        city: 'Tehran'
      }
    ]
    return { projects };
  }
}
