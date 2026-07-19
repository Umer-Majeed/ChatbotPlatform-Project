export function DashboardTopbar({ title }: { title: string }) {
  return (
    <div className="flex h-16 items-center justify-between border-b border-border px-6">
      <h1 className="font-display text-xl italic text-foreground">{title}</h1>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-foreground/70" />
        <span className="text-xs text-muted">Assistant is live</span>
        <div className="ml-2 h-9 w-9 rounded-full border border-border bg-background" />
      </div>
    </div>
  );
}