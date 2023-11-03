import React from "react";
import styled from "styled-components";
import Icon from "./icons";

export const Checkbox = ({value, id, checked, onChange, disabled, className}: {value: string, id?: string, checked?: boolean, className?: string, disabled?: boolean, onChange?: (checked: boolean)=>void}) => {
    const [inputId] = React.useState(id || ['__id', +new Date(), Math.round(Math.random() * 1e6)].join('-'));
    return (
        <StyledCheckbox className= {className || ""} checked = {!checked} style={{color: disabled ? 'var(--gray-text)' : ''}}>
            <div className="check" style={{marginRight: '8px', borderColor: disabled ? 'var(--gray-text)' : ''}} onClick={() => {!disabled && onChange && onChange(!checked)}}>
                {checked ? <Icon icon = "Checkbox" size={12} /> : <></>}
            </div>
            <input id={inputId} type="checkbox" checked={checked} onChange={e=>!disabled && !!onChange && onChange(e.target.checked)} className="checkbox-custom" />
            <label htmlFor={inputId} className="checkbox-custom-label" style={{cursor: 'pointer'}}>
                {value}
            </label>
        </StyledCheckbox>
    )
}

export const StyledCheckbox = styled.div<{ checked?: boolean; }>`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    .check {
        border: ${({checked}) => (!checked ? '1px solid var(--primary)' : '1px solid var(--gray-text)')};
        background-color: ${({checked}) => (!checked ? 'var(--primary)' : 'transparent')};
        border-radius: 4px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({checked}) => (!checked ? '#eee' : '#111')};
    }
    .checkbox-custom {
        opacity: 0;
        position: absolute;
        top: 0;
    }
`

export const StyledPrimaryInput = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    align-items: stretch;
    width: 100%;
    margin: 1em 0;
    position: relative;
    > div {
        position: absolute;
        top: 3px;
        left: 0;
        color: var(--color);
        border-right: 1px solid var(--border);
        border-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        padding: 0.5rem 0.75rem;
        background-color: transparent;
    }
    > input {
        width: 100%;
        height: 50px;
        box-shadow: none;
        padding: 0.5rem 0.75rem;
        background: transparent;
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--color);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 1em;
        outline: 0;
        &:focus {
            border-color: var(--focus-border);
        }
    }
`

export const StyledCheckBoxBg = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    background: var(--light-back);
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 0 15px;
    border: 1px solid var(--border);
`

export const StyledInput = styled.input`
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 4px;
    /* background: var(--light-back); */
    background-color: transparent;
    height: 50px;
    font-size: 1.1em;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    outline: 0;
    &:focus {
        border-color: var(--focus-border);
    }
    &.error {
        border-color: var(--danger);
    }
`

export const Textarea = styled.textarea`
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: transparent;
    font-size: 1.1em;
    padding: 0.5rem 0.75rem;
    color: var(--text);
    outline: 0;
    resize: none;
    &:focus {
        border-color: var(--focus-border);
    }
`

export const RadioBox = styled.div`
    padding: 0.3em 0;
    > input {
        display: none;
    }
    > input:not(:checked) + label:after {
        content: "";
        font-family: 'Themify';
        width: 16px;
        height: 16px;
        background: transparent;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        border: 1px solid var(--gray-text);
    }
    > input + label:after {
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        border: 1px solid var(--primary);
        color: #fff;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > input {
        &:checked {
            + label:before {
                content: "";
                width: 8px;
                height: 8px;
                position: absolute;
                left: 0;
                right: 0;
                top: 5px;
                left: 5px;
                border-radius: 100%;
                -webkit-transition: all 0.2s ease;
                transition: all 0.2s ease;
                background-color: var(--primary);
                color: #fff;
                font-size: 11px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    > label {
        padding-left: 28px;
        cursor: pointer;
        position: relative;
    }
`

export const StyledPhoneNumberInput = styled.div`
    .PhoneInputInput {
        border-radius: 6px;
        border: 1px solid var(--border);
        height: 50px;
        font-size: 1.1em;
        padding: 0.5rem 0.75rem;
        background: var(--light-back);
        outline: 0;
        width: 100%;
        color: var(--text);
        &:hover {
            border-color: var(--focus-border);
        }
        &:focus {
            border-color: var(--focus-border);
        }
    }
    .PhoneInputCountry {
        margin-right: 1em;
    }
    .PhoneInputCountrySelect {
        width: 100%;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--light-back);
        height: 50px;
        font-size: 1.1em;
        padding: 0.5rem 0.75rem;
        color: var(--text);
        outline: 0;
    }
    .PhoneInputCountryIcon--border, .PhoneInputCountryIcon {
        width: 30px;
        height: auto;
        margin-right: 0.5em;
    }
`

export const StyledDatePicker = styled.div`
    .react-date-picker--open {
        .react-date-picker__wrapper {
            border-color: var(--primary) !important;
        }
    }
    .react-date-picker {
        .react-date-picker__wrapper {
            display: flex;
            border: 1px solid var(--border);
            border-radius: 6px;
            &:hover {
                border-color: var(--primary);
            }
            .react-date-picker__inputGroup {
                width: 100%;
                border: 0;
                background-color: transparent;
                height: 50px;
                padding: 0.5rem 0.75rem;
                color: var(--text);
                outline: 0;
                display: flex;
                align-items: center;
                &:focus {
                    border-color: var(--primary);
                }
                .react-date-picker__inputGroup__input {
                    padding: 1em 0.5em;
                    background-color: transparent;
                    border: 0;
                    outline: 0;
                    color: var(--text);
                    font-size: 1.1em;
                }
                .react-date-picker__inputGroup__month {
                    width: 2.3em !important;
                }
                .react-date-picker__inputGroup__day {
                    width: 2.3em !important;
                }
                .react-date-picker__inputGroup__year {
                    width: 3.3em !important;
                }
                .react-date-picker__inputGroup__divider {
                    color: var(--text);
                }
            }
            .react-date-picker__button {
                background-color: transparent;
                border: 0;
                color: var(--text);
                cursor: pointer;
                svg {
                    stroke: var(--text) !important;
                    transition: all 0.3s ease;
                }
                &:hover {
                    svg {
                        stroke: var(--primary) !important;
                    }
                }
            }
        }
        .react-date-picker__calendar {
            transition: all 0.3s ease-in-out;
            background-color: var(--light-back);
            padding: 1em;
            border-radius: 4px;
            position: absolute;
            z-index: 10;
            .react-calendar__navigation {
                display: flex;
                align-items: center;
                gap: 0.5em;
                margin-bottom: 0.5em;
                .react-calendar__navigation__arrow {
                    background-color: var(--light-back);
                    color: var(--text);
                    border: 0;
                    cursor: pointer;
                    padding: 0.3em 0.5em;
                    font-size: 1.5em;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    &:hover {
                        background-color: var(--hover-back);
                    }
                }
                .react-calendar__navigation__label {
                    background-color: var(--light-back);
                    border: 0;
                    cursor: pointer;
                    color: var(--text);
                    padding: 0.8em;
                    transition: all 0.3s ease;
                    border-radius: 4px;
                    &:hover {
                        background-color: var(--hover-back);
                    }
                }
            }
            .react-calendar__viewContainer {
                .react-calendar__month-view {
                    .react-calendar__month-view__weekdays {
                        .react-calendar__month-view__weekdays__weekday {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            > :nth-child(1) {
                                text-decoration: none;
                            }
                        }
                    }
                    .react-calendar__month-view__days {
                        margin-top: 0.5em;
                        .react-calendar__month-view__days__day {
                            background-color: var(--light-back);
                            border: 0;
                            border-radius: 0;
                            padding: 1em;
                            cursor: pointer;
                            color: var(--text);
                            transition: all 0.3s ease;
                            &:hover {
                                background-color: var(--hover-back);
                            }
                        }
                    }
                }
                .react-calendar__year-view {
                    .react-calendar__year-view__months {
                        margin-top: 0.5em;
                        .react-calendar__year-view__months__month {
                            background-color: var(--light-back);
                            border: 0;
                            border-radius: 0;
                            padding: 1em;
                            cursor: pointer;
                            color: var(--text);
                            transition: all 0.3s ease;
                            &:hover {
                                background-color: var(--hover-back);
                            }
                        }
                    }
                }
                .react-calendar__decade-view {
                    .react-calendar__decade-view__years {
                        margin-top: 0.5em;
                        .react-calendar__decade-view__years__year {
                            background-color: var(--light-back);
                            border: 0;
                            border-radius: 0;
                            padding: 1em;
                            cursor: pointer;
                            color: var(--text);
                            transition: all 0.3s ease;
                            &:hover {
                                background-color: var(--hover-back);
                            }
                        }
                    }
                }
                .react-calendar__tile--active, .react-calendar__tile--hasActive {
                    color: var(--primary) !important;
                    background-color: var(--hover-back) !important;
                }
            }
            &.react-date-picker__calendar--open {
                opacity: 1;
                visibility: visible;
            }
            &.react-date-picker__calendar--closed {
                opacity: 0;
                visibility: hidden;
            }
        }
    }
`