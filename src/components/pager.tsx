import React from "react";
import { styled } from "styled-components";

interface PagerProps {
	page:       number
	total:      number
	onChange:   (page: number) => void
}

const Pager = ({page, total, onChange}: PagerProps) => {

    const [values, setValues] = React.useState<String[]>([])
    const [status, setStatus] = React.useState({
        page: page,
        total: total
    })

    const setPage = (p: number) => {
        let _p = status.page
        if (!Number(p)) return
        if (p === -2) {
            _p = _p + 1 <= total ? _p + 1 : total
        } else if (p === -1) {
            _p = _p - 1 >= 1 ? _p - 1 : 1
        } else {
            _p = p
        }
        setStatus({...status, page: _p})
		onChange(_p)
	}

    React.useEffect(() => {
        const _page = status.page
        let values = [] as string[]
        if (total <= 5) {
            for (let i = 1; i <= total; i++) {
                values.push(String(i))
            }
        } else {
            if (_page <= 2) {
                values = ['1', '2', '3', '...', String(total)]
            } else if (_page >= total - 1) {
                values = ['1', '...', String(total-2), String(total-1), String(total)]
            } else {
                values = ['1', '...', String(_page), '...', String(total)]
            }
        }
        setValues(values)
    }, [status.page, total])

    return (
        <div className="d middle">
            <StyledBtn className="before blue" onClick={()=>setPage(-1)}>🡠</StyledBtn>
            {values.map((i, k) => (
                <StyledBtn key={k} className={`${(Number(i) || 0) === status.page ? 'active' : ''}`} onClick={()=>i !== '...' && setPage(Number(i))}>{i}</StyledBtn>
            ))}
            <StyledBtn className="after blue" onClick={()=>setPage(-2)}>🡢</StyledBtn>
        </div>
    )
}

const StyledBtn = styled.button`
    color: var(--text);
    border-radius: 0px;
    cursor: pointer;
    font-size: 16px;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-back);
    border: 1px soild var(--border);
    border-radius: 50%;
    margin: 8px 4px;
    &:hover {
        background-color: var(--hover-back);
    }
    /* &.before {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }
    &.after {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    } */
    &.active {
        background-color: var(--hover-back);
    }
    &.light {
        background-color: var(--light);
        color: var(--text);
        border: 1px solid #eaeff5;
        &:hover {
            background-color: var(--hover-back);
        }
    }
`

export default Pager