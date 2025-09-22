import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import configs from "../../configs";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "student", "faculty"],
      },
    },
    status: {
      type: String,
      enum: {
        values: ["in-process", "blocked"],
      },
      default: "in-process",
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// pre save middleware/ hook : will work on create() save()
userSchema.pre("save", async function (next) {
  // console.log(this, ' pre hook : we will save data');
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(configs.bcrypt_salt_rounds)
  );
  next();
});

// post save middleware / hook
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
