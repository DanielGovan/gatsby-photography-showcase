import React, { FC, ForwardedRef } from 'react';
import { useField, useFormikContext } from 'formik';
import { FaCheckCircle } from 'react-icons/fa';
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';

import FormControl, { type BaseProps } from './FormikChakra/FormControl';

export type InputControlProps = BaseProps & {
  inputProps?: InputProps;
  leftElement?: string;
  rightElement?: string;
};

const Question: FC<InputControlProps> = React.forwardRef(
  (
    {
      fieldName,
      labelText,
      inputProps,
      type,
      leftElement,
      rightElement,
      placeholder,
      ...rest
    }: InputControlProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [field, value] = useField(fieldName);
    const { isSubmitting } = useFormikContext();
    return (
      <FormControl
        fieldName={fieldName}
        labelText={labelText ?? fieldName}
        {...rest}
        mb="5"
      >
        <InputGroup>
          {leftElement && (
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={leftElement}
            />
          )}
          <Input
            color="white"
            errorBorderColor="red.400"
            {...field}
            id={fieldName}
            isDisabled={isSubmitting}
            {...inputProps}
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value.value || ''}
          />
          {value.touched && !value.error && value.value && (
            <InputRightElement
              pointerEvents="none"
              color="rgba(255,255,255,0.5)"
              fontSize="1em"
              // bg="red"
              width="35px"
              children={<Icon as={FaCheckCircle} />}
            />
          )}
        </InputGroup>
      </FormControl>
    );
  },
);

export default Question;
