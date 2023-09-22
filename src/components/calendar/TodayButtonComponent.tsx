import { TodayButton } from '@devexpress/dx-react-scheduler';
import { Button } from 'primereact/button';

export default function TodayButtonComponent() {
    const TodayComponent = (props: TodayButton.ButtonProps) => {
        return <Button label="Today" onClick={() => props.setCurrentDate(new Date())} severity="secondary" outlined className="text-sm sm:text-base" />;
    };

    return <TodayButton buttonComponent={TodayComponent} />;
}
