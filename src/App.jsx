import react, { useEffect, useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  console.log('check');
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitch = () => {
    setAlfa(!alfa);
  };
  const [num, setNum] = useState(0);

  const [alfa, setAlfa] = useState(false);

  useEffect(() => {
    if (num % 3 === 0) {
      alfa || setAlfa(true);
    } else {
      alfa && setAlfa(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{num}</p>
      <button onClick={onClickSwitch}>on/off</button>
      {alfa && <p>abcde</p>}
    </>
  );
};

export default App;
