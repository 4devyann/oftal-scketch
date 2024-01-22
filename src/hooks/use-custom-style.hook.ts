import { createStyles } from 'antd-style';

const useCustomStyle = createStyles(() => ({
  'custom-drawer-header': {
    flexDirection: 'row-reverse',
    '.ant-drawer-header-title': {
      flexDirection: 'row-reverse',
      '.ant-drawer-close': {
        marginRight: 0,
        fontSize: 24,
      },
    },
  },
}));

export default useCustomStyle;
