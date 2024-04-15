import { FormFieldProps } from '@/SchemaValidations/type/type';
import Typography from './Typography';

const InputElement: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <div className="w-full py-[12px]">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent text-[14px] lg:text-[18px] font-diaType text-secondary"
      {...register(name, { valueAsNumber })}
    />
    {error && (
      <div className="mt-[10px] text-errors font-diaType">
        <Typography as="span" size="labelError">
          {error.message}
        </Typography>
      </div>
    )}
  </div>
);
export default InputElement;
