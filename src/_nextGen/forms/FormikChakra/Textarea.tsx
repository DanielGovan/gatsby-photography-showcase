import { Textarea, TextareaProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';

import FormControl, { BaseProps } from './FormControl';

export type TextareaControlProps = BaseProps & {
  textareaProps?: TextareaProps;
};

const TextareaControl: FC<TextareaControlProps> = React.forwardRef(
  (props: TextareaControlProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const { fieldName, labelText, textareaProps, ...rest } = props;
    const [field] = useField(fieldName);
    const { isSubmitting } = useFormikContext();

    return (
      <FormControl fieldName={fieldName} labelText={labelText} {...rest}>
        <Textarea
          {...field}
          id={fieldName}
          isDisabled={isSubmitting}
          ref={ref}
          {...textareaProps}
        />
      </FormControl>
    );
  },
);

export default TextareaControl;
