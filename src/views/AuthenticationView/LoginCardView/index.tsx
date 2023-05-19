import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

import axios, { AxiosResponse } from "axios";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState, SetStateAction, Dispatch, KeyboardEvent, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { SignInRequestDto } from "src/apis/request/auth";
import { SignInResponseDto } from "src/apis/response/auth";
import ResponseDto from "src/apis/response";
import { SIGN_IN_URL } from "src/apis/constants/api";
import { useStore } from "zustand";
import { useUserStore } from "src/stores";
import { useCookies } from 'react-cookie';
import { getExpires } from "src/utils";

interface Props {
  setLoginView: Dispatch<SetStateAction<boolean>>;
}

export default function LoginCardView({ setLoginView }: Props) {

  //          Hook          //
  const navigator = useNavigate();
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const {setUser} =useUserStore();
  const [loginError, setLoginError] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [cookies, setCookie] = useCookies();
  
  //          Event Handler          //
  const onUserIdKeyPressHandelr = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter') return;
    if (!passwordRef.current) return;
    (passwordRef as any).current?.lastChild?.firstChild?.focus();
  }

  const onPasswordKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter') return;
    onLoginHandler();
  }

  const onLoginHandler = () => {
    //? userId 입력했는지 검증 / password 입력했는지 검증
    if (!userId.trim() || !password) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    const data: SignInRequestDto = { userId, password };
    axios.post(SIGN_IN_URL, data).then((response) => signInResponseHandler(response)).catch((error) => signInErrorHandler(error));
    
    };

  //          Response Handler          //
  const signInResponseHandler = (response: AxiosResponse<any, any>) => {
      const { result, message, data } = response.data as ResponseDto<SignInResponseDto>;
      if (!result || !data) {
        setLoginError(true);
        return;
      }

      const { token, expiredTime, ...user } = data;
      const expires = getExpires(expiredTime);
        setCookie('accessToken', token, { expires, path: '/' });
      setUserId(userId);
      setUser(user);
      navigator("/");
    };

  //          Error Handler          //
  const signInErrorHandler = (error: any) => {
    console.log(error.message);
  };

  return (
    <Box display='flex' sx={{ height: "500px", flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="h5" fontWeight='700' sx={{color: '#008B8B'}}>Service Center KIOSK</Typography>
        <FormControl error={loginError} fullWidth variant="standard" sx={{ mt: "60px" }}>
          <InputLabel>아이디</InputLabel>
          <Input
            onChange={(event) => setUserId(event.target.value)}
            onKeyPress={(event) => onUserIdKeyPressHandelr(event)}
          />
        </FormControl>
        <FormControl error={loginError} fullWidth variant="standard" sx={{ mt: "60px" }}>
          <InputLabel>비밀번호</InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) => setPassword(event.target.value)}
            onKeyPress={(event) => onPasswordKeyPressHandler(event)}
          />
        </FormControl>
      </Box>
      <Box>
        {loginError && (
          <Box sx={{ mb: '12px' }}>
            <Typography sx={{ fontSize: '12px', color: 'red', opacity: '0.7' }}>아이디 또는 비밀번호를 잘못 입력했습니다.</Typography>
            <Typography sx={{ fontSize: '12px', color: 'red', opacity: '0.7' }}>입력하신 내용을 다시 확인해 주세요.</Typography>
          </Box>
        )}
        <Box display='flex'>
          <Button
            sx={{ mb: "20px", backgroundColor: '#008B8B' }}
            fullWidth
            variant="contained"
            size="large"
            onClick={() => setLoginView(false)}
          >
            <Typography>
              회원가입
            </Typography>
          </Button>
          <Button
            sx={{ ml: "20px", mb: "20px", backgroundColor: '#008B8B' }}
            fullWidth
            variant="contained"
            size="large"
            onClick={onLoginHandler}
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
