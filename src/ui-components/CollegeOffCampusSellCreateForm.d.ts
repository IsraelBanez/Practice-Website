/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CollegeOffCampusSellCreateFormInputValues = {
    name?: string;
    description?: string;
    address?: string;
    price?: number;
    imageURL?: string;
};
export declare type CollegeOffCampusSellCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    imageURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollegeOffCampusSellCreateFormOverridesProps = {
    CollegeOffCampusSellCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    imageURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CollegeOffCampusSellCreateFormProps = React.PropsWithChildren<{
    overrides?: CollegeOffCampusSellCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CollegeOffCampusSellCreateFormInputValues) => CollegeOffCampusSellCreateFormInputValues;
    onSuccess?: (fields: CollegeOffCampusSellCreateFormInputValues) => void;
    onError?: (fields: CollegeOffCampusSellCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CollegeOffCampusSellCreateFormInputValues) => CollegeOffCampusSellCreateFormInputValues;
    onValidate?: CollegeOffCampusSellCreateFormValidationValues;
} & React.CSSProperties>;
export default function CollegeOffCampusSellCreateForm(props: CollegeOffCampusSellCreateFormProps): React.ReactElement;
