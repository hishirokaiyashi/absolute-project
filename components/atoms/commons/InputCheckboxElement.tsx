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
      <div className="relative flex lg:gap-[15px]">
        <label className="absolute top-0 left-0 flex rounded-full cursor-pointer lg:pr-0">
          <input
            className="hidden peer"
            type={type}
            {...register(name, { required: 'Please enter your first name.' })}
          />
          <span className="inline-block mt-[5px] lg:mt-[7px] w-[16px] h-[16px] lg:w-[12px] lg:h-[12px] border-2 rounded-full  border-secondary bg-primary peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-secondary"></span>
        </label>
        <label
          htmlFor={name}
          className="pl-[35px] gap-[1px] text-[14px] lg:text-[18px] lg:gap-2 text-secondary"
        >
          Ja, ich stimme den{' '}
          <a href="" className="underline underline-offset-1">
            <Typography as="span" size="linkHref">
              AGB
            </Typography>
          </a>
          ’s und der{' '}
          <a href="" className="underline underline-offset-1">
            <Typography as="span" size="linkHref">
              Datenschutzerklärung
            </Typography>
          </a>{' '}
          zu.
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
