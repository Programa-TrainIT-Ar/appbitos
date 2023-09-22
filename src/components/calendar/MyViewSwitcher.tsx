import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { ViewSwitcher } from '@devexpress/dx-react-scheduler';

export default function MyViewSwitcher() {
    const [nameView, setNameView] = useState({ name: 'Month', displayName: 'Month' });

    const SwicherComponent = ({ availableViews, onChange }: ViewSwitcher.SwitcherProps) => {
        return (
            <Dropdown
                value={nameView}
                onChange={(e) => {
                    setNameView(e.target.value);
                    onChange(e.value.name);
                }}
                options={availableViews}
                optionLabel="name"
                className="w-8rem"
            />
        );
    };

    return <ViewSwitcher switcherComponent={(props) => SwicherComponent(props)} />;
}
