import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBonusesData } from '../../store/reducers';

import { FireIcon } from '../FireIcon';
import { MoreButton } from '../MoreButton';

import { formatDate, generateBonusesStringByQuantity } from './helpers';

import styles from './BonusesInfo.module.css';

export const BonusesInfo = () => {
  const dispatch = useDispatch();

  const bonusesData = useSelector((state) => state.bonusesData);

  useEffect(() => {
    dispatch(fetchBonusesData());
  }, [dispatch]);

  const { currentValue, burningDate, burningValue } = bonusesData;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.totalBonuses}>
          {generateBonusesStringByQuantity(currentValue)}
        </span>
        {Boolean(burningValue) && (
          <div className={styles.burningBonuses}>
            {burningDate && (
              <span className={styles.text}>
                {formatDate(burningDate)} сгорит
              </span>
            )}
            <FireIcon />
            <span className={styles.text}>
              {generateBonusesStringByQuantity(burningValue)}
            </span>
          </div>
        )}
      </div>
      <MoreButton />
    </div>
  );
};
