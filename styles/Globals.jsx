import css from "styled-jsx/css";
import styles from "leaflet/dist/leaflet.css";

export const globals = css.global`
    ${styles}
    .leaflet-container.leaflet-touch.leaflet-fade-anim.leaflet-grab.leaflet-touch-drag.leaflet-touch-zoom {
        width: 100%;
        height: 100vh;
    }
    .text {
        color: #f8f8f2;
    }
    .text strong {
        color: #c70008;
    }
    .big {
        font-size: 4em;
    }
    .login-button {
        background-color: #c70008;
        color: #f8f8f2;
        border: none;
        border-radius: 5px;
        padding: 5px 16px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
    }
    *,
    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", "Segoe UI", sans-serif;
    }
    body {
        background-color: #282a36;
        background-image: radial-gradient(
                rgba(255, 255, 255, 0.2) 1px,
                transparent 1px
            ),
            radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
    }
    .space-up {
        margin-top: 40px;
    }

    @media (max-width: 768px) {
        .big {
            font-size: 2.6em;
        }
`;
