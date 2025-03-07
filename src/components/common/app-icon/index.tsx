interface Props {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  other?: React.SVGProps<SVGSVGElement>;
}

const AppIcon = (props: Props) => {
  const { src, className, width = 20, height = width, ...other } = props;

  return (
    <svg width={width} height={height} className={className} {...other}>
      <use href={src} width={width} height={height} {...other} />
    </svg>
  );
};

export default AppIcon;
