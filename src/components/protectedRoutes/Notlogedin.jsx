import  { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { authData } from '../../store';
import { useNavigate } from 'react-router-dom';

export default function Notlogedin({children}) {
    const [auth]=useRecoilState(authData);
    const navigate = useNavigate()
    useEffect(()=>{
        if(auth.isauth){
            navigate('/')

        }

    },[auth])
  return (
    children
  )
}
