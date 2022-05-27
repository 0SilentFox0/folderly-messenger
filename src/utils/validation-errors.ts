import { ErrorObject } from '@vuelidate/core';
import { Ref } from '@vue/reactivity';

export interface ValidationErrors {
  [key: string]: string | Ref<string>;
}

interface Validations {
  $errors?: ErrorObject[];
}

export const getValidationErrors = (validations: Validations) => {
  const errors: ValidationErrors = {};

  if (validations.$errors) {
    for (const error of validations.$errors) {
      errors[error.$propertyPath] = error.$message;
    }
  }

  return errors;
};
