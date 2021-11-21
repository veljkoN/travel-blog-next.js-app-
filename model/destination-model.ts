import mongoose from 'mongoose'
const destinationSchema = new mongoose.Schema({
    _id: { type: String },
    place: String,
    continent: String,
    date: String,
    description: String,
    image: String
})

const PostMessage = mongoose.model('PostMessage', destinationSchema)

export default PostMessage