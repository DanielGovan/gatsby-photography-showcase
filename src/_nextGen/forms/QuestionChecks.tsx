import React, { FC } from 'react';
import { StackProps, Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';

import { BodyText } from '../typography';

import { QuestionMulti, LabelText, QuestionStack } from './FormWrappers';
import FormControl, { BaseProps } from './FormikChakra/FormControl';

// ================== CHECKBOX ITEM ==================

// What is this
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type CheckboxControlProps = Overwrite<
  CheckboxProps,
  { value: string | number }
> & {
  fieldName: string;
  labelText?: string;
};

export const CheckboxItem: FC<CheckboxControlProps> = React.forwardRef(
  (props: CheckboxControlProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { fieldName, labelText, children, ...rest } = props;
    const [field, { error, touched }] = useField(fieldName);
    const { isSubmitting } = useFormikContext();

    let backupText = `${props.value}`;
    let isChecked;
    if (Array.isArray(field.value)) {
      // bug happens when you destructure value directly
      isChecked = field.value.includes(props.value) ?? false;
    }

    return (
      <Checkbox
        size="lg"
        mb="0"
        alignItems="flex-start"
        {...field}
        isInvalid={!!error && touched}
        isChecked={isChecked}
        isDisabled={isSubmitting}
        ref={ref}
        {...rest}
      >
        <LabelText text={labelText || backupText} />
      </Checkbox>
    );
  },
);

// ================== CHECKBOX CONTAINER ==================

type CheckboxContainerProps = BaseProps & {
  stackProps?: StackProps;
};

const QuestionChecks: FC<CheckboxContainerProps> = ({
  fieldName,
  labelText,
  stackProps,
  children,
  ...rest
}: CheckboxContainerProps) => {
  return (
    <QuestionMulti>
      <FormControl mt={['0', '4']} fieldName={fieldName} labelText={labelText} {...rest}>
        <BodyText position="relative" top="-16px" fontSize="16px">
          (Tick all that apply)
        </BodyText>
        <QuestionStack {...stackProps}>
          {
            // it would be nice to pass the fieldName to the children automatically
          }
          {/* {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { fieldName: fieldName });
            }
          })} */}
          {children}
        </QuestionStack>
      </FormControl>
    </QuestionMulti>
  );
};

export default QuestionChecks;
