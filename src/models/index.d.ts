import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCollegeOffCampusSell = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CollegeOffCampusSell, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly address?: string | null;
  readonly price?: number | null;
  readonly imageURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCollegeOffCampusSell = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CollegeOffCampusSell, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly address?: string | null;
  readonly price?: number | null;
  readonly imageURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CollegeOffCampusSell = LazyLoading extends LazyLoadingDisabled ? EagerCollegeOffCampusSell : LazyCollegeOffCampusSell

export declare const CollegeOffCampusSell: (new (init: ModelInit<CollegeOffCampusSell>) => CollegeOffCampusSell) & {
  copyOf(source: CollegeOffCampusSell, mutator: (draft: MutableModel<CollegeOffCampusSell>) => MutableModel<CollegeOffCampusSell> | void): CollegeOffCampusSell;
}