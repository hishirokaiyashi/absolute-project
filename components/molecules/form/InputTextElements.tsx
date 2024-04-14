import { UserSchema } from '@/SchemaValidations/form.schema';
import { ButtonWithIcon } from '@/components/atoms/commons/Button';
import InputElement from '@/components/atoms/commons/InputElement';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormData } from '@/SchemaValidations/type/type';

const InputTextElements = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema) // Apply the zodResolver
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log('SUCCESS', data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:gap-[8px] w-full  max-h-screen"
    >
      <InputElement
        type="email"
        placeholder="Email"
        name="email"
        register={register}
        error={errors.email}
      />
      {/* <InputElement
        label="name"
        {...register('name')}
        required
        placeholder="unternehmen"
      /> */}
      {/* <InputElement
        type="email"
        placeholder="Email"
        name="email"
        register={register}
        error={errors.email}
      /> */}
      {/* <InputElement
        label="unternehmen"
        register={register}
        placeholder="unternehmen"
      />
      <InputElement
        label="email"
        register={register}
        required
        placeholder="unternehmen"
      />
      <InputElement
        label="telefon"
        register={register}
        required
        placeholder="unternehmen"
      /> */}

      {/* <TextAreaElement name="nachrich" value="" placeholder="Nachricht*" />
      <div className="lg:mt-[48px]">
        <div className="flex items-center lg:gap-[15px]">
          <div className="w-fit">
            <InputElement
              register={register}
              type="radio"
              name="asas"
              value=""
            />
          </div>
          <div className="flex flex-1 gap-[4px] items-center text-nowrap">
            <Typography as="span" size="paragraph">
              Ja, ich stimme den
            </Typography>
            <a href="">
              <Typography as="span" size="linkHref">
                AGB
              </Typography>
            </a>
            <Typography as="span" size="paragraph">
              und der
            </Typography>
            <a href="" className="underlined">
              <Typography as="span" size="linkHref">
                Datenschutzerklärung
              </Typography>
            </a>
            <Typography as="span" size="paragraph">
              zu.
            </Typography>
          </div>
        </div>
      </div> */}
      <div className="lg:mt-[135px] w-full flex justify-center items-center">
        <ButtonWithIcon
          type="submit"
          icon={
            <span className="w-[16px] h-[16px] border-2 border-secondary block rounded-full right-4 top-1/2 transition-colors group-hover:bg-secondary lg:inline-block lg:relative  lg:top-0 lg:right-0 ml-4"></span>
          }
        >
          SEND IT
        </ButtonWithIcon>
      </div>
    </form>
  );
};

export default InputTextElements;
