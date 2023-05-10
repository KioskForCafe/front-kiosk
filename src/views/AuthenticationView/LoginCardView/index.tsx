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

import { VisibilityOff, Visibility } from "@mui/icons-material";

import { useState, SetStateAction, Dispatch } from 'react'

interface Props {
  setLoginView: Dispatch<SetStateAction<boolean>>;
}

export default function LoginCardView({ setLoginView }: Props) {

  const [loginError, setLoginError] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  return (
    <Box display='flex' sx={{ height: '100%', flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="h5" fontWeight='700' sx={{color: '#008B8B'}}>Service Center KIOSK</Typography>
        <FormControl error={loginError} fullWidth variant="standard" sx={{ mt: "60px" }}>
          <InputLabel>아이디</InputLabel>
          <Input
            onChange={(event) => setUserId(event.target.value)}
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
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
