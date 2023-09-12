import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { ViewSwitcher } from '@devexpress/dx-react-scheduler';

export default function MyViewSwitcher() {
    const SwicherComponent = (props: ViewSwitcher.SwitcherProps) => {
        const [nameView, setNameView] = useState({ name: 'Week', displayName: 'Week' });
        console.log(nameView);

        return (
            <Dropdown
                value={nameView}
                onChange={(e) => {
                    setNameView(e.target.value);
                    props.onChange(e.value.name);
                }}
                options={props.availableViews}
                optionLabel="name"
                className="w-8rem"
            />
        );
    };

    return <ViewSwitcher switcherComponent={(props) => SwicherComponent(props)} />;
}
