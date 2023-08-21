import { Select, SelectProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';

import FormControl, { BaseProps } from './FormControl';

export type SelectControlProps = BaseProps & {
  selectProps?: SelectProps;
  value?: string;
  children: React.ReactNode;
};

const SelectControl: FC<SelectControlProps> = React.forwardRef(
  (props: SelectControlProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const { fieldName, labelText, value, selectProps, children, ...rest } = props;
    const [field, _, fieldHelperProps] = useField(fieldName);
    const { isSubmitting } = useFormikContext();

    useEffect(() => {
      fieldHelperProps.setValue(value);
    }, []);

    return (
      <FormControl fieldName={fieldName} labelText={labelText} {...rest}>
        <Select
          {...field}
          id={fieldName}
          isDisabled={isSubmitting}
          ref={ref}
          {...selectProps}
        >
          {children}
        </Select>
      </FormControl>
    );
  },
);

export default SelectControl;
