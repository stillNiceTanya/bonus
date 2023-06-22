import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccessToken } from './store/reducers';

import { Content, Header } from './components';

import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.accessToken);

  useEffect(() => {
    dispatch(fetchAccessToken());
  }, [dispatch]);

  if (!accessToken) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
