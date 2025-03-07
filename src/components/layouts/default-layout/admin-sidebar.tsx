import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useThemeStore } from '@/stores/theme-store';
import { Link, useLocation } from 'react-router-dom';
import { RouteNames } from '@/routes/routes';
import AppIcon from '@/components/common/app-icon';
import { getRoute } from '@/utils/get-route';
import { useTranslation } from 'react-i18next';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const AdminSidebar = () => {
  const { isDarkMode } = useThemeStore();
  const { t } = useTranslation();

  const location = useLocation();

  const menuItems: MenuProps['items'] = [
    getItem(
      <Link to={RouteNames.ADMIN_MANAGEMENT}>{t('Admin Management')}</Link>,
      `${getRoute(RouteNames.ADMIN_MANAGEMENT)}`,
      <AppIcon src="/svg/user-group.svg#id" className="size-5" />,
      undefined,
    ),
    getItem(
      <Link to={RouteNames.CUSTOMER_MANAGEMENT}>
        {t('Customer Management')}
      </Link>,
      `${getRoute(RouteNames.CUSTOMER_MANAGEMENT)}`,
      <AppIcon src="/svg/user-group.svg#id" className="size-5" />,
      undefined,
    ),
    getItem(
      <Link to={RouteNames.VEHICLE_MANAGEMENT}>{t('Vehicle Management')}</Link>,
      `${getRoute(RouteNames.VEHICLE_MANAGEMENT)}`,
      <AppIcon src="/svg/user-group.svg#id" className="size-5" />,
      undefined,
    ),
    getItem(
      <Link to={RouteNames.VENDOR_MANAGEMENT}>{t('Vendor Management')}</Link>,
      `${getRoute(RouteNames.VENDOR_MANAGEMENT)}`,
      <AppIcon src="/svg/vendor.svg#id" className="size-5" />,
      undefined,
    ),
    getItem(
      <Link to={RouteNames.VEHICLE_AND_SERVICE_MANAGEMENT}>
        {t('Vehicle and Service Management')}
      </Link>,
      `${getRoute(RouteNames.VEHICLE_AND_SERVICE_MANAGEMENT)}`,
      <AppIcon src="/svg/motor.svg#id" className="size-5" />,
      undefined,
    ),
    getItem(
      <>{t('Spare Parts & Inventory')}</>,
      `${getRoute(RouteNames.SPARE_PART_AND_INVENTORY)}`,
      <AppIcon src="/svg/tools.svg#id" className="size-5" />,
      [
        getItem(
          <Link to={RouteNames.INVENTORY_MANAGEMENT}>
            {t('Inventory Management')}
          </Link>,
          `${getRoute(RouteNames.INVENTORY_MANAGEMENT)}`,
          <AppIcon src="/svg/inventory.svg#id" className="size-5" />,
          undefined,
        ),
        getItem(
          <Link to={RouteNames.ORDER_MANAGEMENT}>{t('Order Management')}</Link>,
          `${getRoute(RouteNames.ORDER_MANAGEMENT)}`,
          <AppIcon src="/svg/order.svg#id" className="size-5" />,
          undefined,
        ),
      ],
    ),
    getItem(
      <Link to={RouteNames.SERVICE_CENTER_MANAGEMENT}>
        {t('Service Center Management')}
      </Link>,
      `${getRoute(RouteNames.SERVICE_CENTER_MANAGEMENT)}`,
      <AppIcon src="/svg/service-center.svg#id" className="size-5" />,
      undefined,
    ),
    getItem(
      <Link to={RouteNames.TECHNICIAN_AND_WORKFORCE_MANAGEMENT}>
        {t('Technician and Workforce Management')}
      </Link>,
      `${getRoute(RouteNames.TECHNICIAN_AND_WORKFORCE_MANAGEMENT)}`,
      <AppIcon src="/svg/repair.svg#id" className="size-5" />,
      undefined,
    ),
    getItem(
      <Link to={RouteNames.BILLING_AND_PAYMENT}>Billing & Payment</Link>,
      `${getRoute(RouteNames.BILLING_AND_PAYMENT)}`,
      <AppIcon src="/svg/payment_bill.svg#id" className="size-5" />,
      undefined,
    ),
    getItem(
      <Link to={RouteNames.CLAIMS_MANAGEMENT}>Claims Management</Link>,
      `${getRoute(RouteNames.CLAIMS_MANAGEMENT)}`,
      <AppIcon src="/svg/warranty.svg#id" className="size-5" />,
      undefined,
    ),
  ];

  const currentPath = location.pathname.split('/');
  const activeKey = currentPath[currentPath.length - 1];

  const selectedKey =
    activeKey.includes('parts') || activeKey.includes('services')
      ? getRoute(RouteNames.INVENTORY_MANAGEMENT)
      : activeKey;

  return (
    <Menu
      theme={isDarkMode ? 'dark' : 'light'}
      className="m-0 p-0"
      style={{ borderInlineEnd: 'none' }}
      defaultSelectedKeys={[selectedKey as string]}
      mode="inline"
      items={menuItems}
    />
  );
};

export default AdminSidebar;
