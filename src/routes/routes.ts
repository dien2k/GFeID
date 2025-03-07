export const RouteNames = {
  // Auth Routes
  SIGN_IN: '/',

  // Dashboard Base
  DASHBOARD: '/dashboard',

  // Admin Management Routes
  ADMIN_MANAGEMENT: '/dashboard/admin-management',
  ADMIN_CREATE: '/dashboard/admin-management/create-admin',
  ADMIN_DETAILS: (id = ':id') => `/dashboard/admin-management/${id}`,

  // Customer Management Routes
  CUSTOMER_MANAGEMENT: '/dashboard/customer-management',
  CUSTOMER_CREATE: '/dashboard/customer-management/create-customer',
  CUSTOMER_DETAILS: (id = ':id') => `/dashboard/customer-management/${id}`,

  // Vehicle Management Routes
  VEHICLE_MANAGEMENT: '/dashboard/vehicle-management',
  VEHICLE_CREATE: '/dashboard/vehicle-management/create-vehicle',
  VEHICLE_DETAILS: (id = ':id') => `/dashboard/vehicle-management/${id}`,

  // Vendor Management Routes
  VENDOR_MANAGEMENT: '/dashboard/vendor-management',
  VENDOR_CREATE: '/dashboard/vendor-management/create-vendor',
  VENDOR_DETAILS: (id = ':id') => `/dashboard/vendor-management/${id}`,

  // Vehicle & Service Management Routes
  VEHICLE_AND_SERVICE_MANAGEMENT: '/dashboard/vehicle-and-service-management',
  SERVICE_JOB_CARD_DETAILS: (id = ':id') =>
    `/dashboard/vehicle-and-service-management/${id}`,
  SERVICE_JOB_CARD_CREATE:
    '/dashboard/vehicle-and-service-management/create-service-job-card',
  SERVICE_JOB_CARD_PAYMENT_AND_CLOSURE:
    '/dashboard/vehicle-and-service-management/payment-and-closure',

  //Spare Parts & Inventory
  SPARE_PART_AND_INVENTORY: '/dashboard/spare-part-and-inventory',
  INVENTORY_MANAGEMENT: '/dashboard/inventory-management',
  //Parts
  PARTS_MANAGEMENT: '/dashboard/inventory-management/parts',
  PARTS_CREATE: '/dashboard/inventory-management/parts/create',
  PARTS_DETAILS: (id = ':id') => `/dashboard/inventory-management/parts/${id}`,
  //Services
  SERVICES_MANAGEMENT: '/dashboard/inventory-management/services',
  SERVICES_CREATE: '/dashboard/inventory-management/services/create',
  SERVICES_DETAILS: (id = ':id') =>
    `/dashboard/inventory-management/services/${id}`,
  ORDER_MANAGEMENT: '/dashboard/order-management',
  ORDER_CREATE: '/dashboard/order-management/create-order',
  ORDER_DETAILS: (id = ':id') => `/dashboard/order-management/${id}`,

  // Service Center Management
  SERVICE_CENTER_MANAGEMENT: '/dashboard/service-center-management',
  SERVICE_CENTER_CREATE:
    '/dashboard/service-center-management/create-service-center',
  SERVICE_CENTER_DETAILS: (id = ':id') =>
    `/dashboard/service-center-management/${id}`,

  // Technician & Workforce
  TECHNICIAN_AND_WORKFORCE_MANAGEMENT: '/dashboard/technician-and-workforce',
  TECHNICIAN_CREATE: '/dashboard/technician-and-workforce/create-technician',
  TECHNICIAN_DETAILS: (id = ':id') =>
    `/dashboard/technician-and-workforce/${id}`,

  // Billing & Payment
  BILLING_AND_PAYMENT: '/dashboard/billing-and-payment',

  //Claims
  CLAIMS_MANAGEMENT: '/dashboard/claims',
  CLAIMS_CREATE: '/dashboard/claims/create-claim',
  CLAIMS_DETAILS: (id = ':id') => `/dashboard/claims/${id}`,
  // Error Routes
  NOT_FOUND: '/not-found',
} as const;

// Type definitions for route parameters
export interface RouteParams {
  CUSTOMER_DETAILS: { id: string };
  SERVICE_JOB_CARD_DETAILS: { id: string };
  PARTS_DETAILS: { id: string };
  SERVICES_DETAILS: { id: string };
  ORDER_DETAILS: { id: string };
  TECHNICIAN_DETAILS: { id: string };
  CLAIMS_DETAILS: { id: string };
  SERVICE_CENTER_DETAILS: { id: string };
  VEHICLE_DETAILS: { id: string };
}
// Helper function to create type-safe route with parameters
export const createRoute = <T extends keyof RouteParams>(
  routeName: T,
  params: RouteParams[T],
): string => {
  switch (routeName) {
    case 'CUSTOMER_DETAILS':
      return RouteNames.CUSTOMER_DETAILS(params.id);
    case 'SERVICE_JOB_CARD_DETAILS':
      return RouteNames.SERVICE_JOB_CARD_DETAILS(params.id);
    case 'PARTS_DETAILS':
      return RouteNames.PARTS_DETAILS(params.id);
    case 'SERVICES_DETAILS':
      return RouteNames.SERVICES_DETAILS(params.id);
    case 'ORDER_DETAILS':
      return RouteNames.ORDER_DETAILS(params.id);
    case 'TECHNICIAN_DETAILS':
      return RouteNames.TECHNICIAN_DETAILS(params.id);
    case 'CLAIMS_DETAILS':
      return RouteNames.CLAIMS_DETAILS(params.id);
    case 'SERVICE_CENTER_DETAILS':
      return RouteNames.SERVICE_CENTER_DETAILS(params.id);
    case 'VEHICLE_DETAILS':
      return RouteNames.VEHICLE_DETAILS(params.id);
    default:
      return RouteNames[
        routeName as keyof Omit<
          typeof RouteNames,
          | 'CUSTOMER_DETAILS'
          | 'SERVICE_JOB_CARD_DETAILS'
          | 'PARTS_DETAILS'
          | 'SERVICES_DETAILS'
          | 'ORDER_DETAILS'
          | 'TECHNICIAN_DETAILS'
          | 'CLAIMS_DETAILS'
          | 'SERVICE_CENTER_DETAILS'
          | 'VEHICLE_DETAILS'
          | 'VENDOR_DETAILS'
          | 'ADMIN_DETAILS'
        >
      ];
  }
};

// Helper function to get base route path
export const getBasePath = (path: string): string => {
  return path.split('/').slice(0, -1).join('/');
};

// Example usage:
// createRoute('CUSTOMER_DETAILS', { id: '123' })
// getBasePath(RouteNames.CUSTOMER_DETAILS('123'))
