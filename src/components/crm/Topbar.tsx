import { Search, Bell } from "lucide-react";

export function Topbar({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-navy-100 bg-ivory/80 backdrop-blur-lg">
      <div className="flex items-center justify-between gap-4 px-5 py-4 pl-16 lg:px-8 lg:pl-8">
        <div>
          <h1 className="text-lg font-semibold text-navy-900">{title}</h1>
          {subtitle && (
            <p className="text-sm text-navy-500">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input
              placeholder="Rechercher…"
              className="h-10 w-56 rounded-full border border-navy-100 bg-white pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-navy-400 focus:border-gold-300 focus:ring-2 focus:ring-gold-100"
            />
          </div>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-600 hover:bg-navy-50">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-gold-400 ring-2 ring-white" />
          </button>
          <div className="flex items-center gap-2.5 rounded-full border border-navy-100 bg-white py-1 pl-1 pr-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">
              AN
            </span>
            <span className="hidden text-sm font-medium text-navy-700 sm:block">
              Ayesha N.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
