import {
  WNat,
  WNat_Transfer,
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
