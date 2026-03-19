import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn(className)}
    >
        <g fontFamily="'Times New Roman', serif" fontWeight="300" fill="currentColor">
            <text x="50" y="135" fontSize="110">N</text>
            <text x="65" y="130" fontSize="120">C</text>
        </g>
    </svg>
  );
};
