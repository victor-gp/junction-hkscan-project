import styles from './data-boxes.module.css'

export class DataBox extends React.Component {
    render() {
        return <div className={styles.dataBox}>
            <div className={styles.div1}>{this.props.agent}</div>
            <div className={styles.div2}>
                <div className={styles.amount}> {this.props.amount} </div>
                <div className={styles.unit}> {this.props.unit} </div>
            </div>
        </div>
    }
}
