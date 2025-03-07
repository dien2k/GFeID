import AppIcon from '../app-icon';
import { cn } from '@/themes/cn';

interface Props {
  className?: string;
}

export function AppLoading(props: Props) {
  const { className } = props;

  return (
    <div className={cn('flex w-full items-center justify-center', className)}>
      <AppIcon
        src="/svg/circle-loading.svg#id"
        className="h-5 w-5 animate-spin text-green-500"
      />
    </div>
  );
}

interface AppLoadingOverlayProps {
  loading: boolean;
}

export function AppLoadingOverlay({ loading }: AppLoadingOverlayProps) {
  return (
    <div
      className={cn(
        'visible absolute right-0 top-0 z-10 flex h-full w-full cursor-not-allowed items-center justify-center bg-black/10 opacity-100 duration-300',
        !loading && 'invisible opacity-0',
      )}
    >
      <AppLoading />
    </div>
  );
}
