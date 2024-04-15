import { UserSchema } from '@/SchemaValidations/form.schema';
import { FormData } from '@/SchemaValidations/type/type';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import InputRadioElement from '@/components/atoms/commons/InputRadioElement';
import InputTextElement from '@/components/atoms/commons/InputTextElement';
import TextAreaElement from '@/components/atoms/commons/TextAreaElement';
import AppContext from '@/context/appContext';
import { IAppContext } from '@/models/appInterface';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const InputTextElements = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema), // Apply the zodResolver
  });
  const { modal, updateState }: IAppContext = useContext(
    AppContext
  ) as IAppContext;

  const handleSubmmitForm = (data: boolean) => {
    updateState &&
      updateState({
        modal: {
          ...modal,
          isSubmitted: data,
        },
      });
  };
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    // console.log('SUCCESS', data);
    try {
      handleSubmmitForm(true);
    } catch (error) {
      handleSubmmitForm(false);
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
        type="email"
        placeholder="Email*"
        name="email"
        register={register}
        error={errors.email}
      />

      <InputTextElement
        type="text"
        placeholder="Company"
        name="company"
        register={register}
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
      <div className="lg:mt-[48px]">
        <div className="w-fit">
          <InputRadioElement
            type="checkbox"
            register={register}
            name="acceptPolicy"
            error={errors.acceptPolicy}
          />
        </div>
      </div>
      <div className="mt-[64px] lg:mt-[135px] w-full flex justify-center items-center">
        <ButtonWithIcon
          type="submit"
          icon={
            <div className="flex items-center">
              <span className="w-[16px] h-[16px] border-2 border-secondary block rounded-full right-4 top-1/2 transition-colors group-hover:bg-secondary lg:inline-block lg:relative  lg:top-0 lg:right-0 ml-4"></span>
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
