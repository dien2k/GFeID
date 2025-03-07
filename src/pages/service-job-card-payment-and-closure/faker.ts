import { ServiceItem } from '.';

export const maintenanceData: ServiceItem[] = [
  {
    key: '1',
    no: 1,
    code: 'BDTBLJ',
    name: 'Full UPJ* Maintenance',
    unit: 'Service',
    quantity: 1.0,
    unitPrice: 340000,
    amount: 340000,
  },
  {
    key: '2',
    no: 2,
    code: 'VSKPLI',
    name: 'Clean fuel injector with UPEV Maintenance',
    unit: 'Service',
    quantity: 1.0,
    unitPrice: 140000,
    amount: 140000,
  },
];

export const partsData: ServiceItem[] = [
  {
    key: '1',
    no: 1,
    code: '293588',
    name: '10W Scooter Oil (1.2 lt)',
    unit: 'Box',
    quantity: 1.0,
    unitPrice: 215000,
    amount: 215000,
  },
  // ... add all other parts items here
];

export const warrantyData: ServiceItem[] = [
  {
    key: '1',
    no: 1,
    code: 'PTR4',
    name: 'Cleaning Materials for Maintenance',
    unit: 'Service',
    quantity: 1.0,
    unitPrice: 30000,
    amount: 30000,
  },
];
