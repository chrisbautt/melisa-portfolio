interface MetricsProps {
    metricCount: string | number;
    metricLabel: string;
}

export default function Metrics({ metricCount, metricLabel }: MetricsProps) {
    return (
        <>
            <div>
                <span className="text-3xl text-[#a855f7] font-normal">+{metricCount}</span>
                <span className="text-[#626269] font-light">{metricLabel}</span>
            </div>
        </>
    );
}
