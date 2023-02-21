import css from "styled-jsx/css";

export const layouts = css.global`
    .flex {
        display: flex;
    }
    .column {
        flex-direction: column;
    }
    .row {
        flex-direction: row;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .nowrap {
        flex-wrap: nowrap;
    }
    .wrap-reverse {
        flex-wrap: wrap-reverse;
    }
    .f1 {
        flex: 1;
    }
    .fauto {
        flex: auto;
    }
    .finitial {
        flex: initial;
    }
    .fnone {
        flex: none;
    }
    .fgrow {
        flex-grow: 1;
    }
    .fshrink {
        flex-shrink: 1;
    }
    .fno-grow {
        flex-grow: 0;
    }
    .fno-shrink {
        flex-shrink: 0;
    }
    .start {
        justify-content: flex-start;
    }
    .end {
        justify-content: flex-end;
    }
    .center {
        justify-content: center;
    }
    .between {
        justify-content: space-between;
    }
    .around {
        justify-content: space-around;
    }
    .evenly {
        justify-content: space-evenly;
    }
    .al-start {
        align-items: flex-start;
    }
    .al-end {
        align-items: flex-end;
    }
    .al-center {
        align-items: center;
    }
    .al-baseline {
        align-items: baseline;
    }
    .al-stretch {
        align-items: stretch;
    }
    .content-start {
        align-content: flex-start;
    }
    .content-end {
        align-content: flex-end;
    }
    .content-center {
        align-content: center;
    }
    .content-between {
        align-content: space-between;
    }
    .content-around {
        align-content: space-around;
    }
    .content-stretch {
        align-content: stretch;
    }
    .self-auto {
        align-self: auto;
    }
    .self-start {
        align-self: flex-start;
    }
    .self-end {
        align-self: flex-end;
    }
    .self-center {
        align-self: center;
    }
    .self-stretch {
        align-self: stretch;
    }
    .gap {
        gap: 35px;
    }
    .grid {
        display: grid;
    }
    .place-items {
        place-items: center;
    }
`;
