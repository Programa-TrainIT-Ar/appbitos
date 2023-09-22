import { DateNavigator } from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from 'primereact/button';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function DateNavigatorComponent() {
    return (
        <DateNavigator
            rootComponent={(props) => {
                return <DateNavigator.Root {...props} className="flex align-items-center ml-2" />;
            }}
            openButtonComponent={(props) => {
                return <DateNavigator.OpenButton {...props} className="text-xl text-primary" />;
            }}
            navigationButtonComponent={(props) => {
                const ADAPTER = {
                    back: 'pi pi-angle-left',
                    forward: 'pi pi-angle-right'
                };
                return (
                    <>
                        <Button icon={ADAPTER[props.type]} outlined className="border-transparent py-1 ml-1" onClick={props.onClick} />
                    </>
                );
            }}
            overlayComponent={(props) => {
                const { children, ...rest } = props;

                return (
                    <DateNavigator.Overlay {...rest}>
                        <div style={{ maxWidth: '405px', width: '95vw' }}>
                            <Calendar
                                // @ts-ignore
                                value={children?.props.selectedDate}
                                onChange={(e: CalendarChangeEvent) => {
                                    // @ts-ignore
                                    children?.props.onSelectedDateChange(e.value);
                                }}
                                className="w-full"
                                inline
                            />
                        </div>
                    </DateNavigator.Overlay>
                );
            }}
        />
    );
}
