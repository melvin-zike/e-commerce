const mongoose = require("mongoose");

const AdsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    link: {
      type: String,
    },
    video: {
      type: String,
    },
    isVideo: {
      type: Boolean,
      default: false,
    },
    isBanner: {
      type: Boolean,
      default: false,
    },
    isBody: {
      type: Boolean,
      default: false,
    },
    isFreestyle: {
      type: Boolean,
      default: false,
    },
    isAside: {
      type: Boolean,
      default: false,
    },
    isAnnouncement: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ads", AdsSchema);
