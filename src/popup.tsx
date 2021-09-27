/*
 * @Author: busyzz
 * @Date: 2021-09-27 15:02:49
 * @Description:
 */

import React, { FC, useRef } from 'react';
import Portal from './portal';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './index.scss';
type Position = 'center' | 'top' | 'left' | 'bottom' | 'right';
export type PopupProps = {
  visible?: boolean;
  position: Position;
  mask?: boolean;
  maskClosable?: boolean;
  onClose?: () => void;
  wrapClassName?: string;
};
const motionMap: Record<Position, string> = {
  bottom: 'slide-up',
  top: 'slide-down',
  right: 'slide-left',
  left: 'slide-right',
  center: 'zoom',
};
const Popup: FC<PopupProps> = ({
  visible,
  position,
  mask,
  maskClosable,
  onClose,
  wrapClassName,
  children,
}) => {
  const prefix = 'busyzz-react-popup';
  const firstRenderRef = useRef(false);
  if (!visible && !firstRenderRef.current) return null;
  if (!firstRenderRef.current) {
    firstRenderRef.current = true;
  }
  const wrapperCls = classNames(`${prefix}__wrapper`, wrapClassName, {
    [`${prefix}__wrapper-center`]: position === 'center',
  });
  const maskCls = classNames(`${prefix}__mask`);
  const contentCls = classNames(`${prefix}__content`, {
    [`${prefix}__content-top`]: position === 'top',
    [`${prefix}__content-bottom`]: position === 'bottom',
    [`${prefix}__content-left`]: position === 'left',
    [`${prefix}__content-right`]: position === 'right',
    [`${prefix}__content-center`]: position === 'center',
  });
  const close = () => {
    if (maskClosable) {
      onClose?.();
    }
  };
  return (
    <Portal>
      <div className={wrapperCls}>
        {mask && (
          <CSSTransition
            classNames={`${prefix}-fade`}
            timeout={300}
            in={visible}
            appear
          >
            <div onClick={close} className={maskCls}></div>
          </CSSTransition>
        )}
        <CSSTransition
          classNames={`${prefix}-${motionMap[position]}`}
          timeout={300}
          in={visible}
          appear
        >
          <div className={contentCls}>{children}</div>
        </CSSTransition>
      </div>
    </Portal>
  );
};
Popup.defaultProps = {
  position: 'center',
  mask: true,
  maskClosable: true,
  onClose: () => {},
};
export default Popup;
