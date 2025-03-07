import InventoryHeader, { TabKey } from './header';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { RouteNames } from '@/routes/routes';

const InventoryLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabKey>('parts');

  useEffect(() => {
    if (pathname === RouteNames.INVENTORY_MANAGEMENT) {
      navigate(RouteNames.PARTS_MANAGEMENT);
      return;
    }
    const currentTab = pathname.split('/').pop();
    if (currentTab && currentTab !== activeTab) {
      setActiveTab(currentTab as TabKey);
    }
  }, [pathname, activeTab, navigate]);

  const isCreateAndDetailsRoute =
    pathname.includes('/parts/') || pathname.includes('/services/');

  return (
    <>
      {!isCreateAndDetailsRoute ? (
        <InventoryHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default InventoryLayout;
