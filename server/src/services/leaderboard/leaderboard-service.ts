import { ILeaderboardGameData } from "../../types/models/leaderboard.types";
import { Leaderboard } from "../../models/leaderboard/leaderboard";

export const getLeaderboard = (
  gameId: number
): Promise<ILeaderboardGameData[]> => {
  const data = Leaderboard.aggregate<ILeaderboardGameData>([
    {
      $match: {
        gameId,
      },
    },
    {
      $sort: {
        score: -1,
      },
    },
    {
      $limit: 10,
    },
    {
      $addFields: {
        userObjectId: {
          $toObjectId: "$userId",
        },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "userObjectId",
        foreignField: "_id",
        as: "userData",
      },
    },
    {
      $set: {
        userData: {
          $first: "$userData",
        },
      },
    },
    {
      $project: {
        gameId: 1,
        userId: 1,
        score: 1,
        name: "$userData.name",
        icon: "$userData.icon",
      },
    },
  ]).exec();

  return data;
};
