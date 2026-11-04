interface TbaBoxProps {
  children: React.ReactNode;
}

// Neutral placeholder box for content that is not announced yet.
export default function TbaBox({ children }: TbaBoxProps) {
  return (
    <div className="bg-neutral-100 p-6 sm:p-8">
      <p className="text-sm text-neutral-600 leading-relaxed">{children}</p>
    </div>
  );
}
