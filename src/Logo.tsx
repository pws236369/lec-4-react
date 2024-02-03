// Define the type for the props
type LogoProps = {
  href: string;
  src: string;
  alt: string;
  className?: string; // Optional property
};

// Logo Component with typed props
export const Logo: React.FC<LogoProps> = ({ href, src, alt, className }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} className={className} alt={alt} />
    </a>
  );
};
