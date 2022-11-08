// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class SetDiscountForAccount extends ethereum.Event {
  get params(): SetDiscountForAccount__Params {
    return new SetDiscountForAccount__Params(this);
  }
}

export class SetDiscountForAccount__Params {
  _event: SetDiscountForAccount;

  constructor(event: SetDiscountForAccount) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get discount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SetIsDiscountEnabled extends ethereum.Event {
  get params(): SetIsDiscountEnabled__Params {
    return new SetIsDiscountEnabled__Params(this);
  }
}

export class SetIsDiscountEnabled__Params {
  _event: SetIsDiscountEnabled;

  constructor(event: SetIsDiscountEnabled) {
    this._event = event;
  }

  get isDiscountEnabled(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class SetKeeper extends ethereum.Event {
  get params(): SetKeeper__Params {
    return new SetKeeper__Params(this);
  }
}

export class SetKeeper__Params {
  _event: SetKeeper;

  constructor(event: SetKeeper) {
    this._event = event;
  }

  get keeper(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetOwner extends ethereum.Event {
  get params(): SetOwner__Params {
    return new SetOwner__Params(this);
  }
}

export class SetOwner__Params {
  _event: SetOwner;

  constructor(event: SetOwner) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FeeCalculator extends ethereum.SmartContract {
  static bind(address: Address): FeeCalculator {
    return new FeeCalculator("FeeCalculator", address);
  }

  MAX_ACCOUNT_DISCOUNT(): BigInt {
    let result = super.call(
      "MAX_ACCOUNT_DISCOUNT",
      "MAX_ACCOUNT_DISCOUNT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_ACCOUNT_DISCOUNT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_ACCOUNT_DISCOUNT",
      "MAX_ACCOUNT_DISCOUNT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRICE_BASE(): BigInt {
    let result = super.call("PRICE_BASE", "PRICE_BASE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRICE_BASE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRICE_BASE", "PRICE_BASE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  accountFeeDiscount(param0: Address): BigInt {
    let result = super.call(
      "accountFeeDiscount",
      "accountFeeDiscount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_accountFeeDiscount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "accountFeeDiscount",
      "accountFeeDiscount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getFee(
    token: Address,
    productFee: BigInt,
    account: Address,
    sender: Address
  ): BigInt {
    let result = super.call(
      "getFee",
      "getFee(address,uint256,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(productFee),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(sender)
      ]
    );

    return result[0].toBigInt();
  }

  try_getFee(
    token: Address,
    productFee: BigInt,
    account: Address,
    sender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getFee",
      "getFee(address,uint256,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(productFee),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(sender)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gov(): Address {
    let result = super.call("gov", "gov():(address)", []);

    return result[0].toAddress();
  }

  try_gov(): ethereum.CallResult<Address> {
    let result = super.tryCall("gov", "gov():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isDiscountEnabled(): boolean {
    let result = super.call(
      "isDiscountEnabled",
      "isDiscountEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_isDiscountEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isDiscountEnabled",
      "isDiscountEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  keeper(): Address {
    let result = super.call("keeper", "keeper():(address)", []);

    return result[0].toAddress();
  }

  try_keeper(): ethereum.CallResult<Address> {
    let result = super.tryCall("keeper", "keeper():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SetDiscountForAccountCall extends ethereum.Call {
  get inputs(): SetDiscountForAccountCall__Inputs {
    return new SetDiscountForAccountCall__Inputs(this);
  }

  get outputs(): SetDiscountForAccountCall__Outputs {
    return new SetDiscountForAccountCall__Outputs(this);
  }
}

export class SetDiscountForAccountCall__Inputs {
  _call: SetDiscountForAccountCall;

  constructor(call: SetDiscountForAccountCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _discount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetDiscountForAccountCall__Outputs {
  _call: SetDiscountForAccountCall;

  constructor(call: SetDiscountForAccountCall) {
    this._call = call;
  }
}

export class SetGovCall extends ethereum.Call {
  get inputs(): SetGovCall__Inputs {
    return new SetGovCall__Inputs(this);
  }

  get outputs(): SetGovCall__Outputs {
    return new SetGovCall__Outputs(this);
  }
}

export class SetGovCall__Inputs {
  _call: SetGovCall;

  constructor(call: SetGovCall) {
    this._call = call;
  }

  get _gov(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGovCall__Outputs {
  _call: SetGovCall;

  constructor(call: SetGovCall) {
    this._call = call;
  }
}

export class SetIsDiscountEnabledCall extends ethereum.Call {
  get inputs(): SetIsDiscountEnabledCall__Inputs {
    return new SetIsDiscountEnabledCall__Inputs(this);
  }

  get outputs(): SetIsDiscountEnabledCall__Outputs {
    return new SetIsDiscountEnabledCall__Outputs(this);
  }
}

export class SetIsDiscountEnabledCall__Inputs {
  _call: SetIsDiscountEnabledCall;

  constructor(call: SetIsDiscountEnabledCall) {
    this._call = call;
  }

  get _isDiscountEnabled(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetIsDiscountEnabledCall__Outputs {
  _call: SetIsDiscountEnabledCall;

  constructor(call: SetIsDiscountEnabledCall) {
    this._call = call;
  }
}

export class SetKeeperCall extends ethereum.Call {
  get inputs(): SetKeeperCall__Inputs {
    return new SetKeeperCall__Inputs(this);
  }

  get outputs(): SetKeeperCall__Outputs {
    return new SetKeeperCall__Outputs(this);
  }
}

export class SetKeeperCall__Inputs {
  _call: SetKeeperCall;

  constructor(call: SetKeeperCall) {
    this._call = call;
  }

  get _keeper(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetKeeperCall__Outputs {
  _call: SetKeeperCall;

  constructor(call: SetKeeperCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}
