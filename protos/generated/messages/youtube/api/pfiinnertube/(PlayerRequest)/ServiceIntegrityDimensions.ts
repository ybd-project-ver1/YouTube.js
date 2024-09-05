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

export declare namespace $.youtube.api.pfiinnertube.PlayerRequest {
  export type ServiceIntegrityDimensions = {
    poToken?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.PlayerRequest.ServiceIntegrityDimensions;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PlayerRequest.ServiceIntegrityDimensions {
  return {
    poToken: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PlayerRequest.ServiceIntegrityDimensions>): $.youtube.api.pfiinnertube.PlayerRequest.ServiceIntegrityDimensions {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PlayerRequest.ServiceIntegrityDimensions): unknown {
  const result: any = {};
  if (value.poToken !== undefined) result.poToken = tsValueToJsonValueFns.string(value.poToken);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PlayerRequest.ServiceIntegrityDimensions {
  const result = getDefaultValue();
  if (value.poToken !== undefined) result.poToken = jsonValueToTsValueFns.string(value.poToken);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PlayerRequest.ServiceIntegrityDimensions): Uint8Array {
  const result: WireMessage = [];
  if (value.poToken !== undefined) {
    const tsValue = value.poToken;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PlayerRequest.ServiceIntegrityDimensions {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.poToken = value;
  }
  return result;
}
