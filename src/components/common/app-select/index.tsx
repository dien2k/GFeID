import { Select, SelectProps } from 'antd';
import { FC } from 'react';

interface Option {
  value: string;
  label: string;
}

interface AppSelectProps extends Omit<SelectProps<string>, 'options'> {
  options?: Option[] | string[];
  defaultText?: string;
  width?: number | string;
  showAll?: boolean;
}

const AppSelect: FC<AppSelectProps> = ({
  options = [],
  defaultText,
  width = 200,
  showAll = false,
  onChange,
  ...props
}) => {
  const formattedOptions: Option[] = options.map((option) => {
    if (typeof option === 'string') {
      return {
        label: `${option.charAt(0).toUpperCase()}${option.slice(1)}`,
        value: option,
      };
    }
    return option;
  });

  const finalOptions: Option[] = showAll
    ? [{ value: 'all', label: defaultText || 'All' }, ...formattedOptions]
    : formattedOptions;

  const handleChange = (
    value: string,
    option: Option | Option[] | undefined,
  ) => {
    if (onChange) {
      onChange(value, option);
    }
  };

  return (
    <Select
      defaultValue={defaultText || (showAll ? 'all' : undefined)}
      style={{ width }}
      options={finalOptions}
      onChange={handleChange}
      {...props}
    />
  );
};

export default AppSelect;
