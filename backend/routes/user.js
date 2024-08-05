const express = require("express");
const jwt = require("jsonwebtoken");

const { User } = require("../db");
const { Account } = require("../db");
const z = require("zod");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const router = express.Router();

const signupSchema = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(5),
});

const signinSchema = z.object({
  username: z.string().email(),
  password: z.string(),
});

const updateSchema = z.object({
  password: z.string().min(5).optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;

  const { success } = signupSchema.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: body.username,
  });
  if (existingUser) {
    return res.json({
      message: "Email already taken",
    });
  }

  const user = await User.create(body);

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 100000,
  });
  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    msg: "user created successfully",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const body = req.body;

  const { success } = signinSchema.safeParse(body);

  if (!success) {
    res.status(411).json({
      message: " Incorrect inputs",
    });
  }

  const user = await User.findOne(body);

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.status(200).json({
      token,
    });
    return;
  }

  res.status(411).json({
    msg: "error while logging in",
  });
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);

  if (!success) {
    res.status(411).json({ msg: "invalid updation inputs" });
  }

  await User.updateOne({ _id: req.userId }, req.body);

  res.json({ msg: "updated successfully" });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});
module.exports = router;
