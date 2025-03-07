import { cn } from '@/themes/cn';
import qs from 'qs';
import React from 'react';
import { Link, LinkProps, To, useLocation } from 'react-router-dom';

interface Props extends Omit<LinkProps, 'to'> {
  to?: To;
  queryName?: string;
  queryValue?: string | string[];
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  disabled?: boolean;
}

function AppLink({
  to,
  queryName,
  queryValue,
  onClick,
  disabled,
  ...rest
}: Props) {
  const location = useLocation();

  const finalLink = React.useMemo(() => {
    if (queryName) {
      const currentSearchParams = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      const updatedSearchParams = {
        ...currentSearchParams,
        [queryName]: queryValue,
      };
      return `${to || location.pathname}?${qs.stringify(updatedSearchParams)}`;
    }
    return to as string;
  }, [location.pathname, location.search, queryName, queryValue, to]);

  if (disabled) {
    return (
      <span {...rest} className={cn(rest.className, 'cursor-not-allowed')} />
    );
  }

  return <Link {...rest} to={finalLink} onClick={onClick} />;
}

export default AppLink;
