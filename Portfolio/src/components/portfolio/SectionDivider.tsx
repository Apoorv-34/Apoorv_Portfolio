const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center py-4 px-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-4 w-2 h-2 rotate-45 border border-primary/30" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
};

export default SectionDivider;
