interface MetricsProps {
    metricCount: string | number;
    metricLabel: string;
}

export default function Metrics({ metricCount, metricLabel }: MetricsProps) {
    return (
        <>
            <div>
                <span className="text-3xl md:text-4xl text-[#a855f7] font-bold">+{metricCount}</span>
                <p className="text-[#626269]">{metricLabel}</p>
            </div>
        </>
    );
}
