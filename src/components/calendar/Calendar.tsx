import { EditingState, ViewState, ChangeSet, IntegratedEditing, AppointmentForm as AppointmentFormScheduler, Changes } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    WeekView,
    Toolbar,
    DateNavigator,
    DragDropProvider,
    Appointments,
    TodayButton,
    AppointmentForm,
    AppointmentTooltip,
    ConfirmationDialog as ConfirmationDialogMaterial,
    ViewSwitcher
} from '@devexpress/dx-react-scheduler-material-ui';
import { useContextTasks } from './contexts/ContextTasks';
import { Task } from '../../types/calendar';
import CalendarService from '../../service/CalendarService';
import { faker } from '@faker-js/faker';
import MyAppointmentForm from './MyAppointmentForm';

type UpdateUI = 'YES' | 'NO';

export default function Calendar() {
    const { tasks, handleContextAddTask, handleContextDeleteTask, handleContextEditTask, handleContextAdd_EditTask } = useContextTasks();

    const COMMIT_ACTIONS = {
        changed: async (changed: ChangeSet['changed'], update: UpdateUI) => {
            if (!changed) return;
            try {
                const { response } = await CalendarService.editTask(changed);
                console.log(changed);

                if (response.status !== 200) throw new Error('error');
                update === 'YES' && handleContextEditTask(changed);
            } catch (error) {
                console.log(error);
            }
        },
        added: async (added: ChangeSet['added'], update: UpdateUI): Promise<Task | undefined> => {
            const id = faker.string.uuid();
            if (!added) return;
            const { title, startDate, endDate, notes, allDay, rRule } = added;

            const newTask: Task = {
                title,
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
                return newTask;
            } catch (error) {
                console.log(error);
            }
        },
        deleted: async (deleted: ChangeSet['deleted']) => {
            if (!deleted || typeof deleted === 'number') return;

            try {
                const { response } = await CalendarService.deleteTask(deleted);

                if (response.status !== 200) throw new Error('error');
                handleContextDeleteTask(deleted);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleCommitChanges = async ({ added, deleted, changed }: ChangeSet) => {
        console.log(added, changed);

        if (changed && added) {
            const taskAdded = await COMMIT_ACTIONS.added(added, 'NO');
            COMMIT_ACTIONS.changed(changed, 'NO');
            if (taskAdded) {
                handleContextAdd_EditTask(taskAdded, changed);
            }
        }

        if (changed && !added) {
            COMMIT_ACTIONS.changed(changed, 'YES');
        }

        if (added && !changed) {
            COMMIT_ACTIONS.added(added, 'YES');
        }

        if (deleted) {
            COMMIT_ACTIONS.deleted(deleted);
        }
    };

    return (
        <>
            <Scheduler data={tasks?.dates} height={900}>
                <ViewState defaultCurrentViewName="Month" />
                <WeekView startDayHour={0} endDayHour={24} cellDuration={90} />
                <MonthView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <EditingState onCommitChanges={handleCommitChanges} />
                <Appointments />
                <IntegratedEditing />
                <DragDropProvider />
                <AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
                <ConfirmationDialogMaterial />
                <ViewSwitcher />

                <MyAppointmentForm />
            </Scheduler>
        </>
    );
}
