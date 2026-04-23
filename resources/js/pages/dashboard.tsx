import { Head } from '@inertiajs/react';
import {
    BarChart3,
    CalendarDays,
    Menu,
    MessageSquareText,
    MoreHorizontal,
    Plane,
} from 'lucide-react';

export default function Dashboard() {
    const scheduleItems = [
        {
            day: 'May',
            title: 'Marriott Al Jadaf',
            subtitle: '04/05/2026 18:40',
            footer: 'Rest : 47:40 (06/05/2026 18:20)',
            accent: 'bg-amber-400',
            textColor: 'text-amber-400',
        },
        {
            day: '06   Wed',
            title: 'Reporting time : 1820',
            subtitle: '19   1940 DXB MNL 0900+1',
            footer: 'Debriefing time : 0930+1',
            accent: 'bg-sky-400',
            textColor: 'text-sky-400',
        },
        {
            day: '08   Fri',
            title: 'ROFF - Requested Day Off',
            subtitle: 'Location: MNL',
            footer: '',
            accent: 'bg-lime-400',
            textColor: 'text-lime-400',
        },
        {
            day: '09   Sat',
            title: 'OFF - Day off',
            subtitle: 'Location: MNL',
            footer: '',
            accent: 'bg-lime-400',
            textColor: 'text-lime-400',
        },
        {
            day: '10   Sun',
            title: 'Reporting time : 0200',
            subtitle: 'HSL1  0200  MNL MNL  0759',
            footer: 'Debriefing time : 0759',
            accent: 'bg-cyan-400',
            textColor: 'text-cyan-400',
        },
        {
            day: '11   Mon',
            title: 'Reporting time : 0405',
            subtitle: '272  0535  MNL HKG  0810',
            footer: '',
            accent: 'bg-sky-400',
            textColor: 'text-sky-400',
        },
    ];

    const bottomNavItems = [
        { label: 'My Schedule', icon: CalendarDays, active: true },
        { label: 'Flight Info', icon: Plane, active: false },
        { label: 'Statistics', icon: BarChart3, active: false },
        { label: 'Crew Mail', icon: MessageSquareText, active: false },
        { label: 'More', icon: MoreHorizontal, active: false },
    ];

    return (
        <>
            <Head title="Dashboard" />
            <div className="mx-auto w-full max-w-md">
                <div className="min-h-screen bg-[#1d1f22] text-white">
                    <div className="px-4 pb-4">
                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-300 transition hover:bg-neutral-800"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="border-t border-b border-neutral-700 px-4 py-4 text-center text-sm text-neutral-400">
                        All Times In Local Station
                        <div className="mt-2 text-neutral-500">
                            Load Previous Period
                        </div>
                    </div>

                    <div className="space-y-3 px-3 pt-3 pb-24">
                        {scheduleItems.map((item) => (
                            <div key={`${item.day}-${item.title}`}>
                                <p className="mb-1 px-1 text-lg leading-none text-neutral-300">
                                    {item.day}
                                </p>
                                <div className="relative overflow-hidden rounded-md bg-[#2a2c30] px-3 py-3">
                                    <div
                                        className={`absolute top-0 right-0 h-full w-1 ${item.accent}`}
                                    />
                                    <p
                                        className={`text-xl font-medium leading-tight ${item.textColor}`}
                                    >
                                        {item.title}
                                    </p>
                                    <p className="mt-1 text-base text-neutral-200">
                                        {item.subtitle}
                                    </p>
                                    {item.footer ? (
                                        <p className="mt-1 text-base text-neutral-100">
                                            {item.footer}
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="fixed right-0 bottom-14 left-0 z-20 bg-[#ee3a32] px-4 py-2 text-center text-sm font-semibold text-white md:mx-auto md:max-w-md">
                        Next Duty : 0678D Reporting 19:20 20/04/2026
                    </div>

                    <nav className="fixed right-0 bottom-0 left-0 z-20 h-14 border-t border-neutral-700 bg-[#27292d] md:mx-auto md:max-w-md">
                        <ul className="grid grid-cols-5">
                            {bottomNavItems.map((item) => (
                                <li key={item.label}>
                                    <button
                                        type="button"
                                        className="flex w-full flex-col items-center justify-center gap-1 px-1 py-2 text-[10px] text-neutral-300 transition hover:bg-neutral-800"
                                    >
                                        <item.icon
                                            className={`h-5 w-5 ${item.active ? 'text-white' : 'text-neutral-400'}`}
                                        />
                                        <span
                                            className={
                                                item.active
                                                    ? 'text-white'
                                                    : 'text-neutral-400'
                                            }
                                        >
                                            {item.label}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
