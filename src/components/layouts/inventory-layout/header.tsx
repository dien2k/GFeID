import { Button, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Parts from '@/pages/parts-management';
import { RouteNames } from '@/routes/routes';
import Services from '@/pages/services-management';
import { useTranslation } from 'react-i18next';
export type TabKey = 'parts' | 'services';

const tabRoutes: Record<TabKey, string> = {
  parts: RouteNames.INVENTORY_MANAGEMENT + '/parts',
  services: RouteNames.INVENTORY_MANAGEMENT + '/services',
};

interface InventoryHeaderProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

const InventoryHeader = ({
  activeTab = 'parts',
  setActiveTab,
}: InventoryHeaderProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleChangeTab = (key: string) => {
    setActiveTab(key as TabKey);
    navigate(tabRoutes[key as TabKey]);
  };

  const getCreateRoute = (tab: TabKey) =>
    `${RouteNames.INVENTORY_MANAGEMENT}/${tab}/create`;

  const tabItem = [
    {
      key: 'parts',
      label: t('Parts'),
      children: <Parts />,
    },
    {
      key: 'services',
      label: t('Services'),
      children: <Services />,
    },
  ];

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="m-0">{t('Inventory Management')}</h1>
        <Button
          size="large"
          type="primary"
          onClick={() => navigate(getCreateRoute(activeTab))}
          icon={<PlusOutlined />}
        >
          {t('Create new {{label}}', {
            label: activeTab === 'parts' ? t('Part') : t('Service'),
          })}
        </Button>
      </div>
      <Tabs
        items={tabItem}
        animated
        activeKey={activeTab}
        onChange={handleChangeTab}
        className="[&_.ant-tabs-tab-active]:!bg-blue-200 [&_.ant-tabs-tab]:!m-0 [&_.ant-tabs-tab]:!px-6"
      />
    </>
  );
};

export default InventoryHeader;
