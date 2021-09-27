## 线上预览

[https://busyzz-1994.github.io/react-popup/](https://busyzz-1994.github.io/react-popup/)

## 开始

```sh
yarn add @busyzz/react-popup --save
#or
npm install @busyzz/react-popup --save
```

## 使用案例

```tsx
import ReactPopup, { PopupProps } from '@busyzz/react-popup';
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
      <ReactPopup onClose={() => setV(false)} visible={v} position={position}>
        <h1>test</h1>
      </ReactPopup>
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
```

## 属性

|     属性      |           说明           |                  类型                  |  默认值  |
| :-----------: | :----------------------: | :------------------------------------: | :------: |
|    visible    |        显示/隐藏         |                boolean                 | `false`  |
|   position    |      内容出现的位置      | 'center'/'top'/'left'/'bottom'/'right' | `center` |
|     mask      |       是否显示遮罩       |                boolean                 |  `true`  |
| maskClosable  |     点击遮罩自动关闭     |                boolean                 |  `true`  |
|    onClose    |        关闭的回调        |                Function                | ()=>void |
| wrapClassName | 添加到最外层容器的 class |                 string                 |    -     |
