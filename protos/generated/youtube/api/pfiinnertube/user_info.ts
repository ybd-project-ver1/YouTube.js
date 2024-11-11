// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/user_info.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface UserInfo {
  onBehalfOfUser?: string | undefined;
  enableSafetyMode?: boolean | undefined;
  credentialTransferTokens: UserInfo_CredentialTransferToken[];
  delegatePurchases?: UserInfo_DelegatePurchases | undefined;
  kidsParent?: UserInfo_KidsParent | undefined;
  isIncognito?: boolean | undefined;
  lockedSafetyMode?: boolean | undefined;
  delegationContext?: UserInfo_DelegationContext | undefined;
  serializedDelegationContext?: string | undefined;
}

export interface UserInfo_KidsParent {
}

export interface UserInfo_DelegatePurchases {
}

export interface UserInfo_DelegationContext {
}

export interface UserInfo_CredentialTransferToken {
}

function createBaseUserInfo(): UserInfo {
  return {
    onBehalfOfUser: undefined,
    enableSafetyMode: undefined,
    credentialTransferTokens: [],
    delegatePurchases: undefined,
    kidsParent: undefined,
    isIncognito: undefined,
    lockedSafetyMode: undefined,
    delegationContext: undefined,
    serializedDelegationContext: undefined,
  };
}

export const UserInfo: MessageFns<UserInfo> = {
  encode(message: UserInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.onBehalfOfUser !== undefined) {
      writer.uint32(26).string(message.onBehalfOfUser);
    }
    if (message.enableSafetyMode !== undefined) {
      writer.uint32(56).bool(message.enableSafetyMode);
    }
    for (const v of message.credentialTransferTokens) {
      UserInfo_CredentialTransferToken.encode(v!, writer.uint32(98).fork()).join();
    }
    if (message.delegatePurchases !== undefined) {
      UserInfo_DelegatePurchases.encode(message.delegatePurchases, writer.uint32(106).fork()).join();
    }
    if (message.kidsParent !== undefined) {
      UserInfo_KidsParent.encode(message.kidsParent, writer.uint32(114).fork()).join();
    }
    if (message.isIncognito !== undefined) {
      writer.uint32(120).bool(message.isIncognito);
    }
    if (message.lockedSafetyMode !== undefined) {
      writer.uint32(128).bool(message.lockedSafetyMode);
    }
    if (message.delegationContext !== undefined) {
      UserInfo_DelegationContext.encode(message.delegationContext, writer.uint32(138).fork()).join();
    }
    if (message.serializedDelegationContext !== undefined) {
      writer.uint32(146).string(message.serializedDelegationContext);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.onBehalfOfUser = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.enableSafetyMode = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.credentialTransferTokens.push(UserInfo_CredentialTransferToken.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.delegatePurchases = UserInfo_DelegatePurchases.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.kidsParent = UserInfo_KidsParent.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.isIncognito = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.lockedSafetyMode = reader.bool();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.delegationContext = UserInfo_DelegationContext.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.serializedDelegationContext = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseUserInfo_KidsParent(): UserInfo_KidsParent {
  return {};
}

export const UserInfo_KidsParent: MessageFns<UserInfo_KidsParent> = {
  encode(_: UserInfo_KidsParent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo_KidsParent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo_KidsParent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseUserInfo_DelegatePurchases(): UserInfo_DelegatePurchases {
  return {};
}

export const UserInfo_DelegatePurchases: MessageFns<UserInfo_DelegatePurchases> = {
  encode(_: UserInfo_DelegatePurchases, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo_DelegatePurchases {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo_DelegatePurchases();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseUserInfo_DelegationContext(): UserInfo_DelegationContext {
  return {};
}

export const UserInfo_DelegationContext: MessageFns<UserInfo_DelegationContext> = {
  encode(_: UserInfo_DelegationContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo_DelegationContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo_DelegationContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseUserInfo_CredentialTransferToken(): UserInfo_CredentialTransferToken {
  return {};
}

export const UserInfo_CredentialTransferToken: MessageFns<UserInfo_CredentialTransferToken> = {
  encode(_: UserInfo_CredentialTransferToken, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo_CredentialTransferToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo_CredentialTransferToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}