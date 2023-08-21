import { Button, ButtonProps } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

export type SubmitButtonProps = ButtonProps;

const SubmitButton: FC<SubmitButtonProps> = (props: SubmitButtonProps) => {
  const { children, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" isLoading={isSubmitting} colorScheme="lbd" {...rest}>
      {children}
    </Button>
  );
};

export default SubmitButton;
