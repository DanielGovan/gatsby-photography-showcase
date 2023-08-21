import React, { FC, ReactNode } from 'react';
import {
  Radio as ChakraRadio,
  RadioGroup,
  RadioGroupProps,
  StackProps,
} from '@chakra-ui/react';

import { useField, useFormikContext } from 'formik';

import FormControl, { BaseProps } from './FormikChakra/FormControl';
import { QuestionMulti, LabelText, QuestionStack } from './FormWrappers';

// ================== RADIO ITEM ==================

export const Radio = ({
  value,
  labelText,
  ...rest
}: {
  value: string;
  labelText: string;
}) => (
  <ChakraRadio size="lg" value={value} {...rest}>
    <LabelText text={labelText || value} />
  </ChakraRadio>
);

// ================== RADIO CONTAINER ==================

export type RadioGroupControlProps = BaseProps & {
  radioGroupProps?: RadioGroupProps;
  stackProps?: StackProps;
  children: ReactNode;
};

const QuestionRadios: FC<RadioGroupControlProps> = ({
  fieldName,
  labelText,
  radioGroupProps,
  stackProps,
  children,
  ...rest
}: RadioGroupControlProps) => {
  const [field] = useField(fieldName);
  const { setFieldValue, isSubmitting } = useFormikContext();
  const handleChange = (value: string) => {
    setFieldValue(fieldName, value);
  };

  return (
    <QuestionMulti>
      <FormControl mt="4" fieldName={fieldName} labelText={labelText} {...rest}>
        <RadioGroup
          {...field}
          onChange={handleChange}
          isDisabled={isSubmitting}
          {...radioGroupProps}
        >
          <QuestionStack {...stackProps}>{children}</QuestionStack>
        </RadioGroup>
      </FormControl>
    </QuestionMulti>
  );
};

export default QuestionRadios;
