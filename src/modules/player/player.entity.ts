import * as mongoose from 'mongoose';

export type PlayerDocument = Player & mongoose.Document;

class Player {
  _id: string;

  cellPhone: string;

  email: string;

  name: string;

  ranking: string;

  position: number;

  avatarUrl: string;

  createdAt: Date;

  updatedAt: Date;
}

const PlayerSchema = new mongoose.Schema(
  {
    cellPhone: { type: String },

    email: { type: String, unique: true },

    name: String,

    ranking: String,

    position: Number,

    avatarUrl: String,
  },
  {
    timestamps: true,
  },
);

export { Player, PlayerSchema };
