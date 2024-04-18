import { UserSchema } from '@/SchemaValidations/form.schema';
import { FormData } from '@/SchemaValidations/type/type';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import InputCheckboxElement from '@/components/atoms/commons/InputCheckboxElement';
import InputTextElement from '@/components/atoms/commons/InputTextElement';
import TextAreaElement from '@/components/atoms/commons/TextAreaElement';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
interface InputTextElementProps {
  handleSubmitForm: (checkSubmit: boolean) => void;
}
const InputTextElements = ({ handleSubmitForm }: InputTextElementProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      handleSubmitForm(true);
    } catch (error) {
      handleSubmitForm(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[8px] w-full max-h-screen "
    >
      <InputTextElement
        type="text"
        placeholder="Name*"
        name="name"
        register={register}
        error={errors.name}
      />
      <InputTextElement
        type="text"
        placeholder="Company"
        name="company"
        register={register}
      />
      <InputTextElement
        type="email"
        placeholder="Email*"
        name="email"
        register={register}
        error={errors.email}
      />
      <InputTextElement
        type="text"
        placeholder="Phone Number (+41 xx xxx xx xx)"
        name="phoneNumber"
        register={register}
        error={errors.phoneNumber}
      />
      <TextAreaElement
        type="text"
        placeholder="News*"
        name="news"
        register={register}
        error={errors.news}
      />
      <div className="mt-[40px] lg:mt-[48px]">
        <div className="w-fit">
          <InputCheckboxElement
            type="checkbox"
            register={register}
            name="acceptPolicy"
            error={errors.acceptPolicy}
          />
        </div>
      </div>
      <div className="mt-[21px] lg:mt-[135px] w-full flex justify-center items-center">
        <ButtonWithIcon
          type="submit"
          icon={
            <div className="flex items-center">
              <span className="w-[16px] h-[16px] ml-4 border-2 border-secondary rounded-full transition-colors group-hover:bg-secondary"></span>
            </div>
          }
        >
          SEND IT
        </ButtonWithIcon>
      </div>
    </form>
  );
};

export default InputTextElements;
