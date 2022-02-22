/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateAssets: OnCreateAssetsSubscription;
  onUpdateAssets: OnUpdateAssetsSubscription;
  onDeleteAssets: OnDeleteAssetsSubscription;
};

export type CreateAssetsInput = {
  id?: string | null;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  _version?: number | null;
};

export type ModelAssetsConditionInput = {
  Name?: ModelStringInput | null;
  Description?: ModelStringInput | null;
  Images?: ModelStringInput | null;
  FileSize?: ModelStringInput | null;
  CompatableEngineVer?: ModelStringInput | null;
  and?: Array<ModelAssetsConditionInput | null> | null;
  or?: Array<ModelAssetsConditionInput | null> | null;
  not?: ModelAssetsConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Assets = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateAssetsInput = {
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  _version?: number | null;
};

export type DeleteAssetsInput = {
  id: string;
  _version?: number | null;
};

export type ModelAssetsFilterInput = {
  id?: ModelIDInput | null;
  Name?: ModelStringInput | null;
  Description?: ModelStringInput | null;
  Images?: ModelStringInput | null;
  FileSize?: ModelStringInput | null;
  CompatableEngineVer?: ModelStringInput | null;
  and?: Array<ModelAssetsFilterInput | null> | null;
  or?: Array<ModelAssetsFilterInput | null> | null;
  not?: ModelAssetsFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelAssetsConnection = {
  __typename: "ModelAssetsConnection";
  items: Array<Assets | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateAssetsMutation = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateAssetsMutation = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type DeleteAssetsMutation = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type GetAssetsQuery = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ListAssetsQuery = {
  __typename: "ModelAssetsConnection";
  items: Array<{
    __typename: "Assets";
    id: string;
    Name?: string | null;
    Description?: string | null;
    Images?: string | null;
    FileSize?: string | null;
    CompatableEngineVer?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAssetsQuery = {
  __typename: "ModelAssetsConnection";
  items: Array<{
    __typename: "Assets";
    id: string;
    Name?: string | null;
    Description?: string | null;
    Images?: string | null;
    FileSize?: string | null;
    CompatableEngineVer?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateAssetsSubscription = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnUpdateAssetsSubscription = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnDeleteAssetsSubscription = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAssets(
    input: CreateAssetsInput,
    condition?: ModelAssetsConditionInput
  ): Promise<CreateAssetsMutation> {
    const statement = `mutation CreateAssets($input: CreateAssetsInput!, $condition: ModelAssetsConditionInput) {
        createAssets(input: $input, condition: $condition) {
          __typename
          id
          Name
          Description
          Images
          FileSize
          CompatableEngineVer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAssetsMutation>response.data.createAssets;
  }
  async UpdateAssets(
    input: UpdateAssetsInput,
    condition?: ModelAssetsConditionInput
  ): Promise<UpdateAssetsMutation> {
    const statement = `mutation UpdateAssets($input: UpdateAssetsInput!, $condition: ModelAssetsConditionInput) {
        updateAssets(input: $input, condition: $condition) {
          __typename
          id
          Name
          Description
          Images
          FileSize
          CompatableEngineVer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAssetsMutation>response.data.updateAssets;
  }
  async DeleteAssets(
    input: DeleteAssetsInput,
    condition?: ModelAssetsConditionInput
  ): Promise<DeleteAssetsMutation> {
    const statement = `mutation DeleteAssets($input: DeleteAssetsInput!, $condition: ModelAssetsConditionInput) {
        deleteAssets(input: $input, condition: $condition) {
          __typename
          id
          Name
          Description
          Images
          FileSize
          CompatableEngineVer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAssetsMutation>response.data.deleteAssets;
  }
  async GetAssets(id: string): Promise<GetAssetsQuery> {
    const statement = `query GetAssets($id: ID!) {
        getAssets(id: $id) {
          __typename
          id
          Name
          Description
          Images
          FileSize
          CompatableEngineVer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAssetsQuery>response.data.getAssets;
  }
  async ListAssets(
    filter?: ModelAssetsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAssetsQuery> {
    const statement = `query ListAssets($filter: ModelAssetsFilterInput, $limit: Int, $nextToken: String) {
        listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Name
            Description
            Images
            FileSize
            CompatableEngineVer
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql({
      query: statement,
      variables: gqlAPIServiceArguments,
      authMode: "API_KEY"
      }
    )) as any;
    return <ListAssetsQuery>response.data.listAssets;
  }
  async SyncAssets(
    filter?: ModelAssetsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAssetsQuery> {
    const statement = `query SyncAssets($filter: ModelAssetsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAssets(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Name
            Description
            Images
            FileSize
            CompatableEngineVer
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAssetsQuery>response.data.syncAssets;
  }
  OnCreateAssetsListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAssets">>
  > {
    const statement = `subscription OnCreateAssets($owner: String) {
        onCreateAssets(owner: $owner) {
          __typename
          id
          Name
          Description
          Images
          FileSize
          CompatableEngineVer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAssets">>
    >;
  }

  OnUpdateAssetsListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAssets">>
  > {
    const statement = `subscription OnUpdateAssets($owner: String) {
        onUpdateAssets(owner: $owner) {
          __typename
          id
          Name
          Description
          Images
          FileSize
          CompatableEngineVer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAssets">>
    >;
  }

  OnDeleteAssetsListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAssets">>
  > {
    const statement = `subscription OnDeleteAssets($owner: String) {
        onDeleteAssets(owner: $owner) {
          __typename
          id
          Name
          Description
          Images
          FileSize
          CompatableEngineVer
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAssets">>
    >;
  }
}
