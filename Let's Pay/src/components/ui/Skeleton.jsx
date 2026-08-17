export function CardSkeleton() {
  return (
    <div className="glass-elevated p-6 rounded-xl border border-[var(--color-border-color)] animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-sidebar)]"></div>
        <div className="w-12 h-5 bg-[var(--color-bg-sidebar)] rounded"></div>
      </div>
      <div className="h-4 w-24 bg-[var(--color-bg-sidebar)] mb-2 rounded"></div>
      <div className="h-8 w-32 bg-[var(--color-bg-sidebar)] rounded"></div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="glass-elevated p-6 rounded-xl border border-[var(--color-border-color)] mt-6 animate-pulse">
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 w-48 bg-[var(--color-bg-sidebar)] rounded"></div>
        <div className="h-8 w-24 bg-[var(--color-bg-sidebar)] rounded"></div>
      </div>
      <div className="h-[300px] w-full bg-[var(--color-bg-sidebar)]/50 rounded-lg flex items-end gap-2 p-4">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="flex-1 bg-[var(--color-bg-sidebar)] rounded-t" style={{ height: `${20 + i * 10}%` }}></div>
        ))}
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="glass-elevated rounded-xl border border-[var(--color-border-color)] overflow-hidden mt-6 animate-pulse">
      <div className="p-6 border-b border-[var(--color-border-color)] flex justify-between items-center">
        <div className="h-6 w-36 bg-[var(--color-bg-sidebar)] rounded"></div>
        <div className="h-5 w-16 bg-[var(--color-bg-sidebar)] rounded"></div>
      </div>
      <div className="space-y-4 p-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between items-center py-2">
            <div className="h-4 w-24 bg-[var(--color-bg-sidebar)] rounded"></div>
            <div className="h-4 w-32 bg-[var(--color-bg-sidebar)] rounded"></div>
            <div className="h-4 w-16 bg-[var(--color-bg-sidebar)] rounded"></div>
            <div className="h-4 w-20 bg-[var(--color-bg-sidebar)] rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
