import styles from './styles.module.css'



export function Cycles () {
    return(
        <div className={styles.cycles}>
            <span>Ciclos:</span>
            <div className={styles.cyclesDots}>
                <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
            </div>
        </div>
    )
}