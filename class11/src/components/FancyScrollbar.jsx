import React from "react";
import Scrollbars from 'react-scrollbars-custom'

const FancyScrollbar = () => {
    return (
        <Scrollbars style={{ height: 500}}>
            {Array.from({ length: 50 }, (_, i) => (
                <p key={i}>항목 {i + 1}</p>
            ))}
        </Scrollbars>
    )

}

export default FancyScrollbar;