import { DragDropProvider } from '@devexpress/dx-react-scheduler-material-ui';
import { useRef } from 'react';
import { SchedulerDateTime } from '@devexpress/dx-react-scheduler';

type Dates = { startDate: SchedulerDateTime; endDate: SchedulerDateTime };

function DragDropComponent() {
    const refCurrentsDates = useRef<Dates>({
        startDate: new Date(),
        endDate: new Date()
    });

    return (
        <DragDropProvider
            sourceAppointmentComponent={(e) => {
                refCurrentsDates.current.startDate = e.data.startDate;
                refCurrentsDates.current.endDate = e.data.endDate ?? e.data.startDate;

                return <DragDropProvider.SourceAppointment {...e}></DragDropProvider.SourceAppointment>;
            }}
            draftAppointmentComponent={(e) => {
                const { style: styles, ...rest } = e;

                return <DragDropProvider.DraftAppointment style={{ background: 'var(--primary-color)', ...styles }} {...rest}></DragDropProvider.DraftAppointment>;
            }}
        />
    );
}
