import { AppLoading } from '@/components/common/app-loading';
import { getRoute } from '@/utils/get-route';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RouteWatcher from './route-watcher';
import { RouteNames } from './routes';
import InventoryLayout from '@/components/layouts/inventory-layout';

// Lazy load layouts
const DefaultAdminLayout = lazy(
  () => import('@/components/layouts/default-layout'),
);
const AuthLayout = lazy(() => import('@/components/layouts/auth-layout'));

// Lazy load pages
const Pages = {
  Auth: {
    SignIn: lazy(() => import('@/pages/sign-in')),
  },
  Admin: {
    Management: lazy(() => import('@/pages/admin-management')),
    Create: lazy(() => import('@/pages/admin-create')),
    Details: lazy(() => import('@/pages/admin-details')),
  },
  Customer: {
    Management: lazy(() => import('@/pages/customer-management')),
    Create: lazy(() => import('@/pages/customer-create')),
    Details: lazy(() => import('@/pages/customer-details')),
  },
  Vehicle: {
    Management: lazy(() => import('@/pages/vehicle-management')),
    Create: lazy(() => import('@/pages/vehicle-create')),
    Details: lazy(() => import('@/pages/vehicle-details')),
  },
  Vendor: {
    Management: lazy(() => import('@/pages/vendor-management')),
    Create: lazy(() => import('@/pages/vendor-create')),
    Details: lazy(() => import('@/pages/vendor-details')),
  },
  VehicleAndService: {
    Management: lazy(() => import('@/pages/service-job-card-management')),
    Create: lazy(() => import('@/pages/service-job-card-create')),
    Details: lazy(() => import('@/pages/service-job-card-details')),
    PaymentAndClosure: lazy(
      () => import('@/pages/service-job-card-payment-and-closure'),
    ),
  },
  Part: {
    Management: lazy(() => import('@/pages/parts-management')),
    Create: lazy(() => import('@/pages/parts-create')),
    Details: lazy(() => import('@/pages/parts-details')),
  },
  Service: {
    Management: lazy(() => import('@/pages/services-management')),
    Create: lazy(() => import('@/pages/services-create')),
    Details: lazy(() => import('@/pages/services-details')),
  },

  Order: {
    Management: lazy(() => import('@/pages/order-management')),
    Create: lazy(() => import('@/pages/order-create')),
    Details: lazy(() => import('@/pages/order-details')),
  },
  ServiceCenter: {
    Management: lazy(() => import('@/pages/service-center-management')),
    Create: lazy(() => import('@/pages/service-center-create')),
    Details: lazy(() => import('@/pages/service-center-details')),
  },
  Technician: {
    Management: lazy(() => import('@/pages/technician-management')),
    Create: lazy(() => import('@/pages/technician-create')),
    Details: lazy(() => import('@/pages/technician-details')),
  },
  Claims: {
    Management: lazy(() => import('@/pages/claims-management')),
    Create: lazy(() => import('@/pages/claims-create')),
    Details: lazy(() => import('@/pages/claims-details')),
  },
  Error: {
    NotFound: lazy(() => import('@/pages/notfound-404')),
  },
};

const AppRouter = () => {
  return (
    <Suspense fallback={<AppLoading className="h-screen w-screen" />}>
      <RouteWatcher>
        <Routes>
          {/* Auth Routes */}
          <Route path={RouteNames.SIGN_IN} element={<AuthLayout />}>
            <Route index element={<Pages.Auth.SignIn />} />
          </Route>

          {/* Protected Routes */}
          <Route path={RouteNames.DASHBOARD} element={<DefaultAdminLayout />}>
            {/* Dashboard Index */}
            <Route index element={null} />

            {/* Admin Management Routes */}
            <Route path={getRoute(RouteNames.ADMIN_MANAGEMENT)}>
              <Route index element={<Pages.Admin.Management />} />
              <Route
                path={getRoute(RouteNames.ADMIN_CREATE)}
                element={<Pages.Admin.Create />}
              />
              <Route
                path={getRoute(RouteNames.ADMIN_DETAILS())}
                element={<Pages.Admin.Details />}
              />
            </Route>

            {/* Customer Management Routes */}
            <Route path={getRoute(RouteNames.CUSTOMER_MANAGEMENT)}>
              <Route index element={<Pages.Customer.Management />} />
              <Route
                path={getRoute(RouteNames.CUSTOMER_CREATE)}
                element={<Pages.Customer.Create />}
              />
              <Route
                path={getRoute(RouteNames.CUSTOMER_DETAILS())}
                element={<Pages.Customer.Details />}
              />
            </Route>

            {/* Vehicle Management Routes */}
            <Route path={getRoute(RouteNames.VEHICLE_MANAGEMENT)}>
              <Route index element={<Pages.Vehicle.Management />} />
              <Route
                path={getRoute(RouteNames.VEHICLE_CREATE)}
                element={<Pages.Vehicle.Create />}
              />
              <Route
                path={getRoute(RouteNames.VEHICLE_DETAILS())}
                element={<Pages.Vehicle.Details />}
              />
            </Route>

            {/* Vendor Management Routes */}
            <Route path={getRoute(RouteNames.VENDOR_MANAGEMENT)}>
              <Route index element={<Pages.Vendor.Management />} />
              <Route
                path={getRoute(RouteNames.VENDOR_CREATE)}
                element={<Pages.Vendor.Create />}
              />
              <Route
                path={getRoute(RouteNames.VENDOR_DETAILS())}
                element={<Pages.Vendor.Details />}
              />
            </Route>

            {/* Vehicle and Service Management Routes */}
            <Route path={getRoute(RouteNames.VEHICLE_AND_SERVICE_MANAGEMENT)}>
              <Route index element={<Pages.VehicleAndService.Management />} />
              <Route
                path={getRoute(RouteNames.SERVICE_JOB_CARD_CREATE)}
                element={<Pages.VehicleAndService.Create />}
              />
              <Route
                path={getRoute(RouteNames.SERVICE_JOB_CARD_DETAILS())}
                element={<Pages.VehicleAndService.Details />}
              />
              <Route
                path={getRoute(RouteNames.SERVICE_JOB_CARD_PAYMENT_AND_CLOSURE)}
                element={<Pages.VehicleAndService.PaymentAndClosure />}
              />
            </Route>

            {/* Inventory Management Routes */}
            <Route
              path={getRoute(RouteNames.INVENTORY_MANAGEMENT)}
              element={<InventoryLayout />}
            >
              <Route
                index
                element={<Navigate to={RouteNames.PARTS_MANAGEMENT} />}
              />
              <Route path={getRoute(RouteNames.PARTS_MANAGEMENT)}>
                <Route index element={<Pages.Part.Management />} />
                <Route
                  path={getRoute(RouteNames.PARTS_CREATE)}
                  element={<Pages.Part.Create />}
                />
                <Route
                  path={getRoute(RouteNames.PARTS_DETAILS())}
                  element={<Pages.Part.Details />}
                />
              </Route>
              <Route path={getRoute(RouteNames.SERVICES_MANAGEMENT)}>
                <Route index element={<Pages.Service.Management />} />
                <Route
                  path={getRoute(RouteNames.SERVICES_CREATE)}
                  element={<Pages.Service.Create />}
                />
                <Route
                  path={getRoute(RouteNames.SERVICES_DETAILS())}
                  element={<Pages.Service.Details />}
                />
              </Route>
            </Route>
            {/* Order Management Routes */}
            <Route path={getRoute(RouteNames.ORDER_MANAGEMENT)}>
              <Route index element={<Pages.Order.Management />} />
              <Route
                path={getRoute(RouteNames.ORDER_CREATE)}
                element={<Pages.Order.Create />}
              />
              <Route path={getRoute(RouteNames.ORDER_DETAILS())}>
                <Route index element={<Pages.Order.Details />} />
              </Route>
            </Route>

            {/* Service Center Management Routes */}
            <Route path={getRoute(RouteNames.SERVICE_CENTER_MANAGEMENT)}>
              <Route index element={<Pages.ServiceCenter.Management />} />
              <Route
                path={getRoute(RouteNames.SERVICE_CENTER_CREATE)}
                element={<Pages.ServiceCenter.Create />}
              />
              <Route
                path={getRoute(RouteNames.SERVICE_CENTER_DETAILS())}
                element={<Pages.ServiceCenter.Details />}
              />
            </Route>

            {/* Technician and Workforce Management Routes */}
            <Route
              path={getRoute(RouteNames.TECHNICIAN_AND_WORKFORCE_MANAGEMENT)}
            >
              <Route index element={<Pages.Technician.Management />} />
              <Route
                path={getRoute(RouteNames.TECHNICIAN_CREATE)}
                element={<Pages.Technician.Create />}
              />
              <Route
                path={getRoute(RouteNames.TECHNICIAN_DETAILS())}
                element={<Pages.Technician.Details />}
              />
            </Route>

            {/* Warranty and Claims Management Routes */}
            <Route path={getRoute(RouteNames.CLAIMS_MANAGEMENT)}>
              <Route index element={<Pages.Claims.Management />} />
              <Route
                path={getRoute(RouteNames.CLAIMS_CREATE)}
                element={<Pages.Claims.Create />}
              />
              <Route
                path={getRoute(RouteNames.CLAIMS_DETAILS())}
                element={<Pages.Claims.Details />}
              />
            </Route>
          </Route>

          {/* Error Routes */}
          <Route
            path={RouteNames.NOT_FOUND}
            element={<Pages.Error.NotFound />}
          />
          <Route
            path="*"
            element={<Navigate to={RouteNames.NOT_FOUND} replace />}
          />
        </Routes>
      </RouteWatcher>
    </Suspense>
  );
};

export default AppRouter;
