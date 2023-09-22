import { EditingState, ViewState, ChangeSet } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, MonthView, Toolbar, DragDropProvider, Appointments, DayView } from '@devexpress/dx-react-scheduler-material-ui';
import { useContextTasks } from './contexts/ContextTasks';
import { Task } from '../../types/calendar';
import CalendarService from '../../service/CalendarService';
import { faker } from '@faker-js/faker';
import TodayButtonComponent from './TodayButtonComponent';
import { Toast, ToastMessage } from 'primereact/toast';
import { useRef } from 'react';
import EditRecurrenceComponent from './EditRecurrenceComponent';
import DateNavigatorComponent from './DateNavigatorComponent';
import DialogComponent from './DialogComponent';
import ConfirmationDialogComponent from './ConfirmationDialogComponent';
import MyViewSwitcher from './MyViewSwitcher';
import MyAppointmentForm from './MyAppointmentForm';

type UpdateUI = 'YES' | 'NO';
type TypeToastShow = 'Edit' | 'deleted';

export default function Calendar() {
    const { tasks, handleContextAddTask, handleContextDeleteTask, handleContextEditTask, handleContextAdd_EditTask } = useContextTasks();
    const toastRef = useRef<Toast | null>(null);

    const COMMIT_ACTIONS = {
        changed: async (changed: ChangeSet['changed'], update: UpdateUI, typeToast: TypeToastShow): Promise<ToastMessage> => {
            if (!changed) return { severity: 'error', summary: 'Error', detail: 'Hubo un error al editar la tarea' };
            try {
                const { response } = await CalendarService.editTask(changed);

                if (response.status !== 200) throw new Error('error');
                if (update === 'YES') {
                    handleContextEditTask(changed);
                    if (typeToast === 'deleted') {
                        return { severity: 'info', summary: 'Eliminada', detail: 'Se elimino correctamente la tarea' };
                    } else {
                        return { severity: 'success', summary: 'Editada', detail: 'La tarea se edito correctamente' };
                    }
                } else {
                    return { severity: 'success', summary: 'Editada', detail: 'La tarea se edito correctamente' };
                }
            } catch (error) {
                return { severity: 'error', summary: 'Error', detail: 'Hubo un error al editar la tarea' };
            }
        },
        added: async (added: ChangeSet['added'], update: UpdateUI): Promise<{ newTask: Task | undefined; toastMessage: ToastMessage }> => {
            const id = faker.string.uuid();
            if (!added) return { toastMessage: { severity: 'error', summary: 'Error', detail: 'Hubo un error al Crear la tarea' }, newTask: undefined };

            const { title, startDate, endDate, notes, allDay, rRule } = added;

            const newTask: Task = {
                title: title === undefined || title === '' ? '(Sin Titulo)' : title,
                startDate,
                endDate,
                id,
                allDay,
                description: notes,
                rRule,
                priority: 'low'
            };

            try {
                const { response } = await CalendarService.addTask(newTask);

                if (response.status !== 200) throw new Error('error');
                update === 'YES' && handleContextAddTask(newTask);
                return { toastMessage: { severity: 'success', summary: 'Creada', detail: 'La tarea se creo correctamente' }, newTask };
            } catch (error) {
                return { toastMessage: { severity: 'error', summary: 'Error', detail: 'Hubo un error al Crear la tarea' }, newTask: undefined };
            }
        },
        deleted: async (deleted: ChangeSet['deleted']): Promise<ToastMessage> => {
            if (!deleted || typeof deleted === 'number') return { severity: 'error', summary: 'Error', detail: 'Hubo un error al borrar la tarea' };

            try {
                const { response } = await CalendarService.deleteTask(deleted);

                if (response.status !== 200) throw new Error('error');
                handleContextDeleteTask(deleted);
                return { severity: 'info', summary: 'Eliminada', detail: 'Se elimino correctamente la tarea' };
            } catch (error) {
                return { severity: 'error', summary: 'Error', detail: 'Hubo un error al borrar la tarea' };
            }
        }
    };

    const handleCommitChanges = async ({ added, deleted, changed }: ChangeSet) => {
        if (changed && added) {
            const taskAdded = await COMMIT_ACTIONS.added(added, 'NO');
            const message = await COMMIT_ACTIONS.changed(changed, 'NO', 'Edit');
            if (taskAdded.newTask) {
                toastRef.current?.show(message);
                handleContextAdd_EditTask(taskAdded.newTask, changed);
            }
        }

        if (changed && !added) {
            if (!changed[Object.keys(changed)[0]].exDate) {
                const message = await COMMIT_ACTIONS.changed(changed, 'YES', 'Edit');
                toastRef.current?.show(message);
            } else {
                const message = await COMMIT_ACTIONS.changed(changed, 'YES', 'deleted');
                toastRef.current?.show(message);
            }
        }

        if (added && !changed) {
            const message = await COMMIT_ACTIONS.added(added, 'YES');
            toastRef.current?.show(message.toastMessage);
        }

        if (deleted) {
            const message = await COMMIT_ACTIONS.deleted(deleted);
            toastRef.current?.show(message);
        }
    };

    const AppointmentsContainer = (props: Appointments.AppointmentProps) => {
        return <Appointments.Appointment {...props} className="bg-primary" />;
    };

    return (
        <>
            <Toast ref={toastRef} />

            <Scheduler data={tasks?.dates} height={900}>
                <ViewState defaultCurrentViewName="Month" />
                <WeekView />
                <MonthView />
                <DayView />
                <Toolbar />
                <DateNavigatorComponent />
                <TodayButtonComponent />
                <Appointments appointmentComponent={AppointmentsContainer} />
                <EditingState onCommitChanges={handleCommitChanges} />
                <EditRecurrenceComponent />
                <DragDropProvider
                    draftAppointmentComponent={(e) => {
                        const { style: styles, ...rest } = e;

                        return <DragDropProvider.DraftAppointment style={{ background: 'var(--primary-color)', ...styles }} {...rest}></DragDropProvider.DraftAppointment>;
                    }}
                />
                <DialogComponent />
                <ConfirmationDialogComponent />
                <MyViewSwitcher />
                <MyAppointmentForm />
            </Scheduler>
        </>
    );
}
