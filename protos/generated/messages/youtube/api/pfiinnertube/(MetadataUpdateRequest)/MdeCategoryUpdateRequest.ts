import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.MetadataUpdateRequest {
  export type MdeCategoryUpdateRequest = {
    newCategoryId?: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeCategoryUpdateRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeCategoryUpdateRequest {
  return {
    newCategoryId: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeCategoryUpdateRequest>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeCategoryUpdateRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeCategoryUpdateRequest): unknown {
  const result: any = {};
  if (value.newCategoryId !== undefined) result.newCategoryId = tsValueToJsonValueFns.int32(value.newCategoryId);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeCategoryUpdateRequest {
  const result = getDefaultValue();
  if (value.newCategoryId !== undefined) result.newCategoryId = jsonValueToTsValueFns.int32(value.newCategoryId);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeCategoryUpdateRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.newCategoryId !== undefined) {
    const tsValue = value.newCategoryId;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeCategoryUpdateRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.newCategoryId = value;
  }
  return result;
}
