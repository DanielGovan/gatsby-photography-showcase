// https://www.npmjs.com/package/formik-chakra-ui
// https://codesandbox.io/s/formik-chakra-ui-27yzm

import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  HelpTextProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';

import { LabelText } from '../FormWrappers';

export interface BaseProps extends Omit<FormControlProps, 'label'> {
  fieldName: string;
  type?: React.HTMLInputTypeAttribute;
  labelText?: React.ReactNode;
  labelProps?: FormLabelProps;
  helperText?: React.ReactNode;
  helperTextProps?: HelpTextProps;
  errorMessageProps?: FormErrorMessageProps;
}

const FormControl: FC<BaseProps> = (props: BaseProps) => {
  const {
    children,
    fieldName,
    labelText,
    labelProps,
    helperText,
    helperTextProps,
    errorMessageProps,
    ...rest
  } = props;
  const [, { error, touched }] = useField(fieldName);

  // const status = touched ? (error ? 'invalid' : 'valid') : 'pending';

  return (
    <ChakraFormControl isInvalid={!!error && touched} {...rest}>
      {labelText && typeof labelText === 'string' ? (
        <FormLabel htmlFor={fieldName} {...labelProps}>
          <LabelText
            text={labelText}
            sx={
              {
                // color: touched && !error ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,1)',
              }
            }
          />
        </FormLabel>
      ) : (
        labelText
      )}
      {children}
      {error && <FormErrorMessage {...errorMessageProps}>{error}</FormErrorMessage>}
      {helperText && typeof helperText === 'string' ? (
        <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
      ) : (
        helperText
      )}
    </ChakraFormControl>
  );
};

export default FormControl;
