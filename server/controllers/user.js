import {createError} from '../error.js'
import Video from '../model/Video.js'
import User from '../model/User.js'

export const update=async(req,res,next)=>{
    if(req.params.id === req.user.id){
        try {
            const updateUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json(updateUser)
        } catch (err) {
            next(err)
        }
    }else{
        return next(createError(403,"you can update only your account!"))
    }
}
export const deleteUser=async(req,res,next)=>{
    if(req.params.id === req.user.id){
        try {
            const updateUser=await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        } catch (err) {
            next(err)
        }
    }else{
        return next(createError(403,"you can delete only your account!"))
    }
}
export const getUser=async(req,res,next)=>{
    try {
        const user=await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}
 
export const subscribe=async(req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $addToSet:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1}
        })
        res.status(200).json("Subscription successfull")
    } catch (err) {
        next(err)
    }
}
export const unsubscribe=async(req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subcribers:-1}
        })
        res.status(200).json("Unsubscription successfull")
    } catch (err) {
        next(err)
    }
}
export const like=async(req,res,next)=>{
    const id=req.user.id
    const videoId=req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{likes:id},
            $pull:{dislikes:id}
        })
        res.status(200).json("The video has been liked")
    } catch (err) {
        next(err)
    }
}
export const dislike=async(req,res,next)=>{
    const id=req.user.id
    const videoId=req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{dislikes:id},
            $pull:{likes:id}
        })
        res.status(200).json("The video has been disliked")
    } catch (err) {
        next(err)
    }
}
