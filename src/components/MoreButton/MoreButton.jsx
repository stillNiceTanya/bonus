import styles from './MoreButton.module.css';

export const MoreButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.button}>
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="none">
      <g stroke="#D4343F" strokeLinecap="round" clipPath="url(#a)">
        <path d="M.772 12.195 6.228 6.5M.772.805 6.228 6.5" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h7v13H0z" />
        </clipPath>
      </defs>
    </svg>
  </button>
);
