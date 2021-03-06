import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent  {

  customer: Customer;

  customers: Customer[] = [
    {
      name:    'Alex Smith',
      address: {
        street:  '123 Main Street',
        city:    'Anytown',
        state:   'California',
        country: 'USA',
        region:  'West'
      }
    },
    {
      name:    'Pierre Pasmal',
      address: {
        street:  '456 Rue de Main',
        city:    'Quebec City',
        state:   'Quebec',
        country: 'Canada',
        region:  'East'
      }
    },
    {
      name:    'Margarita Nadie',
      address: {
        street:  '789 Calle Principal',
        city:    'Guadalajara',
        state:   'Jalisco',
        country: 'Mexico',
        region:  'South'
      }
    },
    {
      name:    'Katie O\'Leary',
      address: {
        street:  '137 DeKoven Street',
        city:    'Chicago',
        state:   'Illinois',
        country: 'USA',
        region:  'Midwest'
      }
    },
  ];
}
