import { FormFieldRadioProps } from '@/SchemaValidations/type/type';
import Typography from './Typography';

const InputRadioElement: React.FC<FormFieldRadioProps> = ({
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

          <span className="inline-block mt-[7px] lg:mt-[7px] w-[16px] h-[16px] lg:w-[12px] lg:h-[12px] border-2 rounded-full  border-secondary bg-primary peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-secondary"></span>
        </label>
        <div className="flex flex-1 gap-[4px] items-center text-nowrap">
          <div className="hidden lg:block">
            <label
              htmlFor={name}
              className="flex text-[18px] items-center gap-2 text-secondary"
            >
              Yes, I agree to
              <a href="" className="underline underline-offset-1">
                <Typography as="span" size="linkHref">
                  the terms and conditions
                </Typography>
              </a>
              and the
              <a href="" className="underline underline-offset-1">
                <Typography as="span" size="linkHref">
                  Data protection
                </Typography>
              </a>
            </label>
          </div>
          <div className="text-wrap lg:hidden">
            <Typography as="span" size="linkHref">
              Yes, I agree to the terms and conditions and the data protection
              declaration.
            </Typography>
          </div>
        </div>
      </div>
      {error && (
        <div className="lg:mt-[16px] text-errors font-diaType">
          <Typography as="span" size="labelError">
            {error.message}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default InputRadioElement;
