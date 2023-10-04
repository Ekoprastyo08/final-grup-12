import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const videos = sequelize.define("videos", {
    title: DataTypes.STRING,
    link: DataTypes.STRING
});

export default videos;