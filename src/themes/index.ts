import { ThemeConfig } from 'antd';

export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const lightTheme: ThemeConfig = {
  // token: {
  //   colorPrimary: 'rgba(24, 132, 82, 1)',
  //   colorText: 'rgba(0, 0, 0, 0.88)',
  //   colorTextBase: 'rgba(0, 0, 0, 0.88)',
  // },
  components: {
    Menu: {
      itemBg: 'rgba(24, 36, 58, 1)',
      itemColor: 'rgba(243, 243, 243, 1)',
      // itemSelectedColor: 'rgba(31, 213, 101, 1)',
      // itemSelectedBg: 'rgba(31, 213, 101, 0.45)',
      // itemHoverBg: 'rgba(31, 213, 101, 0.25)',
      itemHoverColor: 'rgba(243, 243, 243, 1)',
      subMenuItemBg: 'rgba(24, 36, 58, 0.5)',
      popupBg: 'rgba(24, 36, 58, 1)',
    },
    Layout: {
      headerBg: 'rgba(243, 243, 245, 1)',
      bodyBg: 'rgba(234, 236, 236, 0.7)',
      colorBgBase: 'rgba(243, 243, 243, 1)',
      siderBg: 'rgba(24, 36, 58, 1)',
    },
    Table: {
      headerBg: 'rgba(243, 243, 243, 1)',
      headerColor: '#374151',
      borderColor: 'rgba(243, 243, 243, 1)',
      colorBorderBg: '#374140',
      rowHoverBg: '#F3F4F6',
    },
  },
};

export const darkTheme: ThemeConfig = {
  // token: {
  //   colorPrimary: 'rgba(24, 132, 82, 1)',
  //   colorText: 'rgba(243, 243, 243, 1)',
  // },
  components: {
    Menu: {
      darkItemBg: 'rgba(12, 12, 12, 1)',
      darkItemColor: 'rgba(243, 243, 243, 1)',
      darkItemSelectedColor: 'rgba(31, 213, 101, 1)',
      darkItemSelectedBg: 'rgba(31, 213, 101, 0.45)',
      darkItemHoverBg: 'rgba(31, 213, 101, 0.25)',
      darkSubMenuItemBg: 'rgba(0, 0, 0, 0.06)',
      darkPopupBg: 'rgba(12, 12, 12, 1)',
    },
    Layout: {
      headerBg: 'rgba(12, 12, 12, 1)',
      bodyBg: 'rgba(20, 20, 20, 1)',
      siderBg: 'rgba(12, 12, 12, 1)',
    },
    Table: {
      headerBg: 'transparent',
      headerColor: '#374151',
      borderColor: '#E5E7EB',
      rowHoverBg: '#F3F4F6',
    },
  },
};
