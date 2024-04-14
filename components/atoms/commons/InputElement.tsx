import { FormFieldProps } from '@/SchemaValidations/type/type';

const InputElement: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber
}) => (
  <div className="w-full lg:py-[12px]">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent font-diaType text-secondary"
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="text-secondary ">{error.message}</span>}
  </div>
);
export default InputElement;
{
  /* <div className="w-full lg:py-[12px]">
<input
  className="w-full bg-transparent font-diaType"
  placeholder={label}
  {...register(label, { required })}
/>
{errorMessage && (
  <div className="mt-2 text-red-600">
    <Typography as="span" size="label">
      {errorMessage}
    </Typography>
  </div>
)}
</div> */
}
