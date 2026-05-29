import { cn } from "lib/utils";

interface LoadingProps {
  logoSrc?: string;
  size?: number; // px for logo (width & height)
  spinnerColor?: string;
}

export const Component = ({ logoSrc = '/webqraft-logo-white.png', size = 112, spinnerColor = 'purple-500' }: LoadingProps) => {
  const outerSize = Math.max(size + 16, 112);
  return (
    <div className={cn('flex flex-col items-center gap-4 p-4 rounded-lg min-h-[240px] justify-center')}>
      <div className="relative flex justify-center items-center">
        <div
          className={`absolute animate-spin rounded-full`}
          style={{ height: outerSize, width: outerSize, borderStyle: 'solid', borderWidth: 4, borderColor: 'transparent', borderBottomColor: '#a78bfa' }}
        />
        <img src={logoSrc} alt="logo" className="relative rounded-full object-contain" style={{ width: size, height: size }} />
      </div>
    </div>
  );
};

export default Component;
