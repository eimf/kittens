import { createSelector } from "reselect";
import _ from "lodash";

const COLLECTIONS_MAPS = {
  robots: 1,
  monsters: 2,
  sexy: 3,
  kittens: 4
};

const selectAvatars = state => state.avatars;

export const selectAvatarsCollections = createSelector(
  [selectAvatars],
  avatars => avatars.collections
);

export const selectCollection = collectionURLParam =>
  createSelector([selectAvatarsCollections], collections =>
    _.find(collections, { id: COLLECTIONS_MAPS[collectionURLParam] })
  );
