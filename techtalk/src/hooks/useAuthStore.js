import axios from 'axios'
import {useDispatch} from 'react-redux'
import { TechTalkApi } from '../api/Api'
import { checking, logIn, logOut } from '../store/auth/AuthSlice'

export const useAuthStore = ()=>{
  const dispatch = useDispatch()
    const startSingUp = async({fullname,email,phone,password})=>{
        try {
            const {data}= await TechTalkApi.post('/user/create',{fullname,email,phone,password})
            console.log(data)
            dispatch(logIn(data.token))
        } catch (error) {
            console.log(error)
            dispatch(logOut( 'FAILED' ) );
        }
}

  const startSignIn = async({email,password})=>{
    dispatch(checking())
    try {
        const {data}= await TechTalkApi.post('/auth/login',{email,password})
        dispatch(logIn(data.token)) 
    } catch (error) {
        console.log(error)
        dispatch(logOut('Email or password Incorrect'))
    }
  }
 

  const startLogOut = async()=>{
    dispatch(logOut());
  }




    return{
        startSingUp,
        startSignIn,
        startLogOut
    }
}