import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema({
    conversation: {
        type: Types.ObjectId,
        ref: 'Conversation'
    },
    sender: {
        type: Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
    },
}, {
    timestamps: true
})

export default mongoose.model("Message", MessageSchema);