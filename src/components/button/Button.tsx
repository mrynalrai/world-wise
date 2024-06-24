import styles from "./Button.module.css";

type ButtonProps = {
    children: React.ReactNode,
    onClick: (args: unknown) => unknown,
    type: string
}

const Button: (props: ButtonProps) => JSX.Element = (props) => {
    return (
        <button onClick={props.onClick} className={`${styles.btn} ${styles[props.type]}`} >
            {props.children}
        </button>
    )
}

export default Button;