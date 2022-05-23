import styles from './component-react.module.scss';

/* eslint-disable-next-line */
export interface ComponentReactProps {}

export function ComponentReact(props: ComponentReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ComponentReact!</h1>
    </div>
  );
}

export default ComponentReact;
