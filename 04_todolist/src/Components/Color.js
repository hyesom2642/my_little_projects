// > Css
import colorStyle from '../Css/Color.module.css';

function Color({ setBgColor }) {
  return (
    <>
      <div className={colorStyle.container}>
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.beigeBtn}`}
          onClick={() => {
            setBgColor('#f2eee5');
          }}
        />
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.pinkBtn}`}
          onClick={() => {
            setBgColor('#eeafaf');
          }}
        />
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.blueBtn}`}
          onClick={() => {
            setBgColor('#afc4e7');
          }}
        />
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.greenBtn}`}
          onClick={() => {
            setBgColor('#bae7af');
          }}
        />
        <button
          type="button"
          className={`${colorStyle.button} ${colorStyle.grayBtn}`}
          onClick={() => {
            setBgColor('#d3c0d3');
          }}
        />
      </div>
    </>
  );
}
export default Color;
