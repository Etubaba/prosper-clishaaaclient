import { Button, ColorPicker, Popover } from 'antd';
import Spinner from '../../../components/elements/Spiner';
import { TSetColors } from '../../../types/app.types';
import SetColorPopoverContent from './SetColorPopoverContent';

const SetColors = ({
  cardForeColor,
  accentColor,

  changeCardColor,
  imgLoading,
  handleChange,
  showSaveButton,
  loading,
  updateCard,
}: TSetColors) => {
  const showText = (text: string = 'set ') => (!showSaveButton ? text : null);
  return (
    <div className='buttonsCon flex flex-row items-center w-full'>
      <div className='buttons flex flex-row items-center justify-between mt-1 w-full'>
        <Popover
          content={
            <SetColorPopoverContent
              changeCardColor={changeCardColor}
              cardForeColor={cardForeColor}
              accentColor={accentColor}
            />
          }
          trigger='click'
        >
          <Button className=' colorpicker flex flex-row flex-auto max-w-[50%] h-fit gap-05 items-end cursor-pointer'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.669 3C17.409 3 17.159 3.1 16.959 3.29L13.839 6.41L11.909 4.5L10.499 5.91L11.919 7.33L2.99902 16.25V21H7.74902L16.669 12.08L18.089 13.5L19.499 12.09L17.579 10.17L20.699 7.05C21.099 6.65 21.099 6.02 20.709 5.63L18.369 3.29C18.169 3.1 17.919 3 17.669 3ZM17.659 5.41L18.579 6.33L15.889 9.02L14.969 8.1L17.659 5.41ZM4.99902 17.08L6.91902 19L14.979 10.94L13.059 9.02L4.99902 17.08Z'
                fill='#FC9828'
              />
            </svg>
            <p className='text-[#1B4C84]'>
              {showText()}
              color text
            </p>
          </Button>
        </Popover>
        <ColorPicker
          value={cardForeColor}
          onChange={(value, hex) => changeCardColor({ background: hex })}
        >
          <Button className=' colorpicker flex flex-row flex-auto  h-fit gap-05 items-end cursor-pointer'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.669 3C17.409 3 17.159 3.1 16.959 3.29L13.839 6.41L11.909 4.5L10.499 5.91L11.919 7.33L2.99902 16.25V21H7.74902L16.669 12.08L18.089 13.5L19.499 12.09L17.579 10.17L20.699 7.05C21.099 6.65 21.099 6.02 20.709 5.63L18.369 3.29C18.169 3.1 17.919 3 17.669 3ZM17.659 5.41L18.579 6.33L15.889 9.02L14.969 8.1L17.659 5.41ZM4.99902 17.08L6.91902 19L14.979 10.94L13.059 9.02L4.99902 17.08Z'
                fill='#FC9828'
              />
            </svg>
            <p className='text-[#1B4C84]'>background</p>
          </Button>
        </ColorPicker>
        {imgLoading ? (
          <Spinner />
        ) : (
          <form>
            <input
              type='file'
              name='image'
              id='image'
              className=' opacity-0 hidden '
              onChange={handleChange}
            />
            <label htmlFor='image' className='text-[#1B4C84]   inline-block'>
              <div className='flex flex-row justify-between h-fit gap-05 items-end cursor-pointer'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M19.5 1.5V4.5H22.5V6.5H19.5V9.49C19.5 9.49 17.51 9.5 17.5 9.49V6.5H14.5C14.5 6.5 14.51 4.51 14.5 4.5H17.5V1.5H19.5ZM17.5 20.5H3.5V6.5H12.5V4.5H3.5C2.4 4.5 1.5 5.4 1.5 6.5V20.5C1.5 21.6 2.4 22.5 3.5 22.5H17.5C18.6 22.5 19.5 21.6 19.5 20.5V11.5H17.5V20.5ZM9.71 17.33L7.75 14.97L5 18.5H16L12.46 13.79L9.71 17.33Z'
                    fill='#FC9828'
                  />
                </svg>
                <p className='text-[#1B4C84]'>
                  {showText()}
                  logo
                </p>
              </div>
            </label>
          </form>
        )}
      </div>
      <div
        style={{
          width: showSaveButton ? '100px' : '0px',
          transition: 'all 0.3s ease-in-out',
        }}
        className={`saveBtn overflow-hidden flex-auto flex flex-row items-end justify-end`}
      >
        <Button
          loading={loading}
          onClick={updateCard}
          type='primary'
          htmlType='submit'
          className='updatebtn h-[28px] md:mb-0 w-fit rounded-[5px] bg-green text-[0.9rem] 2xl:text-[1rem] text-white p-[0.5rem] text-center cursor-pointer flex flex-row justify-center items-center'
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default SetColors;
