import { FormFieldRadioProps } from '@/SchemaValidations/type/type';
import Typography from './Typography';

const InputCheckboxElement: React.FC<FormFieldRadioProps> = ({
  type,
  name,
  register,
  error,
}) => {
  return (
    <div className="w-full lg:py-[12px]">
      <div className="flex  lg:gap-[15px]">
        <label className="pr-[20px] lg:pr-0 relative flex  rounded-full cursor-pointer">
          <input
            className="hidden peer"
            type={type}
            {...register(name, { required: 'Please enter your first name.' })}
          />

          <span className="inline-block mt-[5px] lg:mt-[7px] w-[16px] h-[16px] lg:w-[12px] lg:h-[12px] border-2 rounded-full  border-secondary bg-primary peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-secondary"></span>
        </label>
        <label
          htmlFor={name}
          className="flex lg:flex-row flex-col text-[14px] lg:text-[18px] gap-0 lg:gap-2 text-secondary"
        >
          <div className="flex gap-1">
            Ja, ich stimme den
            <a href="" className="underline underline-offset-1">
              <Typography as="span" size="linkHref">
                AGB
              </Typography>
            </a>
            ’s und der
          </div>
          <div className="flex gap-1">
            <a href="" className="underline underline-offset-1">
              <Typography as="span" size="linkHref">
                Datenschutzerklärung
              </Typography>
            </a>
            zu.
          </div>
        </label>
      </div>
      {error && (
        <div className="lg:mt-[16px] mt-[12px] text-errors font-diaType">
          <Typography as="span" size="labelError">
            {error.message}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default InputCheckboxElement;
