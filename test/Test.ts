import assert from "assert";
import { 
  TestHelpers,
  FtsoRewardManager_RewardClaimed
} from "generated";
const { MockDb, FtsoRewardManager } = TestHelpers;

describe("FtsoRewardManager contract RewardClaimed event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for FtsoRewardManager contract RewardClaimed event
  const event = FtsoRewardManager.RewardClaimed.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("FtsoRewardManager_RewardClaimed is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await FtsoRewardManager.RewardClaimed.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualFtsoRewardManagerRewardClaimed = mockDbUpdated.entities.FtsoRewardManager_RewardClaimed.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedFtsoRewardManagerRewardClaimed: FtsoRewardManager_RewardClaimed = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      dataProvider: event.params.dataProvider,
      whoClaimed: event.params.whoClaimed,
      sentTo: event.params.sentTo,
      rewardEpoch: event.params.rewardEpoch,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualFtsoRewardManagerRewardClaimed, expectedFtsoRewardManagerRewardClaimed, "Actual FtsoRewardManagerRewardClaimed should be the same as the expectedFtsoRewardManagerRewardClaimed");
  });
});
