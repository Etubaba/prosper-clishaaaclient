import { useEffect, useState } from 'react';

const MoneyCounter = ({ num }: { num: number }) => {
  const [tn, setTn] = useState(num);
  let initnum =
    Number(tn) > 1 && Number(tn) < 100
      ? Math.ceil(Number(num) / 2)
      : Number(tn) > 100
      ? Number(num) - 100
      : 0;
  const [inc, setInc] = useState(initnum);
  // let speed = Number(tn) > 100 ? 20 : Number(tn) > 300 ? 15 : Number(tn) > 600 ? 10 : Number(tn) > 900 ? 5 : 25;
  let speed = 5;

  useEffect(() => {
    setInc(initnum);
    setTn(num);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  useEffect(() => {
    incEltNbr(inc, tn, speed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inc, tn]);

  function incEltNbr(x: number, y: number, s: number) {
    if (x === 0) {
      setInc(initnum);
    } else if (x < Number(y)) {
      setTimeout(() => {
        setInc(x + 1);
      }, s);
    }
  }

  return (
    <>
      <h1 className='font-bold'>{inc ? inc.toLocaleString() : '00'} IA</h1>
    </>
  );
};

export default MoneyCounter;
