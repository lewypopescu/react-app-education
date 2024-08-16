import React from 'react';
import style from './InfoBlock.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function InfoBlock({ info }) {
  return (
    <div className={style.info}>
      <p>{info}</p>
      <button>
        <BsThreeDotsVertical />
      </button>
    </div>
  );
}
