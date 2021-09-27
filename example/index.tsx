/*
 * @Author: busyzz
 * @Date: 2021-09-27 14:24:08
 * @Description:
 */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Thing, { PopupProps } from '../.';

const App = () => {
  const [v, setV] = React.useState(false);
  const [position, setPosition] = React.useState<PopupProps['position']>(
    'center'
  );
  const onClick = (p: PopupProps['position']) => {
    setPosition(p);
    setV(true);
  };
  return (
    <div>
      <Thing onClose={() => setV(false)} visible={v} position={position}>
        <h1>test</h1>
      </Thing>
      <div>
        <button onClick={() => onClick('center')}>center</button>
      </div>
      <div>
        <button onClick={() => onClick('left')}>left</button>
      </div>
      <div>
        <button onClick={() => onClick('right')}>right</button>
      </div>
      <div>
        <button onClick={() => onClick('top')}>top</button>
      </div>
      <div>
        <button onClick={() => onClick('bottom')}>bottom</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
