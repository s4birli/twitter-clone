import mongoose from "mongoose"
import logger from "./logger"
import config from "../config/default"

async function connect() {
    const dbUri = config.dbUri;
    try {
        await mongoose.connect(dbUri)
        logger.info(`Connected to ${dbUri}`)
    }
    catch (err) {
        logger.error('Could not connect to database')
        process.exit(1)
    }
}

export default connect