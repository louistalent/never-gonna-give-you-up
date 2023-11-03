import React from "react";
import { styled } from "styled-components";

const NumberController = ({initialValue, onChange}: {initialValue: number, onChange: Function}) => {

    const [status, setStatus] = React.useState({
        value: 0
    })

    const onValueChange = (isIncrease: boolean) => {
        let value = status.value
        if (isIncrease) {
            value = value + 1 > 20 ? 20 : value + 1;
        } else {
            value = value - 1 > 0 ? value - 1 : 0;
        }
        setStatus({value})
        onChange(value)
    }

    return (
        <StyledNumberController>
            <div className="btn" onClick={()=>onValueChange(true)}>+</div>
            <div className="value">{status.value}</div>
            <div className="btn" onClick={()=>onValueChange(false)}>-</div>
        </StyledNumberController>
    )
}

const StyledNumberController = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    .btn {
        cursor: pointer;
        background-color: var(--menu-back);
        border-radius: 50%;
        border: 0;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-content: center;
        line-height: 2;
        transition: all 0.3s ease;
        &:hover {
            background-color: var(--hover-back);
        }
    }
    .value {
        min-width: 1em;
        display: flex;
        justify-content: center;
    }
`

export default NumberController