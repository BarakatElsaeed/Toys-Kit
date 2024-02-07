import  { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { authData } from '../../store';
import { useNavigate } from 'react-router-dom';

export default function Islogedin({children }) {
    const [auth]=useRecoilState(authData);
    const navigate = useNavigate()
    useEffect(()=>{
        if(!auth.isauth){
            navigate('/Login')

        }

    },[auth])
  return (
    children
  )
}
