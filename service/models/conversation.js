import mongoose from "mongoose"

const ConversationSchema = new mongoose.Schema({
    users: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    isPrivate: {
        type: Boolean,
    },
}, {
    timestamps: true
})

export default mongoose.model("Conversation", ConversationSchema);