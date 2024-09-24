import React from 'react';
import { useRef } from 'react';

import Tutors from '../../components/Tutors';
import University from '../../components/University/University';
import Faculties from '../../components/Faculties';

export default function UniversityPage() {
  const isTrueRef = useRef(true);

  const inputRef = useRef(null);

  function changeIsTrueRef() {
    if (!isTrueRef?.current) {
      return false;
    }

    isTrueRef.current = false;
  }

  return (
    <>
      <input id="inputForRef" ref={inputRef} />

      <button onClick={() => changeIsTrueRef()}> Toggle Value </button>
      <h1 className="page-title">University Information</h1>
      <University />
      <Tutors />
      <Faculties />
    </>
  );
}
