import React from "react";
import { styled } from "styled-components";

const ProgressBar = ({total, current, type, isStriped}: {total: number, current: number, type: 'success'|'warning'|'primary'|'danger'|'orange'|'purple', isStriped?: boolean}) => {
    return (
        <StyledProgressBar>
            <div className={`${type} ${isStriped ? 'striped' : ''}`} style={{width: `${100 * current / (total || 1)}%`}}></div>
        </StyledProgressBar>
    )
}

const StyledProgressBar = styled.div`
    background: var(--hover-back);
    height: 7px;
    overflow: hidden;
    border-radius: 0.25rem;
    margin: 1em 0;
    > div {
        height: 7px;
        &.primary {
            background-color: var(--primary);
        }
        &.secondary {
            background-color: var(--secondary);
        }
        &.warning {
            background-color: var(--warning);
        }
        &.danger {
            background-color: var(--danger);
        }
        &.orange {
            background-color: var(--orange);
        }
        &.purple {
            background-color: var(--purple);
        }
        &.striped {
            background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
            background-size: 1rem 1rem;
        }
    }
` 

export default ProgressBar