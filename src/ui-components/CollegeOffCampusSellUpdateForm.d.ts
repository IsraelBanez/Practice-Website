/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollegeOffCampusSell } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CollegeOffCampusSellUpdateFormInputValues = {
    name?: string;
    description?: string;
    address?: string;
    price?: number;
    imageURL?: string;
};
export declare type CollegeOffCampusSellUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    imageURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollegeOffCampusSellUpdateFormOverridesProps = {
    CollegeOffCampusSellUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    imageURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CollegeOffCampusSellUpdateFormProps = React.PropsWithChildren<{
    overrides?: CollegeOffCampusSellUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    collegeOffCampusSell?: CollegeOffCampusSell;
    onSubmit?: (fields: CollegeOffCampusSellUpdateFormInputValues) => CollegeOffCampusSellUpdateFormInputValues;
    onSuccess?: (fields: CollegeOffCampusSellUpdateFormInputValues) => void;
    onError?: (fields: CollegeOffCampusSellUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CollegeOffCampusSellUpdateFormInputValues) => CollegeOffCampusSellUpdateFormInputValues;
    onValidate?: CollegeOffCampusSellUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CollegeOffCampusSellUpdateForm(props: CollegeOffCampusSellUpdateFormProps): React.ReactElement;
