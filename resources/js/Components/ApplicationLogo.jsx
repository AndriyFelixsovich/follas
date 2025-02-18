import logo from '/resources/img/follas_logo.jpg';
export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 316 316"
            xmlns="http://www.w3.org/2000/svg"
        >
            <image href={logo} width="300" height="300"/>
        </svg>
    );
}
