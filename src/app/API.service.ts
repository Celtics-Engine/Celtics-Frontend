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
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
  _version?: number | null;
};

export type ModelAssetsConditionInput = {
  Name?: ModelStringInput | null;
  Description?: ModelStringInput | null;
  Images?: ModelStringInput | null;
  AssetFile?: ModelStringInput | null;
  FileSize?: ModelStringInput | null;
  CompatableEngineVer?: ModelStringInput | null;
  UserName?: ModelStringInput | null;
  UserId?: ModelStringInput | null;
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
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
  AssetFile?: ModelStringInput | null;
  FileSize?: ModelStringInput | null;
  CompatableEngineVer?: ModelStringInput | null;
  UserName?: ModelStringInput | null;
  UserId?: ModelStringInput | null;
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

export type SearchableAssetsFilterInput = {
  id?: SearchableIDFilterInput | null;
  Name?: SearchableStringFilterInput | null;
  Description?: SearchableStringFilterInput | null;
  Images?: SearchableStringFilterInput | null;
  AssetFile?: SearchableStringFilterInput | null;
  FileSize?: SearchableStringFilterInput | null;
  CompatableEngineVer?: SearchableStringFilterInput | null;
  UserName?: SearchableStringFilterInput | null;
  UserId?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  _version?: SearchableIntFilterInput | null;
  _deleted?: SearchableBooleanFilterInput | null;
  _lastChangedAt?: SearchableIntFilterInput | null;
  and?: Array<SearchableAssetsFilterInput | null> | null;
  or?: Array<SearchableAssetsFilterInput | null> | null;
  not?: SearchableAssetsFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type SearchableAssetsSortInput = {
  field?: SearchableAssetsSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableAssetsSortableFields {
  id = "id",
  Name = "Name",
  Description = "Description",
  Images = "Images",
  AssetFile = "AssetFile",
  FileSize = "FileSize",
  CompatableEngineVer = "CompatableEngineVer",
  UserName = "UserName",
  UserId = "UserId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableAssetsAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableAssetsAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchableAssetsAggregateField {
  id = "id",
  Name = "Name",
  Description = "Description",
  Images = "Images",
  AssetFile = "AssetFile",
  FileSize = "FileSize",
  CompatableEngineVer = "CompatableEngineVer",
  UserName = "UserName",
  UserId = "UserId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt"
}

export type SearchableAssetsConnection = {
  __typename: "SearchableAssetsConnection";
  items: Array<Assets | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type CreateAssetsMutation = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
    Images?: Array<string | null> | null;
    AssetFile?: string | null;
    FileSize?: string | null;
    CompatableEngineVer?: Array<string | null> | null;
    UserName?: string | null;
    UserId?: string | null;
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
    Images?: Array<string | null> | null;
    AssetFile?: string | null;
    FileSize?: string | null;
    CompatableEngineVer?: Array<string | null> | null;
    UserName?: string | null;
    UserId?: string | null;
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

export type SearchAssetsQuery = {
  __typename: "SearchableAssetsConnection";
  items: Array<{
    __typename: "Assets";
    id: string;
    Name?: string | null;
    Description?: string | null;
    Images?: Array<string | null> | null;
    AssetFile?: string | null;
    FileSize?: string | null;
    CompatableEngineVer?: Array<string | null> | null;
    UserName?: string | null;
    UserId?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type OnCreateAssetsSubscription = {
  __typename: "Assets";
  id: string;
  Name?: string | null;
  Description?: string | null;
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
  Images?: Array<string | null> | null;
  AssetFile?: string | null;
  FileSize?: string | null;
  CompatableEngineVer?: Array<string | null> | null;
  UserName?: string | null;
  UserId?: string | null;
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
          AssetFile
          FileSize
          CompatableEngineVer
          UserName
          UserId
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
          AssetFile
          FileSize
          CompatableEngineVer
          UserName
          UserId
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
          AssetFile
          FileSize
          CompatableEngineVer
          UserName
          UserId
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
          AssetFile
          FileSize
          CompatableEngineVer
          UserName
          UserId
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
            AssetFile
            FileSize
            CompatableEngineVer
            UserName
            UserId
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
    })) as any;
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
            AssetFile
            FileSize
            CompatableEngineVer
            UserName
            UserId
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
  async SearchAssets(
    filter?: SearchableAssetsFilterInput,
    sort?: Array<SearchableAssetsSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableAssetsAggregationInput | null>
  ): Promise<SearchAssetsQuery> {
    const statement = `query SearchAssets($filter: SearchableAssetsFilterInput, $sort: [SearchableAssetsSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableAssetsAggregationInput]) {
        searchAssets(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
          __typename
          items {
            __typename
            id
            Name
            Description
            Images
            AssetFile
            FileSize
            CompatableEngineVer
            UserName
            UserId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchAssetsQuery>response.data.searchAssets;
  }
  OnCreateAssetsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAssets">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAssets {
        onCreateAssets {
          __typename
          id
          Name
          Description
          Images
          AssetFile
          FileSize
          CompatableEngineVer
          UserName
          UserId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAssets">>
  >;

  OnUpdateAssetsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAssets">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAssets {
        onUpdateAssets {
          __typename
          id
          Name
          Description
          Images
          AssetFile
          FileSize
          CompatableEngineVer
          UserName
          UserId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAssets">>
  >;

  OnDeleteAssetsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAssets">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAssets {
        onDeleteAssets {
          __typename
          id
          Name
          Description
          Images
          AssetFile
          FileSize
          CompatableEngineVer
          UserName
          UserId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAssets">>
  >;
}
