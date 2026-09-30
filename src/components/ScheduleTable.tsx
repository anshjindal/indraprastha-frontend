import { formatDay, type ScheduleDay } from "@/lib/schedule";

export function ScheduleTable({ days }: { days: ScheduleDay[] }) {
  return (
    <ol className="grid gap-4">
      {days.map((day, index) => (
        <li
          key={day.date}
          className={`grid gap-4 rounded-3xl border p-5 md:grid-cols-[10rem_1fr_1fr] md:items-center md:p-6 ${
            index === days.length - 1
              ? "border-saffron/50 bg-linear-to-r from-cream to-white"
              : "border-gold/25 bg-white"
          }`}
        >
          <div className="flex items-center gap-4 md:block">
            <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">Day {index + 1}</p>
            <p className="text-2xl font-bold text-maroon md:mt-1">{formatDay(day.date)}</p>
            <p className="text-sm text-ink/70">
              {day.weekday} · <span className="font-hindi">{day.hindiWeekday}</span>
            </p>
          </div>
          <p className="font-hindi text-lg leading-relaxed text-maroon">{day.hindi.join(", ")}</p>
          <p className="text-sm leading-relaxed text-ink/75">{day.english.join(" · ")}</p>
        </li>
      ))}
    </ol>
  );
}
