import {
  WNat,
  WNat_Transfer,
  RewardManager,
  RewardManager_RewardClaimed,
  RewardManager_RewardClaimsExpired,
  RewardManager_RewardClaimsEnabled,
} from "generated";

WNat.Transfer.handler(async ({ event, context }) => {
  const entity: WNat_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.WNat_Transfer.set(entity);
});

RewardManager.RewardClaimed.handler(async ({ event, context }) => {
  const entity: RewardManager_RewardClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beneficiary: event.params.beneficiary,
    rewardOwner: event.params.rewardOwner,
    recipient: event.params.recipient,
    rewardEpochId: event.params.rewardEpochId,
    claimType: event.params.claimType,
    amount: event.params.amount,
  };

  context.RewardManager_RewardClaimed.set(entity);
});

RewardManager.RewardClaimsExpired.handler(async ({ event, context }) => {
  const entity: RewardManager_RewardClaimsExpired = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rewardEpochId: event.params.rewardEpochId,
  };

  context.RewardManager_RewardClaimsExpired.set(entity);
});

RewardManager.RewardClaimsEnabled.handler(async ({ event, context }) => {
  const entity: RewardManager_RewardClaimsEnabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rewardEpochId: event.params.rewardEpochId,
  };

  context.RewardManager_RewardClaimsEnabled.set(entity);
});
