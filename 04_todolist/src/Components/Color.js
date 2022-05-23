// > Css
import colorStyle from '../Css/Color.module.css';

// >
// import { useState } from 'react';

function Color({ color, setColor }) {
  // const ChangeColor = (color) => {
  //   props.setColor(color);
  // };

  return (
    <>
      <div className={colorStyle.container}>
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.beigeBtn}`}
          onClick={() => {
            setColor('#f2eee5');
          }}
        />
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.pinkBtn}`}
          onClick={() => {
            setColor('#eeafaf');
          }}
        />
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.blueBtn}`}
          onClick={() => {
            setColor('#afc4e7');
          }}
        />
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.greenBtn}`}
          onClick={() => {
            setColor('#bae7af');
          }}
        />
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.grayBtn}`}
          onClick={() => {
            setColor('#d3c0d3');
          }}
        />
      </div>
    </>
  );
}

export default Color;
