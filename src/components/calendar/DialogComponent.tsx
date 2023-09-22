import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from 'primereact/button';

import { SchedulerDateTime } from '@devexpress/dx-react-scheduler';

export default function DialogComponent() {
    const commandButton = (props: AppointmentTooltip.CommandButtonProps) => {
        const ADAPTER = {
            close: { icon: 'pi-times', title: 'Cerrar' },
            open: { icon: 'pi-pencil', title: 'Editar Tarea' },
            delete: { icon: 'pi-trash', title: 'Borrar Tarea' }
        };

        if (!props.id) return;

        return <Button icon={`pi ${ADAPTER[props.id].icon}`} tooltipOptions={{ position: 'bottom' }} onClick={props.onExecute} outlined className="h-2rem w-2rem my-2 mx-1" tooltip={ADAPTER[props.id].title} />;
    };

    const ContentComponent = (props: AppointmentTooltip.ContentProps) => {
        const formatDate = (start: SchedulerDateTime, end?: SchedulerDateTime, allDay?: boolean) => {
            const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

            const dayMiliseconds = 86400000;

            const dateFormatStart = new Date(start);
            const START_DATE = {
                month: months[dateFormatStart.getMonth()],
                dayWeek: days[dateFormatStart.getDay()],
                numberDay: dateFormatStart.getDate(),
                year: dateFormatStart.getFullYear(),
                hour: !allDay ? dateFormatStart.toLocaleTimeString() : ''
            };

            if (!end) return `${START_DATE.dayWeek}, ${START_DATE.numberDay} de ${START_DATE.month} ${START_DATE.hour}`;

            const dateFormatEnd = new Date(end);
            const END_DATE = {
                month: months[dateFormatEnd.getMonth()],
                dayWeek: days[dateFormatEnd.getDay()],
                numberDay: dateFormatEnd.getDate(),
                year: dateFormatEnd.getFullYear(),
                hour: !allDay ? '- ' + dateFormatEnd.toLocaleTimeString() : ''
            };
            const isTheSameDay = dateFormatEnd.getTime() - dateFormatStart.getTime() > dayMiliseconds;

            if (!isTheSameDay) {
                return `${START_DATE.dayWeek}, ${START_DATE.numberDay} de ${START_DATE.month} ${START_DATE.hour}  ${END_DATE.hour}`;
            } else {
                return `${START_DATE.numberDay} ${START_DATE.month} ${START_DATE.year} ${START_DATE.hour} - ${END_DATE.numberDay} ${END_DATE.month} ${END_DATE.year} ${END_DATE.hour}`;
            }
        };

        if (!props.appointmentData) return;
        const { title, notes, startDate, endDate, allDay } = props.appointmentData;

        const AddSection = ({ icon, text, styles, stylesContainer }: { icon?: string; text?: string; styles?: string; stylesContainer?: string }) => {
            if (text === '' || typeof text === 'undefined') return;

            return (
                <div className={`flex align-items-start pb-3 mt-1 mx-3 ${stylesContainer}`}>
                    <i className={icon + ' w-3rem mt-2'} style={{ color: '#09a' }} />
                    <p className={styles}>{text} </p>
                </div>
            );
        };

        return (
            <>
                <div className="pr-2 pt-1 pb-2 h-auto ">
                    <AddSection icon="pi pi-circle-fill" text={title} styles="font-semibold text-xl" />

                    <AddSection text={formatDate(startDate, endDate, allDay)} stylesContainer="-mt-3 text-sm" />

                    <AddSection icon={'pi pi-align-left'} text={notes} styles="w-full h-auto" />
                </div>
            </>
        );
    };

    return (
        <>
            <AppointmentTooltip showCloseButton showDeleteButton showOpenButton commandButtonComponent={commandButton} contentComponent={ContentComponent} />;
        </>
    );
}
