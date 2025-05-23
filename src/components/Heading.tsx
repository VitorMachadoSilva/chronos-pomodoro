import styles from './Heading.module.css'

type HeadingProps = {
    children: React.ReactNode
}

export function Heading({children}: HeadingProps){ //desestruturação para adicionar um children
    return (
        <h1 className={styles.heading}>{children}</h1>
        
    )
}