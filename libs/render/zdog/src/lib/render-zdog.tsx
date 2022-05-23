import styles from './render-zdog.module.scss';

/* eslint-disable-next-line */
export interface RenderZdogProps {}

export function RenderZdog(props: RenderZdogProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RenderZdog!</h1>
    </div>
  );
}

export default RenderZdog;
