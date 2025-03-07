import { LANGUAGES } from '@/constants/language';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);

    localStorage.setItem('language', value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      options={LANGUAGES.map(({ code, label }) => ({
        value: code,
        label,
      }))}
      className="w-38"
    />
  );
};

export default LanguageSwitcher;
