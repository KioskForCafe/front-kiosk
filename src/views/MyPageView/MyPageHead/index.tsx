import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom'
import { DELETE_USER_URL, authorizationHeader } from 'src/apis/constants/api';
import ResponseDto from 'src/apis/response';
import { DeleteUserResponseDto, GetUserResponseDto } from 'src/apis/response/user';
import { useUserStore } from 'src/stores';

export default function MyPageHead() {

    const navigator = useNavigate();

    const {userId} = useParams();
    const [cookies] = useCookies();

    const {user, resetUser, setUser} = useUserStore();

    const accessToken = cookies.accessToken;

    //          Event Handler          //
    const userDeleteHandler = () => {
      axios.delete(DELETE_USER_URL(userId as string), authorizationHeader(accessToken))
      .then((response) => userDeleteResponseHandler(response))
      .catch((error) => userDeleteErrorHandler(error))
    }

    //          Response Handler          //
    const userDeleteResponseHandler = (response: AxiosResponse<any, any>) => {
      const { result, message, data } = response.data as ResponseDto<DeleteUserResponseDto>;
      if (!result || !data || !data.result) {
        alert(message);
        return;
      }

      alert('회원 탈퇴가 완료되었습니다.');
      resetUser();
      navigator('/');
    }

    //          Error Handler          //
    const userDeleteErrorHandler = (error: any) => {
      console.log(error.message);
    };

    //          Use Effect          //
    useEffect(() => {
      if (!accessToken){
        navigator('/auth');
        return;
      }
    },[])

  return (
    <Box sx={{ p: '40px 120px', display: 'flex' }}>
        <Box>
            <IconButton>
                <Avatar sx={{ height: '120px', width: '120px'}} alt={user?.userName} />
            </IconButton>
        </Box>
        <Box sx={{ ml: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 500, color: 'rgba(0, 0, 0, 0.7)' }}>{user?.userName}</Typography>    
            </Box>  
            <Typography sx={{ mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0, 0, 0, 0.4)' }}>{user?.userEmail}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '40px 120px' }}>
          <Button variant='text' onClick={() => navigator('/patch/user')}>회원 정보 수정</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '40px 120px' }}>
          <Button variant='text' onClick={userDeleteHandler} >회원 탈퇴</Button>
        </Box>
    </Box>
  )
}
