import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

export default function RodalModal({ modal, toggle, title, children, classNames, header, width, height }) {
    const customStyles = {
        height: 'auto',
        bottom: 'auto',
        top: '5%',
        background: "#e7f0ff",
        padding: "20px",
        paddingBottom: "16px",
        overflow: "scroll",
    };
    return (
        <>
            <Rodal customStyles={ customStyles } width={ width } animation="fade" visible={ modal } onClose={ toggle } className={ classNames }>
                <div>{ children }</div>
            </Rodal>
        </>
    );
}
