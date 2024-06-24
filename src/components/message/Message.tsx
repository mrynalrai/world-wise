import styles from "./Message.module.css";

type MessageProps = {
	message: string
}
const Message: (props: MessageProps) => JSX.Element = (props) => {
	return (
		<p className={styles.message}>
			<span role="img">👋</span> {props.message}
		</p>
	);
}

export default Message;
